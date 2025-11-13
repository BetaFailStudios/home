function tickloop() {
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(-1800,-1000,3600,2000);
    //ctx.fillStyle = "#ccc";
    //ctx.fillRect(-900,-500,1800,1000);
    //background
    ctx.beginPath();
    ctx.fillStyle = "#cccccc";
    if (game.motionBlur) ctx.fillStyle += "88";
    ctx.fillRect(-900, -500, 1800, 1000);
    
    ctx.save();
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
    }

    ctx.restore();

    ctx.lineCap = "round";
    attackWarnings = attackWarnings.filter((item) => {
        const ratio = animationRatio(item[1],item[2]);
        if (item[0] == "line") {
            ctx.moveTo(item[3]+item[5]*ratio,item[4]+item[6]*ratio);
            ctx.lineTo(item[3]-item[5]*ratio,item[4]-item[6]*ratio);
        }

        item[1]--;
        return item[1] > 0;
    });
    ctx.lineWidth = 15  
    ctx.strokeStyle = "#ff000033";
    ctx.stroke();
    ctx.lineWidth = 10
    ctx.strokeStyle = "#ff000033";
    ctx.stroke();

    ctx.lineCap = "butt";
    ctx.lineWidth = 3;

    attackWarnings = attackWarnings.filter((item) => {  
        ctx.beginPath();  
        const ratio = animationRatio(item[1],item[2]);
        if (game[item[0] + "AttackWarnPath"]) {
            draw(item[3],item[4],game[item[0] + "AttackWarnPath"],item[5]*ratio,item[6] || false,false,true);
        }
    
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ff000055";
        ctx.fillStyle = "#ff000055";
        ctx.stroke();
        ctx.fill();

        item[1]--;

        return item[1] > 0;
    });

    ctx.beginPath();
    if (game.openings.includes("left")) if (dungeon[(game.dungeonPosition[0]-1) + "," + (game.dungeonPosition[1])].boss) ctx.rect(-970,-500,100,1000);
    if (game.openings.includes("right")) if (dungeon[(game.dungeonPosition[0]+1) + "," + (game.dungeonPosition[1])].boss) ctx.rect(870,-500,100,1000);
    if (game.openings.includes("up")) if (dungeon[(game.dungeonPosition[0]) + "," + (game.dungeonPosition[1]-1)].boss) ctx.rect(-900,-570,1800,100);
    if (game.openings.includes("down")) if (dungeon[(game.dungeonPosition[0]) + "," + (game.dungeonPosition[1]+1)].boss) ctx.rect(-900,470,1800,100);
    ctx.fillStyle = "#cc000099";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(-1000,-600,2000,1200);
    //ctx.rect(850,-450,-1700,900);
    ctx.moveTo(-850,-450);
    ctx.lineTo(-850,-100);
    ctx.lineTo(-850-60*game.notLocked*game.openings.includes("left"),-100);
    ctx.lineTo(-850-60*game.notLocked*game.openings.includes("left"),100);
    ctx.lineTo(-850,100);
    ctx.lineTo(-850,450);
    ctx.lineTo(-100,450);
    ctx.lineTo(-100,450+60*game.notLocked*game.openings.includes("down"));
    ctx.lineTo(100,450+60*game.notLocked*game.openings.includes("down"));
    ctx.lineTo(100,450);
    ctx.lineTo(850,450);
    ctx.lineTo(850,100);
    ctx.lineTo(850+60*game.notLocked*game.openings.includes("right"),100);
    ctx.lineTo(850+60*game.notLocked*game.openings.includes("right"),-100);
    ctx.lineTo(850,-100);
    ctx.lineTo(850,-450);
    ctx.lineTo(100,-450);
    ctx.lineTo(100,-450-60*game.notLocked*game.openings.includes("up"));
    ctx.lineTo(-100,-450-60*game.notLocked*game.openings.includes("up"));
    ctx.lineTo(-100,-450);
    ctx.closePath();
    blocks.forEach((block) => {
        ctx.rect(...block);
    })
    ctx.lineWidth = 3;
    ctx.fillStyle = "#666";
    ctx.fill();
    ctx.strokeStyle = "#222";
    ctx.stroke();

    bulletTick();
    enemyTick();
    playerTick();
    itemTick();

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
    ctx.fillText("Version: b.0.4.3",700,470);
}

setInterval( tickloop, 1000/60 );

//enemies.push(new Enemy(enemyBlueprints[4],{x:600}));
//game.musicPos = 1;