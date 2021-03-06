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

  var pictureNameOne = pictureArray[getRandomIntInclusive(0, pictureArray.length - 1)];
  imageOne.setAttribute('src', pictureNameOne.path);
  imageOne.setAttribute('class', pictureNameOne.name);
  document.getElementById('image-one').appendChild(imageOne);
  pictureNameOne.numShown++;

  var pictureNameTwo = pictureNameOne;
  while (pictureNameTwo === pictureNameOne) {
    pictureNameTwo = pictureArray[getRandomIntInclusive(0, pictureArray.length - 1)];
  }
  imageTwo.setAttribute('src', pictureNameTwo.path);
  imageTwo.setAttribute('class', pictureNameTwo.name);
  document.getElementById('image-two').appendChild(imageTwo);
  pictureNameTwo.numShown++;

  var pictureNameThree = pictureNameTwo;
  while (pictureNameThree === pictureNameTwo || pictureNameThree === pictureNameOne) {
    pictureNameThree = pictureArray[getRandomIntInclusive(0, pictureArray.length - 1)];
  }
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

  saveClicksToLocal();

  if (allTheClicks === 25){
    revealButtons();
  }
  else if (allTheClicks === 35){
    createChart();
  }
  else displayThreeImages();
}

function deleteButtons() {
  document.getElementById('button-one').removeChild(buttonOne);
  document.getElementById('button-two').removeChild(buttonTwo);
  displayThreeImages();
}

function revealButtons(){
  document.getElementById('button-one').appendChild(buttonOne);
  buttonOne.textContent = 'SEE RESULTS';
  document.getElementById('button-two').appendChild(buttonTwo);
  buttonTwo.textContent = 'MAKE 10 MORE SELECTIONS';
}

var buttonOne = document.createElement('button');
buttonOne.addEventListener('click', createChart);

var buttonTwo = document.createElement('button');
buttonTwo.addEventListener('click', deleteButtons);

function upTick1 () {
  for (var i = 0; i < pictureArray.length; i++)
    if (pictureArray[i].name === imageOne.className){
      pictureArray[i].numClicks++;
    }
}

function upTick2 () {
  for (var i = 0; i < pictureArray.length; i++)
    if (pictureArray[i].name === imageTwo.className){
      pictureArray[i].numClicks++;
    }
}

function upTick3 () {
  for (var i = 0; i < pictureArray.length; i++)
    if (pictureArray[i].name === imageThree.className){
      pictureArray[i].numClicks++;
    }
}

var imageOneClick = document.getElementById('image-one');
imageOneClick.addEventListener('click', upTick1);

var imageTwoClick = document.getElementById('image-two');
imageTwoClick.addEventListener('click', upTick2);

var imageThreeClick = document.getElementById('image-three');
imageThreeClick.addEventListener('click', upTick3);

var imageDisplay = document.getElementById('image-display');
imageDisplay.addEventListener('click', deleteThenDisplay);

var pictureArray = [];

function ImageObject (name, path) {
  this.name = name;
  this.path = path;
  this.numShown = 0;
  this.numClicks = 0;
  pictureArray.push(this);
}

var shownArray = [];
var clicksArray = [];

function createChart (){
  for (var i = 0; i < pictureArray.length; i++) {
    shownArray.push(pictureArray[i].numShown);
  }

  for (var i = 0; i < pictureArray.length; i++) {
    clicksArray.push(pictureArray[i].numClicks);
  }

  var data = {
    labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'USB', 'Water Can', 'Wine Glass'],
    datasets: [
      {
        label: 'Times Shown',
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data: shownArray
      },
      {
        label: 'Times Clicked',
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: clicksArray
      }
    ]
  };
  var ctx = document.getElementById('chart').getContext('2d');
  var myBarChart = new Chart(ctx).Bar(data);
}

function saveClicksToLocal(){
  localStorage.setItem('savedClicks', JSON.stringify(pictureArray));
  localStorage.setItem('savedTotal', JSON.stringify(allTheClicks));
}

function fetchClicksFromLocal(){
  var savedTotal = JSON.parse(localStorage.getItem('savedTotal'));
  allTheClicks = savedTotal;
  var savedClicks = JSON.parse(localStorage.getItem('savedClicks'));
  if (savedClicks){
    console.log('User has saved their clicks from last time.');
    pictureArray = savedClicks;
  } else {
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
  }
}

function handleClearLS(){
  localStorage.clear();
}

var clearLSButton = document.getElementById('clear-ls');
clearLSButton.addEventListener('click', handleClearLS);

fetchClicksFromLocal();
displayThreeImages();
