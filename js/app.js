//This will be to pick the random images:
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//to track totals for up to 25
var allTheClicks = 0;

var imageOne = document.createElement('img');
var imageTwo = document.createElement('img');
var imageThree = document.createElement('img');

function displayThreeImages (event) {

  var pictureNameOne = pictureArray[getRandomIntInclusive(0, 20)];
  imageOne.setAttribute('src', pictureNameOne.path);
  imageOne.setAttribute('class', pictureNameOne.name);
  document.getElementById('image-one').appendChild(imageOne);
  pictureNameOne.numShown++;

  var pictureNameTwo = pictureArray[getRandomIntInclusive(0, 20)];
  imageTwo.setAttribute('src', pictureNameTwo.path);
  imageTwo.setAttribute('class', pictureNameTwo.name);
  document.getElementById('image-two').appendChild(imageTwo);
  pictureNameTwo.numShown++;

  var pictureNameThree = pictureArray[getRandomIntInclusive(0, 20)];
  imageThree.setAttribute('src', pictureNameThree.path);
  imageThree.setAttribute('class', pictureNameThree.name);
  document.getElementById('image-three').appendChild(imageThree);
  pictureNameThree.numShown++;
}

function deleteThenDisplay (event) {
  allTheClicks++;
  document.getElementById('image-one').removeChild(imageOne);
  document.getElementById('image-two').removeChild(imageTwo);
  document.getElementById('image-three').removeChild(imageThree);
  displayThreeImages();
}

// function upTick (event) {
//   for (var i = 0; i < pictureArray.length; i++) {}
//
//  if (pictureArray[i].name === imageOne.className)
//  }

var imageOneClick = document.getElementById('image-one');
//imageOneClick.addEventListener('click,' upTick)
//name.numClicks++

var imageTwoClick = document.getElementById('image-two');
//imageTwoClick.addEventListener('click,' upTick)
//name.numClicks++

var imageThreeClick = document.getElementById('image-three');
//imageThreeClick.addEventListener('click,' upTick)
//name.numClicks++

var imageDisplay = document.getElementById('image-display');
imageDisplay.addEventListener('click', deleteThenDisplay);

function ImageObject (name, path) {
  this.name = name;
  this.path = path;
  this.numShown = 0;
  this.numClicks = 0;
}

var bag = new ImageObject ('bag', 'img/bag.jpg');
var banana = new ImageObject ('banana', 'img/banana.jpg');
var bathroom = new ImageObject ('bathroom', 'img/bathroom.jpg');
var boots = new ImageObject ('boots', 'img/boots.jpg');
var breakfast = new ImageObject ('breakfast', 'img/breakfast.jpg');
var bubblegum = new ImageObject ('bubblegum', 'img/bubblegum.jpg');
var chair = new ImageObject ('chair', 'img/chair.jpg');
var cthulhu = new ImageObject ('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new ImageObject ('dogDuck', 'img/dog-duck.jpg');
var dragon = new ImageObject ('dragon', 'img/dragon.jpg');
var pen = new ImageObject ('pen', 'img/pen.jpg');
var petSweep = new ImageObject ('petSweep', 'img/pet-sweep.jpg');
var scissors = new ImageObject ('scissors', 'img/scissors.jpg');
var shark = new ImageObject ('shark', 'img/shark.jpg');
var sweep = new ImageObject ('sweep', 'img/sweep.png');
var tauntaun = new ImageObject ('tauntaun', 'img/tauntaun.jpg');
var unicorn = new ImageObject ('unicorn', 'img/unicorn.jpg');
var usb = new ImageObject ('usb', 'img/usb.gif');
var waterCan = new ImageObject ('waterCan', 'img/water-can.jpg');
var wineGlass = new ImageObject ('wineGlass', 'img/wine-glass.jpg');

var pictureArray = [bubblegum, bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

displayThreeImages();
