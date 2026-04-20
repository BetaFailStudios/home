let dungeon = { "0,0": { blocks: [], items: [], connections: [], visited: true, boss: true, regionTransfer: true } };

const dungeonPresets = [
    `[]`,
    `[[-425,-125,50,250],[375,-125,50,250]]`,
    `[[-650,-250,100,100],[150,-250,100,100],[550,150,100,100],[-250,150,100,100]]`,
    `[[-425,-25,850,50]]`,
    `[[-400,-225,400,75],[0,150,400,75]]`,
    `[[0,-75,75,75],[-75,0,75,75],[-400,-75,75,75],[-475,0,75,75],[325,0,75,75],[400,-75,75,75]]`,
    `[[-150,-250,300,75],[-550,175,300,75],[250,175,300,75]]`,
    `[[-100,-100,200,200],[400,-200,200,200],[-600,0,200,200]]`,
    `[[-475,0,75,450],[400,-450,75,450],[-50,-50,100,100]]`,
    `[[-525,-125,250,250],[275,-125,250,250]]`,
    `[[-425,-250,75,500],[350,-275,75,525]]`,
    `[[-100,-100,200,200]]`,
    `[[-500,-100,200,200],[300,-100,200,200]]`,
    `[[-675,-50,550,100],[125,-50,525,100]]`,
    `[[-50,-300,100,100],[-50,200,100,100],[-300,-50,100,100],[200,-50,100,100]]`
]

let roomEffects = [
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

    dungeon["0,0"].connections.forEach((item) => {
        if (item[0] == 0) {
            if (item[1] == -1) game.openings.push("left");
            else game.openings.push("right");
        } else {
            if (item[1] == -1) game.openings.push("up");
            else game.openings.push("down");
        }
    })
}

function drawMap() {
    if (!game.regionTransfer) game.teleportPosition = false;
    let xMax = 0;
    let yMax = 0;

    Object.keys(dungeon).forEach((item) => {
        if (!dungeon[item].visited) return;
        const pos = [Number(item.split(",")[0]),Number(item.split(",")[1])];
        if (pos[0] > xMax) xMax = pos[0];
        if (pos[1] < yMax) yMax = pos[1];
    })

    xMax = xMax*60 - 160;
    yMax = yMax*40 + 120;

    ctx.save();
    ctx.globalAlpha = game.notLocked;
    if (player.x > 600 && player.y < -300) ctx.globalAlpha *= 0.3;
    ctx.translate(625,-275);
    ctx.lineWidth = 10; //210, 160
    ctx.strokeStyle = game.region.wallColor;
    Object.keys(dungeon).forEach((item) => {
        if (!dungeon[item].visited) return;

        const pos = [Number(item.split(",")[0])*60-xMax,Number(item.split(",")[1])*40-yMax];
        ctx.beginPath();
        dungeon[item].connections.forEach((connection) => {
            if (connection[0] == 0) ctx.rect(pos[0]-7.5+30-60*(connection[1] == -1),pos[1]-10,15,20);
            else ctx.rect(pos[0]-10,pos[1]-7.5+20-40*(connection[1] == -1),20,15);
        })
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(pos[0]-27.5,pos[1]-17.5,55,35);
        ctx.stroke();
    })
    Object.keys(dungeon).forEach((item) => {
        if (!dungeon[item].visited) return;

        const pos = [Number(item.split(",")[0])*60-xMax,Number(item.split(",")[1])*40-yMax];
        dungeon[item].connections.forEach((connection) => {
            ctx.beginPath();    
            const targetPos = [Number(item.split(",")[0]),Number(item.split(",")[1])];
            targetPos[connection[0]] += connection[1];
            if (connection[0] == 0) ctx.rect(pos[0]-7.5+30-60*(connection[1] == -1),pos[1]-10,15,20);
            else ctx.rect(pos[0]-10,pos[1]-7.5+20-40*(connection[1] == -1),20,15);
            if (dungeon[targetPos[0] + "," + targetPos[1]].boss || dungeon[item].boss) ctx.fillStyle = "#933";
            else ctx.fillStyle = game.region.floorColor;
            ctx.fill();
        })
    })
    ctx.lineWidth = 3;
    Object.keys(dungeon).forEach((item) => {
        if (!dungeon[item].visited) return;

        const pos = [Number(item.split(",")[0])*60-xMax,Number(item.split(",")[1])*40-yMax];
        
        ctx.beginPath();
        ctx.rect(pos[0]-27.5,pos[1]-17.5,55,35);
        if (Number(item.split(",")[0]) == game.dungeonPosition[0] && Number(item.split(",")[1]) == game.dungeonPosition[1]) ctx.fillStyle = "#999";
        else if (Math.abs(mouse.x-625-pos[0]) < 25 && Math.abs(mouse.y+275-pos[1]) < 15) {
            game.teleportPosition = [Number(item.split(",")[0]),Number(item.split(",")[1])]
            ctx.fillStyle = game.region.wallColor;
        } else if (dungeon[item].boss) ctx.fillStyle = "#933";
        else ctx.fillStyle = game.region.floorColor;
        ctx.fill();

        if (dungeon[item].items.length) drawRaw(...pos,game.dungeonItemPath,15,player.rotationTick);
    })
    ctx.restore();
}

