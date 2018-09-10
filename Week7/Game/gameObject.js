class gameObject
{
	constructor()
	{
		this.x = canvas.width/2;
		this.y = canvas.width/2;
		this.w = 10;
		this.h = 10;
		this.vx = 0;
		this.vy = 0;
		this.color = 'gold';
		this.maxSize = 500;
		this.minSize = 10;
	}

	draw()
	{
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}

	move()
	{
		this.x+=this.vx;
		this.y+=this.vy;
	}

	grow()
	{
		this.w++;
		this.h++;
	}

	shrink()
	{
		this.w--;
		this.h--;
	}
}