function tickloop() {
    if (game.freezeframes > 0) {
        game.freezeframes--;
        if (game.freezeframes <= 0) {
            game.region.music[game.musicPos].file.play();
        }
        return;
    }

    //initialize async function
    bulletTick();
    enemyTick();
    playerTick();
    musicTick();

    game.tick++;
    if (game.tick > 1000000000) game.tick = 0;

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(-1800,-1000,3600,2000);
    drawEnvironment();
    game.toDraw.forEach(item => {
        drawGroup(...item)
    })
    game.toDraw = [];
    bulletDraw();
    drawBlocks();
    drawEnemyAttacks();
    enemyDraw();
    game.toDrawEnemies.forEach(item => {
        drawGroup(...item,true)
    })
    game.toDrawEnemies = [];
    playerDraw();
    handleEffects();
    itemTick();
    drawDamageNumbers();
    if (game.bossName) drawBossName();
    if (game.musicPopup != 1) drawMusicPopup();
    if (game.regionTransfer && game.regionTransfer < 1 && !game.teleportPosition) drawRegionName();
    drawRoommEffects();
    if (game.notLocked && game.regionNum >= 0) drawMap();
    drawHealthBars();
    
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(70-900, 500);
    ctx.lineTo(-900, 500-70);
    ctx.lineTo(-900, -500+70);
    ctx.lineTo(70-900, -500);
    ctx.lineTo(-70+900, -500);
    ctx.lineTo(900, -500+70);
    ctx.lineTo(900, 500-70);
    ctx.lineTo(-70+900, 500);
    ctx.closePath();

    ctx.rect(1800,-1000,-3600,2000);
    //ctx.rect(-900,-500,1800,1000);
    ctx.strokeStyle = "#222";
    ctx.fillStyle = "#000";
    ctx.stroke();
    ctx.fill();
    ctx.lineWidth = 3;

    if (game.regionTransfer > 1) {
        ctx.beginPath();
        ctx.globalAlpha = 2-game.regionTransfer;
        ctx.rect(1800,-1000,-3600,2000);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    if (stats.health <= 0) game.menu = "death";

    if (keys.tab && !game.noEnemies) {
        ctx.strokeStyle = "#222";
        ctx.fillStyle = "#00000077";
        ctx.rect(-400,-50,800,100);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#cccccc99";
        ctx.font = "50px share tech"
        ctx.fillText("Inventory not available during battle",0,0);
    }

    if (game.menu == "inventory") drawInventory();
    else if (game.menu) drawMenu();

    if (game.noEnemies && !game.notLocked) {
        ease(game,"notLocked", 1,0.2);
        if (stats.extraHealth < stats.extraHealthMax) ease(stats,"extraHealth",stats.extraHealthMax,(stats.extraHealthMax-stats.extraHealth)/stats.extraHealthMax*2);

        if (dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].boss && game.regionNum >= 0) {
            if (game.musicStarted) restartMusic(0);
            if (stats.health < stats.healthMax) ease(stats,"health",stats.healthMax,(stats.healthMax-stats.health)/stats.healthMax*2);

            items.push(
                new Item(player.x-200,player.y,false,false,"artifact"), 
                new Item(player.x+200,player.y,false,false,"artifact"), 
                new Item(player.x,player.y-200,false,false,"artifact"),
                new Item(player.x,player.y+200,false,false,"artifact")
            );

            while (items[items.length-3].reference == items[items.length-4].reference) {
                items.splice(items.length-3,1);
                items.push(new Item(player.x+200,player.y,false,false,"artifact"))
            }

            while (items[items.length-2].reference == items[items.length-3].reference || items[items.length-2].reference == items[items.length-4].reference) {
                items.splice(items.length-2,1);
                items.push(new Item(player.x,player.y-200,false,false,"artifact"))
            }

            while (items[items.length-1].reference == items[items.length-3].reference || items[items.length-1].reference == items[items.length-3].reference || items[items.length-1].reference == items[items.length-4].reference) {
                items.splice(items.length-1,1);
                items.push(new Item(player.x,player.y+200,false,false,"artifact"))
            }

            game.relicTick = 0;
            dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems = true;
            dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].itemPos = items.length-4;
        } else if (game.relicTick >= 1) {
            if (game.firstWeapon) {
                
                items.push(
                    new Item(player.x-200,player.y+75,false,false,"weapon"), 
                    new Item(player.x+200,player.y+75,false,false,"weapon"), 
                    new Item(player.x,player.y-75,false,false,"weapon")
                );

                while (items[items.length-2].reference == items[items.length-3].reference || items[items.length-1].reference.name == "Basic Gun") {
                    items.splice(items.length-2,1);
                    items.push(new Item(player.x+200,player.y+75,false,false,"weapon"))
                }

                while (items[items.length-1].reference == items[items.length-2].reference || items[items.length-1].reference == items[items.length-3].reference || items[items.length-1].reference.name == "Basic Gun") {
                    items.splice(items.length-1);
                    items.push(new Item(player.x,player.y-75,false,false,"weapon"))
                }

                dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].itemPos = items.length-3;
            }
            else {
                items.push(
                    new Item(player.x-200,player.y,false,false,"relic"), 
                    new Item(player.x+200,player.y,false,false,"relic")
                );

                while (items[items.length-1].reference == items[items.length-2].reference || items[items.length-1].reference.name == "Basic Gun") {
                    items.splice(items.length-1);
                    if (game.firstWeapon) items.push(new Item(player.x+200,player.y,false,false,"weapon"))
                    else items.push(new Item(player.x+200,player.y,false,false,"relic"))
                }
                dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].itemPos = items.length-2;
            }

            if (Math.random() < 0.1) items.push( new Item(player.x,player.y+125,consumables[2],0))

            game.relicTick = 0;
            dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems = true;

            if (!game.firstWeapon && Math.random() < 0.07) items.push(new Item(player.x,player.y-200,false,false,"weapon"));
        } else game.relicTick++;
    }

    if (stats.firerate > 10 && !player.burstsLeft && player.firerateTick > 0) {
        ctx.strokeStyle = "#cccccc50";
        ctx.beginPath();
        ctx.arc(mouse.x,mouse.y,50,-Math.PI/2,-Math.PI/2-Math.PI*2*player.firerateTick/stats.firerate);
        ctx.lineCap = "round";
        ctx.lineWidth = 7;
        ctx.stroke();
        ctx.lineWidth = 3;
        ctx.lineCap = "butt";
    }
    draw(mouse.x,mouse.y,game.cursorPath,30,player.rotationTick);

    toEaseVariables = toEaseVariables.filter(changeEaseable);

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.font = "25px share tech";
    ctx.fillText("Version: b.1.7.7",700,470);
}

addEventListener("DOMContentLoaded", (event) => { setTimeout(() => {loaded = true;},500 )});