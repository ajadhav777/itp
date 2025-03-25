let mySounds;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('rock-cinematic-161648.mp3', soundLoaded);

  soundFormats('wav', 'mp3');  
  mySecondSound = loadSound('deep-strange-whoosh-183845.mp3', soundLoaded);
  
  soundFormats('wav', 'mp3');  
  myThirdSound = loadSound('breaking-news-intro-logo-314320.mp3', soundLoaded);
}

function setup() {
  createCanvas(700, 600);
  background('black');
  textAlign(CENTER, CENTER);
  textFont('Courier New', 28);
  fill('palegreen');
  text("Click a button or press a key !", width / 2, height / 2);
  
  fill('red');
  circle(60, 250, 15);
  fill('pink');
  circle(50, 225, 25);
  circle(80, 230, 25);
  circle(87, 260, 25);
  circle(33, 250, 25);
  circle(55, 275, 25);
  
  let btnp = createButton('p');
  btnp.position(150, 400);
  btnp.size(40, 40);
  //btnp.textSize(24);
  let btnl = createButton('l');
  btnl.position(340, 400);
  btnl.size(40, 40);
  let btnk = createButton('k');
  btnk.position(500, 400);
  btnk.size(40, 40);
  
  btnp.mousePressed(playFirstSound);
  btnk.mousePressed(playSecondSound);
  btnl.mousePressed(playThirdSound);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  playCustomSound(key)
}

function playFirstSound() {
  if (myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Sound played for key,", key); }
  else 
    console.log("Sound not loaded yet.");
}

function playSecondSound() {
  if (mySecondSound.isLoaded()) {
    mySecondSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playThirdSound() {
      if (myThirdSound.isLoaded()) {
    myThirdSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playCustomSound(key) {
  if (key.toLowerCase() === 'p') {
    playFirstSound();
  } 
  else if (key.toLowerCase() === 'k') { 
    playSecondSound();
  }
  else if (key.toLowerCase() === 'l') {
    playThirdSound();
    }
  else
    {
      console.log("Invalid key,", key, "pressed");
    }
}
  