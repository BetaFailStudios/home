function tickloop() {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(-1800,-1000,3600,2000);
    //ctx.fillStyle = "#ccc";
    //ctx.fillRect(-900,-500,1800,1000);
    //background
    
    /*ctx.save();
    ctx.beginPath();
    var gridSize = 100;
    ctx.rotate(player.rotationTick/4);
    ctx.fillStyle = "#bbbbbb88";
    const rotation = player.rotationTick/Math.PI*2;
    for(var a = -900-gridSize/2; a < 900; a += gridSize) {
        for(var b = -900-gridSize/2; b < 900; b += gridSize) {
            ctx.beginPath();
            ctx.moveTo(-(-2+rotation%(Math.PI*2))*10 + a, -20 + b);
            ctx.lineTo(20 + a, -(-2+rotation%(Math.PI*2))*10 + b);
            ctx.lineTo((-2+rotation%(Math.PI*2))*10 + a, 20 + b);
            ctx.lineTo(-20 + a, (-2+rotation%(Math.PI*2))*10 + b);
            ctx.closePath();
            ctx.fill();
        }
    }*/
    drawEnvironment();
    drawEnemyAttacks();
    bulletTick();
    enemyTick();
    handleEffects();
    playerTick();
    itemTick();
    drawDamageNumbers();
    if (game.bossName) drawBossName();
    drawRoommEffects();

    if (game.bossHealth) {
        ctx.lineWidth = 7;
        ctx.beginPath();
        const maxBounds = 1600;
        ctx.moveTo(-900, -500+5);
        ctx.lineTo(maxBounds+55-900, -500+5);
        ctx.lineTo(maxBounds+20-900, -500+40);
        ctx.lineTo(-900, -500+40);
        ctx.closePath();
        ctx.fillStyle = "#333"
        ctx.strokeStyle = "#222";
        ctx.fill();
        ctx.stroke();

        const healthBounds = 1600*game.bossHealth/game.bossHealthMax;
        ctx.beginPath();
        ctx.moveTo(-900, -500+5);
        ctx.lineTo(healthBounds+55-900, -500+5);
        ctx.lineTo(healthBounds+20-900, -500+40);
        ctx.lineTo(-900, -500+40);
        ctx.closePath();
        ctx.fillStyle = "#900";
        ctx.fill();
        ctx.stroke();
    }

    ctx.lineWidth = 7;
    ctx.beginPath();
    const maxBounds = 500;
    ctx.moveTo(-900, 500-5);
    ctx.lineTo(maxBounds+40-900, 500-5);
    ctx.lineTo(maxBounds+20-900, 500-25);
    ctx.lineTo(-900, 500-25);
    ctx.closePath();
    ctx.fillStyle = "#333"
    ctx.strokeStyle = "#222";
    ctx.fill();
    ctx.stroke();
        
    if (stats.health > 0) {
        const healthBounds = 500*stats.health/stats.healthMax;
        ctx.beginPath();
        ctx.moveTo(-900, 500-5);
        ctx.lineTo(healthBounds+40-900, 500-5);
        ctx.lineTo(healthBounds+20-900, 500-25);
        ctx.lineTo(-900, 500-25);
        ctx.closePath();
        ctx.fillStyle = "#900";
        ctx.fill();
        ctx.stroke();
    }

    ctx.lineWidth = 7;
    ctx.beginPath();
    const maxExtraBounds = 250;
    ctx.moveTo(maxBounds+40-900, 500-5);
    ctx.lineTo(maxBounds+maxExtraBounds+40-900, 500-5);
    ctx.lineTo(maxBounds+maxExtraBounds+20-900, 500-25);
    ctx.lineTo(maxBounds+20-900, 500-25);
    ctx.closePath();
    ctx.fillStyle = "#333"
    ctx.strokeStyle = "#222";
    ctx.fill();
    ctx.stroke();
        
    if (stats.extraHealth > 0 ) {
        const extraBounds = 250*(stats.extraHealth/stats.extraHealthMax);
        ctx.beginPath();
        ctx.moveTo(maxBounds+40-900, 500-5);
        ctx.lineTo(maxBounds+extraBounds+40-900, 500-5);
        ctx.lineTo(maxBounds+extraBounds+20-900, 500-25);
        ctx.lineTo(maxBounds+20-900, 500-25);
        ctx.closePath();
        ctx.fillStyle = "#29c";
        ctx.fill();
        ctx.stroke();
    }

    ctx.beginPath();
    for(var i = 1; i < stats.healthMax; i++) {
        ctx.moveTo(maxBounds*i/stats.healthMax+40-900, 500-5);
        ctx.lineTo(maxBounds*i/stats.healthMax+20-900, 500-25);
    }
    for(var i = 1; i < stats.extraHealthMax; i++) {
        ctx.moveTo(maxBounds+maxExtraBounds*i/stats.extraHealthMax+40-900, 500-5);
        ctx.lineTo(maxBounds+maxExtraBounds*i/stats.extraHealthMax+20-900, 500-25);
    }
    ctx.strokeStyle = "#22222244";
    ctx.stroke();

    ctx.lineWidth = 7;
    ctx.beginPath();
    const maxBoundsDash = 400;
    ctx.moveTo(-900+20, 500-25);
    ctx.lineTo(maxBoundsDash+35-900, 500-25);
    ctx.lineTo(maxBoundsDash+20-900, 500-40);
    ctx.lineTo(-900+20, 500-40);
    ctx.closePath();
    ctx.fillStyle = "#333"
    ctx.strokeStyle = "#222";
    ctx.fill();
    ctx.stroke();
        
    if (player.dashCooldown <= 1 ) {
        const dashBounds = 400*Math.min(1,1-player.dashCooldown);
        ctx.beginPath();
        ctx.moveTo(-900+20, 500-25);
        ctx.lineTo(dashBounds+35-900, 500-25);
        ctx.lineTo(dashBounds+20-900, 500-40);
        ctx.lineTo(-900+20, 500-40);
        ctx.closePath();
        ctx.fillStyle = "#ccc";
        ctx.fill();
        ctx.stroke();
    }

    if (game.showHit > 0) {
        game.showHit -= 1/75;
        if (game.showHit > 1) game.showHit = 1;
        else if (game.showHit < 0) game.showHit = 0;

        const grid = 300;
        const offset = 200*(1-game.showHit);

        ctx.lineWidth = 6;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.rect(1800,-1000,-3600,2000);
        ctx.moveTo(-offset-800 + Math.random()*50,-offset-400 + Math.random()*50);
        for (var i = -800+grid; i < 800; i += grid) ctx.lineTo(i,-offset-400 + Math.random()*50);
        ctx.lineTo(offset+800 - Math.random()*50,-offset-400 + Math.random()*50);
        for (var i = -400+grid; i < 400; i += grid) ctx.lineTo(offset+800 - Math.random()*50,i);
        ctx.lineTo(offset+800 - Math.random()*50,offset+400 - Math.random()*50);
        for (var i = 800-grid; i > -800; i -= grid) ctx.lineTo(i,offset+400 - Math.random()*50);
        ctx.lineTo(-offset-800 + Math.random()*50,offset+400 - Math.random()*50);
        for (var i = 400-grid; i > -400; i -= grid) ctx.lineTo(-offset-800 + Math.random()*50,i);
        ctx.closePath();
        
        ctx.strokeStyle = "#522";
        ctx.fillStyle = "#922";
        ctx.stroke();
        ctx.fill();

        ctx.globalAlpha = 1;
    }
    
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.fillStyle = "#444"
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

    if (game.menu == "death") {
        ctx.beginPath();
        ctx.fillStyle = "#000000cc";
        ctx.fillRect(-900,-500,1800,1000);

        ctx.beginPath();
        ctx.strokeStyle = "#777";
        ctx.fillStyle = "#ccc";
        ctx.font = "100px share tech"
        ctx.strokeText("Game over, ctrl + r to restart", 0, 0);
        ctx.fillText("Game over, ctrl + r to restart", 0, 0);
    } else if (game.menu == "inventory") drawInventory();
    else if (game.menu) drawMenu();
    else if (keys.tab) drawMap();

    if (!enemies.length && !game.notLocked) {
        ease(game,"notLocked", 1,0.2);

        if (dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].boss) restartMusic(0);

        if (game.relicTick >= 1) {
            if (game.firstWeapon) {
                items.push(new Item(player.x-200,player.y,false,false,"weapon"), new Item(player.x+200,player.y,false,false,"weapon"));
                game.firstWeapon = false;
            } else items.push(new Item(player.x-200,player.y), new Item(player.x+200,player.y));

            game.relicTick = 0;
            dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems = true;
            dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].itemPos = items.length-2;
        } else game.relicTick++;
    }

    draw(mouse.x,mouse.y,game.cursorPath,30,player.rotationTick);
    game.enemyAttack = "";
    game.enemyAttackWarning = "";

    toEaseVariables = toEaseVariables.filter(changeEaseable);

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.font = "25px share tech";
    ctx.fillText("Version: b.0.6.7",700,470);
}

setInterval( tickloop, 1000/60 );

//enemies.push(new Enemy(enemyBlueprints[4],{x:600}));
//game.musicPos = 1;