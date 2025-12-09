const enemyBlueprints = [
    { // 0 spear
        size: 60, health: 7, rotateToTarget: true, speed: 0.15, drawPath: JSON.parse(
            `[{"type":"point","x":-253.125,"y":-14.0625},{"type":"point","x":225,"y":-14.0625},{"type":"point","x":225,"y":14.0625},{"type":"point","x":-253.125,"y":14.0625},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-281.25,"y":0},{"type":"point","x":-253.125,"y":-28.125},{"type":"point","x":-225,"y":0},{"type":"point","x":-253.125,"y":28.125},{"type":"close"},{"type":"point","x":140.625,"y":0,"move":true},{"type":"point","x":225,"y":-56.25,"move":false},{"type":"point","x":210.9375,"y":-28.125,"move":false},{"type":"point","x":239.0625,"y":-14.0625,"move":false},{"type":"point","x":337.5,"y":0,"move":false},{"type":"point","x":239.0625,"y":14.0625,"move":false},{"type":"point","x":210.9375,"y":28.125,"move":false},{"type":"point","x":225,"y":56.25,"move":false},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a1(enemy, warn) {
            if (!warn) enemiesBuffer.push(new Enemy(enemyBlueprints[5], {x: enemy.x + Math.cos(enemy.dirToTarget)*25, y: enemy.y + Math.sin(enemy.dirToTarget)*25, dirToTarget: enemy.dirToTarget, size: 15, speed: 0.3}));
        }, a2(enemy, warn) {
            if (warn) {
                enemy.target = "direction";
                enemy.attackLista2.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.vx = 0; enemy.vy = 0;
                enemy.speed = 0;
                attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget)*750,enemy.y+Math.sin(enemy.dirToTarget)*750,Math.cos(enemy.dirToTarget)*700,Math.sin(enemy.dirToTarget)*700]);
            } else {
                enemy.dirToTarget = enemy.attackLista2[0][2];
                enemiesBuffer.push(new Enemy(enemyBlueprints[5], {speed: 3, size:35, x: enemy.attackLista2[0][0] + 20*Math.cos(enemy.dirToTarget), y: enemy.attackLista2[0][1] + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
                enemy.speed = 0.15;
                enemy.target = "playerAdvanced";
                enemy.attackLista2.splice(0,1);
            }
        }
    },{ // 1 greatsword
        size: 55, health: 9, rotateToTarget: true, speed: 0.1, drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-50},{"type":"point","x":200,"y":-50},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":50},{"type":"point","x":-75,"y":50},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-125,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-125,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":100},{"type":"point","x":-100,"y":100},{"type":"point","x":-125,"y":75},{"type":"point","x":-125,"y":-75},{"type":"point","x":-100,"y":-100},{"type":"point","x":-75,"y":-100},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a2(enemy, warn) {
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = -0.4; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["line",warn*4,warn*4,(enemy.x+player.x*2)/3,(enemy.y+player.y*2)/3,(player.x-enemy.x)/2,(player.y-enemy.y)/2]);
            } else {
                enemy.target = "direction";
                enemy.vx *= -1; enemy.vy *= -1;
                if (enemy.lastWarning == "a2") enemy.speed = 4;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 10 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/70 ];
            }
        }, a3(enemy, warn) {
            if (warn) {
                enemy.immovable = true;
                const dir = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.attackLista3.push([enemy.x,enemy.y,dir]);
                enemy.speed = 0; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["slice",warn*4,warn*4,enemy.x + Math.cos(dir)*300,enemy.y + Math.sin(dir)*300,250,dir]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[2], {x: enemy.attackLista3[0][0] + Math.cos(enemy.attackLista3[0][2])*50, y: enemy.attackLista3[0][1] + Math.sin(enemy.attackLista3[0][2])*50, dirToTarget: enemy.attackLista3[0][2]}));
                enemy.speed = 0.1;
                enemy.attackLista3.splice(0,1);
            }
        }
    },{ // 2 greata2 slash
        size: 125, health: 0.1, projectile: true, rotateToTarget: true, immovable: true, speed: 4, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-50},{"type":"point","x":125,"y":50},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":200},{"type":"point","x":0,"y":175},{"type":"point","x":50,"y":100},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":-100},{"type":"point","x":0,"y":-175},{"type":"point","x":50,"y":-200},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 3 scythe
        size: 55, health: 7, rotateToTarget: true, speed: -0.05, target: "player", drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":175,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":200,"y":-125,"move":false},{"type":"point","x":225,"y":-50,"move":false},{"type":"point","x":225,"y":25,"move":false},{"type":"point","x":200,"y":75,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a1(enemy, warn) {
            if (!warn) {
                enemiesBuffer.push(new Enemy(enemyBlueprints[2], {x: enemy.x + Math.cos(enemy.dirToTarget)*25, y: enemy.y + Math.sin(enemy.dirToTarget)*25, dirToTarget: enemy.dirToTarget, size: 30, speed: 0.2}));
                enemy.vx *= 0.5;
                enemy.vy *= 0.5;
            }
        }, a3(enemy, warn) {
            if (warn) {
                enemy.attackLista3.push([-800+Math.random()*1600,-400+Math.random()*800]);
                attackWarnings.push(["circle",warn*4,warn*4,...enemy.attackLista3[enemy.attackLista3.length-1],100]);
                ease(enemy,"size",0,0.15);
            } else {
                ease(enemy,"size",55,0.15);
                enemy.speed = -0.05;
                enemy.vx = 0;
                enemy.vy = 0;
                enemy.x = enemy.attackLista3[0][0];
                enemy.y = enemy.attackLista3[0][1];
                enemy.attackLista3.splice(0,1);
            }
        }
    },{ // 4 rapier
        size: 45, health: 6, rotateToTarget: true, speed: -0.05, target: "playerAdvanced", drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-25},{"type":"point","x":300,"y":0},{"type":"point","x":0,"y":25},{"type":"fill","r":130,"g":130,"b":130},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-100,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":75},{"type":"point","x":-100,"y":-75},{"type":"point","x":-50,"y":-75},{"type":"point","x":0,"y":-50},{"type":"point","x":0,"y":50},{"type":"point","x":-50,"y":75},{"type":"close"},{"type":"fill","r":180,"g":180,"b":180},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a2(enemy, warn) {
            if (warn) {
                //enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = -0.4; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget)*500,enemy.y+Math.sin(enemy.dirToTarget)*500,Math.cos(enemy.dirToTarget)*400,Math.sin(enemy.dirToTarget)*400]);
            } else {
                enemy.target = "direction";
                enemy.vx *= -1; enemy.vy *= -1;
                if (enemy.lastWarning == "a2") enemy.speed = 5;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "playerAdvanced"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 10 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/150 ];
            }
        }, a3(enemy, warn) {
            if (warn) {
                enemy.immovable = true;
                const direction = (Math.atan((player.y+player.vy*35-enemy.y)/(player.x+player.vx*35-enemy.x)) + Math.PI*(player.x+player.vx*35 < enemy.x)) || (Math.PI*(player.x+player.vx*35 < enemy.x));
                enemy.attackLista3.push([enemy.x,enemy.y,direction]);
                enemy.speed = 0; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["stab",warn*4,warn*4,enemy.x + Math.cos(direction)*300,enemy.y + Math.sin(direction)*300,250,direction]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[5], {size: 40, speed: 6, x: enemy.attackLista3[0][0] + Math.cos(enemy.attackLista3[0][2])*50, y: enemy.attackLista3[0][1] + Math.sin(enemy.attackLista3[0][2])*50, dirToTarget: enemy.attackLista3[0][2]}));
                enemy.speed = -0.05;
                enemy.attackLista3.splice(0,1);
            }
        }
    },{ // 5 rapier stab
        size: 20, health: 0.1, projectile: true, rotateToTarget: true, immovable: true, speed: 6, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-150},{"type":"point","x":250,"y":0},{"type":"point","x":-250,"y":150},{"type":"point","x":-50,"y":0},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 6 bow
        size: 55, health: 9, rotateToTarget: true, speed: -0.05, target: "playerAdvanced", drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":-50,"y":250,"move":false},{"type":"stroke","r":175,"g":175,"b":175},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":-25,"y":-150,"move":false},{"type":"point","x":25,"y":-75,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":0,"y":150,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), drawIdlePath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":-50,"y":250,"move":false},{"type":"stroke","r":175,"g":175,"b":175},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":-25,"y":-150,"move":false},{"type":"point","x":25,"y":-75,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":0,"y":150,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), drawReadyPath: JSON.parse(
           `[{"type":"point","x":25,"y":-250,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"stroke","r":125,"g":125,"b":125},{"type":"point","x":25,"y":-250,"move":false},{"type":"point","x":50,"y":-150,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":125,"y":0,"move":false},{"type":"point","x":100,"y":75,"move":false},{"type":"point","x":50,"y":150,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":75,"y":150,"move":false},{"type":"point","x":125,"y":100,"move":false},{"type":"point","x":150,"y":25,"move":false},{"type":"point","x":150,"y":-25,"move":false},{"type":"point","x":125,"y":-100,"move":false},{"type":"point","x":75,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":125,"y":25,"move":false},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":100,"y":75,"move":false},{"type":"point","x":125,"y":0,"move":false},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        ), a2(enemy, warn) {
            if (warn) {
                enemy.target = "direction";
                enemy.attackLista2.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.drawPath = enemy.drawReadyPath;
                enemy.vx = 0; enemy.vy = 0;
                enemy.speed = 0;
                attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget)*750,enemy.y+Math.sin(enemy.dirToTarget)*750,Math.cos(enemy.dirToTarget)*700,Math.sin(enemy.dirToTarget)*700]);
            } else {
                enemy.drawPath = enemy.drawIdlePath;
                enemy.dirToTarget = enemy.attackLista2[0][2];
                enemiesBuffer.push(new Enemy(enemyBlueprints[7], {x: enemy.attackLista2[0][0] + 20*Math.cos(enemy.dirToTarget), y: enemy.attackLista2[0][1] + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
                enemy.speed = -0.05;
                enemy.target = "playerAdvanced";
                enemy.attackLista2.splice(0,1);
            }
        }, a3(enemy, warn) {
            if (warn) {
                enemy.attackLista3.push([-800+Math.random()*1600,-400+Math.random()*800]);
                attackWarnings.push(["circle",warn*4,warn*4,...enemy.attackLista3[enemy.attackLista3.length-1],100]);
                ease(enemy,"size",0,0.1);
            } else {
                ease(enemy,"size",55,0.1);
                enemy.speed = -0.05;
                enemy.vx = 0;
                enemy.vy = 0;
                enemy.x = enemy.attackLista3[0][0];
                enemy.y = enemy.attackLista3[0][1];
                enemy.attackLista3.splice(0,1);
            }
        }
    },{ // 7 bow arrow
        size: 30, health: 0.07, projectile: true, rotateToTarget: true, immovable: true, speed: 6, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":-50},{"type":"point","x":-250,"y":0},{"type":"point","x":175,"y":50},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40},{"type":"point","x":250,"y":0},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 8 Ephemeral Zweihänder
        size: 125, health: 500, boss: ["Ephemeral Zweihander", "#5cf", 1], rotateToTarget: true, speed: 0.05, target: "playerAdvanced", ephemeral: true, drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-12.5},{"type":"point","x":-75,"y":-12.5},{"type":"point","x":-62.5,"y":-62.5},{"type":"point","x":-50,"y":-75},{"type":"point","x":-50,"y":-62.5},{"type":"point","x":-62.5,"y":-12.5},{"type":"point","x":250,"y":-12.5},{"type":"point","x":300,"y":0},{"type":"point","x":250,"y":12.5},{"type":"point","x":-62.5,"y":12.5},{"type":"point","x":-50,"y":62.5},{"type":"point","x":-50,"y":75},{"type":"point","x":-62.5,"y":62.5},{"type":"point","x":-75,"y":12.5},{"type":"point","x":-150,"y":12.5},{"type":"fill","r":175,"g":235,"b":230},{"type":"stroke","r":50,"g":80,"b":85},{"type":"point","x":-175,"y":-12.5},{"type":"point","x":-275,"y":-12.5},{"type":"point","x":-275,"y":12.5},{"type":"point","x":-175,"y":12.5},{"type":"fill","r":75,"g":105,"b":105},{"type":"stroke","r":85,"g":175,"b":165},{"type":"point","x":-150,"y":-75},{"type":"point","x":-150,"y":75},{"type":"point","x":-137.5,"y":112.5},{"type":"point","x":-162.5,"y":100},{"type":"point","x":-175,"y":50},{"type":"point","x":-175,"y":-50},{"type":"point","x":-162.5,"y":-100},{"type":"point","x":-137.5,"y":-112.5},{"type":"close"},{"type":"point","x":-250,"y":0,"move":true},{"type":"point","x":-275,"y":-25,"move":false},{"type":"point","x":-300,"y":0,"move":false},{"type":"point","x":-275,"y":25,"move":false},{"type":"close"},{"type":"fill","r":100,"g":145,"b":150},{"type":"stroke","r":50,"g":130,"b":130}]`
        ), a1(enemy, warn) { // drum explosion
            if (warn) {
                const pos = [-800+Math.random()*1600,-400+Math.random()*800]
                enemy.attackLista1.push(pos);
                attackWarnings.push(["circle",warn*4,warn*4,pos[0], pos[1],100]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[9],{ x: enemy.attackLista1[0][0], y: enemy.attackLista1[0][1]}));
                enemy.attackLista1.splice(0,1);
            }
        }, a2(enemy, warn) { // oustide sword
            if (warn) {
                let posX = -800+1600*(Math.random() < 0.5);
                let posY = -500+1000*Math.random();
                if (Math.random() < 0.5) {
                    posX = -900+1800*Math.random();
                    posY = -500+1000*(Math.random() < 0.5);
                }
                const thing = new Enemy(enemyBlueprints[11],{x: posX, y: posY, dirToTarget: (Math.atan((player.y-posY)/(player.x-posX)) + Math.PI*(player.x < posX)) || (Math.PI*(player.x < posX))});
                enemiesBuffer.push(thing);
                enemy.attackLista2.push(thing);
                attackWarnings.push(["line",warn*4,warn*4,player.x, player.y,player.x-thing.x, player.y-thing.y]);
            } else {
                enemy.attackLista2[0].speed = 4;
                enemy.attackLista2.splice(0,1);
            }
        }, a3(enemy, warn) { // outside knives
            const things = [];
            if (warn) {
                if (Math.random() < 0.5) {
                    const rightSide = (Math.random() < 0.5);
                    x = -900 + 1800*rightSide;
                    for (var y = -500+175*Math.random(); y < 500; y += 175) {
                        const thing = new Enemy(enemyBlueprints[12], {x:x,y:y,dirToTarget:Math.PI*rightSide});
                        enemiesBuffer.push(thing);
                        things.push(thing);
                        attackWarnings.push(["line",warn*4,warn*4,0,y,900, 0]);
                    }
                } else {
                    const downSide = (Math.random() < 0.5);
                    y = -500 + 1000*downSide;
                    for (var x = -900+175*Math.random(); x < 900; x += 175) {
                        const thing = new Enemy(enemyBlueprints[12], {x:x,y:y,dirToTarget:Math.PI/2+Math.PI*downSide});
                        enemiesBuffer.push(thing);
                        things.push(thing);
                        attackWarnings.push(["line",warn*4,warn*4,x,0,0, 500]);
                    }
                }
                enemy.attackLista3.push(things);
            } else {
                enemy.attackLista3[0].forEach((item) => item.speed = 4);
                enemy.attackLista3.splice(0,1);
            }
        }, a4(enemy, warn) { // large explosion
            if (warn) {
                enemy.attackLista4.push([enemy.x,enemy.y]);
                attackWarnings.push(["circle",warn*4,warn*4,enemy.x, enemy.y,400]);
                enemy.vx = 0; enemy.vy = 0; enemy.speed = 0;
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[9],{ x: enemy.attackLista4[0][0], y: enemy.attackLista4[0][1], size: 850 }));
                enemy.speed = 0.05;
                enemy.attackLista4.splice(0,1);
            }
        }, a5(enemy, warn) { // slash
            if (warn) {
                enemy.immovable = true;
                enemy.attackLista5.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.speed = 0; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["slice",warn*4,warn*4,enemy.x + Math.cos(enemy.dirToTarget)*400,enemy.y + Math.sin(enemy.dirToTarget)*400,300,enemy.dirToTarget]);
            } else {
                enemy.immovable = false;
                enemiesBuffer.push(new Enemy(enemyBlueprints[10], {x: enemy.attackLista5[0][0] + Math.cos(enemy.attackLista5[0][2])*50, y: enemy.attackLista5[0][1] + Math.sin(enemy.attackLista5[0][2])*50, dirToTarget: enemy.attackLista5[0][2]}));
                enemy.speed = 0.05;
                enemy.attackLista5.splice(0,1);
            }
        }, a6(enemy, warn) { // dash
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = -0.4; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["line",warn*4,warn*4,(enemy.x+player.x*2)/3,(enemy.y+player.y*2)/3,(player.x-enemy.x)/2,(player.y-enemy.y)/2]);
            } else {
                enemy.target = "direction";
                enemy.vx *= -1; enemy.vy *= -1;
                enemy.speed = 5;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "playerAdvanced"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 10 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/70 ];
            }
        }, a7(enemy, warn) { // disappear
            if (warn) {
                ease(enemy,"size",0,warn/60);
            } else {
                enemy.x = 0;
                enemy.y = -1000;
                enemy.immovable = true;
                enemy.speed = 0;
                enemy.offscreen = true;
            }
        }, a8(enemy, warn) { // reappear
            if (warn) {
                const pos = [-800+Math.random()*1600,-400+Math.random()*800]
                enemy.attackLista8.push(pos);
                attackWarnings.push(["circle",warn*4,warn*4,pos[0], pos[1],150]);
            } else {
                ease(enemy,"size",125,0.2);
                enemy.immovable = false;
                enemy.speed = 0.05;
                enemy.offscreen = false;
                enemy.x = enemy.attackLista8[0][0];
                enemy.y = enemy.attackLista8[0][1];
                enemy.attackLista8.splice(0,1);
            }
        }
    },{ // 9 Zweihänder a1
        size: 150, health: 0, projectile: true, rotateToTarget: true, immovable: true, speed: 0, target: "random", drawPath: JSON.parse(
            `[{"type":"point","x":100,"y":-237.5,"move":false},{"type":"point","x":12.5,"y":-150,"move":false},{"type":"point","x":37.5,"y":-75,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-37.5,"y":125,"move":false},{"type":"point","x":-125,"y":237.5,"move":false},{"type":"point","x":212.5,"y":75,"move":true},{"type":"point","x":100,"y":112.5,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":-137.5,"y":0,"move":false},{"type":"point","x":-187.5,"y":-87.5,"move":false},{"type":"point","x":-250,"y":-87.5,"move":false},{"type":"point","x":-125,"y":-200,"move":true},{"type":"point","x":-112.5,"y":-125,"move":false},{"type":"point","x":-37.5,"y":-50,"move":false},{"type":"point","x":37.5,"y":50,"move":false},{"type":"point","x":50,"y":200,"move":false},{"type":"point","x":175,"y":225,"move":false},{"type":"point","x":-225,"y":100,"move":true},{"type":"point","x":-150,"y":137.5,"move":false},{"type":"point","x":-100,"y":37.5,"move":false},{"type":"point","x":75,"y":-37.5,"move":false},{"type":"point","x":162.5,"y":12.5,"move":false},{"type":"point","x":175,"y":-137.5,"move":false},{"type":"point","x":-37.5,"y":125,"move":true},{"type":"point","x":0,"y":187.5,"move":false},{"type":"point","x":-150,"y":137.5,"move":true},{"type":"point","x":-200,"y":200,"move":false},{"type":"point","x":-137.5,"y":0,"move":true},{"type":"point","x":-187.5,"y":37.5,"move":false},{"type":"point","x":-200,"y":-87.5,"move":true},{"type":"point","x":-225,"y":-175,"move":false},{"type":"point","x":-125,"y":-162.5,"move":true},{"type":"point","x":-162.5,"y":-162.5,"move":false},{"type":"point","x":50,"y":-187.5,"move":true},{"type":"point","x":0,"y":-225,"move":false},{"type":"point","x":25,"y":-112.5,"move":true},{"type":"point","x":100,"y":-137.5,"move":false},{"type":"point","x":162.5,"y":-75,"move":true},{"type":"point","x":212.5,"y":-12.5,"move":false},{"type":"point","x":162.5,"y":87.5,"move":true},{"type":"point","x":187.5,"y":175,"move":false},{"type":"point","x":87.5,"y":200,"move":true},{"type":"point","x":25,"y":237.5,"move":false},{"type":"stroke","r":75,"g":175,"b":255},{"type":"point","x":-62.5,"y":225,"move":false},{"type":"point","x":12.5,"y":75,"move":false},{"type":"point","x":-25,"y":-162.5,"move":false},{"type":"point","x":-150,"y":-237.5,"move":false},{"type":"point","x":-175,"y":-162.5,"move":true},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":87.5,"y":0,"move":false},{"type":"point","x":212.5,"y":75,"move":false},{"type":"point","x":212.5,"y":-175,"move":true},{"type":"point","x":75,"y":-100,"move":false},{"type":"point","x":-62.5,"y":87.5,"move":false},{"type":"point","x":-187.5,"y":150,"move":false},{"type":"point","x":-125,"y":187.5,"move":true},{"type":"point","x":0,"y":-12.5,"move":false},{"type":"point","x":112.5,"y":62.5,"move":false},{"type":"point","x":75,"y":225,"move":false},{"type":"point","x":-100,"y":150,"move":true},{"type":"point","x":-100,"y":237.5,"move":false},{"type":"point","x":-237.5,"y":12.5,"move":true},{"type":"point","x":-87.5,"y":50,"move":false},{"type":"point","x":-37.5,"y":-25,"move":false},{"type":"point","x":-150,"y":-112.5,"move":true},{"type":"point","x":-212.5,"y":-100,"move":false},{"type":"point","x":0,"y":-12.5,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":12.5,"y":-237.5,"move":false},{"type":"point","x":-50,"y":-175,"move":true},{"type":"point","x":-25,"y":-250,"move":false},{"type":"point","x":-12.5,"y":-62.5,"move":true},{"type":"point","x":-125,"y":-112.5,"move":false},{"type":"stroke","r":75,"g":255,"b":255}]`
        )
    },{ // 10 Zweihänder slash
        size: 200, health: 5, projectile: true, rotateToTarget: true, immovable: true, speed: 3, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-50},{"type":"point","x":125,"y":50},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":200},{"type":"point","x":0,"y":175},{"type":"point","x":50,"y":100},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":-100},{"type":"point","x":0,"y":-175},{"type":"point","x":50,"y":-200},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":175,"g":225,"b":255},{"type":"stroke","r":80,"g":175,"b":175}]`
        )
    },{ // 11 Zweihänder a2 projectile
        size: 75, health: 1, projectile: true, ephemeral: true, rotateToTarget: true, immovable: true, speed:-0.1, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-50},{"type":"point","x":200,"y":-50},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":50},{"type":"point","x":-75,"y":50},{"type":"fill","r":175,"g":235,"b":230},{"type":"stroke","r":50,"g":80,"b":85},{"type":"point","x":-125,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-125,"y":25},{"type":"fill","r":75,"g":105,"b":105},{"type":"stroke","r":85,"g":175,"b":165},{"type":"point","x":-75,"y":100},{"type":"point","x":-100,"y":100},{"type":"point","x":-125,"y":75},{"type":"point","x":-125,"y":-75},{"type":"point","x":-100,"y":-100},{"type":"point","x":-75,"y":-100},{"type":"close"},{"type":"fill","r":100,"g":145,"b":150},{"type":"stroke","r":50,"g":130,"b":130}]`
        )
    },{ // 12 Zweihänder knife projectile
        size: 45, health: 1, projectile: true, ephemeral: true, rotateToTarget: true, immovable: true, speed: -0.1, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":-50},{"type":"point","x":200,"y":-25},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":25},{"type":"point","x":-25,"y":50},{"type":"fill","r":175,"g":235,"b":235},{"type":"stroke","r":50,"g":80,"b":80},{"type":"point","x":-75,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-75,"y":25},{"type":"fill","r":75,"g":105,"b":105},{"type":"stroke","r":85,"g":175,"b":165},{"type":"point","x":-25,"y":-100},{"type":"point","x":-75,"y":-75},{"type":"point","x":-75,"y":75},{"type":"point","x":-25,"y":100},{"type":"close"},{"type":"fill","r":100,"g":145,"b":150},{"type":"stroke","r":50,"g":130,"b":130}]`
        )
    },{ // 13 sickle
        size: 65, health: 9, rotateToTarget: true, speed: 0.1, target: "playerAdvanced", drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":225},{"type":"point","x":-225,"y":250},{"type":"point","x":-25,"y":50},{"type":"point","x":-50,"y":0},{"type":"point","x":-50,"y":-50},{"type":"point","x":-25,"y":-100},{"type":"point","x":25,"y":-125},{"type":"point","x":75,"y":-125},{"type":"point","x":125,"y":-100},{"type":"point","x":150,"y":-50},{"type":"point","x":150,"y":0},{"type":"point","x":125,"y":50},{"type":"point","x":175,"y":0},{"type":"point","x":175,"y":-50},{"type":"point","x":150,"y":-125},{"type":"point","x":75,"y":-162.5},{"type":"point","x":25,"y":-162.5},{"type":"point","x":-62.5,"y":-137.5},{"type":"point","x":-100,"y":-50},{"type":"point","x":-100,"y":0},{"type":"point","x":-75,"y":50},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-237.5,"y":187.5},{"type":"point","x":-187.5,"y":237.5},{"type":"point","x":-62.5,"y":112.5},{"type":"point","x":-112.5,"y":62.5},{"type":"close"},{"type":"fill","r":75,"g":50,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a2(enemy, warn) {
            if (warn) {
                enemy.target = "direction";
                enemy.attackLista2.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.vx = 0; enemy.vy = 0;
                enemy.speed = 0;
                attackWarnings.push(["slice",warn*4,warn*4,enemy.x + Math.cos(enemy.dirToTarget)*200,enemy.y + Math.sin(enemy.dirToTarget)*200,150,enemy.dirToTarget]);
            } else {
                enemy.dirToTarget = enemy.attackLista2[0][2];
                enemiesBuffer.push(new Enemy(enemyBlueprints[14], {x: enemy.attackLista2[0][0] + 20*Math.cos(enemy.dirToTarget), y: enemy.attackLista2[0][1] + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
                enemy.speed = 0.1;
                enemy.target = "playerAdvanced";
                enemy.attackLista2.splice(0,1);
            }
        }, a3(enemy, warn) {
            if (warn) {
                enemy.target = "direction";
                enemy.attackLista3.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.vx = 0; enemy.vy = 0;
                enemy.speed = 0;
                attackWarnings.push(["slice",warn*4,warn*4,enemy.x + Math.cos(enemy.dirToTarget)*350,enemy.y + Math.sin(enemy.dirToTarget)*350,300,enemy.dirToTarget]);
            } else {
                enemy.dirToTarget = enemy.attackLista3[0][2];
                enemiesBuffer.push(new Enemy(enemyBlueprints[14], {size:150,speed:0.6,x: enemy.attackLista3[0][0] + 20*Math.cos(enemy.dirToTarget), y: enemy.attackLista3[0][1] + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
                enemy.speed = 0.1;
                enemy.target = "playerAdvanced";
                enemy.attackLista3.splice(0,1);
            }
        }
    },{ // 14 sickle attack
        size: 65, health: 0.07, projectile: true, rotateToTarget: true, immovable: true, speed: 0.35, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-125,"y":-125},{"type":"point","x":0,"y":-175},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":-125,"y":125},{"type":"point","x":-100,"y":175},{"type":"point","x":0,"y":225},{"type":"point","x":100,"y":225},{"type":"point","x":200,"y":175},{"type":"point","x":250,"y":75},{"type":"point","x":262.5,"y":0},{"type":"point","x":250,"y":-75},{"type":"point","x":200,"y":-175},{"type":"point","x":100,"y":-225},{"type":"point","x":0,"y":-225},{"type":"point","x":-100,"y":-175},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 15 Morning Star
        size: 125, health: 575, boss: ["Morning Star", "#cc5", 2], rotateToTarget: true, speed: 0.05, target: "player", drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-12.5},{"type":"point","x":150,"y":-12.5},{"type":"point","x":150,"y":12.5},{"type":"point","x":-250,"y":12.5},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-225,"y":-25},{"type":"point","x":-225,"y":25},{"type":"point","x":-100,"y":25},{"type":"point","x":-100,"y":-25},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":25,"b":0},{"type":"point","x":137.5,"y":-12.5,"move":false},{"type":"point","x":150,"y":-37.5,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":225,"y":-37.5,"move":false},{"type":"point","x":237.5,"y":-12.5,"move":false},{"type":"point","x":237.5,"y":12.5,"move":false},{"type":"point","x":225,"y":37.5,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":150,"y":37.5,"move":false},{"type":"point","x":137.5,"y":12.5,"move":false},{"type":"close"},{"type":"point","x":112.5,"y":-37.5,"move":false},{"type":"point","x":150,"y":-37.5,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":187.5,"y":-87.5,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":225,"y":-75,"move":false},{"type":"point","x":225,"y":-37.5,"move":false},{"type":"point","x":262.5,"y":-37.5,"move":false},{"type":"point","x":237.5,"y":-12.5,"move":false},{"type":"point","x":275,"y":0,"move":false},{"type":"point","x":237.5,"y":12.5,"move":false},{"type":"point","x":262.5,"y":37.5,"move":false},{"type":"point","x":225,"y":37.5,"move":false},{"type":"point","x":225,"y":75,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":187.5,"y":87.5,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":150,"y":37.5,"move":false},{"type":"point","x":112.5,"y":37.5,"move":false},{"type":"point","x":137.5,"y":12.5,"move":false},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":75,"g":75,"b":75}]`
        ), a1(enemy, warn) { // spike explosion
            if (warn) {
                attackWarnings.push(["line",warn*4,warn*4,enemy.x,enemy.y,1000,0]);
                attackWarnings.push(["line",warn*4,warn*4,enemy.x,enemy.y,700,700]);
                attackWarnings.push(["line",warn*4,warn*4,enemy.x,enemy.y,0,1000]);
                attackWarnings.push(["line",warn*4,warn*4,enemy.x,enemy.y,700,-700]);
                enemy.speed = 0;
                enemy.vx = 0;
                enemy.vy = 0;
            } else {
                enemy.speed = 0.05;
                enemiesBuffer.push(
                    new Enemy(enemyBlueprints[17],{x:enemy.x+100,y:enemy.y,dirToTarget:0}),
                    new Enemy(enemyBlueprints[17],{x:enemy.x+71,y:enemy.y+71,dirToTarget:Math.PI/4}),
                    new Enemy(enemyBlueprints[17],{x:enemy.x,y:enemy.y+100,dirToTarget:Math.PI/2}),
                    new Enemy(enemyBlueprints[17],{x:enemy.x-71,y:enemy.y+71,dirToTarget:Math.PI*3/4}),
                    new Enemy(enemyBlueprints[17],{x:enemy.x-100,y:enemy.y,dirToTarget:Math.PI}),
                    new Enemy(enemyBlueprints[17],{x:enemy.x-71,y:enemy.y-71,dirToTarget:Math.PI*5/4}),
                    new Enemy(enemyBlueprints[17],{x:enemy.x,y:enemy.y-100,dirToTarget:Math.PI*3/2}),
                    new Enemy(enemyBlueprints[17],{x:enemy.x+71,y:enemy.y-71,dirToTarget:Math.PI*7/4})
                )
            }
        }, a2(enemy, warn) { // spike bomb
            if (warn) {
                const pos = [-600+Math.random()*1200,-200+Math.random()*400];
                enemy.attackLista2.push(pos);
                attackWarnings.push(["circle",warn*4,warn*4,...pos,100]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[16],{x:enemy.attackLista2[0][0],y:enemy.attackLista2[0][1], dirToTarget: Math.PI/4*(Math.random()<0.5)}));
                if (enemy.a6WarnCount) for (var i = 0; i < 2; i++) attackWarnings.push(["line",30*4,30*4,...enemy.attackLista2[0],1000*Math.cos(enemiesBuffer[enemiesBuffer.length-1].dirToTarget + i*Math.PI/2),1000*Math.sin(enemiesBuffer[enemiesBuffer.length-1].dirToTarget + i*Math.PI/2)]);
                enemy.attackLista2.splice(0,1);
            }
        }, a3(enemy, warn) { // circle around player
            if (warn) {
                const cross = Math.random() < 0.5;
                if (cross) {
                    attackWarnings.push(["line",warn*4,warn*4,player.x,player.y,800,0]);
                    attackWarnings.push(["line",warn*4,warn*4,player.x,player.y,0,800]);

                    enemiesBuffer.push(
                        new Enemy(enemyBlueprints[18],{x:player.x-700,y:player.y,dirToTarget:0}),
                        new Enemy(enemyBlueprints[18],{x:player.x,y:player.y-700,dirToTarget:Math.PI/2}),
                        new Enemy(enemyBlueprints[18],{x:player.x+700,y:player.y,dirToTarget:Math.PI}),
                        new Enemy(enemyBlueprints[18],{x:player.x,y:player.y+700,dirToTarget:Math.PI*3/2}),
                    )
                } else {
                    attackWarnings.push(["line",warn*4,warn*4,player.x,player.y,460,460]);
                    attackWarnings.push(["line",warn*4,warn*4,player.x,player.y,460,-460]);
                    
                    enemiesBuffer.push(
                        new Enemy(enemyBlueprints[18],{x:player.x-500,y:player.y-500,dirToTarget:Math.PI/4}),
                        new Enemy(enemyBlueprints[18],{x:player.x+500,y:player.y-500,dirToTarget:Math.PI*3/4}),
                        new Enemy(enemyBlueprints[18],{x:player.x+500,y:player.y+500,dirToTarget:Math.PI*5/4}),
                        new Enemy(enemyBlueprints[18],{x:player.x-500,y:player.y+500,dirToTarget:Math.PI*7/4})
                    )
                }
            }
        }, a4(enemy, warn) { // shoot towards player
            if (warn) {
                enemy.attackLista4.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.vx *= 0.5; enemy.vy *= 0.5;
                enemy.speed = 0;
                attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget)*750,enemy.y+Math.sin(enemy.dirToTarget)*750,Math.cos(enemy.dirToTarget)*700,Math.sin(enemy.dirToTarget)*700]);
            } else {
                enemy.dirToTarget = enemy.attackLista4[0][2];
                enemiesBuffer.push(new Enemy(enemyBlueprints[17], {x: enemy.attackLista4[0][0] + 20*Math.cos(enemy.dirToTarget), y: enemy.attackLista4[0][1] + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
                enemy.speed = 0.05;
                enemy.attackLista4.splice(0,1);
            }
        }, a5(enemy, warn) { // fan spray towards player
            if (warn) {
                enemy.attackLista5.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.vx *= 0.5; enemy.vy *= 0.5;
                enemy.speed = 0;
                //attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget-Math.PI/3)*750,enemy.y+Math.sin(enemy.dirToTarget-Math.PI/3)*750,Math.cos(enemy.dirToTarget-Math.PI/3)*700,Math.sin(enemy.dirToTarget-Math.PI/3)*700]);
                attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget-Math.PI/12)*750,enemy.y+Math.sin(enemy.dirToTarget-Math.PI/12)*750,Math.cos(enemy.dirToTarget-Math.PI/12)*700,Math.sin(enemy.dirToTarget-Math.PI/12)*700]);
                //attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget)*750,enemy.y+Math.sin(enemy.dirToTarget)*750,Math.cos(enemy.dirToTarget)*700,Math.sin(enemy.dirToTarget)*700]);
                attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget+Math.PI/12)*750,enemy.y+Math.sin(enemy.dirToTarget+Math.PI/12)*750,Math.cos(enemy.dirToTarget+Math.PI/12)*700,Math.sin(enemy.dirToTarget+Math.PI/12)*700]);
                //attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget+Math.PI/3)*750,enemy.y+Math.sin(enemy.dirToTarget+Math.PI/3)*750,Math.cos(enemy.dirToTarget+Math.PI/3)*700,Math.sin(enemy.dirToTarget+Math.PI/3)*700]);
            } else {
                enemy.dirToTarget = enemy.attackLista5[0][2];
                //enemiesBuffer.push(new Enemy(enemyBlueprints[17], {x: enemy.attackLista5[0][0] + 20*Math.cos(enemy.dirToTarget-Math.PI/3), y: enemy.attackLista5[0][1] + 20*Math.sin(enemy.dirToTarget-Math.PI/3), dirToTarget: enemy.dirToTarget-Math.PI/3}));
                enemiesBuffer.push(new Enemy(enemyBlueprints[17], {x: enemy.attackLista5[0][0] + 20*Math.cos(enemy.dirToTarget-Math.PI/12), y: enemy.attackLista5[0][1] + 20*Math.sin(enemy.dirToTarget-Math.PI/12), dirToTarget: enemy.dirToTarget-Math.PI/12}));
                //enemiesBuffer.push(new Enemy(enemyBlueprints[17], {x: enemy.attackLista5[0][0] + 20*Math.cos(enemy.dirToTarget), y: enemy.attackLista5[0][1] + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
                enemiesBuffer.push(new Enemy(enemyBlueprints[17], {x: enemy.attackLista5[0][0] + 20*Math.cos(enemy.dirToTarget+Math.PI/12), y: enemy.attackLista5[0][1] + 20*Math.sin(enemy.dirToTarget+Math.PI/12), dirToTarget: enemy.dirToTarget+Math.PI/12}));
                //enemiesBuffer.push(new Enemy(enemyBlueprints[17], {x: enemy.attackLista5[0][0] + 20*Math.cos(enemy.dirToTarget+Math.PI/3), y: enemy.attackLista5[0][1] + 20*Math.sin(enemy.dirToTarget+Math.PI/3), dirToTarget: enemy.dirToTarget+Math.PI/3}));
                enemy.speed = 0.05;
                enemy.attackLista5.splice(0,1);
            }
        }, a6(enemy, warn)  {//a6 - spike bomb trigger
            if (warn) enemies.forEach((enemy) => {
                if (enemy.id == 16) 
                    for (var i = 0; i < 2; i++) attackWarnings.push(["line",warn*4,warn*4,enemy.x,enemy.y,1000*Math.cos(enemy.dirToTarget + i*Math.PI/2),1000*Math.sin(enemy.dirToTarget + i*Math.PI/2)])});
        }, a7(enemy, warn) { // disappear
            if (warn) {
                ease(enemy,"size",0,warn/60);
            } else {
                enemy.x = 0;
                enemy.y = -1000;
                enemy.immovable = true;
                enemy.speed = 0;
                enemy.offscreen = true;
            }
        }, a8(enemy, warn) { // reappear
            if (warn) {
                const pos = [-800+Math.random()*1600,-400+Math.random()*800]
                enemy.attackLista8.push(pos);
                attackWarnings.push(["circle",warn*4,warn*4,pos[0], pos[1],150]);
            } else {
                ease(enemy,"size",125,0.2);
                enemy.immovable = false;
                enemy.speed = 0.05;
                enemy.offscreen = false;
                enemy.x = enemy.attackLista8[0][0];
                enemy.y = enemy.attackLista8[0][1];
                enemy.attackLista8.splice(0,1);
            }
        }, a9(enemy, warn) { // reappear on player
            if (warn) {
                const pos = [player.x,player.y]
                enemy.attackLista9.push(pos);
                attackWarnings.push(["circle",warn*4,warn*4,pos[0], pos[1],150]);
            } else {
                ease(enemy,"size",125,0.2);
                enemy.immovable = false;
                enemy.speed = 0.05;
                enemy.offscreen = false;
                enemy.x = enemy.attackLista9[0][0];
                enemy.y = enemy.attackLista9[0][1];
                enemy.attackLista9.splice(0,1);
            }
        }
    },{ // 16 MS spikeball
        size: 70, health: 1, projectile: true, rotateToTarget: true, immovable: true, speed: 0, target: "direction", noWarnWait: true, drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-75},{"type":"point","x":0,"y":-250},{"type":"point","x":75,"y":-75},{"type":"point","x":250,"y":0},{"type":"point","x":75,"y":75},{"type":"point","x":0,"y":250},{"type":"point","x":-75,"y":75},{"type":"point","x":-250,"y":0},{"type":"point","x":-75,"y":-75},{"type":"point","x":75,"y":-75},{"type":"point","x":75,"y":75},{"type":"point","x":-75,"y":75},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":75,"g":75,"b":75}]`
        ), a6(enemy, warn) { // spike explosion
            if (!warn) {
                enemy.speed = 0.05;
                for (var i = 0; i < 2; i++) enemiesBuffer.push(
                    new Enemy(enemyBlueprints[17],{x:enemy.x+10*Math.cos(enemy.dirToTarget + i*Math.PI/2),y:enemy.y+10*Math.sin(enemy.dirToTarget + i*Math.PI/2),dirToTarget:enemy.dirToTarget + i*Math.PI/2}),
                    new Enemy(enemyBlueprints[17],{x:enemy.x+10*Math.cos(enemy.dirToTarget + i*Math.PI/2+Math.PI),y:enemy.y+10*Math.sin(enemy.dirToTarget + i*Math.PI/2+Math.PI),dirToTarget:enemy.dirToTarget + i*Math.PI/2+Math.PI})
                )
                enemy.health = 0;
            }
        }
    },{ // 17 MS spike
        size: 30, health: 1, projectile: true, rotateToTarget: true, immovable: true, speed: 3, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-250},{"type":"point","x":250,"y":-25},{"type":"point","x":-250,"y":250},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":75,"g":75,"b":75}]`
        )
    },{ // 18 MS spike wait
        size: 30, health: 1, projectile: true, rotateToTarget: true, immovable: true, speed: 0, target: "direction", noWarnWait: true, drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-250},{"type":"point","x":250,"y":-25},{"type":"point","x":-250,"y":250},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":75,"g":75,"b":75}]`
        ), a3(enemy, warn) { if (!warn) enemy.speed = 3; }
    }

]

