const music = {
    "Haunted Armory": [
        {
            file: new Audio('Cubic Battles.mp3'),
            bpm: 135,            //loops, offset
            bpb: 8,
            attacklist: JSON.parse(
                `[[0,"tick"],[0.375,"tick"],[0.5,"tick"],[0.875,"tick"],[1,"tick"],[1.375,"tick"],[1.5,"tick"],[1.875,"tick"],[1.125,"beat"],[1.625,"beat"],[0.125,"beat"],[0.625,"beat"],[2,"tick"],[2.375,"tick"],[2.5,"tick"],[2.875,"tick"],[3,"tick"],[3.375,"tick"],[3.5,"tick"],[3.875,"tick"],[2.125,"beat"],[2.625,"beat"],[3.125,"beat"],[3.625,"beat"],[3.90625,"tick"],[3.9375,"tick"],[3.96875,"tick"],[4,"beat"],[4.125,"tick"],[4.15625,"tick"],[4.1875,"tick"],[4.21875,"beat"],[4.375,"tick"],[4.40625,"tick"],[4.5,"beat"],[4.625,"tick"],[4.65625,"tick"],[4.6875,"tick"],[4.71875,"beat"],[4.875,"tick"],[4.90625,"tick"],[4.9375,"tick"],[4.96875,"tick"],[5,"beat"],[5.125,"tick"],[5.15625,"tick"],[5.1875,"tick"],[5.21875,"beat"],[5.34375,"tick"],[5.375,"tick"],[5.40625,"tick"],[5.4375,"tick"],[5.46875,"tick"],[5.5,"boom"],[5.59375,"beat"],[5.9375,"tick"],[5.953125,"tick"],[5.96875,"tick"],[5.984375,"tick"],[6,"beat"],[6.125,"tick"],[6.15625,"tick"],[6.1875,"tick"],[6.21875,"beat"],[6.375,"tick"],[6.40625,"tick"],[6.46875,"tick"],[6.5,"beat"],[6.625,"tick"],[6.65625,"tick"],[6.6875,"tick"],[6.71875,"beat"],[6.875,"tick"],[6.90625,"tick"],[6.9375,"tick"],[6.96875,"tick"],[7,"beat"],[7.125,"tick"],[7.15625,"tick"],[7.1875,"tick"],[7.21875,"boom"],[7.34375,"tick"],[7.375,"tick"],[7.40625,"tick"],[7.4375,"tick"],[7.46875,"tick"],[7.5,"boom"],[7.875,"beat"],[7.9375,"tick"],[7.96875,"tick"],[8,"boom"],[8.5,"boom"],[9,"boom"],[9.5,"boom"],[9.75,"boom"],[9.8125,"boom"],[9.875,"boom"],[9.9375,"boom"],[10,"boom"],[10.5,"boom"],[11,"boom"],[11.5,"boom"],[11.75,"boom"],[11.8125,"boom"],[11.875,"boom"],[11.9375,"boom"],[12.25,"tick"],[12.4375,"tick"],[12.5625,"tick"],[13.0625,"tick"],[13.125,"tick"],[13.25,"tick"],[13.3125,"tick"],[13.4375,"tick"],[13.5625,"tick"],[13.75,"boom"],[13.8125,"boom"],[13.875,"boom"],[13.9375,"boom"],[14.0625,"tick"],[14.125,"tick"],[14.25,"tick"],[14.3125,"tick"],[14.4375,"tick"],[14.5625,"tick"],[14.625,"tick"],[14.75,"tick"],[14.8125,"tick"],[14.9375,"tick"],[15.0625,"tick"],[15.4375,"tick"],[15.5625,"tick"],[15.75,"tick"],[15.9375,"tick"],[12.625,"tick"],[12.75,"tick"],[12.8125,"tick"],[8.125,"tick"],[8.625,"tick"],[9.125,"tick"],[9.625,"tick"],[10.125,"tick"],[10.625,"tick"],[11.125,"tick"],[11.625,"tick"],[12.9375,"tick"],[15,"tick"],[15.1875,"tick"],[15.25,"tick"],[15.375,"tick"],[15.5,"tick"],[15.6875,"tick"],[15.875,"tick"],[12,"tick"],[12.1875,"tick"],[12.375,"tick"],[12.3125,"tick"],[12.125,"tick"],[12.5,"tick"],[12.6875,"tick"],[12.875,"tick"],[13,"tick"],[12.0625,"tick"],[12.125,"beat"],[12.3125,"beat"],[12.625,"beat"],[12.8125,"beat"],[13.125,"beat"],[13.1875,"tick"],[13.3125,"beat"],[13.375,"tick"],[13.5,"tick"],[13.625,"tick"],[13.625,"beat"],[13.6875,"tick"],[14,"tick"],[14.1875,"tick"],[14.375,"tick"],[14.5,"tick"],[14.6875,"tick"],[14.875,"tick"],[14.125,"beat"],[14.3125,"beat"],[14.625,"beat"],[14.8125,"beat"],[15.125,"tick"],[15.3125,"tick"],[15.625,"tick"],[15.8125,"tick"],[15.125,"beat"],[15.3125,"beat"],[15.625,"beat"],[15.8125,"beat"],[7.59375,"beat"],[4.46875,"tick"],[5.875,"tick"],[16,"beat"],[16.21875,"tick"],[16.25,"tick"],[16.28125,"tick"],[16.34375,"tick"],[16.40625,"tick"],[16.46875,"tick"],[16.625,"tick"],[16.65625,"tick"],[16.5,"beat"],[16.71875,"beat"],[16.84375,"tick"],[16.875,"tick"],[16.90625,"tick"],[16.9375,"tick"],[16.96875,"tick"],[17,"beat"],[17.125,"tick"],[17.15625,"tick"],[17.21875,"tick"],[17.28125,"beat"],[17.375,"tick"],[17.40625,"tick"],[17.4375,"tick"],[17.46875,"tick"],[17.625,"tick"],[17.65625,"tick"],[17.71875,"tick"],[17.78125,"beat"],[17.875,"tick"],[17.90625,"tick"],[17.9375,"tick"],[17.96875,"tick"],[18.1875,"tick"],[18.25,"beat"],[18,"boom"],[17.5,"boom"],[18.375,"tick"],[18.40625,"tick"],[18.46875,"beat"],[18.5625,"tick"],[18.625,"tick"],[18.65625,"tick"],[18.71875,"beat"],[18.3125,"tick"],[18.84375,"tick"],[18.875,"tick"],[18.90625,"tick"],[18.9375,"tick"],[18.96875,"tick"],[19,"beat"],[19.125,"tick"],[19.15625,"tick"],[19.21875,"tick"],[19.28125,"beat"],[19.375,"tick"],[19.40625,"tick"],[19.4375,"tick"],[19.46875,"tick"],[19.5,"boom"],[19.625,"tick"],[19.65625,"tick"],[19.71875,"tick"],[19.78125,"beat"],[19.875,"tick"],[19.90625,"tick"],[19.9375,"tick"],[19.96875,"tick"],[20,"boom"],[20.21875,"tick"],[20.25,"tick"],[20.28125,"tick"],[20.34375,"tick"],[20.40625,"tick"],[20.46875,"tick"],[20.5,"beat"],[20.53125,"tick"],[20.59375,"tick"],[20.65625,"tick"],[20.71875,"tick"],[20.75,"beat"],[20.78125,"tick"],[20.84375,"tick"],[20.90625,"tick"],[20.96875,"tick"],[21,"beat"],[21.09375,"tick"],[21.15625,"tick"],[21.21875,"tick"],[21.25,"beat"],[21.28125,"tick"],[21.3125,"tick"],[21.34375,"tick"],[21.375,"tick"],[21.4375,"tick"],[21.46875,"tick"],[21.53125,"tick"],[21.5625,"tick"],[21.625,"tick"],[21.65625,"tick"],[21.71875,"tick"],[21.75,"tick"],[21.8125,"tick"],[21.84375,"tick"],[21.875,"tick"],[21.90625,"tick"],[21.9375,"tick"],[21.96875,"tick"],[22,"boom"],[22.125,"tick"],[22.15625,"tick"],[22.21875,"tick"],[22.28125,"beat"],[22.375,"tick"],[22.40625,"tick"],[22.4375,"tick"],[22.46875,"tick"],[22.5,"beat"],[22.625,"tick"],[22.65625,"tick"],[22.71875,"tick"],[22.78125,"beat"],[22.875,"tick"],[22.90625,"tick"],[22.9375,"tick"],[22.96875,"tick"],[23,"boom"],[23.125,"tick"],[23.15625,"tick"],[23.21875,"tick"],[23.28125,"beat"],[23.375,"tick"],[23.40625,"tick"],[23.4375,"tick"],[23.46875,"tick"],[23.5,"beat"],[23.625,"tick"],[23.65625,"tick"],[23.71875,"tick"],[23.78125,"beat"],[23.875,"tick"],[23.90625,"tick"],[23.9375,"tick"],[23.96875,"tick"],[24,"beat"],[24.125,"tick"],[24.15625,"tick"],[24.21875,"beat"],[24.375,"tick"],[24.40625,"tick"],[24.4375,"tick"],[24.46875,"tick"],[24.5,"beat"],[24.5625,"tick"],[24.625,"tick"],[24.65625,"tick"],[24.71875,"boom"],[24.8125,"boom"],[24.90625,"boom"],[25,"beat"],[25.125,"tick"],[25.15625,"tick"],[25.21875,"beat"],[25.34375,"tick"],[25.375,"tick"],[25.40625,"tick"],[25.4375,"tick"],[25.46875,"tick"],[25.625,"tick"],[25.65625,"tick"],[25.71875,"boom"],[25.84375,"boom"],[25.5,"beat"],[25.921875,"boom"],[26,"beat"],[26.125,"tick"],[26.15625,"tick"],[26.21875,"beat"],[26.3125,"tick"],[26.375,"tick"],[26.4375,"tick"],[26.5,"tick"],[26.53125,"tick"],[26.5625,"tick"],[26.59375,"tick"],[26.625,"tick"],[26.65625,"tick"],[26.71875,"boom"],[26.8125,"boom"],[26.921875,"boom"],[27,"beat"],[27.125,"tick"],[27.15625,"tick"],[27.21875,"beat"],[27.3125,"tick"],[27.375,"tick"],[27.4375,"tick"],[27.5,"beat"],[27.625,"boom"],[27.71875,"boom"],[27.8125,"boom"],[27.90625,"boom"],[28,"boom"],[28,"tick"]]`
            )
        },{
            file: new Audio('slthunderLOOPVERSION.mp3'),
            bpm: 150,            //loops, offset
            bpb: 8,
            attacklist: [
                [0.125, "drum", 14, 0.25],[4.125, "drum", 27*4, 0.25],
                [4, "dash",3,4],[4.5-1/32, "slice",3,4],[4.625, "slice",3,4],[4.5+7/32, "dash",3,4], // bar 2
                [5.25, "melee",3,4],[5.375, "slice",3,4],[5.5+1/16, "slice",3,4],[5.5+3/16, "dash",3,4], // bar 3
                [6, "slice",3,4],[6+3/16, "slice",3,4],[6.375, "slice",3,4],[6.5+1/16, "slice",3,4], // bar 4
                [7, "disappear",3,4],[7.5+3/16, "reappear",3,4], // bar 5
                [16, "slice",3,1],[16+3/32, "sword",3,1],[16 + 3/16, "knives",3,1], // bar 10
                [19, "slice",3,0.125],[19 + 11/32, "sword"],[19 + 7/16, "knives"], // bar 11
                [20, "slice",3,1],[20+3/32, "sword",3,1],[20 + 3/16, "knives",3,1], // bar 10
                [23, "slice",3,0.125],[23 + 11/32, "sword"],[23 + 7/16, "dash"], // bar 14
                [24, "melee",4,2],[24 + 3/8, "slice",4,2],[24 + 7/16, "knives",4,2],[24 + 15/16, "dash",4,2], // bar 12
                [25+3/16, "slice",4,2],[25 + 5/16, "slice",4,2],[25 + 7/16, "dash",4,2],[25 + 11/16, "melee",4,2], // bar 13
                [32, "disappear"],[32, "sword", 32, 0.125], // amen break
                [36.125, "knives", 8, 1],[36 + 5/16, "knives", 8, 1],[36.625, "knives", 8, 1],[36.5 + 5/16, "knives", 7, 1],[36.5 + 7/16, "knives", 8, 1], // picked string
                [37.5 + 3/8, "sword", 4, 2], // picked string
                [40, "reappear"], // appearance
                [44, "sword", 2, 4],[44 + 3/16, "knives", 2, 4],[44.5, "melee", 2, 4], // bar 20
                [45.125, "slice", 2, 4],[45 + 7/16, "slice", 2, 4],[45.5 + 3/16, "melee", 2, 4], // bar 21
                [46, "slice", 2, 4],[46 + 3/16, "sword", 2, 4],[46.625, "melee", 2, 4], // bar 23
                [47, "slice", 2, 4],[47.125, "slice", 2, 4],[46 + 7/16, "melee", 2, 4],[46 + 11/16, "dash", 2, 4], // bar 24
                [52, "slice", 2, 0.5],[52 + 3/32, "sword"],[52.5 + 3/32, "knives"], // bar 28
                [53, "slice", 2, 1],[53.125, "slice",2,1],[53 + 7/16, "slice", 2, 1],[53.5 + 3/16, "slice", 2, 1],[53.5 + 7/16, "slice", 2, 1], // bar 29
                [54.125, "melee", 4, 0.25],[54 + 3/16, "slice", 4, 0.25], // bar 30
                [55.25, "slice", 2, 0.125], // bar 30
            ]
        }
    ]
}

