var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);

var s = new gameObject();
s.color = 'red';
s.vx = Math.random()*(10 - -10) + -10;
s.vy = Math.random()*(10 - -10) + -10;

var currentState = "grow";
var states = [];
states["grow"] = function(){s.grow(); s.draw();};
states["shrink"] = function(){s.shrink(); s.draw();};

function main()
{
	ctx.clearRect(0,0,canvas.width,canvas.height)

	if(s.x >= (canvas.width)-s.w)
	{
		s.vx = -5;		
	}
	if(s.x <= (canvas.width - canvas.width))
	{
		s.vx = 5;		
	} 
	if(s.y >= (canvas.height)-s.h)
	{
		s.vy = -5;		
	}	
	if(s.y <= (canvas.height - canvas.height))
	{
		s.vy = 5;		
	} 
	s.move();

	states[currentState]();

	if(Math.abs(s.w) >= s.maxSize)	//gets the absolute value if value goes negative
	{
		currentState = "shrink";
	}
	if(Math.abs(s.w) <= s.minSize)
	{
		currentState = "grow";
	}
}