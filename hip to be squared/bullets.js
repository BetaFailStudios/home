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
        } else this.speed = Math.hypot(this.vx,this.vy);
        
        if (inputStats.vx) this.vx = inputStats.vx;
        if (inputStats.vy) this.vy = inputStats.vy;

        if (inputStats.offsetTick) {
            this.x += this.vx * inputStats.offsetTick;
            this.y += this.vy * inputStats.offsetTick;
        }
        if (inputStats.offset) {
            this.x += Math.cos(this.direction) * inputStats.offset; 
            this.y += Math.sin(this.direction) * inputStats.offset;
        }

        this.alive = true;

        if (stats.lifetime || inputStats.lifetime) this.lifetime = inputStats.lifetime || stats.lifetime;
        this.bulletBounce = stats.bulletBounce;
        this.pierce = inputStats.pierce || stats.pierce;
        this.wallPierce = inputStats.wallPierce || stats.wallPierce;

        this.triggerExpire = inputStats.triggerExpire;

        const size = this.targetSize * 25 / Math.PI * stats.bloom;
        this.x += size * Math.random() - size/2;
        this.y += size * Math.random() - size/2;

        if (inputStats.trailColor) {
            this.trailPoints = [];
            this.trailColor = inputStats.trailColor;
            this.trailLength = inputStats.trailLength;
        }

        if (game.firstBullet) {
            this.firstBullet = true;
        }
        if (this.triggerExpire) stats.onSpawns.forEach( (item) => item[1](item[0],this));
        this.distance = 0;
    }
}

let bulletBuffer = [];

