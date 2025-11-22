const player = {
    x: 0, y: 0,
    vx: 0, vy: 0,
    rotationTick: 0,
    drawPath: JSON.parse(
        `[{"type":"point","x":-250,"y":-200},{"type":"point","x":-50,"y":0},{"type":"point","x":-250,"y":200},{"type":"close"},{"type":"point","x":-200,"y":250,"move":true},{"type":"point","x":200,"y":250,"move":false},{"type":"point","x":0,"y":50,"move":false},{"type":"close"},{"type":"point","x":250,"y":200,"move":true},{"type":"point","x":250,"y":-200,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"close"},{"type":"point","x":0,"y":-50,"move":true},{"type":"point","x":200,"y":-250,"move":false},{"type":"point","x":-200,"y":-250,"move":false},{"type":"close"},{"type":"fill","r":150,"g":200,"b":200},{"type":"stroke","r":75,"g":125,"b":120}]`
    ),
    firerateTick: 0,
    iFrames: 0,
    dashCooldown: 0,
}

function playerTick() {
    ctx.save();
    ctx.translate(player.x, player.y);
    if (mouse.x < player.x) ctx.scale(-1,1);
    ctx.rotate((Math.atan((mouse.y-player.y)/(mouse.x-player.x)) * (1-2*(mouse.x < player.x))) || 0);
    draw(70,0,game.weapon.reference.drawPath,25);
    ctx.restore();
    if (player.iFrames > 0) ctx.globalAlpha = 0.4;
    draw(player.x,player.y,player.drawPath,stats.playerSize,player.rotationTick);
    if (player.iFrames > 0) ctx.globalAlpha = 1;

    player.x += player.vx;
    player.y += player.vy;
    player.vx *= 1-stats.friction;
    player.vy *= 1-stats.friction;

    if (!game.menu) {
        player.vx += (!!keys.d-!!keys.a)*stats.playerSpeed * (1-0.293*(keys.s ^ keys.w));
        player.vy += (!!keys.s-!!keys.w)*stats.playerSpeed * (1-0.293*(keys.d ^ keys.a));
    }

    player.rotationTick += Math.PI/600;
    if (player.rotationTick > Math.PI*2) player.rotationTick -= Math.PI*2;

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
    if ((mouse.down || player.burstsLeft) && player.firerateTick <= 0) {
        let lookDirection = (Math.atan((mouse.y-player.y)/(mouse.x-player.x)) + Math.PI*(mouse.x < player.x)) || (Math.PI*(mouse.x < player.x));
        
        if (stats.projectiles > 1) lookDirection -= stats.spread/2;
        for (var i = 0; i < stats.projectiles; i++) {
            bullets.push(new Bullet({x: player.x + Math.cos(lookDirection)*50, y: player.y + Math.sin(lookDirection)*50, direction: lookDirection, triggerExpire: true}));
            lookDirection += stats.spread/(stats.projectiles-1);
        }

        if (!player.burstsLeft) player.burstsLeft = stats.bursts-1;
        else player.burstsLeft--;
        if (player.burstsLeft) player.firerateTick += Math.min(3,stats.firerate/10);
        else player.firerateTick += stats.firerate;
    } else if (player.firerateTick > 0) player.firerateTick--;

    if (player.iFrames > 0) player.iFrames--;
    else {
        enemies.forEach((enemy) => {
            if (enemy.spawning) return;
            const x = (player.x-enemy.x);
            const y = (player.y-enemy.y);
            const hypot = Math.hypot(x,y);
            if (hypot && hypot < stats.playerSize+enemy.size/2.5) {
                player.vx += 150*Math.sign(x)/hypot + enemy.vx/2;
                player.vy += 150*Math.sign(y)/hypot + enemy.vy/2;
                if (!enemy.immovable) {
                    enemy.vx -= 25*Math.sign(x)/hypot;
                    enemy.vy -= 25*Math.sign(y)/hypot;
                }
                player.iFrames = 30 + (stats.extraIframes || 0);
                for (var i = 0; i < 1 + (stats.extraReceivedDamage || 0); i++) if (stats.extraHealth) stats.extraHealth--;
                else stats.health--;
                game.showHit += 0.75;

                stats.onPlayerHits.forEach( (item) => item[1](item[0],enemy));
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
    else player.dashCooldown -= 1/30;
}