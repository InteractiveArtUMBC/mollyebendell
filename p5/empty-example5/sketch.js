/// <reference path="./p5.global-mode.d.ts" />

function setup() {
  // put setup code here
	createCanvas(800, 800);
	background(255);
}


function draw() {
	// put drawing code here
	noFill();
	stroke(0, 0, 200);
	bezier(0, 0, 800 - mouseX, 800 - mouseY, mouseX, mouseY, 800, 400); 
	bezier(0, 200, 800 - mouseX, 800 - mouseY, mouseX, mouseY, 800, 400); 
	bezier(0, 800, 800 - mouseX, 800 - mouseY, mouseX, mouseY, 800, 400); 
}