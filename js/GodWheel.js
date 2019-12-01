var role_god_canvas;

let nGods = 107;
let roleSpeed = 300;
let currentRoleSpeed = 5;
let roleSpeedDecay = 0.005

let rollingGod = false;
let canRole = 1;

let roleButton = document.getElementById("roleGOD");

let currentWidth;
let currentHeight;

canvasWIDTH = 0.75;
imageSIZE = 10;

let ding;
function GodWheel_setup(){
	loadImages();
	ding = new Audio("sound/ding.mp3");
	currentWidth = windowWidth*canvasWIDTH;
	currentHeight = windowWidth*0.2;
	role_god_canvas = createCanvas(windowWidth*canvasWIDTH, (windowWidth*canvasWIDTH)/imageSIZE);
	role_god_canvas.parent('role_god_canvas');
	

	for (i = 0; i < imageSIZE+2; i++){
		r = Math.round(Math.random()*(nGods-1));
		god = new GodIcon(r, 0, 0, width/imageSIZE, height)
	}

	for (i = 0; i < gods.length; i++){
		prvIndex = i - 1;
		if (i == 0){
			continue
		}

		gods[i].x = gods[prvIndex].x + (width/imageSIZE);
	}
}

function roleGod(){
	if (canRole){
		currentRoleSpeed = roleSpeed;
		rollingGod = true;
		canRole = false;
	}
}

function GodWheel_draw(){
	currentWidth = Lerp(currentWidth, windowWidth*canvasWIDTH, 0.04);
	resizeCanvas(currentWidth, width/imageSIZE);
	background(0);

	
	if(currentRoleSpeed < 1.5 && currentRoleSpeed!= 0){
		currentRoleSpeed = 0;
		rollingGod = false;
		canRole = true;
		//ding.play();
	}else if(rollingGod){
		currentRoleSpeed = Lerp(currentRoleSpeed, 0, roleSpeedDecay);
	}

	GodIcon.UpdateAll();

	rectMode(CENTER);
	fill(150, 184, 182);
	stroke(55, 24, 52);
	rect(width/2, height/2, 10, height);

	for (let i = 0; i < gods.length; i++){

		gods[i].w = width/imageSIZE;
		gods[i].h = height;

		pi = i - 1;
		if (i == 0){
			pi = gods.length-1;
		}

		if (gods[pi].x > gods[i].x){
			gods[i].x -= width*(currentRoleSpeed/6000);
			if (gods[i].x + gods[i].w <= 0){
				gods[i].x = gods[pi].x + (width/imageSIZE);
				gods[i].Randomize(nGods);
			}
		}else{
			gods[i].x = gods[pi].x + (width/imageSIZE);
		}

		if (gods[i].x < width/2 && gods[i].x + gods[i].w > width/2 && rollingGod){
			if (roleButton.value != gods[i].name){
				roleButton.value = gods[i].name;
			}
			
		}

	}
}