const player = {
    x: 0, y: 200,
    vx: 0, vy: 0,
    rotationTick: 0,
    drawPath: JSON.parse(
        `[{"type":"point","x":-250,"y":-200},{"type":"point","x":-50,"y":0},{"type":"point","x":-250,"y":200},{"type":"close"},{"type":"point","x":-200,"y":250,"move":true},{"type":"point","x":200,"y":250,"move":false},{"type":"point","x":0,"y":50,"move":false},{"type":"close"},{"type":"point","x":250,"y":200,"move":true},{"type":"point","x":250,"y":-200,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"close"},{"type":"point","x":0,"y":-50,"move":true},{"type":"point","x":200,"y":-250,"move":false},{"type":"point","x":-200,"y":-250,"move":false},{"type":"close"},{"type":"fill","r":150,"g":200,"b":200},{"type":"stroke","r":75,"g":115,"b":125}]`
    ),dashCooldownPath: JSON.parse(
        `[{"type":"point","x":-250,"y":-200},{"type":"point","x":-200,"y":-250},{"type":"point","x":200,"y":-250},{"type":"point","x":250,"y":-200},{"type":"point","x":250,"y":200},{"type":"point","x":200,"y":250},{"type":"point","x":-200,"y":250},{"type":"point","x":-250,"y":200},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":100,"g":100,"b":100}]`
    ),bloodPath: JSON.parse(
        `[{"type":"point","x":-250,"y":-250},{"type":"point","x":250,"y":-250},{"type":"point","x":250,"y":250},{"type":"point","x":-250,"y":250},{"type":"close"},{"type":"fill","r":255,"g":0,"b":0},{"type":"stroke","r":50,"g":0,"b":0}]`
    ),
    firerateTick: 0,
    iFrames: 0,
    dashCooldown: 0,
    dashes: 3,
}

