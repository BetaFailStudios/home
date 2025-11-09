const music = {
    "Haunted Armory": [
        {
            file: new Audio('uruhruhrhurhuruh.mp3'),
            bpm: 150,            //loops, offset
            bpb: 8,
            attacklist: [ 
                [0.125, "beat", 14, 0.25],[4.125, "beat", 12/0.25, 0.25],
                [0, "tick", 28, 0.125],[4, "tick", 12/0.125, 0.125],
                [4, "boom"],[4.46875, "boom",2,0.15625],[8, "boom"],[8.46875, "boom",2,0.15625],[6, "boom",4,0.1875],[10, "boom",4,0.1875],[13, "boom"],[19.4375, "boom",2,4],
                [7, "boom",2,4],[14, "boom",4,0.1875],[15, "boom"],
                [16, "beattick",3,1],[19, "beattick",2,0.25],
                [20, "beattick",3,1],[23, "beattick",2,0.25]
            ]
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
                [16, "slice",3,1],[16+3/32, "slice",3,1],[16 + 3/16, "dash",3,1], // bar 10
                [19, "slice",3,0.125],[19 + 11/32, "melee"],[19 + 7/16, "dash"], // bar 11
                [20, "slice",3,1],[20+3/32, "slice",3,1],[20 + 3/16, "dash",3,1], // bar 10
                [23, "slice",3,0.125],[23 + 11/32, "melee"],[23 + 7/16, "dash"], // bar 14
                [24, "melee",4,2],[24 + 3/8, "slice",4,2],[24 + 7/16, "dash",4,2],[24 + 15/16, "dash",4,2], // bar 12
                [25+3/16, "slice",4,2],[25 + 5/16, "slice",4,2],[25 + 7/16, "dash",4,2],[25 + 11/16, "melee",4,2], // bar 13
                [32, "disappear"],[32, "drum", 128, 0.03125], // amen break
                [36, "drum", 22*8, 0.125], // less amen break
                [36.125, "largedrum", 8, 1],[36 + 5/16, "largedrum", 8, 1],[36.625, "largedrum", 8, 1],[36.5 + 5/16, "largedrum", 7, 1],[36.5 + 7/16, "largedrum", 8, 1], // picked string
                [37.5 + 3/8, "largedrum", 4, 2], // picked string
                [40, "reappear"], // appearance
                [44, "slice", 2, 4],[44 + 3/16, "slice", 2, 4],[44.5, "melee", 2, 4], // bar 20
                [45.125, "slice", 2, 4],[45 + 7/16, "slice", 2, 4],[45.5 + 3/16, "melee", 2, 4], // bar 21
                [46, "slice", 2, 4],[46 + 3/16, "slice", 2, 4],[46.625, "melee", 2, 4], // bar 23
                [47, "slice", 2, 4],[47.125, "slice", 2, 4],[46 + 7/16, "melee", 2, 4],[46 + 11/16, "dash", 2, 4], // bar 24
                [52, "slice", 2, 0.5],[52 + 3/32, "slice"],[52.5 + 3/32, "melee"], // bar 28
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
    song.file.play();
    setTimeout(() => { if (game.musicPos == posToCheck) startMusic() }, song.file.duration*1000);
}

function restartMusic(input) {
    ease(music["Haunted Armory"][game.musicPos].file,"volume",0,1);
    game.musicPos = input;
    music["Haunted Armory"][game.musicPos].file.volume = 0;
    setTimeout(() => {
        ease(music["Haunted Armory"][game.musicPos].file,"volume",1,1.5);
        startMusic();
    },1000)
}