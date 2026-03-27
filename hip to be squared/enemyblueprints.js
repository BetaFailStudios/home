const enemyBlueprints = [
    { // 0 spear
        size: 60, health: 10, rotateToTarget: true, speed: 0.15, drawPath: JSON.parse(
            `[{"type":"point","x":-253.125,"y":-14.0625},{"type":"point","x":225,"y":-14.0625},{"type":"point","x":225,"y":14.0625},{"type":"point","x":-253.125,"y":14.0625},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-281.25,"y":0},{"type":"point","x":-253.125,"y":-28.125},{"type":"point","x":-225,"y":0},{"type":"point","x":-253.125,"y":28.125},{"type":"close"},{"type":"point","x":140.625,"y":0,"move":true},{"type":"point","x":225,"y":-56.25,"move":false},{"type":"point","x":210.9375,"y":-28.125,"move":false},{"type":"point","x":239.0625,"y":-14.0625,"move":false},{"type":"point","x":337.5,"y":0,"move":false},{"type":"point","x":239.0625,"y":14.0625,"move":false},{"type":"point","x":210.9375,"y":28.125,"move":false},{"type":"point","x":225,"y":56.25,"move":false},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a1(enemy, warn) {
            if (!warn) enemiesBuffer.push(new Enemy(enemyBlueprints[5], {x: enemy.x + Math.cos(enemy.dirToTarget)*25, y: enemy.y + Math.sin(enemy.dirToTarget)*25, dirToTarget: enemy.dirToTarget, size: 15, speed: 0.3}));
        }, 
        a2(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista2,true,"stab",35,enemy.dirToTarget,enemyBlueprints[5]) }
    },{ // 1 greatsword
        size: 55, health: 11, rotateToTarget: true, speed: 0.1, drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-50},{"type":"point","x":200,"y":-50},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":50},{"type":"point","x":-75,"y":50},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-125,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-125,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":100},{"type":"point","x":-100,"y":100},{"type":"point","x":-125,"y":75},{"type":"point","x":-125,"y":-75},{"type":"point","x":-100,"y":-100},{"type":"point","x":-75,"y":-100},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        a2(enemy, warn) { enemyAttackDash(enemy,warn,enemy.dirToTarget,4,0.1,false,25) },
        a3(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista3,false,"slice",125,enemy.dirToTarget,enemyBlueprints[2]) }
    },{ // 2 greata2 slash
        size: 125, health: 0.1, projectile: true, rotateToTarget: true, immovable: true, speed: 4, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-50},{"type":"point","x":125,"y":50},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":200},{"type":"point","x":0,"y":175},{"type":"point","x":50,"y":100},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":-100},{"type":"point","x":0,"y":-175},{"type":"point","x":50,"y":-200},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 3 scythe
        size: 55, health: 9, rotateToTarget: true, speed: -0.05, target: "player", drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":175,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":200,"y":-125,"move":false},{"type":"point","x":225,"y":-50,"move":false},{"type":"point","x":225,"y":25,"move":false},{"type":"point","x":200,"y":75,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a1(enemy, warn) {
            if (!warn) {
                enemiesBuffer.push(new Enemy(enemyBlueprints[2], {x: enemy.x + Math.cos(enemy.dirToTarget)*25, y: enemy.y + Math.sin(enemy.dirToTarget)*25, dirToTarget: enemy.dirToTarget, size: 30, speed: 0.2}));
                enemy.vx *= 0.5;
                enemy.vy *= 0.5;
            }
        }, a3(enemy, warn) { enemyAttackTeleport(enemy,warn,enemy.attackLista3,55) }
    },{ // 4 rapier
        size: 45, health: 8, rotateToTarget: true, speed: -0.05, target: "playerAdvanced", drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-25},{"type":"point","x":300,"y":0},{"type":"point","x":0,"y":25},{"type":"fill","r":130,"g":130,"b":130},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-100,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":75},{"type":"point","x":-100,"y":-75},{"type":"point","x":-50,"y":-75},{"type":"point","x":0,"y":-50},{"type":"point","x":0,"y":50},{"type":"point","x":-50,"y":75},{"type":"close"},{"type":"fill","r":180,"g":180,"b":180},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        a2(enemy, warn) { enemyAttackDash(enemy,warn,enemy.dirToTarget,5,0.1,false,25) },
        a3(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista3,true,"stab",25,enemy.dirToTarget,enemyBlueprints[5]) }
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
        ),
        a2(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista2,true,false,30,enemy.dirToTarget,enemyBlueprints[7]) },
        a3(enemy, warn) { enemyAttackTeleport(enemy,warn,enemy.attackLista3,55) }
    },{ // 7 bow arrow
        size: 30, health: 0.07, projectile: true, rotateToTarget: true, immovable: true, speed: 6, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":-50},{"type":"point","x":-250,"y":0},{"type":"point","x":175,"y":50},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40},{"type":"point","x":250,"y":0},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 8 Ephemeral Zweihänder
        size: 125, health: 600, boss: ["Ephemeral Zweihander", "#5cf", 1], rotateToTarget: true, speed: 0.05, target: "playerAdvanced", ephemeral: true, drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-12.5},{"type":"point","x":-75,"y":-12.5},{"type":"point","x":-62.5,"y":-62.5},{"type":"point","x":-50,"y":-75},{"type":"point","x":-50,"y":-62.5},{"type":"point","x":-62.5,"y":-12.5},{"type":"point","x":250,"y":-12.5},{"type":"point","x":300,"y":0},{"type":"point","x":250,"y":12.5},{"type":"point","x":-62.5,"y":12.5},{"type":"point","x":-50,"y":62.5},{"type":"point","x":-50,"y":75},{"type":"point","x":-62.5,"y":62.5},{"type":"point","x":-75,"y":12.5},{"type":"point","x":-150,"y":12.5},{"type":"fill","r":175,"g":235,"b":230},{"type":"stroke","r":50,"g":80,"b":85},{"type":"point","x":-175,"y":-12.5},{"type":"point","x":-275,"y":-12.5},{"type":"point","x":-275,"y":12.5},{"type":"point","x":-175,"y":12.5},{"type":"fill","r":75,"g":105,"b":105},{"type":"stroke","r":85,"g":175,"b":165},{"type":"point","x":-150,"y":-75},{"type":"point","x":-150,"y":75},{"type":"point","x":-137.5,"y":112.5},{"type":"point","x":-162.5,"y":100},{"type":"point","x":-175,"y":50},{"type":"point","x":-175,"y":-50},{"type":"point","x":-162.5,"y":-100},{"type":"point","x":-137.5,"y":-112.5},{"type":"close"},{"type":"point","x":-250,"y":0,"move":true},{"type":"point","x":-275,"y":-25,"move":false},{"type":"point","x":-300,"y":0,"move":false},{"type":"point","x":-275,"y":25,"move":false},{"type":"close"},{"type":"fill","r":100,"g":145,"b":150},{"type":"stroke","r":50,"g":130,"b":130}]`
        ), a1(enemy, warn) { // drum explosion
            if (warn) {
                const pos = [-800+Math.random()*1600,-400+Math.random()*800]
                enemy.attackLista1.push(pos);
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,pos[0], pos[1],100]);
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
                createLineWarning(thing.x,thing.y,player.x,player.y);
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
                    for (var y = -500+175*Math.random(); y < 500; y += 200) {
                        const thing = new Enemy(enemyBlueprints[12], {x:x,y:y,dirToTarget:Math.PI*rightSide});
                        enemiesBuffer.push(thing);
                        things.push(thing);
                        attackWarnings.push(["line",game.warnDelay,game.warnDelay,0,y,850, 0]);
                    }
                } else {
                    const downSide = (Math.random() < 0.5);
                    y = -500 + 1000*downSide;
                    for (var x = -900+175*Math.random(); x < 900; x += 200) {
                        const thing = new Enemy(enemyBlueprints[12], {x:x,y:y,dirToTarget:Math.PI/2+Math.PI*downSide});
                        enemiesBuffer.push(thing);
                        things.push(thing);
                        attackWarnings.push(["line",game.warnDelay,game.warnDelay,x,0,0, 450]);
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
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,enemy.x, enemy.y,400]);
                enemy.vx = 0; enemy.vy = 0; enemy.speed = 0;
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[9],{ x: enemy.attackLista4[0][0], y: enemy.attackLista4[0][1], size: 850 }));
                enemy.speed = 0.05;
                enemy.attackLista4.splice(0,1);
            }
        }, 
        a5(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista5,true,"slash",200,enemy.dirToTarget,enemyBlueprints[10]) }, // slash
        a6(enemy, warn) { enemyAttackDash(enemy,warn,enemy.dirToTarget,4,0.1,false,25) }, // dash
        a7(enemy, warn) { // disappear
            if (warn) {
                ease(enemy,"size",0,warn/60);
            } else {
                enemy.x = 0;
                enemy.y = -1000;
                enemy.speed = 0;
                enemy.offscreen = true;
            }
        }, a8(enemy, warn) { enemyAttackTeleport(enemy,warn,enemy.attackLista8,125) }
    },{ // 9 Zweihänder a1
        size: 150, health: 0, projectile: true, randomRotation: true, immovable: true, speed: 0, target: "direction", drawPath: JSON.parse(
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
        size: 55, health: 10, rotateToTarget: true, speed: 0.1, target: "playerAdvanced", drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":225},{"type":"point","x":-225,"y":250},{"type":"point","x":-25,"y":50},{"type":"point","x":-50,"y":0},{"type":"point","x":-50,"y":-50},{"type":"point","x":-25,"y":-100},{"type":"point","x":25,"y":-125},{"type":"point","x":75,"y":-125},{"type":"point","x":125,"y":-100},{"type":"point","x":150,"y":-50},{"type":"point","x":150,"y":0},{"type":"point","x":125,"y":50},{"type":"point","x":175,"y":0},{"type":"point","x":175,"y":-50},{"type":"point","x":150,"y":-125},{"type":"point","x":75,"y":-162.5},{"type":"point","x":25,"y":-162.5},{"type":"point","x":-62.5,"y":-137.5},{"type":"point","x":-100,"y":-50},{"type":"point","x":-100,"y":0},{"type":"point","x":-75,"y":50},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-237.5,"y":187.5},{"type":"point","x":-187.5,"y":237.5},{"type":"point","x":-62.5,"y":112.5},{"type":"point","x":-112.5,"y":62.5},{"type":"close"},{"type":"fill","r":75,"g":50,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        a2(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista2,true,"slice",65,enemy.dirToTarget,enemyBlueprints[14]) }, 
        a3(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista3,true,"slice",150,enemy.dirToTarget,enemyBlueprints[14]) }
    },{ // 14 sickle attack
        size: 65, health: 0.07, projectile: true, rotateToTarget: true, immovable: true, speed: 0.35, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-125,"y":-125},{"type":"point","x":0,"y":-175},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":-125,"y":125},{"type":"point","x":-100,"y":175},{"type":"point","x":0,"y":225},{"type":"point","x":100,"y":225},{"type":"point","x":200,"y":175},{"type":"point","x":250,"y":75},{"type":"point","x":262.5,"y":0},{"type":"point","x":250,"y":-75},{"type":"point","x":200,"y":-175},{"type":"point","x":100,"y":-225},{"type":"point","x":0,"y":-225},{"type":"point","x":-100,"y":-175},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 15 Morning Star
        size: 125, health: 550, boss: ["Morning Star", "#cc5", 2], rotateToTarget: true, speed: 0.05, target: "player", drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-12.5},{"type":"point","x":150,"y":-12.5},{"type":"point","x":150,"y":12.5},{"type":"point","x":-250,"y":12.5},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-225,"y":-25},{"type":"point","x":-225,"y":25},{"type":"point","x":-100,"y":25},{"type":"point","x":-100,"y":-25},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":25,"b":0},{"type":"point","x":137.5,"y":-12.5,"move":false},{"type":"point","x":150,"y":-37.5,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":225,"y":-37.5,"move":false},{"type":"point","x":237.5,"y":-12.5,"move":false},{"type":"point","x":237.5,"y":12.5,"move":false},{"type":"point","x":225,"y":37.5,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":150,"y":37.5,"move":false},{"type":"point","x":137.5,"y":12.5,"move":false},{"type":"close"},{"type":"point","x":112.5,"y":-37.5,"move":false},{"type":"point","x":150,"y":-37.5,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":187.5,"y":-87.5,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":225,"y":-75,"move":false},{"type":"point","x":225,"y":-37.5,"move":false},{"type":"point","x":262.5,"y":-37.5,"move":false},{"type":"point","x":237.5,"y":-12.5,"move":false},{"type":"point","x":275,"y":0,"move":false},{"type":"point","x":237.5,"y":12.5,"move":false},{"type":"point","x":262.5,"y":37.5,"move":false},{"type":"point","x":225,"y":37.5,"move":false},{"type":"point","x":225,"y":75,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":187.5,"y":87.5,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":150,"y":37.5,"move":false},{"type":"point","x":112.5,"y":37.5,"move":false},{"type":"point","x":137.5,"y":12.5,"move":false},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":75,"g":75,"b":75}]`
        ), a1(enemy, warn) { // spike explosion
            if (warn) {
                attackWarnings.push(["line",game.warnDelay,game.warnDelay,0,enemy.y,1700,0]);
                attackWarnings.push(["line",game.warnDelay,game.warnDelay,enemy.x,0,0,900]);
                createLineWarning(enemy.x,enemy.y,enemy.x+1,enemy.y+1,true);
                createLineWarning(enemy.x,enemy.y,enemy.x+1,enemy.y-1,true);
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
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,...pos,100]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[16],{x:enemy.attackLista2[0][0],y:enemy.attackLista2[0][1], dirToTarget: Math.PI/4*(Math.random()<0.5)}));
                if (enemy.a6WarnCount) for (var i = 0; i < 2; i++) {
                    createLineWarning(...enemy.attackLista2[0],enemy.attackLista2[0][0] + 1,enemy.attackLista2[0][1] + 1*!!enemiesBuffer[enemiesBuffer.length-1].dirToTarget,true);
                    createLineWarning(...enemy.attackLista2[0],enemy.attackLista2[0][0] - 1*!!enemiesBuffer[enemiesBuffer.length-1].dirToTarget,enemy.attackLista2[0][1] + 1,true);
                }
                enemy.attackLista2.splice(0,1);
            }
        }, a3(enemy, warn) { // circle around player
            if (warn) {
                const cross = Math.random() < 0.5;
                if (cross) {
                    attackWarnings.push(["line",game.warnDelay,game.warnDelay,player.x,player.y,800,0]);
                    attackWarnings.push(["line",game.warnDelay,game.warnDelay,player.x,player.y,0,800]);

                    enemiesBuffer.push(
                        new Enemy(enemyBlueprints[18],{x:player.x-700,y:player.y,dirToTarget:0}),
                        new Enemy(enemyBlueprints[18],{x:player.x,y:player.y-700,dirToTarget:Math.PI/2}),
                        new Enemy(enemyBlueprints[18],{x:player.x+700,y:player.y,dirToTarget:Math.PI}),
                        new Enemy(enemyBlueprints[18],{x:player.x,y:player.y+700,dirToTarget:Math.PI*3/2}),
                    )
                } else {
                    attackWarnings.push(["line",game.warnDelay,game.warnDelay,player.x,player.y,460,460]);
                    attackWarnings.push(["line",game.warnDelay,game.warnDelay,player.x,player.y,460,-460]);
                    
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
                createLineWarning(enemy.x,enemy.y,player.x,player.y);
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
                //attackWarnings.push(["line",game.warnDelay,game.warnDelay,enemy.x+Math.cos(enemy.dirToTarget-Math.PI/3)*750,enemy.y+Math.sin(enemy.dirToTarget-Math.PI/3)*750,Math.cos(enemy.dirToTarget-Math.PI/3)*700,Math.sin(enemy.dirToTarget-Math.PI/3)*700]);
                
                createLineWarning(enemy.x,enemy.y,enemy.x+Math.cos(enemy.dirToTarget-Math.PI/12),enemy.y+Math.sin(enemy.dirToTarget-Math.PI/12));
                createLineWarning(enemy.x,enemy.y,enemy.x+Math.cos(enemy.dirToTarget+Math.PI/12),enemy.y+Math.sin(enemy.dirToTarget+Math.PI/12));
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
                    for (var i = 0; i < 2; i++) {
                    createLineWarning(enemy.x,enemy.y,enemy.x + 1,enemy.y + 1*!!enemy.dirToTarget,true);
                    createLineWarning(enemy.x,enemy.y,enemy.x - 1*!!enemy.dirToTarget,enemy.y + 1,true);
                }
            })
        }, a7(enemy, warn) { // disappear
            if (warn) {
                ease(enemy,"size",0,warn/60);
            } else {
                enemy.x = 0;
                enemy.y = -1000;
                enemy.speed = 0;
                enemy.offscreen = true;
            }
        }, a8(enemy, warn) { enemyAttackTeleport(enemy,warn,enemy.attackLista3,125) },
        a9(enemy, warn) { enemyAttackTeleport(enemy,warn,enemy.attackLista3,125,player.x,player.y) }
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
    },{ // 19 microchip
        size: 35, health: 65, target: "playerAdvanced", rotateToTarget: true, speed: -0.05, drawPath: JSON.parse(
            `[{"type":"point","x":-225,"y":-125},{"type":"point","x":225,"y":-125},{"type":"point","x":250,"y":-100},{"type":"point","x":250,"y":100},{"type":"point","x":225,"y":125},{"type":"point","x":-225,"y":125},{"type":"point","x":-250,"y":100},{"type":"point","x":-250,"y":-100},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-200,"y":-125},{"type":"point","x":-200,"y":-175},{"type":"point","x":-250,"y":-200},{"type":"point","x":-150,"y":-125,"move":true},{"type":"point","x":-150,"y":-175,"move":false},{"type":"point","x":-200,"y":-200,"move":false},{"type":"point","x":-100,"y":-125,"move":true},{"type":"point","x":-100,"y":-175,"move":false},{"type":"point","x":-150,"y":-200,"move":false},{"type":"point","x":-50,"y":-125,"move":true},{"type":"point","x":-50,"y":-175,"move":false},{"type":"point","x":-100,"y":-200,"move":false},{"type":"point","x":0,"y":-125,"move":true},{"type":"point","x":0,"y":-175,"move":false},{"type":"point","x":-50,"y":-200,"move":false},{"type":"point","x":50,"y":-125,"move":true},{"type":"point","x":50,"y":-175,"move":false},{"type":"point","x":0,"y":-200,"move":false},{"type":"point","x":100,"y":-125,"move":true},{"type":"point","x":100,"y":-175,"move":false},{"type":"point","x":50,"y":-200,"move":false},{"type":"point","x":150,"y":-125,"move":true},{"type":"point","x":150,"y":-175,"move":false},{"type":"point","x":100,"y":-200,"move":false},{"type":"point","x":200,"y":-125,"move":true},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":150,"y":-200,"move":false},{"type":"point","x":-200,"y":125,"move":true},{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-250,"y":200,"move":false},{"type":"point","x":-150,"y":125,"move":true},{"type":"point","x":-150,"y":175,"move":false},{"type":"point","x":-200,"y":200,"move":false},{"type":"point","x":-100,"y":125,"move":true},{"type":"point","x":-100,"y":175,"move":false},{"type":"point","x":-150,"y":200,"move":false},{"type":"point","x":-50,"y":125,"move":true},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":-100,"y":200,"move":false},{"type":"point","x":0,"y":125,"move":true},{"type":"point","x":0,"y":175,"move":false},{"type":"point","x":-50,"y":200,"move":false},{"type":"point","x":50,"y":125,"move":true},{"type":"point","x":50,"y":175,"move":false},{"type":"point","x":0,"y":200,"move":false},{"type":"point","x":100,"y":125,"move":true},{"type":"point","x":100,"y":175,"move":false},{"type":"point","x":50,"y":200,"move":false},{"type":"point","x":150,"y":125,"move":true},{"type":"point","x":150,"y":175,"move":false},{"type":"point","x":100,"y":200,"move":false},{"type":"point","x":200,"y":125,"move":true},{"type":"point","x":200,"y":175,"move":false},{"type":"point","x":150,"y":200,"move":false},{"type":"stroke","r":125,"g":125,"b":0}]`
        ),
        a2(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista2,true,false,65,enemy.dirToTarget,enemyBlueprints[20]) },
        a3(enemy, warn) { enemyAttackTeleport(enemy,warn,enemy.attackLista3,35,player.x,player.y) }
    },{ // 20 chip pin
        size: 75, health: 1, projectile: true, rotateToTarget: true, immovable: true, speed: 5, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-25,"move":false},{"type":"point","x":200,"y":-25,"move":false},{"type":"point","x":250,"y":0,"move":false},{"type":"point","x":200,"y":25,"move":false},{"type":"point","x":-250,"y":25,"move":false},{"type":"fill","r":125,"g":125,"b":0},{"type":"stroke","r":50,"g":50,"b":0}]`
        )
    },{ // 21 Binary
        size: 40, health: 45, rotateToTarget: false, speed: 0.1, drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-100,"y":-225},{"type":"point","x":-150,"y":-175},{"type":"point","x":-175,"y":-50},{"type":"point","x":-175,"y":50},{"type":"point","x":-150,"y":175},{"type":"point","x":-100,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":100,"y":225},{"type":"point","x":150,"y":175},{"type":"point","x":175,"y":50},{"type":"point","x":175,"y":-50},{"type":"point","x":150,"y":-175},{"type":"point","x":100,"y":-225},{"type":"close"},{"type":"point","x":0,"y":-200,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":125,"y":50,"move":false},{"type":"point","x":100,"y":150,"move":false},{"type":"point","x":-75,"y":-175,"move":false},{"type":"close"},{"type":"point","x":-100,"y":-150,"move":true},{"type":"point","x":75,"y":175,"move":false},{"type":"point","x":0,"y":200,"move":false},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-125,"y":-75,"move":false},{"type":"close"},{"type":"fill","r":0,"g":255,"b":0},{"type":"stroke","r":0,"g":100,"b":0}]`
        ), zeroPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-100,"y":-225},{"type":"point","x":-150,"y":-175},{"type":"point","x":-175,"y":-50},{"type":"point","x":-175,"y":50},{"type":"point","x":-150,"y":175},{"type":"point","x":-100,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":100,"y":225},{"type":"point","x":150,"y":175},{"type":"point","x":175,"y":50},{"type":"point","x":175,"y":-50},{"type":"point","x":150,"y":-175},{"type":"point","x":100,"y":-225},{"type":"close"},{"type":"point","x":0,"y":-200,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":125,"y":50,"move":false},{"type":"point","x":100,"y":150,"move":false},{"type":"point","x":-75,"y":-175,"move":false},{"type":"close"},{"type":"point","x":-100,"y":-150,"move":true},{"type":"point","x":75,"y":175,"move":false},{"type":"point","x":0,"y":200,"move":false},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-125,"y":-75,"move":false},{"type":"close"},{"type":"fill","r":0,"g":255,"b":0},{"type":"stroke","r":0,"g":100,"b":0}]`
        ), onePath: JSON.parse(
            `[{"type":"point","x":-25,"y":150},{"type":"point","x":-50,"y":150},{"type":"point","x":-50,"y":200},{"type":"point","x":50,"y":200},{"type":"point","x":50,"y":150},{"type":"point","x":25,"y":150},{"type":"point","x":25,"y":-200},{"type":"point","x":-25,"y":-200},{"type":"point","x":-75,"y":-150},{"type":"point","x":-37.5,"y":-112.5},{"type":"point","x":-25,"y":-125},{"type":"close"},{"type":"fill","r":0,"g":255,"b":0},{"type":"stroke","r":0,"g":100,"b":0}]`
        ), a2(enemy, warn) { enemyAttackTeleport(enemy,warn,enemy.attackLista2,40,player.x - 50 + 100 * Math.random(),player.y - 50 + 100 * Math.random()) }, 
        a3(enemy, warn) { // large explosion
            if (warn) {
                enemy.attackLista3.push([enemy.x,enemy.y]);
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,enemy.x, enemy.y,350]);
                enemy.vx = 0; enemy.vy = 0; enemy.speed = 0;
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[9],{ x: enemy.attackLista3[0][0], y: enemy.attackLista3[0][1], size: 550 }));
                enemy.speed = 0.05;
                enemy.attackLista3.splice(0,1);
            }
        }
    },{ // 22 capacitor
        size: 50, health: 65, rotateToTarget: true, speed: 0.1, drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-150},{"type":"point","x":225,"y":-150},{"type":"point","x":250,"y":-125},{"type":"point","x":275,"y":-25},{"type":"point","x":275,"y":25},{"type":"point","x":250,"y":125},{"type":"point","x":225,"y":150},{"type":"point","x":-150,"y":150},{"type":"point","x":-125,"y":125},{"type":"point","x":-100,"y":25},{"type":"point","x":-100,"y":-25},{"type":"point","x":-125,"y":-125},{"type":"close"},{"type":"fill","r":15,"g":130,"b":180},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":-150},{"type":"point","x":-125,"y":-125},{"type":"point","x":-100,"y":-25},{"type":"point","x":-100,"y":25},{"type":"point","x":-125,"y":125},{"type":"point","x":-150,"y":150},{"type":"point","x":-175,"y":125},{"type":"point","x":-200,"y":25},{"type":"point","x":-200,"y":-25},{"type":"point","x":-175,"y":-125},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-275,"y":-100,"move":false},{"type":"point","x":-300,"y":-112.5,"move":false},{"type":"point","x":-150,"y":100,"move":true},{"type":"point","x":-287.5,"y":100,"move":false},{"type":"point","x":-300,"y":125,"move":false},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a2(enemy, warn) {
            if (warn) {
                const pos = [enemy.x + Math.random()*800-400,enemy.y + Math.random()*800-400];
                enemy.attackLista2.push(pos);
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,...pos,200]);
                enemy.vx = 0; enemy.vy = 0; enemy.speed = 0;
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[9],{ x: enemy.attackLista2[0][0], y: enemy.attackLista2[0][1], size: 175 }));
                enemy.speed = 0.05;
                enemy.attackLista2.splice(0,1);
            }
        },
        a3(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista3,true,"rect",250,enemy.dirToTarget,enemyBlueprints[9],0.1) }
    },{ // 23 CD
        size: 85, health: 70, rotateToTarget: false, speed: 0.2, drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-75},{"type":"point","x":50,"y":-50},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":50},{"type":"point","x":0,"y":75},{"type":"point","x":-50,"y":50},{"type":"point","x":-75,"y":0},{"type":"point","x":-50,"y":-50},{"type":"close"},{"type":"point","x":0,"y":-225,"move":true},{"type":"point","x":-100,"y":-200,"move":false},{"type":"point","x":-162.5,"y":-162.5,"move":false},{"type":"point","x":-200,"y":-100,"move":false},{"type":"point","x":-225,"y":0,"move":false},{"type":"point","x":-200,"y":100,"move":false},{"type":"point","x":-162.5,"y":162.5,"move":false},{"type":"point","x":-100,"y":200,"move":false},{"type":"point","x":0,"y":225,"move":false},{"type":"point","x":100,"y":200,"move":false},{"type":"point","x":162.5,"y":162.5,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":225,"y":0,"move":false},{"type":"point","x":200,"y":-100,"move":false},{"type":"point","x":162.5,"y":-162.5,"move":false},{"type":"point","x":100,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-225,"move":false},{"type":"point","x":225,"y":0,"move":false},{"type":"point","x":200,"y":-100,"move":false},{"type":"point","x":100,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"point","x":-212.5,"y":-50,"move":true},{"type":"point","x":50,"y":212.5,"move":false},{"type":"point","x":0,"y":225,"move":false},{"type":"point","x":-225,"y":0,"move":false},{"type":"close"},{"type":"fill","r":150,"g":175,"b":175}]`
        ), a3(enemy, warn) {
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.wallBounce = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = 0; enemy.vx *= 0.1; enemy.vy *= 0.1;
                createLineWarning(enemy.x,enemy.y,player.x,player.y,"slice",enemy.dirToTarget,75);
            } else {
                enemy.randomRotation = true;
                //enemy.vx *= -15; enemy.vy *= -15;
                enemy.speed = 1;
                enemy.reset = [ () => { enemy.randomRotation = false; enemy.wallBounce = false; enemy.speed = 0.2; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 80 ];
            }
        }
    },{ // 24 Ram
        size: 85, health: 65, rotateToTarget: true, speed: 0.2, drawPath: JSON.parse(
            `[{"type":"point","x":-100,"y":-250},{"type":"point","x":-100,"y":250},{"type":"point","x":87.5,"y":250},{"type":"point","x":87.5,"y":-250},{"type":"close"},{"type":"fill","r":0,"g":60,"b":0},{"type":"stroke","r":0,"g":35,"b":0},{"type":"point","x":87.5,"y":-237.5},{"type":"point","x":100,"y":-237.5},{"type":"point","x":100,"y":87.5},{"type":"point","x":87.5,"y":87.5},{"type":"point","x":87.5,"y":112.5,"move":true},{"type":"point","x":100,"y":112.5,"move":false},{"type":"point","x":100,"y":237.5,"move":false},{"type":"point","x":87.5,"y":237.5,"move":false},{"type":"fill","r":175,"g":175,"b":50},{"type":"stroke","r":110,"g":110,"b":50},{"type":"point","x":-75,"y":-225,"move":false},{"type":"point","x":62.5,"y":-225,"move":false},{"type":"point","x":62.5,"y":-87.5,"move":false},{"type":"point","x":-75,"y":-87.5,"move":false},{"type":"close"},{"type":"point","x":-75,"y":0,"move":true},{"type":"point","x":62.5,"y":0,"move":false},{"type":"point","x":62.5,"y":137.5,"move":false},{"type":"point","x":-75,"y":137.5,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a1(enemy, warn) {
            enemiesBuffer.push(new Enemy(enemyBlueprints[20], {speed: 0.3,size: 30,x: enemy.x-50+100*Math.random(), y: enemy.y-50+100*Math.random(), dirToTarget: enemy.dirToTarget}));
        },
        a3(enemy, warn) { enemyAttackDash(enemy,warn,enemy.dirToTarget,4,0.2,false,25,"rect",85) }
    },{ // 25 SSD
        size: 80, health: 70, rotateToTarget: true, speed: 0.2, target: "playeradvanced", drawPath: JSON.parse(
            `[{"type":"point","x":-237.5,"y":-100},{"type":"point","x":237.5,"y":-100},{"type":"point","x":237.5,"y":100},{"type":"point","x":-237.5,"y":100},{"type":"close"},{"type":"fill","r":0,"g":50,"b":0},{"type":"stroke","r":0,"g":25,"b":0},{"type":"point","x":-212.5,"y":-75},{"type":"point","x":212.5,"y":-75},{"type":"point","x":212.5,"y":75},{"type":"point","x":-212.5,"y":75},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":100,"g":100,"b":100},{"type":"point","x":-237.5,"y":-75},{"type":"point","x":-250,"y":-75},{"type":"point","x":-250,"y":25},{"type":"point","x":-237.5,"y":25},{"type":"point","x":-237.5,"y":37.5,"move":true},{"type":"point","x":-250,"y":37.5,"move":false},{"type":"point","x":-250,"y":87.5,"move":false},{"type":"point","x":-237.5,"y":87.5,"move":false},{"type":"point","x":237.5,"y":-87.5,"move":true},{"type":"point","x":250,"y":-87.5,"move":false},{"type":"point","x":250,"y":-25,"move":false},{"type":"point","x":237.5,"y":-25,"move":false},{"type":"point","x":237.5,"y":-12.5,"move":true},{"type":"point","x":250,"y":-12.5,"move":false},{"type":"point","x":250,"y":87.5,"move":false},{"type":"point","x":237.5,"y":87.5,"move":false},{"type":"fill","r":175,"g":175,"b":50},{"type":"stroke","r":50,"g":50,"b":0}]`
        ), a2(enemy, warn) {
            if (warn) {
                enemy.attackLista2.push([enemy.x,enemy.y,enemy.dirToTarget]);
                createLineWarning(enemy.x,enemy.y,enemy.x+Math.cos(enemy.dirToTarget),enemy.y+Math.sin(enemy.dirToTarget));
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[20], {x: enemy.attackLista2[0][0] + 20*Math.cos(enemy.attackLista2[0][2]), y: enemy.attackLista2[0][1] + 20*Math.sin(enemy.attackLista2[0][2]), dirToTarget: enemy.attackLista2[0][2]}));
                enemy.attackLista2.splice(0,1);
            }
        },
        a3(enemy, warn) { enemyAttackDash(enemy,warn,enemy.dirToTarget,4,0.2,true,25,"rect",50) }
    },{ // 26 Central Processing Unit
        size: 75, health: 2000, boss: ["Central Processing Unit", "#292", 1], spawnPosition: [0,-300],rotateToTarget: false, speed: 0, target: "playerAdvanced", drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-175},{"type":"point","x":-150,"y":175},{"type":"point","x":150,"y":175},{"type":"point","x":150,"y":-175},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"point","x":-125,"y":-150,"move":true},{"type":"point","x":87.5,"y":-150,"move":false},{"type":"point","x":-125,"y":-125,"move":true},{"type":"point","x":50,"y":-125,"move":false},{"type":"point","x":-100,"y":-50,"move":true},{"type":"point","x":25,"y":-50,"move":false},{"type":"point","x":-75,"y":-25,"move":true},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":-100,"y":75,"move":true},{"type":"point","x":112.5,"y":75,"move":false},{"type":"point","x":-25,"y":100,"move":true},{"type":"point","x":100,"y":100,"move":false},{"type":"stroke","r":150,"g":150,"b":150},{"type":"point","x":-175,"y":-175,"move":false},{"type":"point","x":-150,"y":-200,"move":false},{"type":"point","x":150,"y":-200,"move":false},{"type":"point","x":175,"y":-175,"move":false},{"type":"point","x":175,"y":175,"move":false},{"type":"point","x":150,"y":200,"move":false},{"type":"point","x":-150,"y":200,"move":false},{"type":"point","x":-175,"y":175,"move":false},{"type":"close"},{"type":"point","x":-150,"y":-175,"move":true},{"type":"point","x":-150,"y":175,"move":false},{"type":"point","x":150,"y":175,"move":false},{"type":"point","x":150,"y":-175,"move":false},{"type":"close"},{"type":"fill","r":0,"g":100,"b":0},{"type":"stroke","r":25,"g":50,"b":25},{"type":"point","x":-175,"y":100,"move":false},{"type":"point","x":-250,"y":100,"move":false},{"type":"point","x":-175,"y":25,"move":true},{"type":"point","x":-212.5,"y":25,"move":false},{"type":"point","x":-162.5,"y":-87.5,"move":true},{"type":"point","x":-225,"y":-87.5,"move":false},{"type":"point","x":-250,"y":-112.5,"move":false},{"type":"point","x":-162.5,"y":-162.5,"move":true},{"type":"point","x":-212.5,"y":-162.5,"move":false},{"type":"point","x":-150,"y":-187.5,"move":true},{"type":"point","x":-200,"y":-237.5,"move":false},{"type":"point","x":-225,"y":-237.5,"move":false},{"type":"point","x":-112.5,"y":-187.5,"move":true},{"type":"point","x":-112.5,"y":-250,"move":false},{"type":"point","x":-50,"y":-200,"move":true},{"type":"point","x":-50,"y":-237.5,"move":false},{"type":"point","x":-25,"y":-262.5,"move":false},{"type":"point","x":0,"y":-187.5,"move":true},{"type":"point","x":0,"y":-250,"move":false},{"type":"point","x":87.5,"y":-187.5,"move":true},{"type":"point","x":87.5,"y":-237.5,"move":false},{"type":"point","x":50,"y":-275,"move":false},{"type":"point","x":125,"y":-187.5,"move":true},{"type":"point","x":125,"y":-225,"move":false},{"type":"point","x":150,"y":-250,"move":false},{"type":"point","x":150,"y":-175,"move":true},{"type":"point","x":212.5,"y":-237.5,"move":false},{"type":"point","x":237.5,"y":-237.5,"move":false},{"type":"point","x":162.5,"y":-137.5,"move":true},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":225,"y":-175,"move":false},{"type":"point","x":162.5,"y":-100,"move":true},{"type":"point","x":237.5,"y":-100,"move":false},{"type":"point","x":175,"y":-37.5,"move":true},{"type":"point","x":225,"y":-37.5,"move":false},{"type":"point","x":237.5,"y":-25,"move":false},{"type":"point","x":162.5,"y":62.5,"move":true},{"type":"point","x":225,"y":62.5,"move":false},{"type":"point","x":175,"y":12.5,"move":true},{"type":"point","x":200,"y":12.5,"move":false},{"type":"point","x":162.5,"y":162.5,"move":true},{"type":"point","x":225,"y":162.5,"move":false},{"type":"point","x":250,"y":187.5,"move":false},{"type":"point","x":175,"y":125,"move":true},{"type":"point","x":212.5,"y":125,"move":false},{"type":"point","x":250,"y":87.5,"move":false},{"type":"point","x":150,"y":175,"move":true},{"type":"point","x":200,"y":237.5,"move":false},{"type":"point","x":237.5,"y":237.5,"move":false},{"type":"point","x":112.5,"y":175,"move":true},{"type":"point","x":150,"y":212.5,"move":false},{"type":"point","x":25,"y":187.5,"move":true},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":87.5,"y":187.5,"move":true},{"type":"point","x":87.5,"y":225,"move":false},{"type":"point","x":-50,"y":200,"move":true},{"type":"point","x":-50,"y":225,"move":false},{"type":"point","x":-75,"y":250,"move":false},{"type":"point","x":-125,"y":187.5,"move":true},{"type":"point","x":-125,"y":250,"move":false},{"type":"point","x":-162.5,"y":175,"move":true},{"type":"point","x":-200,"y":225,"move":false},{"type":"point","x":-250,"y":225,"move":false},{"type":"stroke","r":0,"g":75,"b":0}]`
        ), /*a1(enemy, warn) { // drum explosion
            if (warn) {
                const pos = [-800+Math.random()*1600,-400+Math.random()*800]
                enemy.attackLista1.push(pos);
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,pos[0], pos[1],100]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[9],{ x: enemy.attackLista1[0][0], y: enemy.attackLista1[0][1]}));
                enemy.attackLista1.splice(0,1);
            }
        },*/ a2(enemy, warn) { // oustide sword
            if (warn) {
                let posX = -800+1600*(Math.random() < 0.5);
                let posY = -500+1000*Math.random();
                if (Math.random() < 0.5) {
                    posX = -900+1800*Math.random();
                    posY = -500+1000*(Math.random() < 0.5);
                }
                const thing = new Enemy(enemyBlueprints[27],{x: posX, y: posY, dirToTarget: (Math.atan((player.y-posY)/(player.x-posX)) + Math.PI*(player.x < posX)) || (Math.PI*(player.x < posX))});
                enemiesBuffer.push(thing);
                enemy.attackLista2.push(thing);
                createLineWarning(thing.x,thing.y,player.x,player.y);
            } else {
                enemy.attackLista2[0].speed = 3;
                enemy.attackLista2[0].vx *= -5;
                enemy.attackLista2[0].vy *= -5;
                enemy.attackLista2.splice(0,1);
            }
        }, a3(enemy, warn) { // outside knives
            const things = [];
            if (warn) {
                if (Math.random() < 0.5) {
                    const rightSide = (Math.random() < 0.5);
                    x = -900 + 1800*rightSide;
                    for (var y = -500+175*Math.random(); y < 500; y += 300) {
                        const thing = new Enemy(enemyBlueprints[27], {x:x,y:y,dirToTarget:Math.PI*rightSide});
                        enemiesBuffer.push(thing);
                        things.push(thing);
                        attackWarnings.push(["line",game.warnDelay,game.warnDelay,0,y,900, 0]);
                    }
                } else {
                    const downSide = (Math.random() < 0.5);
                    y = -500 + 1000*downSide;
                    for (var x = -900+175*Math.random(); x < 900; x += 300) {
                        const thing = new Enemy(enemyBlueprints[27], {x:x,y:y,dirToTarget:Math.PI/2+Math.PI*downSide});
                        enemiesBuffer.push(thing);
                        things.push(thing);
                        attackWarnings.push(["line",game.warnDelay,game.warnDelay,x,0,0, 500]);
                    }
                }
                enemy.attackLista3.push(things);
            } else {
                enemy.attackLista3[0].forEach((item) => {
                    item.speed = 3;
                    item.vx *= -5;
                    item.vy *= -5;
                });
                enemy.attackLista3.splice(0,1);
            }
        }, a4(enemy, warn) { // large explosion
            if (warn) {
                const pos = [enemy.x + Math.random()*600-300,enemy.y + Math.random()*600-300];
                enemy.attackLista4.push(pos);
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,...pos,200]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[9],{ x: enemy.attackLista4[0][0], y: enemy.attackLista4[0][1], size: 300 }));
                enemy.attackLista4.splice(0,1);
            }
        },
        a5(enemy, warn) { enemyAttackSlice(enemy,warn,enemy.attackLista4,true,"rect",150,enemy.dirToTarget,enemyBlueprints[9]), 0.1 },
        a6(enemy, warn) { // enemy spawn
            if (warn) {
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[19],{health: 12, x: -750+Math.random()*1500,y: -500+Math.random()*1000}));
            }
        },/* a7(enemy, warn) { // disappear
            if (warn) {
                ease(enemy,"size",0,warn/60);
            } else {
                enemy.x = 0;
                enemy.y = -1000;
                enemy.immovable = true;
                enemy.offscreen = true;
            }
        }, a8(enemy, warn) { // reappear
            if (warn) {
                const pos = [-800+Math.random()*1600,-400+Math.random()*800]
                enemy.attackLista8.push(pos);
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,pos[0], pos[1],150]);
            } else {
                ease(enemy,"size",75,0.2);
                enemy.immovable = false;
                enemy.offscreen = false;
                enemy.x = enemy.attackLista8[0][0];
                enemy.y = enemy.attackLista8[0][1];
                enemy.attackLista8.splice(0,1);
            }
        }, a9(enemy, warn) { // reappear on player
            if (warn) {
                const pos = [player.x,player.y]
                enemy.attackLista9.push(pos);
                attackWarnings.push(["circle",game.warnDelay,game.warnDelay,pos[0], pos[1],150]);
            } else {
                ease(enemy,"size",75,0.2);
                enemy.immovable = false;
                enemy.offscreen = false;
                enemy.x = enemy.attackLista9[0][0];
                enemy.y = enemy.attackLista9[0][1];
                enemy.attackLista9.splice(0,1);
            }
        }*/
    },{ // 27 CPU gold shard
        size: 45, health: 1, projectile: true, rotateToTarget: true, immovable: true, speed: -0.1, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-75},{"type":"point","x":-250,"y":0},{"type":"point","x":0,"y":75},{"type":"point","x":250,"y":0},{"type":"close"},{"type":"fill","r":255,"g":255,"b":0},{"type":"stroke","r":50,"g":50,"b":0}]`
        )
    },{ // 28 tiny knives
        size: 35, health: 3, num: 3, rotateToTarget: true, speed: 0.1, drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":-50},{"type":"point","x":200,"y":-25},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":25},{"type":"point","x":-25,"y":50},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-75,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-25,"y":-100},{"type":"point","x":-75,"y":-75},{"type":"point","x":-75,"y":75},{"type":"point","x":-25,"y":100},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), a2(enemy, warn) {
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = -0.2; enemy.vx = 0; enemy.vy = 0;
                createLineWarning(enemy.x,enemy.y,player.x,player.y);
            } else {
                enemy.target = "direction";
                enemy.vx *= -1; enemy.vy *= -1;
                enemy.speed = 3;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 20 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/70 ];
            }
        }
    },{ // 29 tiny gold shard
        size: 35, health: 25, num: 3, rotateToTarget: true, speed: 0.1, drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-75},{"type":"point","x":-250,"y":0},{"type":"point","x":0,"y":75},{"type":"point","x":250,"y":0},{"type":"close"},{"type":"fill","r":255,"g":255,"b":0},{"type":"stroke","r":50,"g":50,"b":0}]`
        ), a2(enemy, warn) {
            if (warn) {
                enemy.dirToTarget = (Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x));
                enemy.immovable = true;
                enemy.reset = false;
                enemy.target = "direction";
                enemy.speed = -0.2; enemy.vx = 0; enemy.vy = 0;
                createLineWarning(enemy.x,enemy.y,player.x,player.y);
            } else {
                enemy.target = "direction";
                enemy.vx *= -1; enemy.vy *= -1;
                enemy.speed = 3;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 20 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/70 ];
            }
        }
    }
]