async function playerTick() {
    if (game.menu) return;

    if (game.notLocked) {
        if (stats.extraHealth < stats.extraHealthMax) stats.extraHealth += stats.extraHealthMax/60;
        else stats.extraHealth = stats.extraHealthMax;
    }

    player.x += player.vx;
    player.y += player.vy;
    player.vx *= 1-stats.friction;
    player.vy *= 1-stats.friction;
    
    player.vx += (!!keys.d-!!keys.a)*stats.playerSpeed * (1-0.293*(keys.s ^ keys.w));
    player.vy += (!!keys.s-!!keys.w)*stats.playerSpeed * (1-0.293*(keys.d ^ keys.a));

    if (Math.abs(player.x) > 850-stats.playerSize*1.25) {
        if (game.notLocked == 1 && (Math.sign(player.x) == 1 && game.openings.includes("right") || Math.sign(player.x) == -1 && game.openings.includes("left")) && Math.abs(player.y) < 100) {
            if (Math.abs(player.y) > 100-stats.playerSize*1.25) {
                player.y = Math.sign(player.y)*(100-stats.playerSize*1.25);
                player.vy = 0;
            }

            if (Math.abs(player.x) > 910) dungeonMove([0,Math.sign(player.x)]);
        } else {
            player.x = Math.sign(player.x)*(850-stats.playerSize*1.25);
            player.vx = 0;
        }
    }
    if (Math.abs(player.y) > 450-stats.playerSize*1.25) {
        if (game.notLocked == 1 && (Math.sign(player.y) == 1 && game.openings.includes("down") || Math.sign(player.y) == -1 && game.openings.includes("up")) && Math.abs(player.x) < 100) {
            if (Math.abs(player.x) > 100-stats.playerSize*1.25) {
                player.x = Math.sign(player.x)*(100-stats.playerSize*1.25);
                player.vx = 0;
            }

            if (Math.abs(player.y) > 510) dungeonMove([1,Math.sign(player.y)]);
        } else {
            player.y = Math.sign(player.y)*(450-stats.playerSize*1.25);
            player.vy = 0;
        }
    }

    //
    // fire
    //
    while ((mouse.down || player.burstsLeft) && player.firerateTick <= 0) {
        let lookDirection = (Math.atan((mouse.y-player.y)/(mouse.x-player.x)) + Math.PI*(mouse.x < player.x)) || (Math.PI*(mouse.x < player.x));
        const tempBullet = {x: 0, y: 0, direction: lookDirection, triggerExpire: true, trailColor: stats.trailColor, trailLength: stats.trailLength || 8, projHit: stats.projHit};
        
        if (stats.projectiles > 1) lookDirection -= stats.spread/2;
        if (stats.firerate > 5) {
            if (player.burstsLeft) playsfx("shootimpact",0.2,0.65);
            else playsfx("shootimpact",0.2,1);
        }

        for (var i = 0; i < stats.projectiles; i++) {
            tempBullet.direction = lookDirection;
            if (stats.qub) {
                tempBullet.x = mouse.x;
                tempBullet.y = mouse.y;
            } else {
                tempBullet.x = player.x + Math.cos(lookDirection)*50;
                tempBullet.y = player.y + Math.sin(lookDirection)*50;
            }
            bullets.push(new Bullet(tempBullet));
            lookDirection += stats.spread/(stats.projectiles-1);
        }
        game.firstBullet = false;

        if (!player.burstsLeft) player.burstsLeft = stats.bursts-1;
        else player.burstsLeft--;
        if (player.burstsLeft) player.firerateTick += Math.min(3,stats.firerate/10);
        else player.firerateTick += stats.firerate;
    }
    if (player.firerateTick > 0) player.firerateTick--;

    if (player.iFrames > 0) player.iFrames--;
    else {
        enemies.forEach((enemy) => {
            if (enemy.spawning || player.iFrames) return;
            const x = (player.x-enemy.x);
            const y = (player.y-enemy.y);
            const hypot = Math.hypot(x,y);
            if (hypot && hypot < stats.playerSize+Math.max(enemy.size/2,enemy.size-100)) {
                
                player.vx += 100*Math.sign(x)/hypot + enemy.vx/10;
                player.vy += 100*Math.sign(y)/hypot + enemy.vy/10;
                if (!enemy.immovable) {
                    enemy.vx -= 25*Math.sign(x)/hypot;
                    enemy.vy -= 25*Math.sign(y)/hypot;
                }
                let red = 0;
                let blue = 0;
                player.iFrames = 75 + (stats.extraIframes || 0);
                for (var i = 0; i < 1 + (stats.extraReceivedDamage || 0); i++) {
                    if (stats.extraHealth > 0) {
                        blue++;
                        stats.extraHealth--;
                        player.showShieldBreak = 1;
                    } else {
                        red++;
                        stats.health--;
                        for(var a = 0; a < 3; a++) effects.push(new Effect(player.x+(1-2*Math.random())*stats.playerSize*3,player.y+(1-2*Math.random())*stats.playerSize*3,player.bloodPath,stats.playerSize*1.5+75,20,false,false,0.3));
                        for(var a = 0; a < 5; a++) floor.push({x:player.x+(1-2*Math.random())*stats.playerSize*3,y:player.y+(1-2*Math.random())*stats.playerSize*3,size:stats.playerSize*(0.5+Math.random()),reference:player.bloodPath,rotation:Math.PI*Math.random()});
                    }
                    game.showHit += 0.85;
                }
                
                game.freezeframes = 10;
                if (red) {
                    playsfx("redloss");
                    game.region.music[game.musicPos].file.pause();
                } else {
                    playsfx("blueloss");
                    game.region.music[game.musicPos].file.pause();
                }

                game.renderRedScreen = true;

                stats.onPlayerHits.forEach( (item) => item[1](item[0],enemy,blue,red));

                //playerDraw();
            }
        })
    }

    stats.playerSize *= 1.25;
    blocks.forEach((block) => {
        const diffx = player.x + stats.playerSize - block[0];
        const diffy = player.y + stats.playerSize - block[1];
        const diffx1 = -player.x + stats.playerSize + block[0]+block[2];
        const diffy1 = -player.y + stats.playerSize + block[1]+block[3];
        if (diffx > 0 && diffx1 > 0 && diffy > 0 && diffy1 > 0) {
            if (Math.min(diffx, diffx1) < Math.min(diffy,diffy1)) {
                player.vx = 0;
                if (diffx < diffx1) player.x = block[0]-stats.playerSize;
                else player.x = block[0]+block[2]+stats.playerSize;
            } else {
                player.vy = 0;
                if (diffy < diffy1) player.y = block[1]-stats.playerSize;
                else player.y = block[1]+block[3]+stats.playerSize;
            }
        }
    })
    stats.playerSize /= 1.25;

    if (player.dashCooldown <= 0) player.dashCooldown = 0;
    else player.dashCooldown -= 1/7;
    
    if (player.dashes >= 3) player.dashes = 3;
    else player.dashes += stats.dashRegenerateRate;
}

