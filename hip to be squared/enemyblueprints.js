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
                attackWarnings.push(["line",warn*4,warn*4,(enemy.x+player.x*2)/3,(enemy.y+player.y*2)/3,(player.x-enemy.x)/2,(player.y-enemy.y)/2]);
            } else {
                enemy.target = "direction";
                enemy.vx *= -1; enemy.vy *= -1;
                if (enemy.lastWarning == "beat") enemy.speed = 5;
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
                enemy.speed = -0.4; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["line",warn*4,warn*4,(enemy.x+player.x*2)/3,(enemy.y+player.y*2)/3,(player.x-enemy.x)/2,(player.y-enemy.y)/2]);
            } else {
                enemy.target = "direction";
                enemy.vx *= -1; enemy.vy *= -1;
                if (enemy.lastWarning == "beat") enemy.speed = 4;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 10 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/70 ];
            }
        }, boom(enemy, warn) {
            if (warn) {
                enemy.immovable = true;
                enemy.attackListboom.push([enemy.x,enemy.y,(Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x))]);
                enemy.speed = 0; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["slice",warn*4,warn*4,enemy.x + Math.cos(enemy.dirToTarget)*300,enemy.y + Math.sin(enemy.dirToTarget)*300,250,enemy.dirToTarget]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[2], {x: enemy.attackListboom[0][0] + Math.cos(enemy.attackListboom[0][2])*50, y: enemy.attackListboom[0][1] + Math.sin(enemy.attackListboom[0][2])*50, dirToTarget: enemy.attackListboom[0][2]}));
                enemy.speed = 0.1;
                enemy.attackListboom.splice(0,1);
            }
        }
    },{ // 2 greatsword slash
        size: 125, health: 0.1, projectile: true, rotateToTarget: true, immovable: true, speed: 4, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-50},{"type":"point","x":125,"y":50},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":200},{"type":"point","x":0,"y":175},{"type":"point","x":50,"y":100},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":-100},{"type":"point","x":0,"y":-175},{"type":"point","x":50,"y":-200},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 3 scythe
        size: 55, health: 9, rotateToTarget: true, speed: -0.05, target: "player", drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":175,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":200,"y":-125,"move":false},{"type":"point","x":225,"y":-50,"move":false},{"type":"point","x":225,"y":25,"move":false},{"type":"point","x":200,"y":75,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), tick(enemy, warn) {
            if (warn) {
                enemy.immovable = true;
                enemy.attackListtick.push([enemy.x,enemy.y,(Math.atan((player.y-enemy.y)/(player.x-enemy.x)) + Math.PI*(player.x < enemy.x)) || (Math.PI*(player.x < enemy.x))]);
                enemy.vx = 0.25; enemy.vy = 0.25;
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[2], {x: enemy.attackListtick[0][0] + Math.cos(enemy.attackListtick[0][2])*25, y: enemy.attackListtick[0][1] + Math.sin(enemy.attackListtick[0][2])*25, dirToTarget: enemy.attackListtick[0][2], size: 40, speed: 0.2}));
                enemy.attackListtick.splice(0,1);
            }
        }, boom(enemy, warn) {
            if (warn) {
                enemy.attackListboom.push([-800+Math.random()*1600,-400+Math.random()*800]);
                attackWarnings.push(["circle",warn*4,warn*4,...enemy.attackListboom[enemy.attackListboom.length-1],100]);
                ease(enemy,"size",0,0.15);
            } else {
                ease(enemy,"size",55,0.15);
                enemy.speed = -0.05;
                enemy.vx = 0;
                enemy.vy = 0;
                enemy.x = enemy.attackListboom[0][0];
                enemy.y = enemy.attackListboom[0][1];
                enemy.attackListboom.splice(0,1);
            }
        }
    },{ // 4 rapier
        size: 45, health: 6, rotateToTarget: true, speed: -0.05, target: "player", drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-25},{"type":"point","x":300,"y":0},{"type":"point","x":0,"y":25},{"type":"fill","r":130,"g":130,"b":130},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-100,"y":25},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":75},{"type":"point","x":-100,"y":-75},{"type":"point","x":-50,"y":-75},{"type":"point","x":0,"y":-50},{"type":"point","x":0,"y":50},{"type":"point","x":-50,"y":75},{"type":"close"},{"type":"fill","r":180,"g":180,"b":180},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), beat(enemy, warn) {
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
                if (enemy.lastWarning == "beat") enemy.speed = 5;
                enemy.reset = [ () => { enemy.immovable = false; enemy.speed = 0.15; enemy.target = "-".repeat(Math.random()< 0.5) + "player"; enemy.vx *= 0.25; enemy.vy *= 0.25; }, 10 + (Math.hypot(enemy.x-player.x,enemy.y-player.y))/70 ];
            }
        },boom(enemy, warn) {
            if (warn) {
                enemy.attackListboom.push([-800+Math.random()*1600,-400+Math.random()*800]);
                attackWarnings.push(["circle",warn*4,warn*4,...enemy.attackListboom[enemy.attackListboom.length-1],100]);
                ease(enemy,"size",0,0.15);
            } else {
                ease(enemy,"size",45,0.15);
                enemy.speed = -0.05;
                enemy.vx = 0;
                enemy.vy = 0;
                enemy.x = enemy.attackListboom[0][0];
                enemy.y = enemy.attackListboom[0][1];
                enemy.attackListboom.splice(0,1);
            }
        }
    },{ // 5 bow
        size: 55, health: 9, rotateToTarget: true, speed: -0.05, target: "playerAdvanced", drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":-50,"y":250,"move":false},{"type":"stroke","r":175,"g":175,"b":175},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":-25,"y":-150,"move":false},{"type":"point","x":25,"y":-75,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":0,"y":150,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), drawIdlePath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":-50,"y":250,"move":false},{"type":"stroke","r":175,"g":175,"b":175},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":-25,"y":-150,"move":false},{"type":"point","x":25,"y":-75,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":0,"y":150,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), drawReadyPath: JSON.parse(
           `[{"type":"point","x":25,"y":-250,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"stroke","r":125,"g":125,"b":125},{"type":"point","x":25,"y":-250,"move":false},{"type":"point","x":50,"y":-150,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":125,"y":0,"move":false},{"type":"point","x":100,"y":75,"move":false},{"type":"point","x":50,"y":150,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":75,"y":150,"move":false},{"type":"point","x":125,"y":100,"move":false},{"type":"point","x":150,"y":25,"move":false},{"type":"point","x":150,"y":-25,"move":false},{"type":"point","x":125,"y":-100,"move":false},{"type":"point","x":75,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":125,"y":25,"move":false},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":100,"y":75,"move":false},{"type":"point","x":125,"y":0,"move":false},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        ), beat(enemy, warn) {
            if (warn) {
                enemy.target = "direction";
                enemy.attackListbeat.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.drawPath = enemy.drawReadyPath;
                enemy.vx = 0; enemy.vy = 0;
                enemy.speed = 0;
                attackWarnings.push(["line",warn*4,warn*4,enemy.x+Math.cos(enemy.dirToTarget)*500,enemy.y+Math.sin(enemy.dirToTarget)*500,Math.cos(enemy.dirToTarget)*400,Math.sin(enemy.dirToTarget)*400]);
            } else {
                enemy.drawPath = enemy.drawIdlePath;
                enemy.dirToTarget = enemy.attackListbeat[0][2];
                enemiesBuffer.push(new Enemy(enemyBlueprints[6], {x: enemy.attackListbeat[0][0] + 20*Math.cos(enemy.dirToTarget), y: enemy.attackListbeat[0][1] + 20*Math.sin(enemy.dirToTarget), dirToTarget: enemy.dirToTarget}));
                enemy.speed = -0.05;
                enemy.target = "playerAdvanced";
                enemy.attackListbeat.splice(0,1);
            }
        }, boom(enemy, warn) {
            if (warn) {
                enemy.attackListboom.push([-800+Math.random()*1600,-400+Math.random()*800]);
                attackWarnings.push(["circle",warn*4,warn*4,...enemy.attackListboom[enemy.attackListboom.length-1],100]);
                ease(enemy,"size",0,0.1);
            } else {
                ease(enemy,"size",55,0.1);
                enemy.speed = -0.05;
                enemy.vx = 0;
                enemy.vy = 0;
                enemy.x = enemy.attackListboom[0][0];
                enemy.y = enemy.attackListboom[0][1];
                enemy.attackListboom.splice(0,1);
            }
        }
    },{ // 6 bow arrow
        size: 30, health: 0.07, projectile: true, rotateToTarget: true, immovable: true, speed: 6, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":-50},{"type":"point","x":-250,"y":0},{"type":"point","x":175,"y":50},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40},{"type":"point","x":250,"y":0},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"close"},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":80,"g":40,"b":40}]`
        )
    },{ // 7 Ephemeral Zweihänder
        size: 125, health: 400, boss: true, rotateToTarget: true, speed: 0.05, target: "playerAdvanced", ephemeral: true, drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-12.5},{"type":"point","x":-75,"y":-12.5},{"type":"point","x":-62.5,"y":-62.5},{"type":"point","x":-50,"y":-75},{"type":"point","x":-50,"y":-62.5},{"type":"point","x":-62.5,"y":-12.5},{"type":"point","x":250,"y":-12.5},{"type":"point","x":300,"y":0},{"type":"point","x":250,"y":12.5},{"type":"point","x":-62.5,"y":12.5},{"type":"point","x":-50,"y":62.5},{"type":"point","x":-50,"y":75},{"type":"point","x":-62.5,"y":62.5},{"type":"point","x":-75,"y":12.5},{"type":"point","x":-150,"y":12.5},{"type":"fill","r":175,"g":235,"b":230},{"type":"stroke","r":50,"g":80,"b":85},{"type":"point","x":-175,"y":-12.5},{"type":"point","x":-275,"y":-12.5},{"type":"point","x":-275,"y":12.5},{"type":"point","x":-175,"y":12.5},{"type":"fill","r":75,"g":105,"b":105},{"type":"stroke","r":85,"g":175,"b":165},{"type":"point","x":-150,"y":-75},{"type":"point","x":-150,"y":75},{"type":"point","x":-137.5,"y":112.5},{"type":"point","x":-162.5,"y":100},{"type":"point","x":-175,"y":50},{"type":"point","x":-175,"y":-50},{"type":"point","x":-162.5,"y":-100},{"type":"point","x":-137.5,"y":-112.5},{"type":"close"},{"type":"point","x":-250,"y":0,"move":true},{"type":"point","x":-275,"y":-25,"move":false},{"type":"point","x":-300,"y":0,"move":false},{"type":"point","x":-275,"y":25,"move":false},{"type":"close"},{"type":"fill","r":100,"g":145,"b":150},{"type":"stroke","r":50,"g":130,"b":130}]`
        ), drum(enemy, warn) {
            if (warn) {
                const pos = [-800+Math.random()*1600,-400+Math.random()*800]
                enemy.attackListdrum.push(pos);
                attackWarnings.push(["circle",warn*4,warn*4,pos[0], pos[1],100]);
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[8],{ x: enemy.attackListdrum[0][0], y: enemy.attackListdrum[0][1]}));
                enemy.attackListdrum.splice(0,1);
            }
        }, sword(enemy, warn) {
            if (warn) {
                let posX = -800+1600*(Math.random() < 0.5);
                let posY = -500+1000*Math.random();
                if (Math.random() < 0.5) {
                    posX = -900+1800*Math.random();
                    posY = -500+1000*(Math.random() < 0.5);
                }
                const thing = new Enemy(enemyBlueprints[10],{x: posX, y: posY, dirToTarget: (Math.atan((player.y-posY)/(player.x-posX)) + Math.PI*(player.x < posX)) || (Math.PI*(player.x < posX))});
                enemiesBuffer.push(thing);
                enemy.attackListsword.push(thing);
                attackWarnings.push(["line",warn*4,warn*4,player.x, player.y,player.x-thing.x, player.y-thing.y]);
            } else {
                enemy.attackListsword[0].speed = 4;
                enemy.attackListsword.splice(0,1);
            }
        }, knives(enemy, warn) {
            const things = [];
            if (warn) {
                if (Math.random() < 0.5) {
                    const rightSide = (Math.random() < 0.5);
                    x = -900 + 1800*rightSide;
                    for (var y = -500+175*Math.random(); y < 500; y += 175) {
                        const thing = new Enemy(enemyBlueprints[11], {x:x,y:y,dirToTarget:Math.PI*rightSide});
                        enemiesBuffer.push(thing);
                        things.push(thing);
                        attackWarnings.push(["line",warn*4,warn*4,0,y,1800, 0]);
                    }
                } else {
                    const downSide = (Math.random() < 0.5);
                    y = -500 + 1000*downSide;
                    for (var x = -900+175*Math.random(); x < 900; x += 175) {
                        const thing = new Enemy(enemyBlueprints[11], {x:x,y:y,dirToTarget:Math.PI/2+Math.PI*downSide});
                        enemiesBuffer.push(thing);
                        things.push(thing);
                        attackWarnings.push(["line",warn*4,warn*4,x,0,0, 1000]);
                    }
                }
                enemy.attackListknives.push(things);
            } else {
                enemy.attackListknives[0].forEach((item) => item.speed = 4);
                enemy.attackListknives.splice(0,1);
            }
        }, melee(enemy, warn) {
            if (warn) {
                enemy.attackListmelee.push([enemy.x,enemy.y]);
                attackWarnings.push(["circle",warn*4,warn*4,enemy.x, enemy.y,500]);
                enemy.vx = 0; enemy.vy = 0; enemy.speed = 0;
            } else {
                enemiesBuffer.push(new Enemy(enemyBlueprints[8],{ x: enemy.attackListmelee[0][0], y: enemy.attackListmelee[0][1], size: 850 }));
                enemy.speed = 0.05;
                enemy.attackListmelee.splice(0,1);
            }
        }, slice(enemy, warn) {
            if (warn) {
                enemy.immovable = true;
                enemy.attackListslice.push([enemy.x,enemy.y,enemy.dirToTarget]);
                enemy.speed = 0; enemy.vx = 0; enemy.vy = 0;
                attackWarnings.push(["slice",warn*4,warn*4,enemy.x + Math.cos(enemy.dirToTarget)*400,enemy.y + Math.sin(enemy.dirToTarget)*400,300,enemy.dirToTarget]);
            } else {
                enemy.immovable = false;
                enemiesBuffer.push(new Enemy(enemyBlueprints[9], {x: enemy.attackListslice[0][0] + Math.cos(enemy.attackListslice[0][2])*50, y: enemy.attackListslice[0][1] + Math.sin(enemy.attackListslice[0][2])*50, dirToTarget: enemy.attackListslice[0][2]}));
                enemy.speed = 0.05;
                enemy.attackListslice.splice(0,1);
            }
        }, dash(enemy, warn) {
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
        }, disappear(enemy, warn) {
            if (warn) {
                ease(enemy,"size",0,warn/60);
            } else {
                enemy.x = 0;
                enemy.y = -1000;
                enemy.immovable = true;
                enemy.speed = 0;
                enemy.offscreen = true;
            }
        }, reappear(enemy, warn) {
            if (warn) {
                const pos = [-800+Math.random()*1600,-400+Math.random()*800]
                enemy.attackListreappear.push(pos);
                attackWarnings.push(["circle",warn*4,warn*4,pos[0], pos[1],150]);
            } else {
                ease(enemy,"size",125,0.2);
                enemy.immovable = false;
                enemy.speed = 0.05;
                enemy.offscreen = false;
                enemy.x = enemy.attackListreappear[0][0];
                enemy.y = enemy.attackListreappear[0][1];
                enemy.attackListreappear.splice(0,1);
            }
        }
    },{ // 8 Zweihänder drum
        size: 150, health: 0, projectile: true, rotateToTarget: true, immovable: true, speed: 0, target: "random", drawPath: JSON.parse(
            `[{"type":"point","x":100,"y":-237.5,"move":false},{"type":"point","x":12.5,"y":-150,"move":false},{"type":"point","x":37.5,"y":-75,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-37.5,"y":125,"move":false},{"type":"point","x":-125,"y":237.5,"move":false},{"type":"point","x":212.5,"y":75,"move":true},{"type":"point","x":100,"y":112.5,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":-137.5,"y":0,"move":false},{"type":"point","x":-187.5,"y":-87.5,"move":false},{"type":"point","x":-250,"y":-87.5,"move":false},{"type":"point","x":-125,"y":-200,"move":true},{"type":"point","x":-112.5,"y":-125,"move":false},{"type":"point","x":-37.5,"y":-50,"move":false},{"type":"point","x":37.5,"y":50,"move":false},{"type":"point","x":50,"y":200,"move":false},{"type":"point","x":175,"y":225,"move":false},{"type":"point","x":-225,"y":100,"move":true},{"type":"point","x":-150,"y":137.5,"move":false},{"type":"point","x":-100,"y":37.5,"move":false},{"type":"point","x":75,"y":-37.5,"move":false},{"type":"point","x":162.5,"y":12.5,"move":false},{"type":"point","x":175,"y":-137.5,"move":false},{"type":"point","x":-37.5,"y":125,"move":true},{"type":"point","x":0,"y":187.5,"move":false},{"type":"point","x":-150,"y":137.5,"move":true},{"type":"point","x":-200,"y":200,"move":false},{"type":"point","x":-137.5,"y":0,"move":true},{"type":"point","x":-187.5,"y":37.5,"move":false},{"type":"point","x":-200,"y":-87.5,"move":true},{"type":"point","x":-225,"y":-175,"move":false},{"type":"point","x":-125,"y":-162.5,"move":true},{"type":"point","x":-162.5,"y":-162.5,"move":false},{"type":"point","x":50,"y":-187.5,"move":true},{"type":"point","x":0,"y":-225,"move":false},{"type":"point","x":25,"y":-112.5,"move":true},{"type":"point","x":100,"y":-137.5,"move":false},{"type":"point","x":162.5,"y":-75,"move":true},{"type":"point","x":212.5,"y":-12.5,"move":false},{"type":"point","x":162.5,"y":87.5,"move":true},{"type":"point","x":187.5,"y":175,"move":false},{"type":"point","x":87.5,"y":200,"move":true},{"type":"point","x":25,"y":237.5,"move":false},{"type":"stroke","r":75,"g":175,"b":255},{"type":"point","x":-62.5,"y":225,"move":false},{"type":"point","x":12.5,"y":75,"move":false},{"type":"point","x":-25,"y":-162.5,"move":false},{"type":"point","x":-150,"y":-237.5,"move":false},{"type":"point","x":-175,"y":-162.5,"move":true},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":87.5,"y":0,"move":false},{"type":"point","x":212.5,"y":75,"move":false},{"type":"point","x":212.5,"y":-175,"move":true},{"type":"point","x":75,"y":-100,"move":false},{"type":"point","x":-62.5,"y":87.5,"move":false},{"type":"point","x":-187.5,"y":150,"move":false},{"type":"point","x":-125,"y":187.5,"move":true},{"type":"point","x":0,"y":-12.5,"move":false},{"type":"point","x":112.5,"y":62.5,"move":false},{"type":"point","x":75,"y":225,"move":false},{"type":"point","x":-100,"y":150,"move":true},{"type":"point","x":-100,"y":237.5,"move":false},{"type":"point","x":-237.5,"y":12.5,"move":true},{"type":"point","x":-87.5,"y":50,"move":false},{"type":"point","x":-37.5,"y":-25,"move":false},{"type":"point","x":-150,"y":-112.5,"move":true},{"type":"point","x":-212.5,"y":-100,"move":false},{"type":"point","x":0,"y":-12.5,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":12.5,"y":-237.5,"move":false},{"type":"point","x":-50,"y":-175,"move":true},{"type":"point","x":-25,"y":-250,"move":false},{"type":"point","x":-12.5,"y":-62.5,"move":true},{"type":"point","x":-125,"y":-112.5,"move":false},{"type":"stroke","r":75,"g":255,"b":255}]`
        )
    },{ // 9 Zweihänder slash
        size: 200, health: 5, projectile: true, rotateToTarget: true, immovable: true, speed: 3, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-50},{"type":"point","x":125,"y":50},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":200},{"type":"point","x":0,"y":175},{"type":"point","x":50,"y":100},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":-100},{"type":"point","x":0,"y":-175},{"type":"point","x":50,"y":-200},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":175,"g":225,"b":255},{"type":"stroke","r":80,"g":175,"b":175}]`
        )
    },{ // 10 Zweihänder sword projectile
        size: 75, health: 1, projectile: true, ephemeral: true, rotateToTarget: true, immovable: true, speed: 0, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-50},{"type":"point","x":200,"y":-50},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":50},{"type":"point","x":-75,"y":50},{"type":"fill","r":175,"g":235,"b":230},{"type":"stroke","r":50,"g":80,"b":85},{"type":"point","x":-125,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-125,"y":25},{"type":"fill","r":75,"g":105,"b":105},{"type":"stroke","r":85,"g":175,"b":165},{"type":"point","x":-75,"y":100},{"type":"point","x":-100,"y":100},{"type":"point","x":-125,"y":75},{"type":"point","x":-125,"y":-75},{"type":"point","x":-100,"y":-100},{"type":"point","x":-75,"y":-100},{"type":"close"},{"type":"fill","r":100,"g":145,"b":150},{"type":"stroke","r":50,"g":130,"b":130}]`
        )
    },{ // 11 Zweihänder knife projectile
        size: 45, health: 1, projectile: true, ephemeral: true, rotateToTarget: true, immovable: true, speed: 0, target: "direction", drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":-50},{"type":"point","x":200,"y":-25},{"type":"point","x":250,"y":0},{"type":"point","x":200,"y":25},{"type":"point","x":-25,"y":50},{"type":"fill","r":175,"g":235,"b":235},{"type":"stroke","r":50,"g":80,"b":80},{"type":"point","x":-75,"y":-25},{"type":"point","x":-225,"y":-25},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":25},{"type":"point","x":-75,"y":25},{"type":"fill","r":75,"g":105,"b":105},{"type":"stroke","r":85,"g":175,"b":165},{"type":"point","x":-25,"y":-100},{"type":"point","x":-75,"y":-75},{"type":"point","x":-75,"y":75},{"type":"point","x":-25,"y":100},{"type":"close"},{"type":"fill","r":100,"g":145,"b":150},{"type":"stroke","r":50,"g":130,"b":130}]`
        )
    }
]