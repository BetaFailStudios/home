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