function enemyAttackTeleport(enemy,warn,attackList,size,x,y) {
    if (warn) {
        attackList.push([x || -800+Math.random()*1600,y || -400+Math.random()*800]);
        attackWarnings.push(["circle",game.warnDelay,game.warnDelay,...attackList[attackList.length-1],size+20]);
        ease(enemy,"size",0,0.1);
    } else {
        ease(enemy,"size",size,0.1);
        enemy.speed = -0.05;
        enemy.vx = 0;
        enemy.vy = 0;
        enemy.x = attackList[0][0];
        enemy.y = attackList[0][1];
        attackList.splice(0,1);
        enemy.offscreen = false;
    }
}

function enemyAttackSlice(enemy,warn,attackList,advanced,type,size,direction,reference,speed) {
    if (warn) {
        enemy.target = "direction";
        attackList.push([enemy.x,enemy.y,direction]);
        enemy.vx = 0; enemy.vy = 0;
        enemy.speed = 0;
        createLineWarning(enemy.x,enemy.y,enemy.x+Math.cos(direction),enemy.y+Math.sin(direction),type,direction,size*0.8);
    } else {
        enemy.dirToTarget = attackList[0][2];
        enemiesBuffer.push(new Enemy(reference, {speed: speed || 2, size:size, x: attackList[0][0] + 20*Math.cos(enemy.dirToTarget), y: attackList[0][1] + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
        enemy.speed = 0.15;
        if (advanced) enemy.target = "playerAdvanced";
        else enemy.target = "player";
        attackList.splice(0,1);
    }
}

function enemyAttackDash(enemy,warn,direction,speed,baseSpeed,advanced,length,type,size) {
    if (warn) {
        if (enemy.reset) enemy.reset[0]();
        enemy.reset = false;
        enemy.immovable = true;
        enemy.target = "direction";
        enemy.speed = -speed/10; enemy.vx = 0; enemy.vy = 0;
        createLineWarning(enemy.x,enemy.y,enemy.x+Math.cos(direction),enemy.y+Math.sin(direction),type,direction,size*0.8);
    } else {
        enemy.target = "direction";
        enemy.vx *= -1; enemy.vy *= -1;
        enemy.speed = speed;
        enemy.reset = [ () => { enemy.immovable = false; enemy.speed = baseSpeed; if (advanced) enemy.target = "playerAdvanced"; else enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, length ];
    }
}