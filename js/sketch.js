var role_god_canvas;

let gods = []
let nGods = 106;
let roleSpeed = 10;

let currentWidth;
let currentHeight;

let rollingGod = false;

function setup(){
	currentWidth = windowWidth*0.8;
	currentHeight = windowWidth*0.2;
	role_god_canvas = createCanvas(windowWidth*0.8, windowWidth*0.2);
	role_god_canvas.parent('role_god_canvas');
	//createImages();

	for (i = 0; i < 9; i++){
		r = Math.round(Math.random()*(nGods-1));
		god = new GodIcon(r, 0, 0, width/6, height)
		gods.push(god);
	}

	for (i = 0; i < gods.length; i++){
		prvIndex = i - 1;
		if (i == 0){
			continue
		}

		gods[i].x = gods[prvIndex].x + (width/6);
	}
}

function roleGod(){
	if (!rollingGod){
		roleSpeed = 1000;
		rollingGod = true;
		document.getElementById("roleGOD").value = "RESET";
	}else{
		roleSpeed = 10;
		rollingGod = false;
		document.getElementById("roleGOD").value = "ROLE!";
	}
}


function draw(){
	currentWidth = Lerp(currentWidth, windowWidth*0.8, 0.04);
	resizeCanvas(currentWidth, windowWidth*0.2);
	background(55, 24, 52);

	if (!rollingGod){
		roleSpeed = 10;
	}else if(roleSpeed < 1.5){
		roleSpeed = 0;
	}else{
		roleSpeed = Lerp(roleSpeed, 0, 0.005);
	}


	GodIcon.UpdateAll();

	rectMode(CENTER);
	fill(150, 184, 182);
	stroke(55, 24, 52);
	rect(width/2, height/2, 10, height);

	for (i = 0; i < gods.length; i++){
		gods[i].w = width/6;
		gods[i].h = height;

		pi = i - 1;
		if (i == 0){
			pi = gods.length-1;
		}

		if (gods[pi].x > gods[i].x){
			gods[i].x -= width*(roleSpeed/6000);
			if (gods[i].x + gods[i].w <= 0){
				gods[i].x = gods[pi].x + width/6;
				gods[i].Randomize(nGods);
			}
		}else{
			gods[i].x = gods[pi].x + width/6;
		}

	}

}