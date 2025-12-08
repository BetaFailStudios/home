function tickloop() {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(-1800,-1000,3600,2000);

    drawEnvironment();
    drawEnemyAttacks();
    bulletTick();
    enemyTick();
    handleEffects();
    playerTick();
    itemTick();
    drawDamageNumbers();
    if (game.bossName) drawBossName();
    if (game.musicPopup != 1) drawMusicPopup();
    drawRoommEffects();
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

    if (stats.health <= 0) game.menu = "death";

    if (game.menu == "inventory") drawInventory();
    else if (game.menu) drawMenu();
    else if (keys.tab) drawMap();

    if (!enemies.length && !game.notLocked) {
        ease(game,"notLocked", 1,0.2);

        if (dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].boss) restartMusic(0);

        if (game.relicTick >= 1) {
            if (game.firstWeapon) items.push(new Item(player.x-200,player.y,false,false,"weapon"), new Item(player.x+200,player.y,false,false,"weapon"));
            else items.push(new Item(player.x-200,player.y), new Item(player.x+200,player.y));

            while (items[items.length-1].reference == items[items.length-2].reference) {
                items.splice(items.length-1);
                if (game.firstWeapon) items.push(new Item(player.x+200,player.y,false,false,"weapon"))
                else items.push(new Item(player.x+200,player.y))
            }

            if (game.firstWeapon) game.firstWeapon = false;

            game.relicTick = 0;
            dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems = true;
            dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].itemPos = items.length-2;
        } else game.relicTick++;
    }

    draw(mouse.x,mouse.y,game.cursorPath,30,player.rotationTick);
    game.enemyAttack = [];
    game.enemyAttackWarning = [];

    toEaseVariables = toEaseVariables.filter(changeEaseable);

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.font = "25px share tech";
    ctx.fillText("Version: b.0.7.0",700,470);
}

setInterval( tickloop, 1000/60 );

//enemies.push(new Enemy(enemyBlueprints[4],{x:600}));
//game.musicPos = 1;