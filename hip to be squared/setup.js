function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

// the animation loop calculates time elapsed since the last loop
// and only draws if your specified fps interval is achieved

function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        tickloop();
    }
}
//canvas or gamescreen
var canvas = document.getElementById("gameScreen");
//context, for drawing
var ctx = canvas.getContext("2d");
//settings canvas size and scale
var screenScale = window.innerWidth/1800;
if (window.innerHeight/1000 < screenScale) screenScale = window.innerHeight/1000;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.translate(window.innerWidth/2, window.innerHeight/2);

ctx.scale(screenScale, screenScale);

ctx.lineWidth = 3;
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.lineJoin = "bevel";

//resizing
window.addEventListener("resize", (  ) => {
    ctx.resetTransform();

    //settings canvas size and scale
    screenScale = window.innerWidth/1800;
    if (window.innerHeight/1000 < screenScale) screenScale = window.innerHeight/1000;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.translate(window.innerWidth/2, window.innerHeight/2);

    ctx.scale(screenScale, screenScale);

    ctx.lineWidth = 3;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.lineJoin = "bevel";

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(-1800,-1000,3600,2000);
});

const keys = {};
const mouse = { x: 0, y: 0 };

//detect keypresses
window.addEventListener('keydown', async function (e) {
    if (e.key.toLowerCase() == "tab") e.preventDefault();
    if (e.repeat) return;

    keys[e.key.toLowerCase()] = true;

    if (e.key.toLowerCase() == " " && !player.dashCooldown) {
        switch(0) {
            case 0: {
                const hypot = Math.hypot(player.vx, player.vy) || 1;
                player.vx *= 60/hypot;
                player.vy *= 60/hypot;
                player.iFrames = 15;
                break;
            }
            case 1: {
                player.iFrames = 90;
                break;
            }
            case 2:{
                const playerSize = stats.playerSize;
                player.iFrames = 30;
                ease(stats,"playerSize",0,0.1);
                setTimeout(() => {
                    ease(stats,"playerSize",playerSize,0.1);
                    player.x = mouse.x;
                    player.y = mouse.y;
                }, 100);
                break;
            }
        }
        player.dashCooldown = 1;
    }
    if (e.key.toLowerCase() == 'e') pickUpItem();
    if (e.key.toLowerCase() == 'q') if (!game.menu) {
        game.menu = "inventory";
    } else if (game.menu == "inventory") {
        game.menu = false;
        game.replaceItem = false;
    }
    if (e.key.toLowerCase() == 'escape') if (!game.menu) {
        game.menu = "pause";
    } else if (game.menu == "pause") {
        game.menu = false;
        game.replaceItem = false;
    }
}, false);
window.addEventListener('keyup', function (e) {
    keys[e.key.toLowerCase()] = false;
}, false)/[ ];
window.addEventListener('mousedown', function () {
    keys.mouse = true;
    mouse.down = true;
    if (!game.musicStarted) {
        game.musicStarted = true;
        startMusic();
    }
    if (game.menu == "inventory") {
        let relicPos = -1;
        if (game.relicsEquipped[0] && Math.hypot(mouse.x+300,mouse.y+300) < 200) relicPos = 0;
        if (game.relicsEquipped[1] && Math.hypot(mouse.x-300,mouse.y+300) < 200) relicPos = 1;
        if (game.relicsEquipped[2] && Math.hypot(mouse.x+450,mouse.y) < 200) relicPos = 2;
        if (game.relicsEquipped[3] && Math.hypot(mouse.x-450,mouse.y) < 200) relicPos = 3;
        if (game.relicsEquipped[4] && Math.hypot(mouse.x+300,mouse.y-300) < 200) relicPos = 4;
        if (game.relicsEquipped[5] && Math.hypot(mouse.x-300,mouse.y-300) < 200) relicPos = 5;

        if (relicPos != -1) {
            const relicToPush = game.relicsEquipped[relicPos];
            game.relicsEquipped[relicPos] = false;
            if (game.replaceItem) {
                pickUpItem();
                game.replaceItem = false;
            }
            items.push(new Item(player.x,player.y,relicToPush.reference,relicToPush.rarity));
            game.menu = false;

            updateStats();
        }
    } else if (game.menu) menuChoose();
}, false);
window.addEventListener('mouseup', function () {
    keys.mouse = false;
    mouse.down = false;
}, false);
function xy(e) {
    game.menuSelectType = "mouse";

    mouse.x = e.x/screenScale - (window.innerWidth-1800*screenScale)/2/screenScale -900;
    mouse.y = e.y/screenScale - (window.innerHeight-1000*screenScale)/2/screenScale -500;
}

