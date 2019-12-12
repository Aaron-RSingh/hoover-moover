// function to fetch input data from input.txt and send data to be "sorted"

fetchingInput();

function fetchingInput() {
  fetch("input.txt")
    .then(resp => resp.text())
    .then(text => sortData(text));
}

// function to sort data into room room size, roomba start position, dirt positions and directions

let sortData = function(string) {
  // split data into an array, seperating elements by new lines

  const data = string.split("\n");

  // setting directions to a variable and removing them from input data

  let directions = data.pop();

  // converting rest of data to numbers instead of strings

  let sortedData = data.map(pair => {
    const [x, y] = pair.split(" ").map(Number);
    return { x, y };
  });

  // setting sortedData to an object with keys as the room dimensions, roomba start position and an array of dirt piles
  let [roomSize, roombaStartPosition, ...dirtPiles] = sortedData;
  console.log({ roomSize, roombaStartPosition, dirtPiles, directions });

  // setting numeric value to roomba start position

  let numericalRoombaStartPosition =
    roombaStartPosition.x + 1 + roomSize.y * roombaStartPosition.y;
  console.log({ numericalRoombaStartPosition });
  convertDirtToNumbers(dirtPiles, roomSize);

  // function to call roomba movemtent
  directionalMovement(directions, numericalRoombaStartPosition, roomSize);
};

// function to identify numeric value for dirt tiles

const dirtArray = [];
function convertDirtToNumbers(data, roomSize) {
  data.map(dirtPile => {
    const dirtValue = dirtPile.x + 1 + roomSize.x * dirtPile.y;
    dirtArray.push(dirtValue);
  });
  console.log({ dirtArray });
}

// function to describe direcitonal movement

function directionalMovement(directions, startpoint, roomSize) {
  // counter for piles of dirt cleaned up
  let cleanupCount = 0;

  // converting string to array for directions to iterate through
  let directionArray = [...directions];

  // allowing roomba position to change through setting to new variable
  let roombaCurrentPosition = startpoint;

  // iterating through each direction to conduct different movements providing boundary conditions are met
  directionArray.forEach(direction => {
    // move North 1 tile, only when the value of the current roomba position is smaller than
    // the top row of the grid
    if (
      direction == "N" &&
      roombaCurrentPosition <= roomSize.x * (roomSize.y - 1)
    ) {
      roombaCurrentPosition += 5;
    }
    // move South 1 tile, only when the value of the current roomba position is greater than
    // the bottom row of the grid
    else if (direction == "S" && roombaCurrentPosition > roomSize.x) {
      roombaCurrentPosition -= 5;
    }
    // move East 1 tile, only when the value of the current roomba position is not a multiple of the max width
    // of the room
    else if (direction == "E" && roombaCurrentPosition % roomSize.x !== 0) {
      roombaCurrentPosition += 1;
    }
    // move West 1 tile, only when the value of the current roomba position is not one higher than a multiple of
    // the max width of the room
    else if (
      direction == "W" &&
      (roombaCurrentPosition - 1) % roomSize.x !== 0
    ) {
      roombaCurrentPosition -= 1;
    }
    // after every movement, check whether roomba is on same tile as dirt pile, if it is, remove dirt from
    // the dirt array and continue iterating through directions
    if (dirtArray.includes(roombaCurrentPosition)) {
      cleanupCount += 1;
      for (var i = 0; i < dirtArray.length; i++) {
        if (dirtArray[i] === roombaCurrentPosition) {
          dirtArray.splice(i, 1);
        }
      }
    }
    console.log(roombaCurrentPosition);
  });

  // converting final position to co-ordinates

  // evaluating x to account for 0 co-ordinate
  let modX = roombaCurrentPosition % roomSize.x;

  let X = modX === 0 ? modX + 4 : modX - 1;
  let Y = (roombaCurrentPosition - (X + 1)) / roomSize.x;
  let roombaFinalPosition = "(X : " + X + ", Y : " + Y + ")";

  // console log to check final results are correct
  console.log({ roombaFinalPosition, cleanupCount });

  // appending results of both the final position and the number of dirt piles cleaned to DOM

  const resultsDiv = document.querySelector("#results");

  const finalPositionP = document.createElement("p");
  finalPositionP.innerText = "Roomba final position: " + roombaFinalPosition;
  resultsDiv.append(finalPositionP);

  const cleanedElements = document.createElement("p");
  cleanedElements.innerText =
    "Your Roomba has cleaned " + cleanupCount + " pieces of dirt!";
  resultsDiv.append(cleanedElements);

  // c'est finit
}
