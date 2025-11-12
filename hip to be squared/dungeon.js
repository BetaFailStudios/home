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

function generateDungeon() {
    const pos = [0,0];
    let connected = false;
    while (!connected) {//} || Object.keys(dungeon).length < 10) {
        const change = [Math.floor(Math.random()*2), 1-2*(Math.random() < 0.5)];
        pos[change[0]] += change[1];
        while (dungeon[pos[0] + "," + pos[1]]) pos[change[0]] += change[1];
        pos[change[0]] -= change[1];
        dungeon[pos[0] + "," + pos[1]].connections.push(Object.assign({},change));
        pos[change[0]] += change[1];
        change[1] *= -1;
        dungeon[pos[0] + "," + pos[1]] = { blocks: JSON.parse(dungeonPresets[Math.floor(Math.random()*dungeonPresets.length)]), items: [], connections: [change] };
        if (Math.abs(pos[0]) + Math.abs(pos[1]) == 6) {
            dungeon[pos[0] + "," + pos[1]].boss = true;
            connected = true;
            dungeon[pos[0] + "," + pos[1]].blocks = [];
        } else if (Math.random() < 1) dungeon[pos[0] + "," + pos[1]].blocks.forEach( (item) => item[0] = (item[0]+item[2]/2)*-1 - item[2]/2 );
    }
}

function drawMap() {
    ctx.fillStyle = "#cccccc99";
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
        if (pos[0] + pos[1] == 0) ctx.fillStyle = "#999";
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

        if (room.boss) {
            restartMusic(1);
            enemies.push( new Enemy(enemyBlueprints[8]) );
        }
        else spawnEnemies(1 + 1*(Math.random() < 0.7));
        
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