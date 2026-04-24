function drawEnemyAttacks() {
    ctx.beginPath();
    ctx.lineCap = "round";
    attackWarnings = attackWarnings.filter((item) => {
        if (item[0] == "line") {
            const ratio = animationRatio(item[1],item[2],6);
            ctx.moveTo(item[3]+item[5]*ratio,item[4]+item[6]*ratio);
            ctx.lineTo(item[3]-item[5]*ratio,item[4]-item[6]*ratio);
        }

        if (!game.menu) item[1]--;
        return item[1] > 0;
    });
    ctx.lineWidth = 10;  
    ctx.strokeStyle = "#00000044";
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#ff000077";
    ctx.stroke();

    ctx.lineCap = "butt";
    ctx.lineWidth = 5;

    attackWarnings = attackWarnings.filter((item) => {  
        ctx.beginPath();  
        const ratio = animationRatio(item[1],item[2],6);
        if (item[0] == "circle") {
            drawRaw(item[3],item[4],game[item[0] + "AttackWarnPath"],item[5]*ratio,item[6]);
        } else if (game[item[0] + "AttackWarnPath"]) {
            ctx.beginPath();
            drawRaw(item[3],item[4],game[item[0] + "AttackWarnPath"],item[8]*ratio,item[7]);
            drawRaw(item[5],item[6],game[item[0] + "AttackWarnPath"],item[8]*ratio,item[7],false,true,true,true);
            ctx.closePath();
        }
    
        ctx.lineWidth = 7;  
        ctx.strokeStyle = "#00000044";
        ctx.stroke();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ff000077";
        ctx.fillStyle = "#ff000077";
        ctx.stroke();
        ctx.fill();

        if (!game.menu) item[1]--;

        return item[1] > 0;
    });

    ctx.lineWidth = 3;
}

function createLineWarning(x1,y1,x2,y2,type,dir,size) {
    let dist = {x: 850*Math.sign(x2-x1)-x2, y: 450*Math.sign(y2-y1)-y2};
    //let ratio = 1;
    if ((dist.x/(x2-x1) < dist.y/(y2-y1) || y2==y1) && x1 != x2) {
        y2 += dist.x*(y2-y1)/(x2-x1);
        x2 += dist.x;
    } else if (y2 != y1) {
        x2 += dist.y*(x2-x1)/(y2-y1);
        y2 += dist.y;
    }

    if (type === true) {
        dist = {x: 850*Math.sign(x1-x2)-x1, y: 450*Math.sign(y1-y2)-y1};
        if ((dist.x/(x1-x2) < dist.y/(y1-y2) || y2==y1) && x1 != x2) {
            y1 += dist.x*(y1-y2)/(x1-x2);
            x1 += dist.x;
        } else {
            x1 += dist.y*(x1-x2)/(y1-y2);
            y1 += dist.y;
        }
    }
    //x2
    dist.x = (x2-x1)/2;
    dist.y = (y2-y1)/2;
    if (type && type !== true) attackWarnings.push([type,game.warnDelay,game.warnDelay,x1,y1,x2,y2,dir,size]);
    else attackWarnings.push(["line",game.warnDelay,game.warnDelay,x1+dist.x,y1+dist.y,dist.x,dist.y]);
}

let floor = [];

let brickId = [];//[[2,1,15],[1,-2,5]]

function drawEnvironment() {
    game.region.drawFloor();
    //game.region.generateBrickId();

    floor.forEach((item) => { drawRaw(item.x,item.y,item.reference,item.size,item.rotation,0.25) })

    if (dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].regionTransfer && game.notLocked) {
        drawRaw(0,0,game.nextRegion.entrancePath,75 * game.notLocked );
        if (!game.regionTransfer && game.notLocked == 1 && Math.abs(player.x) < 150 && Math.abs(player.y) < 150) {
            ctx.beginPath();
            ctx.fillStyle = "#ccc";
            ctx.strokeStyle = "#222";
            ctx.font = "40px share tech";
            ctx.lineWidth = 15;
            ctx.strokeText("Press E to enter", 0,-100);
            ctx.fillText("Press E to enter", 0,-100);
            ctx.lineWidth = 3;
        }
    }

    ctx.beginPath();
    if (game.openings.includes("left")) if (dungeon[(game.dungeonPosition[0]-1) + "," + (game.dungeonPosition[1])].boss) ctx.rect(-970,-500,100,1000);
    if (game.openings.includes("right")) if (dungeon[(game.dungeonPosition[0]+1) + "," + (game.dungeonPosition[1])].boss) ctx.rect(870,-500,100,1000);
    if (game.openings.includes("up")) if (dungeon[(game.dungeonPosition[0]) + "," + (game.dungeonPosition[1]-1)].boss) ctx.rect(-900,-570,1800,100);
    if (game.openings.includes("down")) if (dungeon[(game.dungeonPosition[0]) + "," + (game.dungeonPosition[1]+1)].boss) ctx.rect(-900,470,1800,100);
    ctx.fillStyle = "#cc000099";
    ctx.fill();

    if (game.region.drawWalls) game.region.drawWalls();
    else {
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
        ctx.lineWidth = 3;
        ctx.fillStyle = game.region.wallColor;
        ctx.fill();
        ctx.strokeStyle = "#222";
        ctx.stroke();
    }

    if (game.regionNum == -1) {
        ctx.strokeStyle = "#00000077";
        draw(-280,0,game.keyboardTutorial,100,false,false);
        ctx.stroke();
        draw(280,0,game.mouseTutorial,100,false,false);
        ctx.stroke();

        ctx.beginPath();
    }
}

