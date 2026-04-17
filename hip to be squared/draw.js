const gpu = new GPU.GPU();
// [ 0x,1y,2size,3rotate,4alpha,5flipVert, 6...path ]
// x/y, path, group
const calculatePoints = gpu.createKernel(function(groups,groupsLength,musicWobble) {
    if (this.thread.x < 7) return groups[this.thread.y][this.thread.x];
    if (this.thread.x > groups[this.thread.y][6]+7) return 0;
    if (groups[this.thread.y][Math.floor((this.thread.x-7)/4)*4+7] > 0) return groups[this.thread.y][this.thread.x];
    const cos = Math.cos(groups[this.thread.y][3]);
    const sin = Math.sin(groups[this.thread.y][3]);

    const flipVertRatio = 1-2*groups[this.thread.y][5]
    if ((this.thread.x-7)%4 === 1) 
        return groups[this.thread.y][0]+(groups[this.thread.y][this.thread.x]*cos-groups[this.thread.y][this.thread.x+1]*sin*flipVertRatio)*(groups[this.thread.y][2]+musicWobble)/250/*(0.5+Math.random())*/;
    else if ((this.thread.x-7)%4 === 2) 
        return groups[this.thread.y][1]+(groups[this.thread.y][this.thread.x]*cos*flipVertRatio+groups[this.thread.y][this.thread.x-1]*sin)*(groups[this.thread.y][2]+musicWobble)/250/*(0.5+Math.random())*/;
    return groups[this.thread.y][this.thread.x];
}, {
  dynamicOutput: true,
  dynamicArguments: true
}).setOutput([200,200]);

let highestAmount = 200;

let toDraw = [];

let highestPathLength = 0;

let nuhUhh = false;

