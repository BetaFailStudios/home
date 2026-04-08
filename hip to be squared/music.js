function startMusic() {
    game.musicSyncList = [];
    ease(game,"musicPopup",0,3);
    setTimeout(() => { ease(game,"musicPopup",1,3); }, 3000);

    const song = game.region.music[game.musicPos];

    game.musicSyncList = Object.assign([], song.attacklistReady);

    song.file.volume = 0;
    song.file.currentTime = 0;
    ease(song.file,"volume", game.audioVolume, 0.5);
    song.file.play();


    if (game.bossHealthMax) game.bossHealthMax *= 0.3
    enemies.forEach(enemy => { if (enemy.boss) enemy.health *= 0.3 });
}

async function musicTick(noClear) {

    //game.musicWobble = 1 + (game.musicWobble-1)*0.95;
    game.musicWobble *= 0.95;

    if (game.region.music[game.musicPos].file.currentTime == game.region.music[game.musicPos].file.duration) startMusic();
    if (!game.musicSyncList.length) return;
    const item = game.musicSyncList[0];

    if (!game.menu && game.region.music[game.musicPos].file.paused) {
        if (game.pauseCounter > 100) {
            game.menu = "pause";
            return;
        } else game.pauseCounter++;
    } else game.pauseCounter = 0;

    if (!noClear) {
        game.enemyAttack = [];
        game.enemyAttackWarning = [];
    }

    if (item[0] <= game.region.music[game.musicPos].file.currentTime) {
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
    ease(game.region.music[game.musicPos].file,"volume",0,1);
    game.musicPos = input;
    game.region.music[game.musicPos].file.volume = 0;
    setTimeout(() => {
        ease(game.region.music[game.musicPos].file,"volume",game.audioVolume,1.5);
        startMusic();
    },1000);
}