async function bulletTick() {
    if (game.menu) return;
    bullets.forEach(async (bullet,i) => {
        if (bullet.size > 1500) bullet.size = 1500;

        bullet.speed = Math.hypot(bullet.vx, bullet.vy);
        let numOfMoves = 1;
        if (bullet.speed-bullet.size*2 > 20) numOfMoves += Math.floor((bullet.speed-bullet.size*2)/25);

        // handle afterdeath
        if (!bullet.alive) {
            if (!stats.noDrawBullets || !bullet.triggerExpire) if (bullet.size > 5) {
                //oDraw.push([bullet.x, bullet.y, bullet.drawPath, bullet.size, bullet.direction, bullet.drawAlpha])
            } else {
                ctx.beginPath();
                let color = bullet.drawPath[bullet.drawPath.length-1]
                ctx.strokeStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                color = bullet.drawPath[bullet.drawPath.length-2]
                ctx.fllStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                ctx.rect(bullet.x-bullet.size,bullet.y-bullet.size,bullet.size*2,bullet.size*2);
                ctx.fill();
                ctx.stroke();
            }

            if (bullet.trailColor && bullet.trailPoints) {
                bullet.trailPoints.splice(0,1);
                ctx.beginPath();
                bullet.trailPoints.forEach((points) => ctx.lineTo(...points));
                ctx.strokeStyle = bullet.trailColor;
                ctx.globalAlpha = 0.25;
                ctx.lineWidth = Math.max(bullet.targetSize,bullet.size)*1.3 + 2;
                ctx.lineCap = "round";
                ctx.stroke();
                ctx.lineWidth = 3;
                ctx.globalAlpha = 1;
            }

            bullet.toReturn = bullet.size;
            return bullet.size;
        }
        let sineRatio = 0;

        const collisionSize = Math.min(30,bullet.size);

        for (var i = 0; i < numOfMoves && bullet.alive; i++) {
            if (stats.sineWaveMovement && bullet.triggerExpire) {
                sineRatio = Math.sin(bullet.tick*Math.PI/9)*bullet.size*4;
                bullet.x += bullet.vy/bullet.speed * sineRatio;
                bullet.y -= bullet.vx/bullet.speed * sineRatio;
            }

            if (bullet.triggerExpire && !game.menu) {
                let prevDamage = bullet.damage;
                stats.damageBoosts.forEach( (item) => bullet.damage *= item[1](item[0],bullet));
                stats.bulletTicks.forEach( (item) => item[1](item[0],bullet) );
                bullet.damage = prevDamage;
            }

            /*if (!i && (!stats.noDrawBullets || !bullet.triggerExpire)) if (bullet.size > 5) {
                draw(bullet.x, bullet.y, bullet.drawPath, bullet.size, bullet.direction, bullet.drawAlpha);
            } else {
                ctx.beginPath();
                let color = bullet.drawPath[bullet.drawPath.length-1]
                ctx.strokeStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                color = bullet.drawPath[bullet.drawPath.length-2]
                ctx.fllStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                ctx.rect(bullet.x-bullet.size,bullet.y-bullet.size,bullet.size*2,bullet.size*2);
                ctx.fill();
                ctx.stroke();
            }*/
            //effects.push(new Effect(bullet.x,bullet.y,"glasses",10,0))

            if (bullet.trailColor && bullet.trailPoints) {
                bullet.trailPoints.push([bullet.x,bullet.y]);
                if (bullet.trailPoints.length > (bullet.trailLength || 8)*numOfMoves) bullet.trailPoints.splice(0,1);
                /*if (!i) {
                    ctx.beginPath();
                    bullet.trailPoints.forEach((points) => ctx.lineTo(...points));
                    ctx.strokeStyle = bullet.trailColor;
                    ctx.globalAlpha = 0.25;
                    ctx.lineWidth = Math.max(bullet.targetSize,bullet.size)*1.3 + 2;
                    ctx.lineCap = "round";
                    ctx.stroke();
                    ctx.lineWidth = 3;
                    ctx.globalAlpha = 1;
                }*/
            }

            enemies.forEach((enemy) => {
                if (enemy.projectile && !bullet.projHit || enemy.spawning) return;
                if (Math.abs(enemy.x-bullet.x) > bullet.size+enemy.size || Math.abs(enemy.y-bullet.y) > bullet.size+enemy.size) return;
                const hypot = Math.hypot(enemy.x-bullet.x,enemy.y-bullet.y);

                if (hypot < bullet.size+enemy.size*0.8) {
                    if (bullet.enemiesTouched.includes(enemy)) return;
                    else {
                        if (!enemy.showHit) playsfx("enemyhit",0.2,0.7);
                        enemy.showHit = 4;

                        bullet.enemiesTouched.push(enemy);
                        let damageMult = 1;
                        stats.damageBoosts.forEach( (item) => damageMult *= item[1](item[0],bullet,enemy));
                        bullet.damage *= damageMult;
                        if (!enemy.projectile) enemy.health -= bullet.damage;
                        dmgNumbers.push(new DamageNumber(bullet.x,bullet.y,bullet.damage,bullet.triggerExpire));
                        if (bullet.pierce) bullet.pierce--;
                        else if (!enemy.projectiles || enemy.health > 0) {
                            bullet.alive = false;
                        }
                        
                        stats.onHits.forEach( (item) => item[1](item[0],bullet,enemy));
                        bullet.damage /= damageMult;
                    }
                } else if (bullet.enemiesTouched.includes(enemy)) bullet.enemiesTouched.splice(bullet.enemiesTouched.indexOf(enemy), 1);
            })

            if (stats.sineWaveMovement && bullet.triggerExpire) {
                bullet.x -= bullet.vy/bullet.speed * sineRatio;
                bullet.y += bullet.vx/bullet.speed * sineRatio;
            }

            blocks.forEach((block) => {
                const diffx = bullet.x + collisionSize - block[0];
                const diffy = bullet.y + collisionSize - block[1];
                const diffx1 = -bullet.x + collisionSize + block[0]+block[2];
                const diffy1 = -bullet.y + collisionSize + block[1]+block[3];

                if (diffx > 0 && diffx1 > 0 && diffy > 0 && diffy1 > 0) {
                    if (bullet.wallPierce) return;
                    if (bullet.bulletBounce) {
                        bullet.bulletBounce--;
                        bullet.damage *= 1.2;
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
                        bullet.x -= bullet.vx/numOfMoves;
                        bullet.y -= bullet.vy/numOfMoves;
                    }
                }
            })

            if (!bullet.wallPierce || bullet.bulletBounce) if (Math.abs(bullet.x) > 850-collisionSize || Math.abs(bullet.y) > 450-collisionSize) {
                if (bullet.bulletBounce) {
                    bullet.bulletBounce--;
                    bullet.damage *= 1.2;
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
                    bullet.x -= bullet.vx/numOfMoves;
                    bullet.y -= bullet.vy/numOfMoves;
                }
            } 

            bullet.x += bullet.vx/numOfMoves;
            bullet.y += bullet.vy/numOfMoves;

            bullet.distance += bullet.speed/numOfMoves;

            bullet.tick += 1/numOfMoves;
        }

        if (bullet.lifetime < 0) {
            bullet.alive = false;
        } else if (bullet.lifetime) bullet.lifetime -= (1/30 - Math.random()/45);

        if (Math.abs(bullet.x)-bullet.size > 1000 || Math.abs(bullet.y)-bullet.size > 600) bullet.alive = false;;

        if (!bullet.alive) {
            ease(bullet,"size",0,0.2);
            if (bullet.triggerExpire) stats.expirationEffects.forEach( (item) => item[1](item[0],bullet));
            
            if (bullet.phoenix) {
                bullet.reference.direction = (Math.atan((mouse.y-bullet.reference.y)/(mouse.x-bullet.reference.x)) + Math.PI*(mouse.x < bullet.reference.x)) || (Math.PI*(mouse.x < bullet.reference.x));
                const newBullet = new Bullet(bullet.reference);
                bulletBuffer.push(newBullet);
                newBullet.tick = 0;
                newBullet.lifetime = stats.lifetime;
                newBullet.noPhoenix = true;
                newBullet.damage *= 0.75;
                return;
            }
        }

        bullet.toReturn = true;
        return true;
    })

    bullets = bullets.filter(bullet => bullet.toReturn);
    bullets.push(...bulletBuffer);
    bulletBuffer = [];
}