function draw(x,y,path, size, rotate, alpha, noClear,flipVert,noMove,colorOverride,outlineColor) {
    if (path.length > 200) {
        drawRaw(x,y,path,size,rotate,alpha,noClear,flipVert,noMove,colorOverride,outlineColor);
        return;
    }
    
    if (alpha === 0) return;
    //return;
    //if (nuhUhh) return;
    //nuhUhh = true;
    toDraw.push([x,y,size,rotate || 0,alpha || -1,flipVert || 0,...path]);//,colorOverride || 0,outlineColor || 0]);
    return;
    const cos = Math.cos(rotate || 0);
    const sin = Math.sin(rotate || 0);
    const ratio = (size+game.musicWobble)/250;
    const flipVertRatio = -1+2*(!flipVert);

    //ctx.save();
    //ctx.translate(x,y);
    //if (rotate) ctx.rotate(rotate);

    if (alpha !== undefined && alpha !== false) ctx.globalAlpha = alpha;

    if (!noClear) ctx.beginPath();
    let move = true;
    let firstStroke = true;
    path.forEach((item,i) => {
        if (noClear) { 
            if (item.type == "point") {
                if ((item.move || move) && !noMove) {
                    ctx.moveTo(x+(item.x*cos-item.y*sin*flipVertRatio)*ratio/*(0.5+Math.random())*/,y+(item.y*cos*flipVertRatio+item.x*sin)*ratio/*(0.5+Math.random())*/);
                    move = false;
                }
                else ctx.lineTo(x+(item.x*cos-item.y*sin*flipVertRatio)*ratio/*(0.5+Math.random())*/,y+(item.y*cos*flipVertRatio+item.x*sin)*ratio/*(0.5+Math.random())*/);
            } else if (item.type == "stroke") move = true;
            else if (item.type == "close") ctx.closePath();
        } else switch(item.type) {
            case "point": {
                if (item.move || move) {
                    ctx.moveTo(x+(item.x*cos-item.y*sin)*ratio/*(0.5+Math.random())*/,y+(item.y*cos+item.x*sin)*ratio/*(0.5+Math.random())*/);
                    move = false;
                }
                else ctx.lineTo(x+(item.x*cos-item.y*sin)*ratio/*(0.5+Math.random())*/,y+(item.y*cos+item.x*sin)*ratio/*(0.5+Math.random())*/);
                break;
            }
            case "fill": {
                if (firstStroke && outlineColor) {
                    firstStroke = false;
                    ctx.lineWidth += 3;
                    ctx.strokeStyle = outlineColor;
                    ctx.stroke();
                    ctx.lineWidth -= 3;
                }
                if (colorOverride) ctx.fillStyle = colorOverride;
                else ctx.fillStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                ctx.fill();
                break;
            }
            case "stroke": {
                if (colorOverride) ctx.strokeStyle = colorOverride;
                else ctx.strokeStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                ctx.stroke();
                ctx.beginPath();
                move = true;
                break;
            }
            case "close": {
                ctx.closePath();
                break;
            }
        }
    })
   
    //if (rotate) ctx.rotate(-rotate);
    //ctx.translate(-x,-y);

    if (alpha !== undefined) ctx.globalAlpha = 1;

    //ctx.restore();
}
function drawRaw(x,y,path, size, rotate, alpha, noClear,flipVert,noMove,colorOverride,outlineColor) {
    const cos = Math.cos(rotate || 0);
    const sin = Math.sin(rotate || 0);
    const ratio = (size+game.musicWobble)/250;
    const flipVertRatio = 1-2*(!!flipVert);

    //ctx.save();
    //ctx.translate(x,y);
    //if (rotate) ctx.rotate(rotate);

    if (alpha !== undefined && alpha !== false) ctx.globalAlpha = alpha;

    if (!noClear) ctx.beginPath();
    let move = true;
    let firstStroke = true;
    for (var i = 1; i < path[0]; i += 4) {
        if (noClear) { 
            if (path[i] == 0) {
                if (!noMove && (path[i+3] || move)) {
                    ctx.moveTo(x+(path[i+1]*cos-path[i+2]*sin*flipVertRatio)*ratio/*(0.5+Math.random())*/,y+(path[i+2]*cos*flipVertRatio+path[i+1]*sin)*ratio/*(0.5+Math.random())*/);
                    move = false;
                }
                else ctx.lineTo(x+(path[i+1]*cos-path[i+2]*sin*flipVertRatio)*ratio/*(0.5+Math.random())*/,y+(path[i+2]*cos*flipVertRatio+path[i+1]*sin)*ratio/*(0.5+Math.random())*/);
            } else if (path[i] == 2) move = true;
            else if (path[i] == 1) ctx.closePath();
        } else switch(path[i]) {
            case 0: {
                if (path[i+3] || move) {
                    ctx.moveTo(x+(path[i+1]*cos-path[i+2]*sin)*ratio/*(0.5+Math.random())*/,y+(path[i+2]*cos+path[i+1]*sin)*ratio/*(0.5+Math.random())*/);
                    move = false;
                }
                else ctx.lineTo(x+(path[i+1]*cos-path[i+2]*sin)*ratio/*(0.5+Math.random())*/,y+(path[i+2]*cos+path[i+1]*sin)*ratio/*(0.5+Math.random())*/);
                break;
            }
            case 1: {
                ctx.closePath();
                break;
            }
            case 2: {
                if (firstStroke && outlineColor) {
                    firstStroke = false;
                    ctx.lineWidth += 3;
                    ctx.strokeStyle = outlineColor;
                    ctx.stroke();
                    ctx.lineWidth -= 3;
                }
                if (colorOverride) ctx.fillStyle = colorOverride;
                else ctx.fillStyle = "rgb("+path[i+1]+","+path[i+2]+","+path[i+3]+")";
                ctx.fill();
                break;
            }
            case 3: {
                if (colorOverride) ctx.strokeStyle = colorOverride;
                else ctx.strokeStyle = "rgb("+path[i+1]+","+path[i+2]+","+path[i+3]+")";
                ctx.stroke();
                ctx.beginPath();
                move = true;
                break;
            }
        }
    }
   
    //if (rotate) ctx.rotate(-rotate);
    //ctx.translate(-x,-y);

    if (alpha !== undefined) ctx.globalAlpha = 1;

    //ctx.restore();
}
function __draw(path) {
    const flipVertRatio = -1+2*(!path[5]);

    if (path[4] !== undefined && path[4] >= 0) ctx.globalAlpha = path[4];

    ctx.beginPath();
    let move = true;
    let firstStroke = true;
    for (var i = 7; i < path[6]+7; i += 4) {
        //console.log(path[i] == 1)
        switch(path[i]) {
            case 0: {
                if (path[i+3] || move) {
                    ctx.moveTo(path[i+1],path[i+2]);
                    move = false;
                }
                else ctx.lineTo(path[i+1],path[i+2]);
                break;
            }
            case 1: {
                ctx.closePath();
                break;
            }
            case 2: {
                if (firstStroke && false) {
                    firstStroke = false;
                    ctx.lineWidth += 3;
                    ctx.strokeStyle = false;
                    ctx.stroke();
                    ctx.lineWidth -= 3;
                }
                if (false) ctx.fillStyle = colorOverride;
                else ctx.fillStyle = "rgb("+path[i+1]+","+path[i+2]+","+path[i+3]+")";
                ctx.fill();
                break;
            }
            case 3: {
                if (false) ctx.strokeStyle = false;
                else ctx.strokeStyle = "rgb("+path[i+1]+","+path[i+2]+","+path[i+3]+")";
                ctx.stroke();
                ctx.beginPath();
                move = true;
                break;
            }
        }
    }
   
    //if (rotate) ctx.rotate(-rotate);
    //ctx.translate(-x,-y);

    if (path[4] !== undefined) ctx.globalAlpha = 1;

    //ctx.restore();
}

function drawAll() {
    if (toDraw.length > highestAmount) {
        highestAmount = toDraw.length;
        calculatePoints.setOutput([200,highestAmount]);
    }
    else if (toDraw.length < highestAmount-200) {
        highestAmount = Math.max(200,toDraw.length);
        calculatePoints.setOutput([200,highestAmount]);
    }
    else if (!toDraw.length) return;
    const toDrawClone = toDraw;
    toDraw = [];
    calculatePoints(toDrawClone,toDrawClone.length,game.musicWobble).forEach((item,itemIndex) => {
        if (item[6]) {
            //console.log(item)
            __draw(item);
        }
    });
    ctx.beginPath();
}

function pathParse(path) {
    const path2 = [1];
    JSON.parse(path).forEach( item => {
        path2[0] += 4;
        switch(item.type) {
            case "point": {
                path2.push(0, item.x, item.y, item.move || 0 )
                break;
            }
            case "close": {
                path2.push(1,0,0,0)
                break;
            }
            case "fill": {
                path2.push(2,item.r,item.g,item.b);
                break;
            }
            case "stroke": {
                path2.push(3,item.r,item.g,item.b);
                break;
            }
        }
    } )
    //console.log(path2)
    if (path2.length > highestPathLength) {
        highestPathLength = path2.length;
    }
    while (path2.length < 200) path2.push(0);
    return path2;
}
