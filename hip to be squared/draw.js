const gpu = new GPU.GPU();

const calculateSinCos = gpu.createKernel(function(groups) {
    if (this.thread.x === 0) 
        return Math.cos(groups[this.thread.y][3]);
    else 
        return Math.sin(groups[this.thread.y][3]);
}, {
  dynamicOutput: true,
  dynamicArguments: true
}).setOutput([2,10]);
const calculatePoints = gpu.createKernel(function(path,groups,sinCos) {
    if (this.thread.x === 0) 
        return groups[this.thread.z][0]+(path[this.thread.y][0]*sinCos[this.thread.z][0]-path[this.thread.y][1]*sinCos[this.thread.z][1])*groups[this.thread.z][2]/250/*(0.5+Math.random())*/;
    else 
        return groups[this.thread.z][1]+(path[this.thread.y][1]*sinCos[this.thread.z][0]+path[this.thread.y][0]*sinCos[this.thread.z][1])*groups[this.thread.z][2]/250/*(0.5+Math.random())*/;
}, {
  dynamicOutput: true,
  dynamicArguments: true
}).setOutput([2,11,50]);

function draw(x,y,path, size, rotate, alpha, noClear,flipVert,noMove,colorOverride,outlineColor) {
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

function drawGroup(path, groups,drawOutline) {
    const path2 = [];
    path.forEach( item => {
        if (item.type == "point") {
            path2.push( [ item.x, item.y ] );
        } else {
            path2.push( [ 0, 0 ] );
        }
    } )

    calculateSinCos.setOutput([2,groups.length]);
    calculatePoints.setOutput([2,path2.length,groups.length]);
    const sinCos = calculateSinCos(groups);
    const points = calculatePoints(path2,groups,sinCos);

    let firstStroke = true;
    let stop = -1;
    let nextStop = -1;
    let stroke = false;

    if (groups[0][4] !== undefined) ctx.globalAlpha = groups[0][4];
    ctx.beginPath();
    while (stop < path.length-1) {
        stop = nextStop;
        for (var i = 0; i < points.length; i++) {
            let move = true;
            for(var i2 = stop + 1; i2 < path.length; i2++) {
                const item = path[i2];
                switch(item.type) {
                    case "point": {
                        if (item.move || move) {
                            ctx.moveTo(...points[i][i2]);
                            move = false;
                        }
                        else ctx.lineTo(...points[i][i2]);
                        break;
                    }
                    case "fill": {
                        if (i) break;
                        nextStop = i2;
                        i2 = path.length;
                        ctx.fillStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                        stroke = false;
                        //ctx.fill();
                        break;
                    }
                    case "stroke": {
                        if (i) break;
                        nextStop = i2;
                        i2 = path.length;
                        ctx.strokeStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                        stroke = true;
                        move = true;
                        break;
                    }
                    case "close": {
                        ctx.closePath();
                        break;
                    }
                }
            }
            ctx.closePath();
        }

        if (stroke) {
            ctx.stroke();
            ctx.beginPath();
        } else {
            if (drawOutline && firstStroke) {
                ctx.lineWidth = 7;
                ctx.strokeStyle = "rgb(250,20,20)";
                ctx.stroke();
                ctx.lineWidth = 3;
                firstStroke = false;
            }
            ctx.fill();
        }
    }

    if (groups[0][4] !== undefined) ctx.globalAlpha = 1
    
    //ctx.fillStyle = "#000";
    //ctx.fill();
    return;
    if (groups[0][4] !== undefined && groups[0][4] !== false) ctx.globalAlpha = groups[0][4];
    while (stop < path.length-1) {
        stop = nextStop;
        groups.forEach((group, g) => {
            const ratio = (group[2]+game.musicWobble)/250;
            if (typeof group[3] !== "object") {
                group[3] = [Math.cos(group[3] || 0),Math.sin(group[3] || 0)];
            }
            //ctx.save();
            //ctx.translate(group[0],group[1]);
            //if (group[3]) ctx.rotate(group[3]);

            let move = true;
            for(var i = stop + 1; i < path.length; i++) {
                const item = path[i];
                switch(item.type) {
                    case "point": {
                        if (item.move || move) {
                            ctx.moveTo(group[0]+(item.x*group[3][0]-item.y*group[3][1])*ratio,group[1]+(item.y*group[3][0]+item.x*group[3][1])*ratio);
                            move = false;
                        }
                        else ctx.lineTo(group[0]+(item.x*group[3][0]-item.y*group[3][1])*ratio,group[1]+(item.y*group[3][0]+item.x*group[3][1])*ratio);
                        break;
                    }
                    case "fill": {
                        if (g) break;
                        nextStop = i;
                        i = path.length;
                        ctx.fillStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                        stroke = false;
                        //ctx.fill();
                        break;
                    }
                    case "stroke": {
                        if (g) break;
                        nextStop = i;
                        i = path.length;
                        ctx.strokeStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                        stroke = true;
                        move = true;
                        break;
                    }
                    case "close": {
                        ctx.closePath();
                        break;
                    }
                }
            }
        
            //if (group[3]) ctx.rotate(-group[3]);
            //ctx.translate(-group[0],-group[1]);;
        })

        if (stroke) {
            ctx.stroke();
            ctx.beginPath();
        } else {
            if (drawOutline && firstStroke) {
                ctx.lineWidth = 7;
                ctx.strokeStyle = "rgb(250,20,20)";
                ctx.stroke();
                ctx.lineWidth = 3;
                firstStroke = false;
            }
            ctx.fill();
        }
    }

    if (groups[0][4] !== undefined) ctx.globalAlpha = 1

    //ctx.restore();
}
/*
function drawGroup(path, groups,drawOutline) {
    ctx.beginPath();
    let firstStroke = true;
    let stop = -1;
    let nextStop = -1;
    let stroke = false;
    if (groups[0][4] !== undefined && groups[0][4] !== false) ctx.globalAlpha = groups[0][4];
    while (stop < path.length-1) {
        stop = nextStop;
        groups.forEach((group, g) => {
            const ratio = (group[2]+game.musicWobble)/250;
            if (typeof group[3] !== "object") {
                group[3] = [Math.cos(group[3] || 0),Math.sin(group[3] || 0)];
            }
            //ctx.save();
            //ctx.translate(group[0],group[1]);
            //if (group[3]) ctx.rotate(group[3]);

            let move = true;
            for(var i = stop + 1; i < path.length; i++) {
                const item = path[i];
                switch(item.type) {
                    case "point": {
                        if (item.move || move) {
                            ctx.moveTo(group[0]+(item.x*group[3][0]-item.y*group[3][1])*ratio,group[1]+(item.y*group[3][0]+item.x*group[3][1])*ratio);
                            move = false;
                        }
                        else ctx.lineTo(group[0]+(item.x*group[3][0]-item.y*group[3][1])*ratio,group[1]+(item.y*group[3][0]+item.x*group[3][1])*ratio);
                        break;
                    }
                    case "fill": {
                        if (g) break;
                        nextStop = i;
                        i = path.length;
                        ctx.fillStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                        stroke = false;
                        //ctx.fill();
                        break;
                    }
                    case "stroke": {
                        if (g) break;
                        nextStop = i;
                        i = path.length;
                        ctx.strokeStyle = "rgb("+item.r+","+item.g+","+item.b+")";
                        stroke = true;
                        move = true;
                        break;
                    }
                    case "close": {
                        ctx.closePath();
                        break;
                    }
                }
            }
        
            //if (group[3]) ctx.rotate(-group[3]);
            //ctx.translate(-group[0],-group[1]);;
        })

        if (stroke) {
            ctx.stroke();
            ctx.beginPath();
        } else {
            if (drawOutline && firstStroke) {
                ctx.lineWidth = 7;
                ctx.strokeStyle = "rgb(250,20,20)";
                ctx.stroke();
                ctx.lineWidth = 3;
                firstStroke = false;
            }
            ctx.fill();
        }
    }

    if (groups[0][4] !== undefined) ctx.globalAlpha = 1

    //ctx.restore();
}
*/