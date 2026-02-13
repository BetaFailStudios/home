function drawEnemyAttacks() {
    ctx.beginPath();
    ctx.lineCap = "round";
    attackWarnings = attackWarnings.filter((item) => {
        const ratio = animationRatio(item[1],item[2],6);
        if (item[0] == "line") {
            ctx.moveTo(item[3]+item[5]*ratio,item[4]+item[6]*ratio);
            ctx.lineTo(item[3]-item[5]*ratio,item[4]-item[6]*ratio);
        }

        item[1]--;
        return item[1] > 0;
    });
    ctx.lineWidth = 10;  
    ctx.strokeStyle = "#ff000033";
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#ff000033";
    ctx.stroke();

    ctx.lineCap = "butt";
    ctx.lineWidth = 5;

    attackWarnings = attackWarnings.filter((item) => {  
        ctx.beginPath();  
        const ratio = animationRatio(item[1],item[2],6);
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

    ctx.lineWidth = 3;
}

let floor = [];

for (var i = 0; i < 6; i++) 
    floor.push({x:-1300+Math.random()*2600,y:-800+Math.random()*1600,size:200+Math.random()*100,rotation:Math.random()*Math.PI,reference:game.region.floorPaths[Math.floor(Math.random()*game.region.floorPaths.length)]});

let brickId = [];//[[2,1,15],[1,-2,5]]

game.region.generateBrickId();

function drawEnvironment() {
    game.region.drawFloor()

    floor.forEach((item) => { draw(item.x,item.y,item.reference,item.size,item.rotation,0.25) })

    if (dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].regionTransfer && game.notLocked) {
        draw(0,0,game.nextRegion.entrancePath,75 * game.notLocked );
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

    blocks.forEach((block) => {
        game.region.drawBlock(block);
        //ctx.rect(...block);
    })
}

let dmgNumbers = [];

function drawDamageNumbers() {
    ctx.beginPath();
    ctx.fillStyle = "#999";
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 7;
    dmgNumbers = dmgNumbers.filter((item) => {
        ctx.font = animationRatio(item.timeLeft,item.timeLeftMax,10)*item.fontSize+"px share tech";
        ctx.strokeText(item.damage,item.x,item.y);
        ctx.fillText(item.damage,item.x,item.y);

        item.timeLeft++;
        return item.timeLeft < item.timeLeftMax;
    });
    ctx.lineWidth = 3;
}

class DamageNumber {
    constructor(x,y,damage) {
        this.x = x + Math.random()*50-25;
        this.y = y + Math.random()*50-25;
        
        let decimalPoint = 0;
        while (damage < 10**(1-decimalPoint)) decimalPoint++;
        this.damage = damage.toFixed(decimalPoint);

        this.fontSize = 70*Math.min(10,Math.max(0.3,Number(damage)/(1+0.05*game.discoveredRooms)))
        this.timeLeft = 0;
        this.timeLeftMax = 30;
    }
}