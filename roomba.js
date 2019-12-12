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
    roombaStartPosition.x + 5 * roombaStartPosition.y;
  console.log({ numericalRoombaStartPosition });
  convertDirtToNumbers(dirtPiles);

  // function to call roomba movemtent
  directionalMovement(directions, numericalRoombaStartPosition, roomSize);
};

// function to identify numeric value for dirt tiles

const dirtArray = [];
function convertDirtToNumbers(data) {
  data.map(dirtPile => {
    const dirtValue = dirtPile.x + 1 + 5 * dirtPile.y;
    dirtArray.push(dirtValue);
  });
  console.log({ dirtArray });
}

// function to describe direcitonal movement

function directionalMovement(directions, startpoint, roomSize) {
  let cleanupCount = 0;
  let directionArray = [...directions];
  let roombaCurrentPosition = startpoint;
  directionArray.forEach(direction => {
    if (
      direction == "N" &&
      roombaCurrentPosition <= roomSize.x * (roomSize.y - 1)
    ) {
      roombaCurrentPosition += 5;
    } else if (direction == "S" && roombaCurrentPosition > roomSize.x) {
      roombaCurrentPosition -= 5;
    } else if (direction == "E" && roombaCurrentPosition % roomSize.x !== 0) {
      roombaCurrentPosition += 1;
    } else if (
      direction == "W" &&
      (roombaCurrentPosition - 1) % roomSize.x !== 0
    ) {
      roombaCurrentPosition -= 1;
    }
    if (dirtArray.includes(roombaCurrentPosition)) {
      cleanupCount += 1;
    }
    console.log({ roombaCurrentPosition, roomSize, direction });
  });
  let roombaFinalPosition = roombaCurrentPosition;
  console.log({ roombaFinalPosition, cleanupCount });
}
