function GameObject()
{
    this.x = 112
    this.y = 86
    this.w = 100
    this.h = 100
    this.color = `purple`
    this.vx = 9
    this.vy = 0
    
}

this.move = function(){
    this.x+= this.vx
    this.y+= this.vy
}

this.draw = function()
{
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
}