let toEaseVariables = [];

function ease(thing, target, end, time) {
    toEaseVariables = toEaseVariables.filter((item) => { {
        if (item.thing == thing && item.target == target) item.thing[target] = item.end;
        else return true;
    } } );
    toEaseVariables.push( { thing: thing, target: target, end: end, tickRate: (end-thing[target] )/60/time } );
}

function changeEaseable(item, i) {
    var contin = true;

    if ( item.thing[item.target] + item.tickRate >= item.end && Math.sign(item.tickRate) > 0 ) contin = false;
    if ( item.thing[item.target] + item.tickRate <= item.end && Math.sign(item.tickRate) < 0 ) contin = false;

    if (contin) item.thing[item.target] += item.tickRate;
    else item.thing[item.target] = item.end;

    return contin;
}

function draw(x,y,path, size, rotate, alpha, noClear) {
    const ratio = size/250;

    ctx.save();
    ctx.translate(x,y);
    if (rotate) ctx.rotate(rotate);

    if (alpha) ctx.globalAlpha = alpha;

    if (!noClear) ctx.beginPath();
    path.forEach((item,i) => {
        switch(item.type) {
            case "point": {
                if (item.move || i == 0) ctx.moveTo(item.x*ratio,item.y*ratio);
                else ctx.lineTo(item.x*ratio,item.y*ratio);
                break;
            }
            case "fill": {
                ctx.fillStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                ctx.fill();
                break;
            }
            case "stroke": {
                ctx.strokeStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                ctx.stroke();
                ctx.beginPath();
                break;
            }
            case "close": {
                ctx.closePath();
                break;
            }
        }
    })

    ctx.restore();
}

let blocks = [];

