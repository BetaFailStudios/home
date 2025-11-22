function drawPauseMenu() {
    
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