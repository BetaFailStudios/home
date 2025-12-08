let dungeon = { "0,0": { blocks: [], items: [], connections: [], visited: true } };

const dungeonPresets = [
    `[[-425,-125,50,250],[375,-125,50,250]]`,
    `[[-650,-250,100,100],[150,-250,100,100],[550,150,100,100],[-250,150,100,100]]`,
    `[[-425,-25,850,50]]`,
    `[[-400,-225,400,75],[0,150,400,75]]`,
    `[[0,-75,75,75],[-75,0,75,75],[-400,-75,75,75],[-475,0,75,75],[325,0,75,75],[400,-75,75,75]]`,
    `[[-150,-250,300,75],[-550,175,300,75],[250,175,300,75]]`,
    `[[-100,-100,200,200],[400,-200,200,200],[-600,0,200,200]]`,
    `[[-475,0,75,450],[400,-450,75,450],[-50,-50,100,100]]`,
    `[[-525,-125,250,250],[275,-125,250,250]]`,
]

const roomEffectList = {
    "Haunted Armory": [
        JSON.parse(
            `[{"type":"point","x":-225,"y":100},{"type":"point","x":-250,"y":75},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-25},{"type":"point","x":-150,"y":-25},{"type":"point","x":-175,"y":-25},{"type":"point","x":-200,"y":-50},{"type":"point","x":-200,"y":-75},{"type":"point","x":-175,"y":-100},{"type":"point","x":0,"y":-100},{"type":"point","x":-25,"y":-100},{"type":"point","x":-50,"y":-125},{"type":"point","x":-50,"y":-150},{"type":"point","x":-25,"y":-175},{"type":"point","x":125,"y":-175},{"type":"point","x":150,"y":-150},{"type":"point","x":150,"y":-125},{"type":"point","x":125,"y":-100},{"type":"point","x":100,"y":-100},{"type":"point","x":200,"y":-100},{"type":"point","x":225,"y":-75},{"type":"point","x":225,"y":-50},{"type":"point","x":200,"y":-25},{"type":"point","x":100,"y":-25},{"type":"point","x":125,"y":-25},{"type":"point","x":150,"y":0},{"type":"point","x":150,"y":25},{"type":"point","x":125,"y":50},{"type":"point","x":0,"y":50},{"type":"point","x":25,"y":50},{"type":"point","x":50,"y":75},{"type":"point","x":50,"y":150},{"type":"point","x":25,"y":175},{"type":"point","x":-150,"y":175},{"type":"point","x":-175,"y":150},{"type":"point","x":-175,"y":125},{"type":"point","x":-150,"y":100},{"type":"point","x":-125,"y":100},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),JSON.parse(
            `[{"type":"point","x":-100,"y":250},{"type":"point","x":-125,"y":225},{"type":"point","x":-125,"y":200},{"type":"point","x":-150,"y":175},{"type":"point","x":-225,"y":175},{"type":"point","x":-250,"y":150},{"type":"point","x":-250,"y":100},{"type":"point","x":-225,"y":75},{"type":"point","x":-150,"y":75},{"type":"point","x":-175,"y":75},{"type":"point","x":-200,"y":50},{"type":"point","x":-200,"y":-50},{"type":"point","x":-175,"y":-75},{"type":"point","x":-75,"y":-75},{"type":"point","x":-50,"y":-100},{"type":"point","x":-50,"y":-175},{"type":"point","x":-25,"y":-200},{"type":"point","x":175,"y":-200},{"type":"point","x":200,"y":-175},{"type":"point","x":200,"y":-125},{"type":"point","x":175,"y":-100},{"type":"point","x":125,"y":-100},{"type":"point","x":100,"y":-75},{"type":"point","x":100,"y":0},{"type":"point","x":75,"y":25},{"type":"point","x":50,"y":25},{"type":"point","x":200,"y":25},{"type":"point","x":225,"y":50},{"type":"point","x":225,"y":150},{"type":"point","x":200,"y":175},{"type":"point","x":25,"y":175},{"type":"point","x":50,"y":175},{"type":"point","x":75,"y":200},{"type":"point","x":75,"y":225},{"type":"point","x":50,"y":250},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),JSON.parse(
            `[{"type":"point","x":-225,"y":-250},{"type":"point","x":-250,"y":-225},{"type":"point","x":-250,"y":-100},{"type":"point","x":-225,"y":-75},{"type":"point","x":-150,"y":-75},{"type":"point","x":-125,"y":-50},{"type":"point","x":-125,"y":100},{"type":"point","x":-100,"y":125},{"type":"point","x":-75,"y":125},{"type":"point","x":-175,"y":125},{"type":"point","x":-200,"y":150},{"type":"point","x":-200,"y":200},{"type":"point","x":-175,"y":225},{"type":"point","x":200,"y":225},{"type":"point","x":225,"y":200},{"type":"point","x":225,"y":100},{"type":"point","x":200,"y":75},{"type":"point","x":125,"y":75},{"type":"point","x":100,"y":50},{"type":"point","x":100,"y":-25},{"type":"point","x":75,"y":-50},{"type":"point","x":50,"y":-50},{"type":"point","x":175,"y":-50},{"type":"point","x":200,"y":-75},{"type":"point","x":200,"y":-175},{"type":"point","x":175,"y":-200},{"type":"point","x":25,"y":-200},{"type":"point","x":0,"y":-225},{"type":"point","x":-25,"y":-250},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        )
    ]
}

const roomEffects = [
];

function drawRoommEffects() {
    roomEffects.forEach((item) => {
        draw(item.x,item.y,item.reference,item.size,0,0.15);
        item.x += 0.2*item.moveSpeed;
        if (item.x > 900 + item.size) item.x -= 1800+item.size*2;
        else if (item.x < -900 - item.size) item.x += 1800+item.size*2;
        item.y += 0.05*item.moveSpeed;
        if (item.y > 500 + item.size) item.y -= 1000+item.size*2;
        else if (item.y < -500 - item.size) item.y += 1000+item.size*2;
    })
}

function generateDungeon() {
    const pos = [0,0];
    let connected = false;
    let length = 0;
    while (!connected) {//} || Object.keys(dungeon).length < 10) {
        length++;
        const change = [Math.floor(Math.random()*2), 1-2*(Math.random() < 0.5)];
        pos[change[0]] += change[1];
        while (dungeon[pos[0] + "," + pos[1]]) pos[change[0]] += change[1];
        pos[change[0]] -= change[1];
        dungeon[pos[0] + "," + pos[1]].connections.push(Object.assign({},change));
        pos[change[0]] += change[1];
        change[1] *= -1;
        dungeon[pos[0] + "," + pos[1]] = { blocks: JSON.parse(dungeonPresets[Math.floor(Math.random()*dungeonPresets.length)]), items: [], connections: [change] };
        if (length > 10 && Math.random() < 0.5/*Math.abs(pos[0]) + Math.abs(pos[1]) == 6*/) {
            dungeon[pos[0] + "," + pos[1]].boss = true;
            connected = true;
            dungeon[pos[0] + "," + pos[1]].blocks = [];
        } else if (Math.random() < 1) dungeon[pos[0] + "," + pos[1]].blocks.forEach( (item) => item[0] = (item[0]+item[2]/2)*-1 - item[2]/2 );
    }
}

function drawMap() {
    ctx.fillStyle = "#55555599";
    ctx.fillRect(-900,-500,1800,1000);
    ctx.lineWidth = 10;
    Object.keys(dungeon).forEach((item) => {
        if (!dungeon[item].visited) return;

        const pos = [Number(item.split(",")[0])*150-150*game.dungeonPosition[0],Number(item.split(",")[1])*100-100*game.dungeonPosition[1]];
        ctx.beginPath();
        dungeon[item].connections.forEach((connection) => {
            if (connection[0] == 0) ctx.rect(pos[0]+62.5-150*(connection[1] == -1),pos[1]-25,25,50);
            else ctx.rect(pos[0]-25,pos[1]+37.5-100*(connection[1] == -1),50,25);
        })
        ctx.strokeStyle = "#555";
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(pos[0]-62.5,pos[1]-37.5,125,75);
        if (pos[0] + pos[1] == 0) ctx.strokeStyle = "#555";
        else if (dungeon[item].boss) ctx.strokeStyle = "#755";
        else ctx.strokeStyle = "#555";
        ctx.stroke();
    })
    Object.keys(dungeon).forEach((item) => {
        if (!dungeon[item].visited) return;

        const pos = [Number(item.split(",")[0])*150-150*game.dungeonPosition[0],Number(item.split(",")[1])*100-100*game.dungeonPosition[1]];
        ctx.beginPath();
        dungeon[item].connections.forEach((connection) => {
            if (connection[0] == 0) ctx.rect(pos[0]+61.5-150*(connection[1] == -1),pos[1]-25,27,50);
            else ctx.rect(pos[0]-25,pos[1]+36.5-100*(connection[1] == -1),50,27);
        })
        ctx.fillStyle = "#333";
        ctx.fill();
        ctx.beginPath();
        ctx.rect(pos[0]-62.5,pos[1]-37.5,125,75);
        if (pos[0] == 0 && pos[1] == 0) ctx.fillStyle = "#999";
        else if (dungeon[item].boss) ctx.fillStyle = "#933";
        else ctx.fillStyle = "#333";
        ctx.fill();
    })
    ctx.lineWidth = 3;
}

function dungeonMove(change) {
    game.firstBullet = true;
    bullets.splice(0);
    dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].items = items;
    game.openings = [];
    game.dungeonPosition[change[0]] += change[1];
    const room = dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]];
    blocks = room.blocks;

    if (change[0] == 0) player.x -= 1800*change[1];
    else player.y -= 1000*change[1];

    floor = [];

    for (var i = 0; i < 6; i++) 
        floor.push({x:-1300+Math.random()*2600,y:-800+Math.random()*1600,size:200+Math.random()*100,rotation:Math.random()*Math.PI,reference:floorPaths[Math.floor(Math.random()*floorPaths.length)]});

    roomEffects.forEach((item) => {
        if (change[0] == 0) item.x -= 1800*change[1]*Math.random();
        else item.y -= 1000*change[1]*Math.random();    
    })

    if (room.visited) room.connections.forEach((item) => {
        if (item[0] == 0) {
            if (item[1] == -1) game.openings.push("left");
            else game.openings.push("right");
        } else {
            if (item[1] == -1) game.openings.push("up");
            else game.openings.push("down");
        }
    }); 
    else {
        stats.extraHealth = stats.extraHealthMax;

        room.visited = true;

        game.discoveredRooms++;

        if (room.boss) {
            enemies.push( new Enemy(enemyBlueprints[game.region.bosses[Math.floor(game.region.bosses.length*Math.random())]]) );
            restartMusic(enemies[0].boss[2]);
            game.bossEase = 1;
            ease(game,"bossEase",0,5);
        }
        else spawnEnemies(Math.floor(1 + Math.random()*0.6+0.2*game.discoveredRooms));
        
        ease(game,"notLocked",0,0.2);
        
        setTimeout(() => {
            room.connections.forEach((item) => {
                if (item[0] == 0) {
                    if (item[1] == -1) game.openings.push("left");
                    else game.openings.push("right");
                } else {
                    if (item[1] == -1) game.openings.push("up");
                    else game.openings.push("down");
                }
            })
        }, 250);
    }

    items = room.items;
}

function drawBlock(block) {
    ctx.beginPath()
    ctx.rect(...block);
    for (var i = block[1]; i <= block[1]+block[3]-25; i += 25) {
        ctx.moveTo(block[0],i);
        ctx.lineTo(block[0]+block[2],i);
        for (var i2 = block[0]+25+25*((i-block[1])%50 == 0); i2 <= block[0]+block[2]-25; i2 += 50) {
            ctx.moveTo(i2,i);
            ctx.lineTo(i2,i+25);
        }
    }
    ctx.lineWidth = 3;
    ctx.fillStyle = "#666";
    ctx.fill();
    ctx.strokeStyle = "#222";
    ctx.stroke();
}