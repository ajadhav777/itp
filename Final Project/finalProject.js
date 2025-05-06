let skyColorPicker, weatherSelect, timeSelect;
let flowerTypeSelect;

let currentSong;

let sunnyTulipSong, sunnyRoseSong, sunnyDaisySong;
let rainyTulipSong, rainyRoseSong, rainyDaisySong;
let snowyTulipSong, snowyRoseSong, snowyDaisySong;
let nightRoseSong, nightTulipSong;
let otherSong;
function preload() {
  sunnyTulipSong = loadSound('sunnyTulip.m4a');
  sunnyRoseSong = loadSound('sunnyRose.m4a');
  sunnyDaisySong = loadSound('sunnyDaisy.m4a');
  rainyTulipSong = loadSound('rainyTulip.m4a');
  rainyRoseSong = loadSound('rainyRose.m4a');
  rainyDaisySong = loadSound('rainyDaisy.m4a');
  snowyTulipSong = loadSound('snowyTulip.m4a');
  snowyRoseSong = loadSound('snowyRose.m4a');
  snowyDaisySong = loadSound('snowyDaisy.m4a');
  otherSong = loadSound('otherSong.m4a');
 }



function setup() {
  createCanvas(800, 600);
   
let playButton = createButton('Play Matching Song!');
playButton.position(10, 180);
playButton.mousePressed(checkSceneAndPlayMusic);
 
  // Sky color
  skyColorPicker = createColorPicker('#87ceeb');
  skyColorPicker.position(10, 10);
  createSpan('Sky Color').position(150, 10);

  // Weather
  weatherSelect = createSelect();
  weatherSelect.position(10, 50);
  weatherSelect.option('Sunny');
  weatherSelect.option('Rainy');
  weatherSelect.option('Snowy');
  createSpan('Weather').position(150, 50);

  // Time of Day
  timeSelect = createSelect();
  timeSelect.position(10, 90);
  timeSelect.option('Day');
  timeSelect.option('Night');
  createSpan('Time of Day').position(150, 90);

  // Flower Type
  flowerTypeSelect = createSelect();
  flowerTypeSelect.position(10, 130);
  flowerTypeSelect.option('Daisy');
  flowerTypeSelect.option('Tulip');
  flowerTypeSelect.option('Rose');
  createSpan('Flower Type').position(150, 130);
}

function draw() {
  background(skyColorPicker.color());

  // Draw ground
  fill(60, 180, 75);
  noStroke();
  rect(0, height * 0.75, width, height * 0.25);

  // 🌙 Night effect
  if (timeSelect.value() === 'Night') {
    fill(0, 0, 50, 150);
    rect(0, 0, width, height);
    drawMoon();
  } else {
    drawSun();
  }

  // Weather
  if (weatherSelect.value() === 'Rainy') {
    drawRain();
  } else if (weatherSelect.value() === 'Snowy') {
    drawSnow();
  }

  // Flowers
  drawFlowers();
}

function drawFlowers() {
  let type = flowerTypeSelect.value();

  for (let i = 0; i < 10; i++) {
    let x = 80 + i * 70;
    let y = height * 0.75 - 20;

    // Draw green stem
    stroke(0, 100, 0);
    line(x, y, x, y + 30);

    // Draw flower head
    noStroke();
    if (type === 'Daisy') {
      fill('white');
      for (let a = 0; a < TWO_PI; a += PI / 4) {
        let petalX = x + cos(a) * 10;
        let petalY = y + sin(a) * 10;
        ellipse(petalX, petalY, 10, 10);
      }
      fill('yellow');
      ellipse(x, y, 10, 10);
    } else if (type === 'Tulip') {
      fill('#E91E63');
      beginShape();
      vertex(x, y);
      vertex(x - 10, y - 15);
      vertex(x, y - 5);
      vertex(x + 10, y - 15);
      endShape(CLOSE);
    } else if (type === 'Rose') {
      fill('red');
      ellipse(x, y, 15, 15);
      ellipse(x + 3, y - 3, 10, 10);
      ellipse(x - 3, y - 3, 10, 10);
    }
  }
}

function drawRain() {
  stroke(100, 100, 255);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    line(x, y, x, y + 10);
  }
}

function drawSnow() {
  fill(255);
  noStroke();
  for (let i = 0; i < 100; i++) {
    ellipse(random(width), random(height), 5, 5);
  }
}

function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(640, 80, 80, 80);
  
}

function drawMoon() {
  fill(230);
  noStroke();
  ellipse(640, 80, 80, 80);
}

function checkSceneAndPlayMusic() {
  let weather = weatherSelect.value();
  let flower = flowerTypeSelect.value();
  let time = timeSelect.value();

  if (weather === 'Sunny' && flower === 'Tulip') {
    playSong(sunnyTulipSong);
  } else if (weather === 'Sunny' && flower === 'Daisy') {
    playSong(sunnyDaisySong);
} else if (weather === 'Sunny' && flower === 'Rose') {
    playSong(sunnyRoseSong);
} else if (weather === 'Rainy' && flower === 'Tulip') {
    playSong(rainyTulipSong);
} else if (weather === 'Rainy' && flower === 'Daisy') {
    playSong(rainyDaisySong);
} else if (weather === 'Rainy' && flower === 'Rose') {
    playSong(rainyRoseSong);
}  else if (weather === 'Snowy' && flower === 'Daisy') {
    playSong(snowyDaisySong);
}  else if (weather === 'Snowy' && flower === 'Rose') {
    playSong(snowyRoseSong);
}  else if (weather === 'Snowy' && flower === 'Tulip') {
    playSong(snowyTulipSong);
} else if (time === 'Night' && flower === 'Rose') {
    playSong(nightRoseSong);
} else if (time === 'Night' && flower === 'Tulip') {
    playSong(nightTulipSong);
} else {
    playSong(otherSong);
}
  
  function playSong(song) {
  if (currentSong && currentSong.isPlaying()) {
    currentSong.stop();
  }
  currentSong = song;
  currentSong.play();
}
  
  
}


  
  //Moon
/*fill(background);
noStroke ();
ellipse (300,100, 125, 125);

fill(10, 10, 100);
noStroke ();
ellipse (275,100, 125, 125);
}*/
