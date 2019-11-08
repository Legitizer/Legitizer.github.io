var role_god_canvas;

let gods = []
let nGods = 10;
let roleSpeed = 10;

function mod(n, m) {
  return ((n % m) + m) % m;
}

function setup(){
	role_god_canvas = createCanvas(windowWidth*0.8, windowWidth*0.2);
	role_god_canvas.parent('role_god_canvas');
	createImages();

	for (i = 0; i < 7; i++){
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
function windowResized(){
	resizeCanvas(windowWidth*0.8, windowWidth*0.2);
}

function draw(){
	background(55, 24, 52);
	for (i = 0; i < gods.length; i++){
		gods[i].w = width/6;
		gods[i].h = height;
		


	}

	GodIcon.UpdateAll();

}