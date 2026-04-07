let effects = [];

class Effect {
    constructor(x,y,path,size,ticks,direction,rotateTick,opacity) {
        this.x = x || 0;
        this.y = y || 0;
        this.size = size || 50;
        this.drawPath = path;
        this.ticksLeft = ticks || 30;
        this.ticksTotal = this.ticksLeft;
        this.rotation = direction || (Math.random()*Math.PI/3-Math.PI/6);
        if (rotateTick != undefined) this.rotationTick = rotateTick;
        else this.rotationTick = (-this.rotation/this.ticksLeft);
        if (opacity != undefined) this.opacity = opacity;
    }
}

function handleEffects() {
    effects = effects.filter((item) => {
        draw(item.x,item.y,item.drawPath,item.size*animationRatio(item.ticksLeft,item.ticksTotal,3),item.rotation,item.opacity)
        item.rotation += item.rotationTick;

        item.ticksLeft--;
        return item.ticksLeft > 0;
    })
}