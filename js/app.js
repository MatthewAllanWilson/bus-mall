//This will be to pick the random images:
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
var gumNumClicks = 0;
function handleGumClick(event){
  event.preventDefault();
  console.log('event.target: ', event.target);
  gumNumClicks++;
}
var trackGum = document.getElementsByClassName('bubblegum');
for (var i = 0; i < trackGum.length; i++){
  trackGum[i].addEventListener('click', handleGumClick);
}

var bagNumClicks = 0;
function handleBagClick(event){
  event.preventDefault();
  console.log('event.target: ', event.target);
  bagNumClicks++;
}
var trackBag = document.getElementsByClassName('bag');
for (var i = 0; i < trackBag.length; i++){
  trackBag[i].addEventListener('click', handleBagClick);
}

var bananaNumClicks = 0;
function handleBananaClick(event){
  event.preventDefault();
  console.log('event.target: ', event.target);
  bananaNumClicks++;
}
var trackBanana = document.getElementsByClassName('banana');
for (var i = 0; i < trackBanana.length; i++){
  trackBanana[i].addEventListener('click', handleBananaClick);
}

var bathroomNumClicks = 0;
function handleBathroomClick(event){
  event.preventDefault();
  console.log('event.target: ', event.target);
  bathroomNumClicks++;
}
var trackBathroom = document.getElementsByClassName('bathroom');
for (var i = 0; i < trackBathroom.length; i++){
  trackBathroom[i].addEventListener('click', handleBathroomClick);
}



//For clicking anywhere.

function newSet (event) {
  //This will display a whole new set of images.
}




//This is the function that will display three new images each time there is a click.
function displayThreeImages (){
}

function ImageObject (name) {
  this.name = name;
  this.path = '';
  this.timesShown = 0;
  this.numClicks = 0;
}

// var bag = new ImageObject ('bag');
// bag.path = 'img/bag.jpg';
// bag.timesShown = ;
