let sortData = function(string) {
  console.log(string);

  // split data into an array, seperating elements by spaces
  // !NOTE! There is a space at the end of each line in the input.txt file

  const array = string.split(" ");
  console.log(array);

  // setting directions to a variable and removing them form input data

  let directions = array[array.length - 1];
  console.log(directions);
  array.pop();

  // setting room dimensions to variables and removing them from input data

  let roomWidth = array[0];
  array.shift();
  let roomHeight = array[0];
  array.shift();

  console.log("room width" + " = " + roomWidth);
  console.log("room height" + " = " + roomHeight);

  // setting roomba start positions to variables and removing them from input data

  let roombaXStart = array[0];
  array.shift();
  let roombaYStart = array[0];
  array.shift();

  console.log("roomba X Start" + " " + roombaXStart);
  console.log("roomba Y Start" + " " + roombaYStart);

  // remaining input data consist of pairs of coordinates for dirt piles
  // send remaining input data into coordinatesArray function

  let dirtPatches = this.coordinatesArray(array);

  let numberOfDirtPatches = dirtPatches.length;
  console.log(numberOfDirtPatches + " " + "dirt patches");
  colourDirt(dirtPatches);
};

// function to sort data into pairs and into each pairs' coordinate set

function coordinatesArray(array) {
  let results = [];
  while (array.length) {
    results.push(array.splice(0, 2));
  }
  return results;
}

// function to colour dirt tiles

function colourDirt(array) {
  console.log(array);
  index = 0;
  while (index < array.length) {
    console.log("this will be where I change the dirt tiles to brown");
    index++;
  }
}

// function to fetch input data from input.txt and send data to be "sorted"

function fetchingInput() {
  fetch("input.txt")
    .then(resp => resp.text())
    .then(text => sortData(text));
}

fetchingInput();
