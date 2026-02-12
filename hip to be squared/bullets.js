class Bullet {
    constructor(inputStats) {
        if (inputStats.drawAlpha) this.drawAlpha = inputStats.drawAlpha;
        this.tick = 0;
        if (stats.sineWaveMovement) this.tick = Math.random()*12;
        this.x = inputStats.x || 0;
        this.y = inputStats.y || 0;
        this.size = 0;
        this.damage = inputStats.damage || stats.damage;
        this.targetSize = inputStats.size || stats.bulletSize;
        ease(this,"size", this.targetSize, 0.1);
        this.drawPath = inputStats.drawPath || game.weapon.reference.bulletDrawPath;
        this.enemiesTouched = [];
        if (inputStats.direction) {
            this.direction = inputStats.direction + stats.bloom-2*Math.random()*stats.bloom;
            this.vx = Math.cos(this.direction) * (inputStats.speed || stats.bulletSpeed);
            this.vy = Math.sin(this.direction) * (inputStats.speed || stats.bulletSpeed);
        } else {
            this.direction = 0;
            this.vx = inputStats.speed || stats.bulletSpeed;
            this.vy = 0;
        }
        
        if (inputStats.speed === 0) {
            this.vx = 0;
            this.vy = 0;
        }
        
        if (inputStats.vx) this.vx = inputStats.vx;
        if (inputStats.vy) this.vy = inputStats.vy;

        this.alive = true;

        if (stats.lifetime || inputStats.lifetime) this.lifetime = inputStats.lifetime || stats.lifetime;
        this.bulletBounce = stats.bulletBounce;
        this.pierce = inputStats.pierce || stats.pierce;
        this.wallPierce = inputStats.wallPierce || stats.wallPierce;

        this.triggerExpire = inputStats.triggerExpire;

        const size = this.targetSize * 25 / Math.PI * stats.bloom;
        this.x += size * Math.random() - size/2;
        this.y += size * Math.random() - size/2;

        if (stats.trailColor) {
            this.trailPoints = [];
        }

        if (game.firstBullet) {
            this.firstBullet = true;
        }
        if (this.triggerExpire) stats.onSpawns.forEach( (item) => item[1](item[0],this));
    }
}

let bulletBuffer = [];

