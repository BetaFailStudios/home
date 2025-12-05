const menuButtons = {
    "main": [[ "start", "options", "quit" ],[
        () => {
            game.menu = false;
        },() => {
            game.optionsMenu = true;
        },() => {
            window.location.href = "https://betafailstudios.com";
        }
    ]],
    "pause": [[ "resume", "options", "main menu" ],[
        () => {
            game.menu = false;
        },() => {
            game.optionsMenu = true;
        },() => {
            window.location.reload()
        }
    ]],
    "options": [[ "back", "- volume +", "damage numbers" ],[
        () => {
            game.optionsMenu = false;
        },(lr) => {
            game.audioVolume += lr*0.1;
            game.audioVolume = Math.min(1,Math.max(0,game.audioVolume));
            music["Haunted Armory"][game.musicPos].file.volume = game.audioVolume;
            localStorage.setItem("htbs-audioVolume",game.audioVolume);
        },() => {
            game.showDamageNumbers = !game.showDamageNumbers;
            localStorage.setItem("htbs-dmgNumbersOption",game.showDamageNumbers);
        }
    ]]
}

function drawMenu() {
    if (game.menu == "death") {
        ctx.beginPath();
        ctx.fillStyle = "#000000cc";
        ctx.fillRect(-900,-500,1800,1000);

        ctx.beginPath();
        ctx.strokeStyle = "#777";
        ctx.fillStyle = "#ccc";
        ctx.font = "100px share tech"
        ctx.strokeText("Game over, ctrl + r to restart", 0, 0);
        ctx.fillText("Game over, ctrl + r to restart", 0, 0);

        return;
    }

    ctx.fillStyle = "#cccccc99";
    ctx.fillRect(-900,-500,1800,1000);
    
    ctx.lineWidth = 10;
    
    draw(-400,-200,game.gameIcon,300);

    let menuToChoose = game.menu;
    if (game.optionsMenu) menuToChoose = "options";

    menuButtons[menuToChoose][0].forEach((item,i) => {
        const yPos = i*150;
        const xPos = item.length*15;

        ctx.beginPath();
        ctx.moveTo(300-xPos,yPos-200);
        ctx.lineTo(350-xPos,yPos-250);
        ctx.lineTo(350+xPos,yPos-250);
        ctx.lineTo(400+xPos,yPos-200);
        ctx.lineTo(350+xPos,yPos-150);
        ctx.lineTo(350-xPos,yPos-150);
        ctx.closePath();
        ctx.fillStyle = "#555";
        ctx.strokeStyle = "#222";
        ctx.fill();
        ctx.stroke();

        if (Math.abs(mouse.x-350) < xPos+100 && Math.abs(mouse.y-yPos+200) < 70) {
            const xPosExtra = item.length*15+25;

            ctx.beginPath();
            ctx.moveTo(350-xPosExtra,yPos-150);
            ctx.lineTo(300-xPosExtra,yPos-200);
            ctx.lineTo(350-xPosExtra,yPos-250);
            ctx.moveTo(350+xPosExtra,yPos-150);
            ctx.lineTo(400+xPosExtra,yPos-200);
            ctx.lineTo(350+xPosExtra,yPos-250);
            ctx.strokeStyle = "#222";
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.fillStyle = "#999";
        ctx.strokeStyle = "#222";
        ctx.font = "55px share tech";
        ctx.strokeText(item.toUpperCase(),350,yPos-200);
        ctx.fillText(item.toUpperCase(),350,yPos-200)

        if (game.optionsMenu) if (i == 1) {
            ctx.strokeText("Lower Rez: CTRL +",350,yPos+200);
            ctx.fillText("Lower Rez: CTRL +",350,yPos+200)

            ctx.lineCap = "round";
            ctx.lineWidth = 15;
            ctx.beginPath();
            ctx.moveTo(350-xPos,yPos-125);
            ctx.lineTo(350+xPos,yPos-125);
            ctx.strokeStyle = "#222";
            ctx.stroke();

            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(350-xPos,yPos-125);
            ctx.lineTo(350-xPos+xPos*game.audioVolume*2,yPos-125);
            ctx.strokeStyle = "#999";
            ctx.stroke();
            ctx.lineCap = "butt";
            ctx.lineWidth = 10;
        } else if (i == 2) {
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(350-xPos,yPos-125);
            ctx.lineTo(350+xPos,yPos-125);
            ctx.lineWidth = 15;
            ctx.strokeStyle = "#222";
            ctx.stroke();
            ctx.lineWidth = 5;
            if (game.showDamageNumbers) ctx.strokeStyle = "#3c3";
            else ctx.strokeStyle = "#c33";
            ctx.stroke();
            ctx.lineCap = "butt";
            ctx.lineWidth = 10;
        }
    });

    ctx.lineWidth = 3;
}

function menuChoose() {
    let menuToChoose = game.menu;
    if (game.optionsMenu) menuToChoose = "options";

    menuButtons[menuToChoose][0].forEach((item,i) => {
        const yPos = i*150;
        const xPos = item.length*15+50;

        if (Math.abs(mouse.x-350) < xPos+100 && Math.abs(mouse.y-yPos+200) < 70) menuButtons[menuToChoose][1][i](Math.sign(mouse.x-350));
    });
}

function drawInventory() {
    ctx.fillStyle = "#cccccc99";
    ctx.fillRect(-900,-500,1800,1000);
    ctx.beginPath();
    const sizeWeapon = 250;
    ctx.moveTo(-sizeWeapon,0);
    ctx.lineTo(0,sizeWeapon);
    ctx.lineTo(sizeWeapon,0);
    ctx.lineTo(0,-sizeWeapon);
    ctx.closePath();
    ctx.fillStyle = "#ccc";
    ctx.fill();

    switch(game.weapon.rarity) {
        case 1: {
            ctx.fillStyle = "#55cc55"
            break; 
        }
        case 2: { 
            ctx.fillStyle = "#5577cc"
            break; 
        }
        case 3: { 
            ctx.fillStyle = "#cccc55"
            break; 
        }
        case 4: { 
            ctx.fillStyle = "#9955cc"
            break; 
        }
        default: { 
            ctx.fillStyle = "#999999"
            break; 
        }
    }
    ctx.fillStyle += "77";
    ctx.strokeStyle = "#222";

    ctx.fill();
    ctx.stroke();

    draw(0,0,game.weapon.reference.drawPath,100,Math.sin(player.rotationTick*5)/3);
    if (Math.hypot(mouse.x,mouse.y) < 200) drawItemDesc(game.weapon,0,0);

    [[-300,-300],[300,-300],[-450,0],[450,0],[-300,300],[300,300]].forEach((item, i) => {
        if (game.relicsEquipped[i]) {
            ctx.beginPath();

            const size = 135;
            ctx.moveTo(item[0]-size,item[1]);
            ctx.lineTo(item[0],item[1]+size);
            ctx.lineTo(item[0]+size,item[1]);
            ctx.lineTo(item[0],item[1]-size);
            ctx.closePath();
            ctx.fillStyle = "#ccc";
            ctx.fill();

            switch(game.relicsEquipped[i].rarity) {
                case 1: {
                    ctx.fillStyle = "#55cc55"
                    break; 
                }
                case 2: { 
                    ctx.fillStyle = "#5577cc"
                    break; 
                }
                case 3: { 
                    ctx.fillStyle = "#cccc55"
                    break; 
                }
                case 4: { 
                    ctx.fillStyle = "#9955cc"
                    break; 
                }
                default: { 
                    ctx.fillStyle = "#999999"
                    break; 
                }
            }
            ctx.fillStyle += "77";
            ctx.strokeStyle = "#222";

            ctx.fill();
            ctx.stroke();


            draw(...item,game.relicsEquipped[i].reference.drawPath,75,Math.sin(player.rotationTick*5)/3);
            if (Math.hypot(mouse.x-item[0],mouse.y-item[1]) < 200) drawItemDesc(game.relicsEquipped[i],...item);
        }
    })
}

function drawHealthBars() {
    if (game.bossHealth) {
        ctx.lineWidth = 7;
        ctx.beginPath();
        const maxBounds = 1600;
        ctx.moveTo(-900, -500+5);
        ctx.lineTo(maxBounds+55-900, -500+5);
        ctx.lineTo(maxBounds+20-900, -500+40);
        ctx.lineTo(-900, -500+40);
        ctx.closePath();
        ctx.fillStyle = "#333"
        ctx.strokeStyle = "#222";
        ctx.fill();
        ctx.stroke();

        const healthBounds = 1600*game.bossHealth/game.bossHealthMax;
        ctx.beginPath();
        ctx.moveTo(-900, -500+5);
        ctx.lineTo(healthBounds+55-900, -500+5);
        ctx.lineTo(healthBounds+20-900, -500+40);
        ctx.lineTo(-900, -500+40);
        ctx.closePath();
        ctx.fillStyle = "#900";
        ctx.fill();
        ctx.stroke();
    }

    ctx.lineWidth = 7;
    ctx.beginPath();
    const maxBounds = 500;
    ctx.moveTo(-900, 500-5);
    ctx.lineTo(maxBounds+40-900, 500-5);
    ctx.lineTo(maxBounds+20-900, 500-25);
    ctx.lineTo(-900, 500-25);
    ctx.closePath();
    ctx.fillStyle = "#333"
    ctx.strokeStyle = "#222";
    ctx.fill();
    ctx.stroke();
        
    if (stats.health > 0) {
        const healthBounds = 500*stats.health/stats.healthMax;
        ctx.beginPath();
        ctx.moveTo(-900, 500-5);
        ctx.lineTo(healthBounds+40-900, 500-5);
        ctx.lineTo(healthBounds+20-900, 500-25);
        ctx.lineTo(-900, 500-25);
        ctx.closePath();
        ctx.fillStyle = "#900";
        ctx.fill();
        ctx.stroke();
    }

    ctx.lineWidth = 7;
    ctx.beginPath();
    const maxExtraBounds = 250;
    ctx.moveTo(maxBounds+40-900, 500-5);
    ctx.lineTo(maxBounds+maxExtraBounds+40-900, 500-5);
    ctx.lineTo(maxBounds+maxExtraBounds+20-900, 500-25);
    ctx.lineTo(maxBounds+20-900, 500-25);
    ctx.closePath();
    ctx.fillStyle = "#333"
    ctx.strokeStyle = "#222";
    ctx.fill();
    ctx.stroke();
        
    if (stats.extraHealth > 0 ) {
        const extraBounds = 250*(stats.extraHealth/stats.extraHealthMax);
        ctx.beginPath();
        ctx.moveTo(maxBounds+40-900, 500-5);
        ctx.lineTo(maxBounds+extraBounds+40-900, 500-5);
        ctx.lineTo(maxBounds+extraBounds+20-900, 500-25);
        ctx.lineTo(maxBounds+20-900, 500-25);
        ctx.closePath();
        ctx.fillStyle = "#29c";
        ctx.fill();
        ctx.stroke();
    }

    ctx.beginPath();
    for(var i = 1; i < stats.healthMax; i++) {
        ctx.moveTo(maxBounds*i/stats.healthMax+40-900, 500-5);
        ctx.lineTo(maxBounds*i/stats.healthMax+20-900, 500-25);
    }
    for(var i = 1; i < stats.extraHealthMax; i++) {
        ctx.moveTo(maxBounds+maxExtraBounds*i/stats.extraHealthMax+40-900, 500-5);
        ctx.lineTo(maxBounds+maxExtraBounds*i/stats.extraHealthMax+20-900, 500-25);
    }
    ctx.strokeStyle = "#22222244";
    ctx.stroke();

    ctx.lineWidth = 7;
    ctx.beginPath();
    const maxBoundsDash = 400;
    ctx.moveTo(-900+20, 500-25);
    ctx.lineTo(maxBoundsDash+35-900, 500-25);
    ctx.lineTo(maxBoundsDash+20-900, 500-40);
    ctx.lineTo(-900+20, 500-40);
    ctx.closePath();
    ctx.fillStyle = "#333"
    ctx.strokeStyle = "#222";
    ctx.fill();
    ctx.stroke();
        
    if (player.dashCooldown <= 1 ) {
        const dashBounds = 400*Math.min(1,1-player.dashCooldown);
        ctx.beginPath();
        ctx.moveTo(-900+20, 500-25);
        ctx.lineTo(dashBounds+35-900, 500-25);
        ctx.lineTo(dashBounds+20-900, 500-40);
        ctx.lineTo(-900+20, 500-40);
        ctx.closePath();
        ctx.fillStyle = "#ccc";
        ctx.fill();
        ctx.stroke();
    }

    if (game.showHit > 0) {
        game.showHit -= 1/75;
        if (game.showHit > 1) game.showHit = 1;
        else if (game.showHit < 0) game.showHit = 0;

        const grid = 300;
        const offset = 200*(1-game.showHit);

        ctx.lineWidth = 6;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.rect(1800,-1000,-3600,2000);
        ctx.moveTo(-offset-800 + Math.random()*50,-offset-400 + Math.random()*50);
        for (var i = -800+grid; i < 800; i += grid) ctx.lineTo(i,-offset-400 + Math.random()*50);
        ctx.lineTo(offset+800 - Math.random()*50,-offset-400 + Math.random()*50);
        for (var i = -400+grid; i < 400; i += grid) ctx.lineTo(offset+800 - Math.random()*50,i);
        ctx.lineTo(offset+800 - Math.random()*50,offset+400 - Math.random()*50);
        for (var i = 800-grid; i > -800; i -= grid) ctx.lineTo(i,offset+400 - Math.random()*50);
        ctx.lineTo(-offset-800 + Math.random()*50,offset+400 - Math.random()*50);
        for (var i = 400-grid; i > -400; i -= grid) ctx.lineTo(-offset-800 + Math.random()*50,i);
        ctx.closePath();
        
        ctx.strokeStyle = "#522";
        ctx.fillStyle = "#922";
        ctx.stroke();
        ctx.fill();

        ctx.globalAlpha = 1;
    }
}

function drawMusicPopup() {
    ctx.beginPath();
    ctx.fillStyle = "#ccc";
    ctx.strokeStyle = "#222";
    ctx.font = "40px share tech";
    ctx.lineWidth = 20;
    ctx.strokeText(music[game.region.name][game.musicPos].popup,300,450+100*game.musicPopup**5);
    ctx.fillText(music[game.region.name][game.musicPos].popup,300,450+100*game.musicPopup**5);
    ctx.lineWidth = 3;
}