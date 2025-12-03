const regions = [
    [
        {
            name: "Haunted Armory",
            enemies: [0,1,3,4,6,13],
            bosses: [8]
        }
    ]
]

game.region = regions[0][0];

for (var i = 0; i < 6; i++) 
    roomEffects.push({moveSpeed: 0.5 + Math.random()*2,x:-1300+Math.random()*2600,y:-800+Math.random()*1600,size:600+Math.random()*400,reference:roomEffectList[game.region.name][Math.floor(Math.random()*roomEffectList[game.region.name].length)]});