function playerDraw() {
    player.rotationTick += Math.PI/600;
    if (player.rotationTick > Math.PI*2) player.rotationTick -= Math.PI*2;

    if (!game.menu) stats.playerTicks.forEach( (item) => item[1](item[0]));
    if (game.regionTransfer > 1) draw(player.x,player.y,player.drawPath,stats.playerSize*(-1+game.regionTransfer),player.rotationTick);
    else if (game.regionTransfer > 0) draw(player.x,player.y,player.drawPath,stats.playerSize*(1+10*game.regionTransfer**2.5),player.rotationTick,1-game.regionTransfer);
    else {

        ctx.strokeStyle = "#cccccc50";
        ctx.beginPath();
        let count = 0;
        for (var i = -player.rotationTick; i < Math.PI*2-player.rotationTick && count+1 <= player.dashes; i += Math.PI*2/3) {
            ctx.moveTo(player.x + (stats.playerSize+15) * Math.cos(i+Math.PI/10),player.y + (stats.playerSize+15) * Math.sin(i+Math.PI/10))
            ctx.arc(player.x,player.y,stats.playerSize+15,i+Math.PI/10, i - Math.PI/10 + Math.PI*2/3 );
            count++;
        }
        ctx.lineCap = "round";
        ctx.lineWidth = 7;
        ctx.stroke();
        ctx.lineWidth = 3;
        ctx.lineCap = "butt";

        if (player.iFrames > 0) ctx.globalAlpha = 0.4;
        draw(player.x,player.y,player.drawPath,stats.playerSize,player.rotationTick);
        ctx.globalAlpha = 1;
        
        ctx.save();
        ctx.translate(player.x, player.y);
        if (mouse.x < player.x) ctx.scale(-1,1);
        ctx.rotate((Math.atan((mouse.y-player.y)/(mouse.x-player.x)) * (1-2*(mouse.x < player.x))) || 0);
        draw(70,0,game.weapon.reference.drawPath,25);
        ctx.restore();

        if (player.showShieldBreak > 0) {
            ctx.beginPath();
            //draw(player.x,player.y,player.shieldShard,stats.playerSize+200-150*player.showShieldBreak,i,false,true);
            if (player.showShieldBreak == 1) ctx.arc(player.x,player.y,stats.playerSize+250-230*player.showShieldBreak,0,Math.PI*2);
            else for (var i = 0; i < Math.PI*2; i += Math.PI/4) {
                const direction = player.rotationTick + i;
                ctx.moveTo(player.x + (1-player.showShieldBreak)*200*Math.cos(direction + Math.PI/8*player.showShieldBreak),player.y + (1-player.showShieldBreak)*200*Math.sin(direction + Math.PI/8*player.showShieldBreak));
                ctx.arc(player.x,player.y,stats.playerSize+250-230*player.showShieldBreak,direction,direction+Math.PI/4*player.showShieldBreak);
                ctx.closePath();
            }
            ctx.globalAlpha = player.showShieldBreak/2;
            ctx.fillStyle = "#29c";
            ctx.strokeStyle = "#068";
            ctx.fill();
            ctx.stroke();

            ctx.globalAlpha = 1;
            player.showShieldBreak -= 1/30;
            if (player.showShieldBreak < 0) player.showShieldBreak = 0;
        }
    }
}