function startMusic() {
    const posToCheck = game.musicPos;

    const song = music["Haunted Armory"][game.musicPos];

    song.attacklist.forEach((item) => { 
        if (item[2] && item[3]) for (var i = 0; i < item[2]; i++) {
            setTimeout( ( ) => { 
                if (game.musicPos == posToCheck) game.enemyAttackWarning += item[1];
            }, (item[0] + item[3]*i)*song.bpb*1000*60/song.bpm-500);
            setTimeout( ( ) => { 
                if (game.musicPos == posToCheck) game.enemyAttack += item[1];
            }, (item[0] + item[3]*i)*song.bpb*1000*60/song.bpm);
        }
        else {
            setTimeout( ( ) => { 
                if (game.musicPos == posToCheck) game.enemyAttackWarning += item[1];
            }, (item[0])*song.bpb*1000*60/song.bpm-500);
            setTimeout( ( ) => { 
                if (game.musicPos == posToCheck) game.enemyAttack += item[1];
            }, (item[0])*song.bpb*1000*60/song.bpm);
        }
    })

    song.file.currentTime = 0;
    song.file.volume = game.audioVolume;
    song.file.play();
    setTimeout(() => { if (game.musicPos == posToCheck) startMusic() }, song.file.duration*1000);
}

function restartMusic(input) {
    ease(music["Haunted Armory"][game.musicPos].file,"volume",0,1);
    game.musicPos = input;
    music["Haunted Armory"][game.musicPos].file.volume = 0;
    setTimeout(() => {
        ease(music["Haunted Armory"][game.musicPos].file,"volume",game.audioVolume,1.5);
        startMusic();
    },1000)
}