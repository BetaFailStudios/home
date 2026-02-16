class Enemy {
    constructor(inputStats, override) {
        this.x = 0;
        this.y = 0;
        this.size = 50;
        this.drawPath = game.baseEnemyPath;
        this.vx = 0;
        this.vy = 0;
        this.health = 7;
        this.speed = 0.8;
        this.target = "-".repeat(Math.random() < 0.5) + "player";
        this.dirToTarget = 0;
        this.alive = true;
        this.id = enemyBlueprints.indexOf(inputStats);

        if (inputStats) Object.keys(inputStats).forEach((key) => this[key] = inputStats[key]);
        if (override) Object.keys(override).forEach((key) => this[key] = override[key]);

        if (!this.projectile) {
            this.spawning = 1;
            setTimeout(ease,1500,this,"spawning",0,1);
        }

        this.actualDirection = this.dirToTarget;

        this.healthMax = this.health;
        this.spawnSize = this.size*1.4;
    }
}

let enemiesBuffer = [];

function enemyTick() {
    game.noEnemies = true;
    game.bossName = false;
    game.bossHealth = 0;
    game.bossHealthMax = 0;
    enemies = enemies.filter((enemy,i) => {
        if (enemy.boss) {
            game.bossName = enemy.boss;
            game.bossHealth += enemy.health;
            game.bossHealthMax += enemy.healthMax;
        }
        if (!enemy.projectile) game.noEnemies = false;

        if (enemy.spawning && enemy.rotateToTarget) enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
        if (enemy.ephemeral) ctx.globalAlpha = 0.6;
        if (enemy.randomRotation) draw(enemy.x, enemy.y, enemy.drawPath, enemy.size, Math.random()*Math.PI*2);
        else draw(enemy.x, enemy.y, enemy.drawPath, enemy.size, enemy.actualDirection*enemy.rotateToTarget + (enemy.passiveRotation == true) * player.rotationTick*4);
        if (enemy.ephemeral) ctx.globalAlpha = 1;
        if (enemy.spawning) {
            draw(enemy.x, enemy.y, game.enemySpawnPath, enemy.spawnSize, 0, enemy.spawning);
            return true;
        } else if (!enemy.boss && enemy.health > 0 && enemy.health < enemy.healthMax && enemy.size) {
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(enemy.x-enemy.size-10, enemy.y-enemy.size-10);
            ctx.lineTo(enemy.x+enemy.size+10, enemy.y-enemy.size-10);
            ctx.lineWidth = 10;   
            ctx.strokeStyle = "#222";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(enemy.x-enemy.size-10, enemy.y-enemy.size-10);
            ctx.lineTo(enemy.x-enemy.size-10+enemy.health/enemy.healthMax*(enemy.size*2+20), enemy.y-enemy.size-10);
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#822";
            ctx.stroke();
            ctx.lineWidth = 3;
        }

        let triggerWarn = true;
        let triggerAttack = true;
        game.enemyAttackWarning.forEach((item) => {
            if (!enemy[item]/* || (enemy.noAttack && enemy.noAttack != item)*/) return;
            if (!enemy["attackList" + item]) enemy["attackList" + item] = [];
            if (triggerWarn) {
                //if (enemy.reset) enemy.reset[0]();
                enemy[item](enemy,30);
                if (!enemy[item+"WarnCount"]) enemy[item+"WarnCount"] = 0;
                enemy[item+"WarnCount"]++;
                //triggerWarn = false;
                enemy.lastWarning = item;
            }
        })
        game.enemyAttack.forEach((item) => {
            if (!enemy[item]/* || (enemy.noAttack && enemy.noAttack != item)*/) return;
            if (!enemy["attackList" + item]) enemy["attackList" + item] = [];
            if (triggerAttack && (enemy[item+"WarnCount"] > 0 || enemy.noWarnWait)) {
                if (enemy.reset) enemy.reset[0]();
                enemy[item](enemy);
                enemy[item+"WarnCount"]--;
                //triggerAttack = false;
            }
        })

        if (game.menu) return true;

        enemy.x += enemy.vx;
        enemy.y += enemy.vy;
        if (!enemy.frictionless) {
            enemy.vx *= 0.98;
            enemy.vy *= 0.98;
        }

        if (enemy.reset) if (enemy.reset[1] > 0) {
            enemy.reset[1]--;
        } else {
            enemy.reset[0]();
            delete enemy.reset;
        }

        if (enemy.projectile) { if (Math.abs(enemy.x) > 1000+enemy.size || Math.abs(enemy.y) > 600+enemy.size) return false;
        } else if (!enemy.offscreen) {        
            if (Math.abs(enemy.x) > 850-enemy.size) {
                enemy.x = Math.sign(enemy.x)*(850-enemy.size);
                
                if (enemy.immovable) {
                    enemy.vx = 0;
                } else if (enemy.wallBounce && Math.sign(enemy.vx) == Math.sign(enemy.x)) enemy.vx *= -1;
                else if (!enemy.noVelocityChange) enemy.vx = 0;            
            }
            if (Math.abs(enemy.y) > 450-enemy.size) {
                enemy.y = Math.sign(enemy.y)*(450-enemy.size);

                if (enemy.immovable) {
                    enemy.vy = 0;
                } else if (enemy.wallBounce && Math.sign(enemy.vy) == Math.sign(enemy.y)) enemy.vy *= -1;
                else if (!enemy.noVelocityChange) enemy.vy = 0;            
            }
        }

        if (!enemy.immovable) {
            blocks.forEach((block) => {
                const diffx = enemy.x + enemy.size - block[0];
                const diffy = enemy.y + enemy.size - block[1];
                const diffx1 = -enemy.x + enemy.size + block[0]+block[2];
                const diffy1 = -enemy.y + enemy.size + block[1]+block[3];
                if (diffx > 0 && diffx1 > 0 && diffy > 0 && diffy1 > 0) {
                    if (enemy.target == "player") enemy.target = "-player";
                    else if (enemy.target == "-player") enemy.target = "player";
                    if (Math.min(diffx, diffx1) < Math.min(diffy,diffy1)) {
                        if (enemy.wallBounce && Math.sign(enemy.vx) == Math.sign(diffx)) enemy.vx *= -1;
                        else if (!enemy.noVelocityChange) enemy.vx = 0;

                        if (diffx < diffx1) enemy.x = block[0]-enemy.size;
                        else enemy.x = block[0]+block[2]+enemy.size;
                    } else {
                        if (enemy.wallBounce && Math.sign(enemy.vy) == Math.sign(diffy)) enemy.vy *= -1;
                        else if (!enemy.noVelocityChange) enemy.vy = 0;

                        if (diffy < diffy1) enemy.y = block[1]-enemy.size;
                        else enemy.y = block[1]+block[3]+enemy.size;
                    }
                }
            })
        }

        if (!enemy.alive) return enemy.size;

        if (enemy.target.includes("player") && !enemy.spawning) {
            enemy.dirToTarget = (Math.atan((player.y+player.vy*30*enemy.target.includes("Advanced")-enemy.y)/(player.x+player.vx*30*enemy.target.includes("Advanced")-enemy.x)) + Math.PI*(player.x+player.vx*30*enemy.target.includes("Advanced") < enemy.x)) || (Math.PI*(player.x+player.vx*30*enemy.target.includes("Advanced") < enemy.x));
            const dist = (Math.hypot(enemy.x-player.x,enemy.y-player.y) * (1-2*enemy.target.includes("-"))) || 1;
            enemy.vx += enemy.speed*(player.y-enemy.y)/dist + enemy.speed*(player.x-enemy.x)/Math.abs(dist);
            enemy.vy -= enemy.speed*(player.x-enemy.x)/dist - enemy.speed*(player.y-enemy.y)/Math.abs(dist);;
        } else if (enemy.target == "direction") {
            enemy.vx += enemy.speed*Math.cos(enemy.dirToTarget);
            enemy.vy += enemy.speed*Math.sin(enemy.dirToTarget);
        }

        let diffToActualDir = ((enemy.dirToTarget-enemy.actualDirection))%(Math.PI*2);
        if (diffToActualDir > Math.PI) diffToActualDir -= Math.PI*2;
        if (diffToActualDir < -Math.PI) diffToActualDir += Math.PI*2;
        enemy.actualDirection += diffToActualDir/3;

        if (!enemy.projectile) enemies.forEach((enemy2,i2) => {
            if (i == i2 || enemy2.projectile) return;
            const x = (enemy.x-enemy2.x);
            const y = (enemy.y-enemy2.y);
            const hypot = Math.hypot(x,y);
            if (hypot && hypot < enemy.size*4+enemy2.size*4) {
                if (!enemy.immovable && !enemy.noVelocityChange) {
                    enemy.vx += 2*Math.sign(x)/hypot;
                    enemy.vy += 2*Math.sign(y)/hypot;
                }
                if (!enemy2.immovable && !enemy.noVelocityChange) {
                    enemy2.vx -= 2*Math.sign(x)/hypot;
                    enemy2.vy -= 2*Math.sign(y)/hypot;
                }
            }
        });

        if (enemy.health <= 0) {
            enemy.alive = false;
            ease(enemy,"size",0,0.2);
        }
        return true;
    })

    if (!game.menu) enemies.push(...enemiesBuffer);
    enemiesBuffer = [];
}

function spawnEnemies(num) {
    const enemyIndexes = game.region.enemies;
    for(var i = 0; i < (num || 1); i++) {
        const id = enemyIndexes[Math.floor(Math.random()*enemyIndexes.length)]
        const enemy = new Enemy(enemyBlueprints[id]);
        enemy.x = Math.random()*1600-800;
        enemy.y = Math.random()*800-400;
        enemies.push(enemy);
    }
}

function drawBossName() {
    ctx.beginPath();
    ctx.fillStyle = game.bossName[1];
    ctx.strokeStyle = "#222";
    ctx.font = "75px share tech";
    ctx.lineWidth = 20;
    ctx.strokeText(game.bossName[0],0,-400-200*game.bossEase**5);
    ctx.fillText(game.bossName[0],0,-400-200*game.bossEase**5);
    ctx.lineWidth = 3;

    if (!game.bossEase) ease(game,"bossEase",1,5);
}