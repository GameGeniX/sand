class Iron{
	constructor(x,y,width,height)
	{
		var options = {
			restitution:.3,friction:5,density:1
		}
		this.x=x;
		this.y=y;
		this.width = width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
		rect(0,0,this.width,this.height)
			pop()
	}

}