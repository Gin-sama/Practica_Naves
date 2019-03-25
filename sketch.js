let bg = 255
let y =0
let x =0
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('silver')
	fill(bg)
	rect(x,y,100,100)

	if (keyIsDown(UP_ARROW))
	y--
	if (keyIsDown(DOWN_ARROW))
	y++
	if (keyIsDown(LEFT_ARROW))
	x--
	if (keyIsDown(RIGHT_ARROW))
	x++ 

}

function keyPressed () {
	
	console.log
	//if (key==' ')
	if (keyCode == LEFT_ARROW)
	x-=1

	if (keyCode == RIGHT_ARROW)
	x+=1
	
	if (keyCode == UP_ARROW)
	y-=1
	
	if (keyCode == DOWN_ARROW)
	y+=1  

	bg = bg === 255 ? 0 : 255
/*	if (bg===255) {
		bg=0
	}else{
		bg=255
	}*/
}