function dungeonMove(change, teleport) {
    game.firstBullet = true;
    bullets.splice(0);
    enemies.splice(0);
    dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].items = items;
    dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].floor = floor;
    game.openings = [];
    if (teleport) game.dungeonPosition = [...change];
    else game.dungeonPosition[change[0]] += change[1];
    const room = dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]];
    blocks = room.blocks;

    if (!teleport) {
        if (change[0] == 0) player.x -= 1800*change[1];
        else player.y -= 1000*change[1];
    } else change[0] = -1;

    updateStats();

    effects = [];
    floor = [];

    if (!room.visited) for (var i = 0; i < 4; i++) 
        floor.push({x:-1300+Math.random()*2600,y:-800+Math.random()*1600,size:300+Math.random()*150,rotation:Math.random()*Math.PI,reference:game.region.floorPaths[Math.floor(Math.random()*game.region.floorPaths.length)]});
    else floor = room.floor;
    game.region.generateBrickId();

    if (!teleport) roomEffects.forEach((item) => {
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
        room.visited = true;

        game.discoveredRooms++;

        if (room.boss) {
            const boss = new Enemy(enemyBlueprints[game.region.bosses[Math.floor(game.region.bosses.length*Math.random())]])
            enemies.push( boss );
            boss.original = true;
            if (boss.spawnPosition) {
                boss.x = boss.spawnPosition[0];
                boss.y = boss.spawnPosition[1];
            }
            if (boss.coSpawn) boss.coSpawn.forEach(item => {
                enemies.push( new Enemy(enemyBlueprints[item[0]], {x: item[1], y: item[2] }))
            })
            restartMusic(enemies[0].boss[2]);
            game.bossEase = 1;
            ease(game,"bossEase",0,5);
            game.bossHealthMax = 0;
            enemies.forEach(async (enemy,i) => {
                if (enemy.boss) game.bossHealthMax += enemy.healthMax;
            })
            game.afterBossStarted = true;
        }
        else {
            spawnEnemies(Math.floor(1 + Math.random()*0.6+0.35*game.discoveredRooms+0.15*game.regionNum));
            game.afterBossStarted = false;
        }
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

for (var i = 0; i < 3; i++) roomEffects.push({
    moveSpeed: 0.5 + Math.random()*2,
    x:-1300+Math.random()*2600,y:-800+Math.random()*1600,size:600+Math.random()*400,
    reference:game.region.roomEffects[Math.floor(Math.random()*game.region.roomEffects.length)]
});