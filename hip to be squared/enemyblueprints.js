const enemyBlueprints = [
    { // 0 knife
        size: 40, health: 7, rotateToTarget: true, speed: 0.15, drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":-50},{"type":"point","x":200,"y":-25},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":25},{"type":"point","x":-25,"y":50},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-75,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-25,"y":-100},{"type":"point","x":-75,"y":-75},{"type":"point","x":-75,"y":75},{"type":"point","x":-25,"y":100},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":55}]`
        ), beat(enemy, warn) {
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = -0.4; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["line",warn+15,enemy.x,enemy.y,1.5*player.x-0.5*enemy.x,1.5*player.y-0.5*enemy.y])
            } else {
                enemy.vx *= -1; enemy.vy *= -1;
                enemy.speed = 5;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 10 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/70 ];
            }
        }
    },{ // 1 greatsword
        size: 55, health: 9, rotateToTarget: true, speed: 0.1, drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-50},{"type":"point","x":200,"y":-50},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":50},{"type":"point","x":-75,"y":50},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-125,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-125,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":100},{"type":"point","x":-100,"y":100},{"type":"point","x":-125,"y":75},{"type":"point","x":-125,"y":-75},{"type":"point","x":-100,"y":-100},{"type":"point","x":-75,"y":-100},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), beat(enemy, warn) {
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = -0.2; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["line",warn+15,enemy.x,enemy.y,1.5*player.x-0.5*enemy.x,1.5*player.y-0.5*enemy.y]);
            } else {
                enemy.vx *= -1; enemy.vy *= -1;
                enemy.speed = 4;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.1; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 10 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/60 ];
            }
        }, boom(enemy, warn) {
            if (warn) {
                enemy.noAttack = "boom";
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.speed = 0; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["slice",warn+15,enemy.x + Math.cos(enemy.dirToTarget)*300,enemy.y + Math.sin(enemy.dirToTarget)*300,250,enemy.dirToTarget]);
                enemy.dirToTarget -= Math.PI/3;
            } else {
                enemy.noAttack = false;
                enemy.dirToTarget += Math.PI/3;
                enemiesBuffer.push(new Enemy(enemyBlueprints[2], {x: enemy.x + Math.cos(enemy.dirToTarget)*50, y: enemy.y + Math.sin(enemy.dirToTarget)*50, dirToTarget: enemy.dirToTarget}));
                enemy.dirToTarget += Math.PI/3;
                enemy.reset = [ () => { enemy.target = "player"; enemy.immovable = false; enemy.speed = 0.1; }, 0.2*60 ];
            }
        }
    },{ // 2 greatsword slash
        size: 125, health: 1, projectile: true, rotateToTarget: true, immovable: true, speed: 4, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-50},{"type":"point","x":125,"y":50},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":200},{"type":"point","x":0,"y":175},{"type":"point","x":50,"y":100},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":-100},{"type":"point","x":0,"y":-175},{"type":"point","x":50,"y":-200},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 3 scythe
        size: 55, health: 9, rotateToTarget: true, speed: -0.05, target: "player", drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":175,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":200,"y":-125,"move":false},{"type":"point","x":225,"y":-50,"move":false},{"type":"point","x":225,"y":25,"move":false},{"type":"point","x":200,"y":75,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), tick(enemy, warn) {
            if (warn) {
                enemy.target = "direction";
                enemy.reset = false;
                ease(enemy,"dirToTarget",((Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x)))-Math.PI/2,warn/60);
                enemy.vx *= 0.5; enemy.vy *= 0.5;
                //attackWarnings.push(["slice",warn+15,enemy.x + Math.cos(enemy.dirToTarget)*100,enemy.y + Math.sin(enemy.dirToTarget)*100,50,enemy.dirToTarget]);
            } else {
                enemy.dirToTarget = ((Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x)));
                enemiesBuffer.push(new Enemy(enemyBlueprints[2], {x: enemy.x + Math.cos(enemy.dirToTarget+Math.PI/2)*25, y: enemy.y + Math.sin(enemy.dirToTarget+Math.PI/2)*25, size: 40, speed: 0.2, dirToTarget: enemy.dirToTarget}));
                enemy.target = "player";
            }
        }, boom(enemy, warn) {
            if (warn) {
                enemy.speed = 0;
                enemy.noAttack = "boom";
                ease(enemy,"dirToTarget",((Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x)))-Math.PI/2,warn/60);
                enemy.vx *= 0.5; enemy.vy *= 0.5;
                enemy.teleportX = Math.random()*1600-800;
                enemy.teleportY = Math.random()*800-400;
                enemy.teleportSize = enemy.teleportSize || enemy.size;
                ease(enemy,"size",0,warn/60);
                attackWarnings.push(["circle",warn+30,enemy.teleportX, enemy.teleportY,50]);
            } else {
                enemy.speed = -0.05;
                enemy.noAttack = false;
                ease(enemy,"size",enemy.teleportSize,0.25);
                enemy.x = enemy.teleportX;
                enemy.y = enemy.teleportY;
            }
        }
    },{ // 4 buckler
        size: 40, health: 8, speed: 0.15, passiveRotation: true, drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-175},{"type":"point","x":-100,"y":-150},{"type":"point","x":-150,"y":-100},{"type":"point","x":-175,"y":0},{"type":"point","x":-150,"y":100},{"type":"point","x":-100,"y":150},{"type":"point","x":0,"y":175},{"type":"point","x":100,"y":150},{"type":"point","x":150,"y":100},{"type":"point","x":175,"y":0},{"type":"point","x":150,"y":-100},{"type":"point","x":100,"y":-150},{"type":"close"},{"type":"fill","r":120,"g":65,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":50,"y":-50},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":50},{"type":"point","x":0,"y":75},{"type":"point","x":-50,"y":50},{"type":"point","x":-75,"y":0},{"type":"point","x":-50,"y":-50},{"type":"point","x":0,"y":-75},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-125,"move":false},{"type":"point","x":25,"y":-125,"move":false},{"type":"point","x":-25,"y":-100,"move":true},{"type":"point","x":125,"y":-100,"move":false},{"type":"point","x":75,"y":-50,"move":true},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":-125,"y":-75,"move":true},{"type":"point","x":-50,"y":-75,"move":false},{"type":"point","x":-150,"y":0,"move":true},{"type":"point","x":-100,"y":0,"move":false},{"type":"point","x":-100,"y":-25,"move":true},{"type":"point","x":-75,"y":-25,"move":false},{"type":"point","x":-150,"y":50,"move":true},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":-100,"y":125,"move":true},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":50,"y":75,"move":true},{"type":"point","x":125,"y":75,"move":false},{"type":"point","x":75,"y":25,"move":true},{"type":"point","x":150,"y":25,"move":false},{"type":"point","x":-100,"y":100,"move":true},{"type":"point","x":0,"y":100,"move":false},{"type":"point","x":-25,"y":150,"move":true},{"type":"point","x":50,"y":150,"move":false},{"type":"point","x":100,"y":-25,"move":true},{"type":"point","x":150,"y":-25,"move":false},{"type":"point","x":-25,"y":-150,"move":true},{"type":"point","x":50,"y":-150,"move":false},{"type":"stroke","r":75,"g":50,"b":0}]`
        ), boom(enemy, warn) {
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.reset = false;
                enemy.noVelocityChange = true;
                enemy.target = "direction";
                enemy.speed = -0.1; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["line",warn+15,enemy.x,enemy.y,1.5*player.x-0.5*enemy.x,1.5*player.y-0.5*enemy.y])
            } else {
                enemy.speed = 0;
                enemy.vx *= -8;
                enemy.vy *= -8;
                enemy.frictionless = true;
                enemy.reset = [ () => { enemy.frictionless = false; enemy.noVelocityChange = false; enemy.speed = 0.15; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; }, 120 ];
            }
        }
    },{ // 5 rapier
        size: 45, health: 6, rotateToTarget: true, speed: -0.05, target: "player", drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-25},{"type":"point","x":300,"y":0},{"type":"point","x":0,"y":25},{"type":"fill","r":130,"g":130,"b":130},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-100,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":75},{"type":"point","x":-100,"y":-75},{"type":"point","x":-50,"y":-75},{"type":"point","x":0,"y":-50},{"type":"point","x":0,"y":50},{"type":"point","x":-50,"y":75},{"type":"close"},{"type":"fill","r":180,"g":180,"b":180},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), beat(enemy, warn) {
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = -0.4; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["line",warn+15,enemy.x,enemy.y,1.5*player.x-0.5*enemy.x,1.5*player.y-0.5*enemy.y])
            } else {
                enemy.vx *= -1; enemy.vy *= -1;
                enemy.speed = 5;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 10 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/70 ];
            }
        },boom(enemy, warn) {
            if (warn) {
                enemy.noAttack = "boom";
                enemy.vx *= 0; enemy.vy *= 0;
                enemy.speed = 0;
                enemy.teleportX = Math.random()*1600-800;
                enemy.teleportY = Math.random()*800-400;
                enemy.teleportSize = enemy.teleportSize || enemy.size;
                ease(enemy,"size",0,warn/60);
                attackWarnings.push(["circle",warn+30,enemy.teleportX, enemy.teleportY,50]);
            } else {
                enemy.speed = -0.05;
                enemy.noAttack = false;
                ease(enemy,"size",enemy.teleportSize,0.1);
                enemy.x = enemy.teleportX;
                enemy.y = enemy.teleportY;
            }
        }
    },{ // 6 bow
        size: 55, health: 9, rotateToTarget: true, speed: -0.05, target: "playerAdvanced", drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":-50,"y":250,"move":false},{"type":"stroke","r":175,"g":175,"b":175},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":-25,"y":-150,"move":false},{"type":"point","x":25,"y":-75,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":0,"y":150,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), drawIdlePath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":-50,"y":250,"move":false},{"type":"stroke","r":175,"g":175,"b":175},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":-25,"y":-150,"move":false},{"type":"point","x":25,"y":-75,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":0,"y":150,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), drawReadyPath: JSON.parse(
           `[{"type":"point","x":25,"y":-250,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"stroke","r":125,"g":125,"b":125},{"type":"point","x":25,"y":-250,"move":false},{"type":"point","x":50,"y":-150,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":125,"y":0,"move":false},{"type":"point","x":100,"y":75,"move":false},{"type":"point","x":50,"y":150,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":75,"y":150,"move":false},{"type":"point","x":125,"y":100,"move":false},{"type":"point","x":150,"y":25,"move":false},{"type":"point","x":150,"y":-25,"move":false},{"type":"point","x":125,"y":-100,"move":false},{"type":"point","x":75,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":125,"y":25,"move":false},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":100,"y":75,"move":false},{"type":"point","x":125,"y":0,"move":false},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        ), beat(enemy, warn) {
            if (warn) {
                enemy.target = "direction";
                //enemy.dirToTarget = (Math.atan((player.y+player.vy*20-enemy.x)/(player.x+player.vx*20-enemy.x)) + Math.PI*(player.x+player.vx*20 < enemy.x)) || (Math.PI*(player.x+player.vx*20 < enemy.x));
                enemy.drawPath = enemy.drawReadyPath;
                enemy.vx = 0; enemy.vy = 0;
                enemy.speed = 0;
                //ttackWarnings.push(["line",warn+15,enemy.x,enemy.y,1.5*player.x+player.vx*30-0.5*enemy.x,1.5*player.y+player.vy*30-0.5*enemy.y]);
            } else {
                enemy.drawPath = enemy.drawIdlePath;
                enemiesBuffer.push(new Enemy(enemyBlueprints[7], {x: enemy.x + 20*Math.cos(enemy.dirToTarget), y: enemy.y + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
                enemy.speed = -0.05;
                enemy.target = "playerAdvanced";
            }
        }, boom(enemy, warn) {
            if (warn) {
                enemy.speed = 0;
                enemy.noAttack = "boom";
                enemy.vx *= 0.5; enemy.vy *= 0.5;
                enemy.teleportX = Math.random()*1600-800;
                enemy.teleportY = Math.random()*800-400;
                enemy.teleportSize = enemy.teleportSize || enemy.size;
                ease(enemy,"size",0,warn/60);
                attackWarnings.push(["circle",warn+30,enemy.teleportX, enemy.teleportY,50]);
            } else {
                enemy.speed = -0.05;
                enemy.noAttack = false;
                ease(enemy,"size",enemy.teleportSize,0.1);
                enemy.x = enemy.teleportX;
                enemy.y = enemy.teleportY;
            }
        }
    },{ // 7 bow arrow
        size: 30, health: 1, projectile: true, rotateToTarget: true, immovable: true, speed: 6, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":-50},{"type":"point","x":-250,"y":0},{"type":"point","x":175,"y":50},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40},{"type":"point","x":250,"y":0},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 8 Ephemeral Zweihänder
        size: 125, health: 9, rotateToTarget: true, speed: -0.05, target: "playerAdvanced", ephemeral: true, drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-12.5},{"type":"point","x":-75,"y":-12.5},{"type":"point","x":-62.5,"y":-62.5},{"type":"point","x":-50,"y":-75},{"type":"point","x":-50,"y":-62.5},{"type":"point","x":-62.5,"y":-12.5},{"type":"point","x":250,"y":-12.5},{"type":"point","x":300,"y":0},{"type":"point","x":250,"y":12.5},{"type":"point","x":-62.5,"y":12.5},{"type":"point","x":-50,"y":62.5},{"type":"point","x":-50,"y":75},{"type":"point","x":-62.5,"y":62.5},{"type":"point","x":-75,"y":12.5},{"type":"point","x":-150,"y":12.5},{"type":"fill","r":175,"g":235,"b":230},{"type":"stroke","r":50,"g":80,"b":85},{"type":"point","x":-175,"y":-12.5},{"type":"point","x":-275,"y":-12.5},{"type":"point","x":-275,"y":12.5},{"type":"point","x":-175,"y":12.5},{"type":"fill","r":75,"g":105,"b":105},{"type":"stroke","r":85,"g":175,"b":165},{"type":"point","x":-150,"y":-75},{"type":"point","x":-150,"y":75},{"type":"point","x":-137.5,"y":112.5},{"type":"point","x":-162.5,"y":100},{"type":"point","x":-175,"y":50},{"type":"point","x":-175,"y":-50},{"type":"point","x":-162.5,"y":-100},{"type":"point","x":-137.5,"y":-112.5},{"type":"close"},{"type":"point","x":-250,"y":0,"move":true},{"type":"point","x":-275,"y":-25,"move":false},{"type":"point","x":-300,"y":0,"move":false},{"type":"point","x":-275,"y":25,"move":false},{"type":"close"},{"type":"fill","r":100,"g":145,"b":150},{"type":"stroke","r":50,"g":130,"b":130}]`
        ), boom(enemy, warn) {
            if (warn) {
                enemy.speed = 0;
                enemy.noAttack = "boom";
                enemy.vx *= 0.5; enemy.vy *= 0.5;
                enemy.teleportX = Math.random()*1600-800;
                enemy.teleportY = Math.random()*800-400;
                enemy.teleportSize = enemy.teleportSize || enemy.size;
                ease(enemy,"size",0,warn/60);
                attackWarnings.push(["circle",warn+30,enemy.teleportX, enemy.teleportY,50]);
            } else {
                enemy.speed = -0.05;
                enemy.noAttack = false;
                ease(enemy,"size",enemy.teleportSize,0.1);
                enemy.x = enemy.teleportX;
                enemy.y = enemy.teleportY;
            }
        }
    }
]