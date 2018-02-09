/// <reference path="./p5.global-mode.d.ts" />

function setup() {
  // put setup code here
	createCanvas(800, 800);
	background(200);
}


function draw() {
	// put drawing code here
	fill(200);
	stroke(0, 0, 200);
	bezier(0, 0, mouseX, mouseY, -mouseX, -mouseY, 800, 800); //cursor in middle of shape - shape bigger as you get closer to bottom right
}