async function bulletDraw() {
    bullets.filter(async (bullet,i) => {
        if (bullet.size > 1500) bullet.size = 1500;

        bullet.speed = Math.hypot(bullet.vx, bullet.vy);
        let numOfMoves = 1;
        if (bullet.speed-bullet.size*2 > 30) numOfMoves += Math.floor((bullet.speed-bullet.size*2)/25);

        // handle afterdeath
        if (!bullet.alive) {
            if (!stats.noDrawBullets || !bullet.triggerExpire) if (bullet.size > 5) {
                let toAdd = true;
                game.toDraw.forEach(item => {
                    if (item[0] == bullet.drawPath) {
                        toAdd = false;
                        item[1].push([bullet.x, bullet.y, bullet.size, bullet.direction, bullet.drawAlpha]);
                    }
                })

                if (toAdd) game.toDraw.push([bullet.drawPath,[[bullet.x, bullet.y, bullet.size, bullet.direction, bullet.drawAlpha]]]);
            } else {
                ctx.beginPath();
                let color = bullet.drawPath[bullet.drawPath.length-1]
                ctx.strokeStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                color = bullet.drawPath[bullet.drawPath.length-2]
                ctx.fllStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                ctx.rect(bullet.x-bullet.size,bullet.y-bullet.size,bullet.size*2,bullet.size*2);
                ctx.fill();
                ctx.stroke();
            }

            if (bullet.trailColor && bullet.trailPoints) {
                bullet.trailPoints.splice(0,1);
                ctx.beginPath();
                bullet.trailPoints.forEach((points) => ctx.lineTo(...points));
                ctx.strokeStyle = bullet.trailColor;
                ctx.globalAlpha = 0.25;
                ctx.lineWidth = Math.max(bullet.targetSize,bullet.size)*1.3 + 2;
                ctx.lineCap = "round";
                ctx.stroke();
                ctx.lineWidth = 3;
                ctx.globalAlpha = 1;
            }

            return bullet.size;
        }

        let sineRatio = 1;

        if (stats.sineWaveMovement && bullet.triggerExpire) {
            sineRatio = Math.sin(bullet.tick*Math.PI/9)*bullet.size*4;
            bullet.x += bullet.vy/bullet.speed * sineRatio;
            bullet.y -= bullet.vx/bullet.speed * sineRatio;
        }

        if (!stats.noDrawBullets || !bullet.triggerExpire) if (bullet.size > 5) {
            let toAdd = true;
            game.toDraw.forEach(item => {
                if (item[0] == bullet.drawPath) {
                    toAdd = false;
                    item[1].push([bullet.x, bullet.y, bullet.size, bullet.direction, bullet.drawAlpha]);
                }
            })

            if (toAdd) game.toDraw.push([bullet.drawPath,[[bullet.x, bullet.y, bullet.size, bullet.direction, bullet.drawAlpha]]]);
        } else {
            ctx.beginPath();
            let color = bullet.drawPath[bullet.drawPath.length-1]
            ctx.strokeStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
            color = bullet.drawPath[bullet.drawPath.length-2]
            ctx.fllStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
            ctx.rect(bullet.x-bullet.size,bullet.y-bullet.size,bullet.size*2,bullet.size*2);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
        }      

        if (bullet.trailColor && bullet.trailPoints) {
            ctx.beginPath();
            bullet.trailPoints.forEach((points) => ctx.lineTo(...points));
            ctx.strokeStyle = bullet.trailColor;
            ctx.globalAlpha = 0.25;
            ctx.lineWidth = Math.max(bullet.targetSize,bullet.size)*1.3 + 2;
            ctx.lineCap = "round";
            ctx.stroke();
            ctx.lineWidth = 3;
            ctx.globalAlpha = 1;
            ctx.lineCap = "butt";
        }

        if (stats.sineWaveMovement && bullet.triggerExpire) {
            bullet.x -= bullet.vy/bullet.speed * sineRatio;
            bullet.y += bullet.vx/bullet.speed * sineRatio;
        }
    })
}