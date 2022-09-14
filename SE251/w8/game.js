
var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

ctx.fillStyle = `#00ffff`;

function GameObject()
{
    this.x = 100;
    this.y = 100;
    this.w = 100;
    this.h = 100;
    this.color = `#00ffff`;
    this.vx = 0;
    this.vy = 0;

    this.move = function()
    {
        this.x+= this.vx
        this.y+= this.vy
    }

    this.draw = function()
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

var box = [];
var amt = 50;
for(let i=0; i<amt; i++)
{
    box[i] = new GameObject();
    box[i].x = rand(0, c.width);
    box[i].y = rand(0, c.height);
    box[i].w = rand(5, 15);
    box[i].h = box[i].w;
    box[i].y = box[i].w;

}

console.log(box)

//var box1 = new GameObject();
//box1.vx = Math.floor(rand(5, 20.9));

//var box2 = new GameObject();
//box2.color = `red`;
//box2.x - 400;

//var timer = window.requestAnimationFrame(main);
//animation loop
var timer = setInterval(main, 1000/60)

function main()
{
    //timer = window.requestAnimationFrame(main);


    ctx.clearRect(0,0,c.width,c.height);

    for(let i=0; i<box.length; i++)
    {
        box[i].move();

        if(box[i].y > c.height)
        {
            box[i].y = -box[i].h
        }

        box[i].draw();
    }

    //x += vx
    //y += vy

    //w += 1
    //h += .3

    //box1.move();
    
    //box2.draw();

    /*if(box1.x > c.width)
    {
        box1.x = -box1.w;
    }*/

    //if(box1.x > c.width - box1.w)
    //{
   //     box1.vx = -box1.vx;
    //}

    //box1.x+= box1.vx
    //box1.y+= box1.vy
    //box1.draw();

    ctx.fillStyle = color;
    // ---------  x  - y - width - height ------
    ctx.fillRect(x, y, w, h);
}

function rand(_low, _high)
{
    return Math.random() * (_high - _low) + _low;
}

/*0 <= 0-.9999999
1<= 1 - 1.999999
2<= 2 - 2.999999*/