const game = {
    cursorPath: JSON.parse(
        `[{"type":"point","x":0,"y":-125,"move":false},{"type":"point","x":50,"y":-250,"move":false},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":0,"y":-125,"move":false},{"type":"point","x":125,"y":0,"move":true},{"type":"point","x":250,"y":-50,"move":false},{"type":"point","x":250,"y":50,"move":false},{"type":"point","x":125,"y":0,"move":false},{"type":"point","x":0,"y":125,"move":true},{"type":"point","x":50,"y":250,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":0,"y":125,"move":false},{"type":"point","x":-125,"y":0,"move":true},{"type":"point","x":-250,"y":-50,"move":false},{"type":"point","x":-250,"y":50,"move":false},{"type":"point","x":-125,"y":0,"move":false},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
    ), hitScreenPath: JSON.parse(
        `[{"type":"point","x":275,"y":-175},{"type":"point","x":-275,"y":-175},{"type":"point","x":-275,"y":175},{"type":"point","x":275,"y":175},{"type":"close"},{"type":"point","x":225,"y":-125,"move":true},{"type":"point","x":225,"y":-75,"move":false},{"type":"point","x":212.5,"y":-50,"move":false},{"type":"point","x":225,"y":-25,"move":false},{"type":"point","x":225,"y":25,"move":false},{"type":"point","x":212.5,"y":50,"move":false},{"type":"point","x":225,"y":75,"move":false},{"type":"point","x":225,"y":125,"move":false},{"type":"point","x":175,"y":125,"move":false},{"type":"point","x":150,"y":112.5,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":75,"y":125,"move":false},{"type":"point","x":50,"y":112.5,"move":false},{"type":"point","x":25,"y":125,"move":false},{"type":"point","x":-25,"y":125,"move":false},{"type":"point","x":-50,"y":112.5,"move":false},{"type":"point","x":-75,"y":125,"move":false},{"type":"point","x":-125,"y":125,"move":false},{"type":"point","x":-150,"y":112.5,"move":false},{"type":"point","x":-175,"y":125,"move":false},{"type":"point","x":-225,"y":125,"move":false},{"type":"point","x":-225,"y":75,"move":false},{"type":"point","x":-212.5,"y":50,"move":false},{"type":"point","x":-225,"y":25,"move":false},{"type":"point","x":-225,"y":-25,"move":false},{"type":"point","x":-212.5,"y":-50,"move":false},{"type":"point","x":-225,"y":-75,"move":false},{"type":"point","x":-225,"y":-125,"move":false},{"type":"point","x":-175,"y":-125,"move":false},{"type":"point","x":-150,"y":-112.5,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"point","x":-75,"y":-125,"move":false},{"type":"point","x":-50,"y":-112.5,"move":false},{"type":"point","x":-25,"y":-125,"move":false},{"type":"point","x":25,"y":-125,"move":false},{"type":"point","x":50,"y":-112.5,"move":false},{"type":"point","x":75,"y":-125,"move":false},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":150,"y":-112.5,"move":false},{"type":"point","x":175,"y":-125,"move":false},{"type":"close"},{"type":"fill","r":250,"g":80,"b":80},{"type":"stroke","r":80,"g":40,"b":40}]`
    ), gameIcon: JSON.parse(
        `[{"type":"point","x":-237.5,"y":-225},{"type":"point","x":-212.5,"y":-225},{"type":"point","x":-212.5,"y":-200},{"type":"point","x":-187.5,"y":-200},{"type":"point","x":-187.5,"y":-225},{"type":"point","x":-162.5,"y":-225},{"type":"point","x":-162.5,"y":-150},{"type":"point","x":-187.5,"y":-150},{"type":"point","x":-187.5,"y":-175},{"type":"point","x":-212.5,"y":-175},{"type":"point","x":-212.5,"y":-150},{"type":"point","x":-237.5,"y":-150},{"type":"close"},{"type":"point","x":-150,"y":-150,"move":true},{"type":"point","x":-125,"y":-150,"move":false},{"type":"point","x":-125,"y":-225,"move":false},{"type":"point","x":-150,"y":-225,"move":false},{"type":"close"},{"type":"point","x":-112.5,"y":-150,"move":true},{"type":"point","x":-112.5,"y":-225,"move":false},{"type":"point","x":-62.5,"y":-225,"move":false},{"type":"point","x":-62.5,"y":-175,"move":false},{"type":"point","x":-87.5,"y":-175,"move":false},{"type":"point","x":-87.5,"y":-150,"move":false},{"type":"close"},{"type":"point","x":-37.5,"y":-225,"move":true},{"type":"point","x":37.5,"y":-225,"move":false},{"type":"point","x":37.5,"y":-200,"move":false},{"type":"point","x":12.5,"y":-200,"move":false},{"type":"point","x":12.5,"y":-150,"move":false},{"type":"point","x":-12.5,"y":-150,"move":false},{"type":"point","x":-12.5,"y":-200,"move":false},{"type":"point","x":-37.5,"y":-200,"move":false},{"type":"close"},{"type":"point","x":50,"y":-150,"move":true},{"type":"point","x":50,"y":-225,"move":false},{"type":"point","x":100,"y":-225,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"close"},{"type":"point","x":125,"y":-150,"move":true},{"type":"point","x":125,"y":-225,"move":false},{"type":"point","x":175,"y":-225,"move":false},{"type":"point","x":175,"y":-187.5,"move":false},{"type":"point","x":162.5,"y":-187.5,"move":false},{"type":"point","x":175,"y":-187.5,"move":false},{"type":"point","x":175,"y":-150,"move":false},{"type":"close"},{"type":"point","x":187.5,"y":-150,"move":true},{"type":"point","x":237.5,"y":-150,"move":false},{"type":"point","x":237.5,"y":-175,"move":false},{"type":"point","x":212.5,"y":-175,"move":false},{"type":"point","x":225,"y":-175,"move":false},{"type":"point","x":225,"y":-200,"move":false},{"type":"point","x":212.5,"y":-200,"move":false},{"type":"point","x":237.5,"y":-200,"move":false},{"type":"point","x":237.5,"y":-225,"move":false},{"type":"point","x":187.5,"y":-225,"move":false},{"type":"close"},{"type":"fill","r":75,"g":125,"b":150},{"type":"stroke","r":25,"g":50,"b":75},{"type":"point","x":-237.5,"y":-75,"move":true},{"type":"point","x":-137.5,"y":-75,"move":false},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"point","x":-187.5,"y":-25,"move":false},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"point","x":-137.5,"y":75,"move":false},{"type":"point","x":-237.5,"y":75,"move":false},{"type":"point","x":-237.5,"y":25,"move":false},{"type":"point","x":-187.5,"y":25,"move":false},{"type":"point","x":-237.5,"y":25,"move":false},{"type":"close"},{"type":"point","x":-112.5,"y":-75,"move":true},{"type":"point","x":-112.5,"y":75,"move":false},{"type":"point","x":-37.5,"y":75,"move":false},{"type":"point","x":-25,"y":87.5,"move":false},{"type":"point","x":0,"y":62.5,"move":false},{"type":"point","x":-12.5,"y":50,"move":false},{"type":"point","x":-12.5,"y":-75,"move":false},{"type":"close"},{"type":"point","x":-75,"y":-37.5,"move":true},{"type":"point","x":-50,"y":-37.5,"move":false},{"type":"point","x":-50,"y":12.5,"move":false},{"type":"point","x":-75,"y":37.5,"move":false},{"type":"close"},{"type":"point","x":12.5,"y":-75,"move":true},{"type":"point","x":12.5,"y":75,"move":false},{"type":"point","x":62.5,"y":75,"move":false},{"type":"point","x":62.5,"y":25,"move":false},{"type":"point","x":62.5,"y":75,"move":false},{"type":"point","x":112.5,"y":75,"move":false},{"type":"point","x":112.5,"y":25,"move":false},{"type":"point","x":87.5,"y":0,"move":false},{"type":"point","x":112.5,"y":0,"move":false},{"type":"point","x":112.5,"y":-50,"move":false},{"type":"point","x":87.5,"y":-75,"move":false},{"type":"close"},{"type":"point","x":50,"y":-50,"move":true},{"type":"point","x":75,"y":-50,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":50,"y":-25,"move":false},{"type":"close"},{"type":"point","x":137.5,"y":-75,"move":true},{"type":"point","x":137.5,"y":75,"move":false},{"type":"point","x":212.5,"y":75,"move":false},{"type":"point","x":237.5,"y":50,"move":false},{"type":"point","x":237.5,"y":-50,"move":false},{"type":"point","x":212.5,"y":-75,"move":false},{"type":"close"},{"type":"point","x":175,"y":-37.5,"move":true},{"type":"point","x":200,"y":-37.5,"move":false},{"type":"point","x":200,"y":37.5,"move":false},{"type":"point","x":175,"y":37.5,"move":false},{"type":"close"},{"type":"point","x":225,"y":-125,"move":true},{"type":"point","x":262.5,"y":-125,"move":false},{"type":"point","x":262.5,"y":-87.5,"move":false},{"type":"point","x":237.5,"y":-87.5,"move":false},{"type":"point","x":237.5,"y":-75,"move":false},{"type":"point","x":262.5,"y":-75,"move":false},{"type":"point","x":262.5,"y":-62.5,"move":false},{"type":"point","x":225,"y":-62.5,"move":false},{"type":"point","x":225,"y":-100,"move":false},{"type":"point","x":250,"y":-100,"move":false},{"type":"point","x":250,"y":-112.5,"move":false},{"type":"point","x":225,"y":-112.5,"move":false},{"type":"close"},{"type":"fill","r":200,"g":175,"b":100},{"type":"stroke","r":50,"g":50,"b":0}]`
    ), baseEnemyPath: JSON.parse(
        `[{"type":"point","x":-250,"y":-200},{"type":"point","x":-200,"y":-250},{"type":"point","x":200,"y":-250},{"type":"point","x":250,"y":-200},{"type":"point","x":250,"y":200},{"type":"point","x":200,"y":250},{"type":"point","x":-200,"y":250},{"type":"point","x":-250,"y":200},{"type":"close"},{"type":"point","x":-100,"y":-125,"move":true},{"type":"point","x":-125,"y":-100,"move":false},{"type":"point","x":-125,"y":100,"move":false},{"type":"point","x":-100,"y":125,"move":false},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":125,"y":100,"move":false},{"type":"point","x":125,"y":-100,"move":false},{"type":"point","x":100,"y":-125,"move":false},{"type":"close"},{"type":"fill","r":200,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
    ), enemySpawnPath: JSON.parse(
        `[{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-100},{"type":"point","x":-175,"y":-175},{"type":"point","x":-100,"y":-225},{"type":"point","x":0,"y":-250},{"type":"point","x":100,"y":-225},{"type":"point","x":175,"y":-175},{"type":"point","x":225,"y":-100},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":100},{"type":"point","x":175,"y":175},{"type":"point","x":100,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-100,"y":225},{"type":"point","x":-175,"y":175},{"type":"point","x":-225,"y":100},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":255,"g":100,"b":100},{"type":"point","x":-150,"y":-100,"move":false},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":0,"y":-50,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":150,"y":100,"move":false},{"type":"point","x":100,"y":150,"move":false},{"type":"point","x":0,"y":50,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"point","x":-150,"y":100,"move":false},{"type":"point","x":-50,"y":0,"move":false},{"type":"close"},{"type":"fill","r":255,"g":100,"b":100},{"type":"close"}]`
    ), circleAttackWarnPath: JSON.parse(
        `[{"type":"point","x":-250,"y":0,"move":true},{"type":"point","x":-225,"y":-100},{"type":"point","x":-175,"y":-175},{"type":"point","x":-100,"y":-225},{"type":"point","x":0,"y":-250},{"type":"point","x":100,"y":-225},{"type":"point","x":175,"y":-175},{"type":"point","x":225,"y":-100},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":100},{"type":"point","x":175,"y":175},{"type":"point","x":100,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-100,"y":225},{"type":"point","x":-175,"y":175},{"type":"point","x":-225,"y":100},{"type":"close"}]`
    ), sliceAttackWarnPath: JSON.parse(
        `[{"type":"point","x":-250,"y":-100},{"type":"point","x":-225,"y":-75},{"type":"point","x":-200,"y":-25},{"type":"point","x":-200,"y":25},{"type":"point","x":-225,"y":75},{"type":"point","x":-250,"y":100},{"type":"point","x":200,"y":100},{"type":"point","x":225,"y":75},{"type":"point","x":250,"y":25},{"type":"point","x":250,"y":-25},{"type":"point","x":225,"y":-75},{"type":"point","x":200,"y":-100},{"type":"close"}]`
    ), stabAttackWarnPath: JSON.parse(
        `[{"type":"point","x":-250,"y":-25},{"type":"point","x":-225,"y":0},{"type":"point","x":-250,"y":25},{"type":"point","x":225,"y":25},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":-25},{"type":"close"}]`
    ),
    enemyAttack:"",
    enemyAttackWarning:"",
    dungeonPosition: [0,0],
    notLocked: 0,
    openings: [  ],
    relicsEquipped: [0,0,0,0,0,0],
    weapon: new Item(0,0,weapons[0],0),
    relicTick: 0,
    firstWeapon: true,
    musicPos: 0,
    showHit: 0,
    menu: "main",
    audioVolume: 0.8,
    discoveredRooms: 0,
};

if (localStorage.getItem("htbs-audioVolume")) game.audioVolume = Number(localStorage.getItem("htbs-audioVolume"));
else localStorage.setItem("htbs-audioVolume",game.audioVolume);
let bullets = [];
let enemies = [];
let attackWarnings = [];

let stats = {
}

updateStats();

generateDungeon();

dungeon["0,0"].connections.forEach((item) => {
    if (item[0] == 0) {
        if (item[1] == -1) game.openings.push("left");
        else game.openings.push("right");
    } else {
        if (item[1] == -1) game.openings.push("up");
        else game.openings.push("down");
    }
})

function animationRatio(x,t,r) {
    return 1 - Math.abs( ( 2*x/t - 1 ) **r );
}