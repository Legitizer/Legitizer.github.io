
var role_god_canvas;

function setup(){
	role_god_canvas = createCanvas(windowWidth, windowWidth*0.16);
	role_god_canvas.parent('role_god_canvas');
}

function windowResized(){
	resizeCanvas(windowWidth, windowWidth*0.16);
}

function draw(){
	background(255);
	rectMode(RADIUS);
	fill(55, 24, 52);
	rect(width/2, height/2, (width/2)*0.75, windowWidth*0.04+10, 100, 100, 100, 100);
}