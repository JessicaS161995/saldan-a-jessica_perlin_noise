let noiseTime = 0
let noiseTam = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(255);
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  let tam = map(noise(noiseTam), 0, 1, 50, 5);
  noiseTime += 0.006;
  noiseTam += 0.1;

  fill(15, 125, 15);
  stroke(100, 50, 0, 50);
  strokeWeight(5);
  circle(posX, posY, tam);

  let posX2 = posX;
  let posY2 = windowHeight - posY;
  let tam2 = tam;

  fill(150, 15, 90);
  stroke(25, 110, 18, 50);
  strokeWeight(5);
  circle(posX2, posY2, tam2);


}
