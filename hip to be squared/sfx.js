const sfx = {
    dash: new Audio('sfx/playerdash.mp3'),
    shootimpact: new Audio('sfx/shoot impact.ogg'),
    shootnoise: new Audio('sfx/shoot noise.ogg'),
    enemyhit: new Audio('sfx/enemyhit.mp3'),
    blueloss: new Audio('sfx/blueloss.ogg'),
    redloss: new Audio('sfx/redloss.ogg'),
}

async function playsfx(type,freqVariation,volumeRatio) {
    if (!sfx[type]) return;
    sfxClone = sfx[type].cloneNode(true);
    sfxClone.volume = game.audioVolume * Math.min(1,(volumeRatio || 1));
    if (freqVariation) sfxClone.playbackRate = Math.max(0.5,1-freqVariation+Math.random()*freqVariation*2);
    sfxClone.play();
}