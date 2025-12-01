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

let floorPaths = [
    JSON.parse(
        `[{"type":"point","x":-250,"y":-25},{"type":"point","x":-250,"y":-87.5},{"type":"point","x":-225,"y":-125},{"type":"point","x":-150,"y":-175},{"type":"point","x":-125,"y":-225},{"type":"point","x":-25,"y":-250},{"type":"point","x":75,"y":-225},{"type":"point","x":100,"y":-150},{"type":"point","x":225,"y":-100},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":225},{"type":"point","x":75,"y":250},{"type":"point","x":-50,"y":225},{"type":"point","x":-200,"y":250},{"type":"point","x":-225,"y":200},{"type":"point","x":-200,"y":50},{"type":"close"},{"type":"fill","r":75,"g":60,"b":0},{"type":"stroke","r":50,"g":35,"b":0}]`
    ), JSON.parse(
        `[{"type":"point","x":-250,"y":12.5,"move":false},{"type":"point","x":-212.5,"y":-125,"move":false},{"type":"point","x":-62.5,"y":-225,"move":false},{"type":"point","x":112.5,"y":-250,"move":false},{"type":"point","x":237.5,"y":-112.5,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":237.5,"y":187.5,"move":false},{"type":"point","x":212.5,"y":237.5,"move":false},{"type":"point","x":62.5,"y":250,"move":false},{"type":"point","x":-50,"y":187.5,"move":false},{"type":"point","x":-200,"y":150,"move":false},{"type":"close"},{"type":"fill","r":55,"g":80,"b":150},{"type":"stroke","r":45,"g":50,"b":90}]`
    )
];

let floor = [];

for (var i = 0; i < 6; i++) 
    floor.push({x:-1300+Math.random()*2600,y:-800+Math.random()*1600,size:200+Math.random()*100,rotation:Math.random()*Math.PI,reference:floorPaths[Math.floor(Math.random()*floorPaths.length)]});

let brickId = [];//[[2,1,15],[1,-2,5]]

for (var i = 0; i < 30; i++) brickId.push([Math.round(3-6*Math.random()),Math.round(3-6*Math.random()),Math.floor(20-40*Math.random())])
brickId = brickId.filter((item) => !item.includes(0) && !item.includes(-0))

function drawEnvironment() {
    ctx.beginPath();
    ctx.fillStyle = "#777";
    //if (game.motionBlur) ctx.fillStyle += "88";
    ctx.fillRect(-900, -500, 1800, 1000);

    ctx.beginPath();
    ctx.strokeStyle = "#222";
    for (var i = -500; i <= 500; i += 60) {
        ctx.moveTo(-900,i);
        ctx.lineTo(900,i);
        for (var i2 = -900+60*((i+500)%120 == 0); i2 <= 900-60; i2 += 130) {
            const t = (i+500)/60;
            const t2 = (i2+900)/130;
            let contin = true;
            brickId.forEach((item) => { if (item[0]*t + item[1]*t2 == item[2]) contin = false })
            if (contin) {
                ctx.moveTo(i2,i);
                ctx.lineTo(i2,i+60);
            }
        }
    }
    //ctx.fill();
    ctx.stroke();

    floor.forEach((item) => { draw(item.x,item.y,item.reference,item.size,item.rotation,0.25) })

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
    ctx.fillStyle = "#444";
    ctx.fill();
    ctx.strokeStyle = "#222";
    ctx.stroke();

    blocks.forEach((block) => {
        drawBlock(block);
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