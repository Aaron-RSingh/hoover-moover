let sortData = function(string) {
  console.log(string);



  const array = string.split(" ");
  console.log(array);
  let directions = array[array.length - 1];
  console.log(directions);
  array.pop();
  let roomWidth = array[0];
  array.shift();
  let roomHeight = array[0];
  array.shift();
  console.log("room width" + " = " + roomWidth);
  console.log("room height" + " = " + roomHeight);
  let dirtPatches = this.coordinatesArray(array);
  let numberOfDirtPatches = dirtPatches.length;
  console.log(numberOfDirtPatches);
  colourDirt(dirtPatches);
};

//function to

function coordinatesArray(array) {
  let results = [];
  while (array.length) {
    results.push(array.splice(0, 2));
  }
  return results;
}

function colourDirt(array) {
  console.log(array);
  index = 0;
  while (index < array.length) {
    console.log(index);
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
