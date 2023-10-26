let noiseTime = 0;
let noiseTam = 20;
let posX = 0;
let posY = 0;
let velX = 2;
let velY = 2;

let osc, playing, freq, amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  osc = new p5.Oscillator('cuadrado');
}

function draw() {
//background(255);
  
  posX += velX;
  posY += velY;

  if (posX < 0 || posX > windowWidth) {
    velX *= -1;
    posX = constrain(posX, 0, windowWidth);
  }

  if (posY < 0 || posY > windowHeight) {
    velY *= -1;
    posY = constrain(posY, 0, windowHeight);
  }

  let tam = map(noise(noiseTam), 0, 1, 50, 10);
  noiseTime += 0.006;
  noiseTam += 0.01;

  fill(10, 50, 50);
  stroke(2, 165, 73, 120);
  strokeWeight(2);
  circle(posX, posY, tam);

  let posX2 = windowWidth - posX;
  let posY2 = windowHeight - posY;
  let tam2 = tam;

  fill(21, 17, 150);
  stroke(126, 126, 78, 90);
  strokeWeight(2);
  circle(posX2, posY2, tam2);

  // Cuadrado 2
  let posX4 = map(noise(noiseTime + 400), 0, 1, 0, windowWidth);
  let posY4 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);
  let tam4 = map(noise(noiseTam + 100), 0, 1, 30, 5);

  fill(255, 150); // Agregar transparencia
  stroke(70, 125, 35, 50);
  strokeWeight(5);
  rect(posX4, posY4, tam4, tam4);

///// Sonido//////
osc.start();
freq = constrain(map(posX4 + 400), 0, 1, 0, windowWidth);
amp = 0, 5;

osc.freq(freq, 0.1);
  osc.amp(amp, 0, posX4);
  
}

