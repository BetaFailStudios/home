function startMusic() {
    ease(game,"musicPopup",0,3);
    setTimeout(() => { ease(game,"musicPopup",1,3); }, 3000);

    const song = game.region.music[game.musicPos];

    song.attacklist.forEach((item) => { 
        if (item[2] && item[3]) for (var i = 0; i < item[2]; i++) {
            setTimeout( ( ) => { 
                if (game.region.music[game.musicPos] == song) game.enemyAttackWarning.push(item[1]);
            }, (item[0] + item[3]*i)*song.bpb*1000*60/song.bpm-500);
            setTimeout( ( ) => { 
                if (game.region.music[game.musicPos] == song) game.enemyAttack.push(item[1]);
            }, (item[0] + item[3]*i)*song.bpb*1000*60/song.bpm);
        }
        else {
            setTimeout( ( ) => { 
                if (game.region.music[game.musicPos] == song) game.enemyAttackWarning.push(item[1]);
            }, (item[0])*song.bpb*1000*60/song.bpm-500);
            setTimeout( ( ) => { 
                if (game.region.music[game.musicPos] == song) game.enemyAttack.push(item[1]);
            }, (item[0])*song.bpb*1000*60/song.bpm);
        }
    })

    song.file.volume = 0;
    song.file.currentTime = 0;
    ease(song.file,"volume", game.audioVolume, 0.5);
    song.file.play();
    setTimeout(() => { if (game.region.music[game.musicPos] == song) startMusic() }, song.file.duration*1000);
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