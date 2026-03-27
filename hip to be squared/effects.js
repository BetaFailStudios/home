let effects = [];

class Effect {
    constructor(x,y,path,size,ticks,rotation) {
        this.x = x || 0;
        this.y = y || 0;
        this.size = size || 50;
        this.drawPath = path;
        this.ticksLeft = ticks || 30;
        this.ticksTotal = this.ticksLeft;
        this.rotation = rotation || (Math.random()*Math.PI/3-Math.PI/6);
        this.rotationTick = -this.rotation/this.ticksLeft;
    }
}

function handleEffects() {
    effects = effects.filter((item) => {
        draw(item.x,item.y,item.drawPath,item.size*animationRatio(item.ticksLeft,item.ticksTotal,3),item.rotation)
        item.rotation += item.rotationTick;

        item.ticksLeft--;
        return item.ticksLeft > 0;
    })
}