let petalCount = 23;
let petalIndex = 0;
let timeInterval = 500 / petalCount;
let lastPetalTime = 0;
let angle = 0;

function setup(){
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);
  stroke('#EB29C2');
}

function draw(){
  background('#000');

  orbitControl(4, 4); // 3D mouse control

  rotateX(55);
  rotateY(-15);
  rotateZ(angle);
  
  

  let currentTime = millis();
  if (currentTime - lastPetalTime > timeInterval && petalIndex < petalCount) {
    petalIndex++;
    lastPetalTime = currentTime;
  }

  for (let theta = 0; theta < petalIndex; theta++) {
    beginShape(POINTS);
    for (let phi = 0; phi < 360; phi += (1 + Math.sqrt(5)) / 2) {
      let r = 65 * abs(sin(phi * 5)) + 255 * theta / petalCount;
      let x = r * cos(phi);
      let y = r * sin(phi);
      let z = vShape(150, r / 100, 0.8, 0.15) - 200 +
        perturbation(1.5, r / 100, 12, phi);
      vertex(x, y , z);
    }
    endShape();
  }
  
  
  if(angle<90)
    {
      angle++;
    }
  
}

function vShape(A, r, a, b){
  return A * pow(Math.E, -b * pow(abs(r), 1.5)) * pow(abs(r), a);
}

function perturbation(A, r, p, angle){
  return 1 + A * pow(r, 2) * sin(p * angle);
}
