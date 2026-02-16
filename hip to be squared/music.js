function startMusic() {
    game.musicSyncList = [];
    ease(game,"musicPopup",0,3);
    setTimeout(() => { ease(game,"musicPopup",1,3); }, 3000);

    const song = game.region.music[game.musicPos];

    song.attacklist.forEach((item) => { 
        for (var i = 0; i < (item[2] || 1); i++) {
            game.musicSyncList.push(
                [0.05+(item[0] + (item[3] || 0)*i)*song.bpb*60/song.bpm-0.5, item[1], true ],
                [0.05+(item[0] + (item[3] || 0)*i)*song.bpb*60/song.bpm, item[1] ]
            )
        }
    })

    game.musicSyncList.sort((a,b)=> { return a[0] - b[0] });

    song.file.volume = 0;
    song.file.currentTime = 0;
    ease(song.file,"volume", game.audioVolume, 0.5);
    song.file.play();
}

function musicTick() {
    if (game.region.music[game.musicPos].file.currentTime == game.region.music[game.musicPos].file.duration) startMusic();
    if (!game.musicSyncList.length) return;
    const item = game.musicSyncList[0];

    if (item[0] <= game.region.music[game.musicPos].file.currentTime) {
        if (item[2]) {
            game.enemyAttackWarning.push(item[1]);
        } else {
            game.enemyAttack.push(item[1]);
        }
        game.musicSyncList.splice(0,1);
        musicTick();
    }
}

function restartMusic(input) {
    ease(game.region.music[game.musicPos].file,"volume",0,1);
    game.musicPos = input;
    game.region.music[game.musicPos].file.volume = 0;
    setTimeout(() => {
        ease(game.region.music[game.musicPos].file,"volume",game.audioVolume,1.5);
        startMusic();
    },1000)
}