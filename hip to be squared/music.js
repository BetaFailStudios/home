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
                [16, "beattick",3,1],[19, "beattick",2,0.25]
                [20, "beattick",3,1],[23, "beattick",2,0.25]
            ]
        }
    ]
}

function startMusic() {
    const song = music["Haunted Armory"][0];

    song.attacklist.forEach((item) => { 
        if (item[2] && item[3]) for (var i = 0; i < item[2]; i++) {
            setTimeout( ( ) => { 
                game.enemyAttackWarning += item[1];
            }, (item[0] + item[3]*i)*song.bpb*1000*60/song.bpm-400);
            setTimeout( ( ) => { 
                game.enemyAttack += item[1];
            }, (item[0] + item[3]*i)*song.bpb*1000*60/song.bpm);
        }
        else {
            setTimeout( ( ) => { 
                game.enemyAttackWarning += item[1];
            }, (item[0])*song.bpb*1000*60/song.bpm-400);
            setTimeout( ( ) => { 
                game.enemyAttack += item[1];
            }, (item[0])*song.bpb*1000*60/song.bpm);
        }
    })

    song.file.currentTime = 0;
    song.file.play();
    setTimeout(startMusic, song.file.duration*1000);
}