function drawBlocks() {
    blocks.forEach((block) => {
        game.region.drawBlock(block);
        //ctx.rect(...block);
    })
}

let dmgNumbers = [];

function drawDamageNumbers() {
    
    ctx.beginPath();
    ctx.fillStyle = "#ccc";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 7;
    dmgNumbers = dmgNumbers.filter((item) => {
        /*if (item.fontSize > 200 && item.canFreeze) {
            item.canFreeze = false;
            game.freezeframes = item.fontSize/35;
            game.region.music[game.musicPos].file.pause();
        }*/
        if (game.showDamageNumbers == "Off") return false;
        ctx.globalAlpha = 0.5;
        ctx.font = animationRatio(item.timeLeft,item.timeLeftMax,10)*item.fontSize+"px share tech";
        if (item.count) {
            const text = item.damage + "x" + String(item.count);
            ctx.strokeText(text,item.x,item.y);
            ctx.fillText(text,item.x,item.y);
        } else {
            ctx.strokeText(item.damage,item.x,item.y);
            ctx.fillText(item.damage,item.x,item.y);
        }
        ctx.globalAlpha = 1;

        item.timeLeft++;
        return item.timeLeft < item.timeLeftMax;
    });
    ctx.lineWidth = 3;
}

class DamageNumber {
    constructor(x,y,damage,canFreeze) {
        this.x = x + Math.random()*50-25;
        this.y = y + Math.random()*50-25;

        const oldDamage = damage;
        if (game.showDamageNumbers == "Aggregate") {
            dmgNumbers.forEach(item => {
                if (item.timeLeft < 30) if (Math.abs(this.x-item.x) < 150 && Math.abs(this.y-item.y) < 150) {
                    damage += Number(item.damage);
                    item.timeLeft = 30;
                }
            })
        }
        else if (game.showDamageNumbers == "Combine") {
            this.count = 0;
            dmgNumbers.forEach(item => {
                if (item.timeLeft < 30) if (
                    (Math.abs(Number(item.damage)/damage-1) < 0.15 || Math.abs(damage/Number(item.damage)-1) < 0.15) && 
                    Math.abs(this.x-item.x) < 150 && Math.abs(this.y-item.y) < 150
                ) {
                    if (item.count) this.count += item.count;
                    else this.count++;
                    item.timeLeft = 30;
                }
            })
            if (this.count) this.count++;
        }

        let decimalPoint = 0;
        while (damage < 10**(1-decimalPoint)) decimalPoint++;
        this.damage = damage.toFixed(decimalPoint);
        this.damageShow = this.damage;

        this.fontSize = 70*Math.min(8,Math.max(0.3,Number(oldDamage + damage/10)/(1+0.1*game.discoveredRooms+game.regionNum*2)));
        this.timeLeft = 0;
        this.timeLeftMax = 30;
        this.canFreeze = canFreeze;

        this.x = Math.max(-800+this.fontSize,Math.min(800-this.fontSize,this.x));
        this.y = Math.max(-400,Math.min(400,this.y));
    }
}

function random(extraLuck,highBetter) {
    let random = Math.random();
    let luck = stats.luck;
    if (extraLuck) luck += extraLuck;
    for (var i = 0; i > luck; i--) {
        const random2 = Math.random();
        if ((random2-random)*(1-2*!!highBetter) > 0) random = random2;
    }
    for (var i = 0; i < luck; i++) {
        const random2 = Math.random();
        if ((random2-random)*(1-2*!!highBetter) < 0) random = random2;
    }
    return random;
}