class Bullet {
    constructor(inputStats) {
        this.x = inputStats.x || 0;
        this.y = inputStats.y || 0;
        this.size = 0;
        this.damage = inputStats.damage || stats.damage;
        ease(this,"size",inputStats.size || stats.bulletSize,0.1);
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

        this.alive = true;

        if (stats.lifetime) this.lifetime = inputStats.lifetime || stats.lifetime;
        this.bulletBounce = stats.bulletBounce;
        this.pierce = inputStats.pierce || stats.pierce;
        this.wallPierce = inputStats.wallPierce || stats.wallPierce;
        if (stats.lotteryChance) if (Math.random() < stats.lotteryChance) {
            this.damage *= 30;
            this.size *= 2.2;
        }

        this.triggerExpire = inputStats.triggerExpire;
    }
}

let bulletBuffer = [];

function bulletTick() {
    bullets = bullets.filter((bullet,i) => {
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;

        const collisionSize = Math.min(150,bullet.size/2.2);

        draw(bullet.x, bullet.y, bullet.drawPath, bullet.size, bullet.direction);

        if (!bullet.alive) return bullet.size;

        enemies.forEach((enemy) => {
            if (enemy.projectile && !stats.projHit || enemy.spawning) return;
            const hypot = Math.hypot(enemy.x-bullet.x,enemy.y-bullet.y);

            if (hypot < bullet.size+enemy.size*0.8) {
                if (bullet.enemiesTouched.includes(enemy)) return;
                else {
                    bullet.enemiesTouched.push(enemy);
                    let damage = bullet.damage;
                    stats.damageBoosts.forEach( (item) => damage *= item[1](item[0],bullet,enemy));
                    enemy.health -= damage;
                    if (bullet.pierce) bullet.pierce--;
                    else if (!enemy.projectiles || enemy.health > 0) {
                        bullet.alive = false;
                        ease(bullet,"size",0,0.05);
                        if (bullet.triggerExpire) stats.expirationEffects.forEach( (item) => item[1](item[0],bullet));
                    }
                    
                    stats.onHits.forEach( (item) => item[1](item[0],bullet,enemy));
                }
            } else if (bullet.enemiesTouched.includes(enemy)) bullet.enemiesTouched.splice(bullet.enemiesTouched.indexOf(enemy), 1);
        })

        if (Math.abs(bullet.x-bullet.size) > 1000 || Math.abs(bullet.y-bullet.size) > 600) return false;
        if (!bullet.wallPierce) if (Math.abs(bullet.x) > 850-collisionSize || Math.abs(bullet.y) > 450-collisionSize) {
            if (bullet.bulletBounce) {
                bullet.bulletBounce--;
                bullet.damage *= 1.75;
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
                ease(bullet,"size",0,0.05);
                if (bullet.triggerExpire) stats.expirationEffects.forEach( (item) => item[1](item[0],bullet));
            }
        }

        if (!bullet.wallPierce) blocks.forEach((block) => {
            const diffx = bullet.x + collisionSize/2.5 - block[0];
            const diffy = bullet.y + collisionSize/2.5 - block[1];
            const diffx1 = -bullet.x + collisionSize/2.5 + block[0]+block[2];
            const diffy1 = -bullet.y + collisionSize/2.5 + block[1]+block[3];

            if (diffx > 0 && diffx1 > 0 && diffy > 0 && diffy1 > 0) {
                if (bullet.bulletBounce) {
                    bullet.bulletBounce--;
                    bullet.damage *= 1.75;
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
                    ease(bullet,"size",0,0.05);
                    if (bullet.triggerExpire) stats.expirationEffects.forEach( (item) => item[1](item[0],bullet));
                }
            }
        })

        if (bullet.lifetime < 0 || bullet.lifetime === 0) {
            bullet.alive = false;
            ease(bullet,"size",0,0.05);
            if (bullet.triggerExpire) stats.expirationEffects.forEach( (item) => item[1](item[0],bullet));
        } else if (bullet.lifetime) bullet.lifetime -= 1/60;

        return true;
    })

    bullets.push(...bulletBuffer);
    bulletBuffer = [];
}