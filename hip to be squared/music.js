// This file is Copyright (C) 2025 BetaFail Studios, all rights reserved.

//const audioCtx = new window.AudioContext();
//const audioElement = document.getElementById('music');
//const source = audioCtx.createMediaElementSource(audioElement);

//const filter = audioCtx.createBiquadFilter();
//filter.type = 'lowpass';
//filter.frequency.value = 2000;

async function startMusic(input) {
    game.musicSyncList = [];
    ease(game,"musicPopup",0,3);
    setTimeout(() => { ease(game,"musicPopup",1,3); }, 3000);

    if (input) game.currentMusic = input;

    //audioCtx.createMediaElementSource(game.currentMusic.file).connect(filter);

    game.musicSyncList = Object.assign([], game.currentMusic.attacklistReady);

    game.currentMusic.file.volume = 0;
    game.currentMusic.file.currentTime = 0;
    ease(game.currentMusic.file,"volume", game.audioVolume, 0.5);
    game.currentMusic.file.play();

    //if (!game.afterBossStarted) return;
    //if (game.bossHealthMax) game.bossHealthMax *= 0.3
    //enemies.forEach(enemy => { if (enemy.boss) enemy.health *= 0.3 });
}

async function musicTick(noClear) {
    if (game.menu == "death") return;
    //game.musicWobble = 1 + (game.musicWobble-1)*0.95;
    game.musicWobble *= 0.95;

    if (game.currentMusic.file.currentTime == game.currentMusic.file.duration) startMusic();
    if (!game.musicSyncList.length) return;
    const item = game.musicSyncList[0];

    if (!game.menu && game.currentMusic.file.paused) {
        if (game.pauseCounter > 100) {
            game.menu = "pause";
            return;
        } else game.pauseCounter++;
    } else game.pauseCounter = 0;

    if (!noClear) {
        game.enemyAttack = [];
        game.enemyAttackWarning = [];
    }

    if (item[0] <= game.currentMusic.file.currentTime) {
        if (item[2]) {
            game.enemyAttackWarning.push(item[1]);
        } else {
            game.enemyAttack.push(item[1]);

            if (item[1] == "a1") game.musicWobble -= 1;
            else if (item[1] == "a2") game.musicWobble -= 2;
            else game.musicWobble += 3;
        }
        game.musicSyncList.splice(0,1);
        musicTick(true);
    }
}

function restartMusic(input) {
    ease(game.currentMusic.file,"volume",0,1);
    game.currentMusic = input;
    input.file.volume = 0;
    setTimeout(() => {
        ease(input.file,"volume",game.audioVolume,1.5);
        startMusic();
    },1000);
}