function bulletTick() {
    bullets = bullets.filter((bullet,i) => {
        if (bullet.triggerExpire) stats.bulletTicks.forEach( (item) => item[1](item[0],bullet))

        if (stats.trailColor && bullet.trailPoints) {
            if (bullet.alive) bullet.trailPoints.push([bullet.x,bullet.y]);
            if (bullet.trailPoints.length > (stats.trailLength || 8)) bullet.trailPoints.splice(0,1);
            ctx.beginPath();
            bullet.trailPoints.forEach((points) => ctx.lineTo(...points));
            ctx.strokeStyle = stats.trailColor;
            ctx.globalAlpha = 0.25;
            ctx.lineWidth = bullet.targetSize*0.8 + 2;
            ctx.stroke();
            ctx.lineWidth = 3;
            ctx.globalAlpha = 1;
        }

        const prePos = [bullet.x, bullet.y];
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;

        const pos = [bullet.x, bullet.y];
        bullet.speed = Math.hypot(bullet.vx, bullet.vy);

        let sineRatio = 0;

        const collisionSize = Math.min(150,bullet.size/2.2);

        if (stats.sineWaveMovement) {
            sineRatio = Math.sin(bullet.tick*Math.PI/9)*2;
            bullet.x += bullet.vy * sineRatio;
            bullet.y -= bullet.vx * sineRatio;
        }

        if (!stats.noDrawBullets) draw(bullet.x, bullet.y, bullet.drawPath, bullet.size, bullet.direction, bullet.drawAlpha);

        if (!bullet.alive) return bullet.size;

        let numOfMoves = 1;
        if (bullet.speed-bullet.size*2 > 20) numOfMoves += Math.floor((bullet.speed-bullet.size*2)/25);

        bullet.x = prePos[0];
        bullet.y = prePos[1];

        for (var i = 0; i < numOfMoves && bullet.alive; i++) {
            //effects.push(new Effect(bullet.x,bullet.y,"jackpot",10,0))

            if (!i && stats.sineWaveMovement) {
                sineRatio = Math.sin(bullet.tick*Math.PI/9)*2;
                bullet.x += bullet.vy * sineRatio;
                bullet.y -= bullet.vx * sineRatio;
            }
            
            bullet.x += bullet.vx/numOfMoves;
            bullet.y += bullet.vy/numOfMoves;

            enemies.forEach((enemy) => {
                if (enemy.projectile && !(stats.projHit && bullet.triggerExpire) || enemy.spawning) return;
                const hypot = Math.hypot(enemy.x-bullet.x,enemy.y-bullet.y);

                if (hypot < bullet.size+enemy.size*0.8) {
                    if (bullet.enemiesTouched.includes(enemy)) return;
                    else {
                        bullet.enemiesTouched.push(enemy);
                        let damage = bullet.damage;
                        stats.damageBoosts.forEach( (item) => damage *= item[1](item[0],bullet,enemy));
                        if (bullet.jackpot) effects.push(new Effect(bullet.x,bullet.y,"jackpot",40,40));
                        enemy.health -= damage;
                        dmgNumbers.push(new DamageNumber(bullet.x,bullet.y,damage));
                        if (bullet.pierce) bullet.pierce--;
                        else if (!enemy.projectiles || enemy.health > 0) {
                            bullet.alive = false;
                        }
                        
                        stats.onHits.forEach( (item) => item[1](item[0],bullet,enemy));
                    }
                } else if (bullet.enemiesTouched.includes(enemy)) bullet.enemiesTouched.splice(bullet.enemiesTouched.indexOf(enemy), 1);
            })

            if (stats.sineWaveMovement) {
                bullet.x -= bullet.vy * sineRatio;
                bullet.y += bullet.vx * sineRatio;
            }

            if (!bullet.wallPierce) blocks.forEach((block) => {
                const diffx = bullet.x + collisionSize/2.5 - block[0];
                const diffy = bullet.y + collisionSize/2.5 - block[1];
                const diffx1 = -bullet.x + collisionSize/2.5 + block[0]+block[2];
                const diffy1 = -bullet.y + collisionSize/2.5 + block[1]+block[3];

                if (diffx > 0 && diffx1 > 0 && diffy > 0 && diffy1 > 0) {
                    if (bullet.bulletBounce) {
                        bullet.bulletBounce--;
                        bullet.damage *= 1.15;
                        bullet.direction = Math.PI*2*Math.random();
                        if (Math.min(diffx, diffx1) < Math.min(diffy,diffy1)) {
                            bullet.vx *= -1;

                            if (diffx < diffx1) bullet.x = block[0]-collisionSize;
                            else bullet.x = block[0]+block[2]+collisionSize;
                        } else {
                            bullet.vy *= -1;

                            if (diffy < diffy1) bullet.y = block[1]-collisionSize;
                            else bullet.y = block[1]+block[3]+collisionSize;
                        }
                    } else  {
                        bullet.alive = false;
                    }
                }
            })

            bullet.tick += 1/numOfMoves;

            if (bullet.lifetime < 0) {
                bullet.alive = false;
            } else if (bullet.lifetime) bullet.lifetime -= (1/30 - Math.random()/45)*(1 + (stats.previousBulletSpeed/5 || 0));

            if (!bullet.alive) if (stats.trailColor && bullet.trailPoints) {
                bullet.trailPoints.push([bullet.x,bullet.y]);
                if (bullet.trailPoints.length > (stats.trailLength || 8)) bullet.trailPoints.splice(0,1);
                ctx.beginPath();
                bullet.trailPoints.forEach((points) => ctx.lineTo(...points));
                ctx.strokeStyle = stats.trailColor;
                ctx.globalAlpha = 0.25;
                ctx.lineWidth = bullet.targetSize*0.8 + 2;
                ctx.stroke();
                ctx.lineWidth = 3;
                ctx.globalAlpha = 1;
            }
        }

        bullet.x = pos[0];
        bullet.y = pos[1];

        if (!bullet.wallPierce) if (Math.abs(bullet.x) > 850-collisionSize || Math.abs(bullet.y) > 450-collisionSize) {
            if (bullet.bulletBounce) {
                bullet.bulletBounce--;
                bullet.damage *= 1.15;
                bullet.direction = Math.PI*2*Math.random();

                if (Math.abs(bullet.x) > 850-collisionSize) {
                    bullet.x = Math.sign(bullet.x)*(850-collisionSize);
                    bullet.vx *= -1;            
                }
                if (Math.abs(bullet.y) > 450-collisionSize) {
                    bullet.y = Math.sign(bullet.y)*(450-collisionSize);
                    bullet.vy *= -1;         
                }
            } else {
                bullet.alive = false;
                
                if (stats.trailColor && bullet.trailPoints) {
                bullet.trailPoints.push([bullet.x,bullet.y]);
                if (bullet.trailPoints.length > (stats.trailLength || 8)) bullet.trailPoints.splice(0,1);
                ctx.beginPath();
                bullet.trailPoints.forEach((points) => ctx.lineTo(...points));
                ctx.strokeStyle = stats.trailColor;
                ctx.globalAlpha = 0.25;
                ctx.lineWidth = bullet.targetSize*0.8 + 2;
                ctx.stroke();
                ctx.lineWidth = 3;
                ctx.globalAlpha = 1;
            }
            }
        } else if (Math.abs(bullet.x)-bullet.size > 1000 || Math.abs(bullet.y)-bullet.size > 600 && bullet.alive) return false;

        if (!bullet.alive) {
            ease(bullet,"size",0,0.05 + 0.15*(!!stats.noDrawBullets));
            if (bullet.triggerExpire) stats.expirationEffects.forEach( (item) => item[1](item[0],bullet));
        }

        return true;
    })

    bullets.push(...bulletBuffer);
    bulletBuffer = [];
}