//This will be to pick the random images:
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//to track totals for up to 25
var allTheClicks = 0;
var allImageDisplays = 0;

//var numClicks = 0;

// function handleImageClick(event){
//   event.preventDefault();
//   console.log('event.target: ', event.target);
// //Will need something like image.name.numClicks++
// //Also image.name.numShown++
//
//   name.numClicks++;
// }
//
// var trackImages = document.getElementsByClassName('track-images');
//
// for (var i = 0; i < trackImages.length; i++){
//   trackImages[i].addEventListener('click', handleImageClick);
// }


//For clicking specifically on various images:
function handleGumClick(event){
  event.preventDefault();
  console.log('event.target: ', event.target);
  bubblegum.numClicks++;
}
var trackGum = document.getElementsByClassName('bubblegum');
for (var i = 0; i < trackGum.length; i++){
  trackGum[i].addEventListener('click', handleGumClick);
}

function handleBagClick(event){
  event.preventDefault();
  console.log('event.target: ', event.target);
  bag.numClicks++;
}
var trackBag = document.getElementsByClassName('bag');
for (var i = 0; i < trackBag.length; i++){
  trackBag[i].addEventListener('click', handleBagClick);
}

function handleBananaClick(event){
  event.preventDefault();
  console.log('event.target: ', event.target);
  banana.numClicks++;
}
var trackBanana = document.getElementsByClassName('banana');
for (var i = 0; i < trackBanana.length; i++){
  trackBanana[i].addEventListener('click', handleBananaClick);
}

function handleBathroomClick(event){
  event.preventDefault();
  console.log('event.target: ', event.target);
  bathroom.numClicks++;
}
var trackBathroom = document.getElementsByClassName('bathroom');
for (var i = 0; i < trackBathroom.length; i++){
  trackBathroom[i].addEventListener('click', handleBathroomClick);
}
//do this two more times
var imageOne = document.createElement('img');
var imageTwo = document.createElement('img');
var imageThree = document.createElement('img');


function displayThreeImages (event) {

  imageOne.setAttribute('src', pictureArray[getRandomIntInclusive(0, 20)].path);
  document.getElementById('image-one').appendChild(imageOne);

  imageTwo.setAttribute('src', pictureArray[getRandomIntInclusive(0, 20)].path);
  document.getElementById('image-two').appendChild(imageTwo);

  imageThree.setAttribute('src', pictureArray[getRandomIntInclusive(0, 20)].path);
  document.getElementById('image-three').appendChild(imageThree);

//Have clickCount++
//Have imageSelected++ for every one w an if else.
}

// var currentImageSource = event.target.src;
//for (var i=0; i<pictureArray.length; i++){
//if (pictureArray[i].path === currentImageSource) {
// pictureArray[i].numClicks++; }

function deleteThenDisplay (event) {
  allTheClicks++;
  document.getElementById('image-one').removeChild(imageOne);
  document.getElementById('image-two').removeChild(imageTwo);
  document.getElementById('image-three').removeChild(imageThree);
  displayThreeImages();
}

var imageDisplay = document.getElementById('image-display');
imageDisplay.addEventListener('click', deleteThenDisplay);

function ImageObject (name, path) {
  this.name = name;
  this.path = path;
  this.timesShown = 0;
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
var dogDuck = new ImageObject ('dog-duck', 'img/dog-duck.jpg');
var dragon = new ImageObject ('dragon', 'img/dragon.jpg');
var pen = new ImageObject ('pen', 'img/pen.jpg');
var petSweep = new ImageObject ('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new ImageObject ('scissors', 'img/scissors.jpg');
var shark = new ImageObject ('shark', 'img/shark.jpg');
var sweep = new ImageObject ('sweep', 'img/sweep.png');
var tauntaun = new ImageObject ('tauntaun', 'img/tauntaun.jpg');
var unicorn = new ImageObject ('unicorn', 'img/unicorn.jpg');
var usb = new ImageObject ('usb', 'img/usb.gif');
var waterCan = new ImageObject ('water-can', 'img/water-can.jpg');
var wineGlass = new ImageObject ('wine-glass', 'img/wine-glass.jpg');

var pictureArray = [bubblegum, bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

displayThreeImages();
