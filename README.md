# hoover-moover

Instructions:
 - clone repository to local computer
 - open repository in your editor
 - Using VSCode and the Live Server extension by Ritwick Dey, right click the index.html tab and select open index.html with the Live Server option and continue on through the README.md!

Hello World!

Program to make a roomba clean a room with no doors or windows, so I suppose it's a Schrödinger's cat situation, who knows if the room is actually clean?!?

Well, fortunately, I have created a few lines of code to let us know how many patches of dirt have been cleaned and where the roomba ends up. All we need are a few small things, respectively:

- dimensions of the room, must be a regular rectangle
- starting co-ordinates for the roomba
- set of co-ordinates for each pile of dirt
- directions for the roomba to move and attempt to clean

To give a better understanding of the data, I will break down the example data which is as follows:

5 5

1 2

1 0

2 2

2 3

NNESEESWNWW

In this example:
The first line are dimensions signifying a 5x5 grid
The second line gives the starting point at position (1,2)
The remaining pairs of co-ordinates are the piles of dirt at (1,0), (2,2), (2,3) respectively
Finally, the directions for the roomba are NNESEESWNWW where "N" is North, "E" is East, etc.

NOTE: It should be noted that the co-ordinates respond the the bottom left corner of a tile with its given value, so in a 5x5 grid, there will never be a co-ordinate pair with either value greater than 4 (otherwise it would be outside the room).

I broke down the problem by giving the grid a numberline property such that I could transform any co-ordinate into a singular numerical value. For the given example, the algorithm was as follows:

(x, y) => x + (5*y) + 1 = co-ordinate value

Where 5 = the width dimension of the room.
As well as the additional "+ 1" to allow myself to start the first tile to have the value of 1.

Eg. For (0,0) => 0 + (5\*0) + 1 = 1

Eg. For (3,2) => 3 + (5\*2) + 1 = 14

Eg. For (4,4) => 4 + (5\*4) + 1 = 25

etc.

To conduct more tests, simply change the information in the "input.txt" file and either type "open index.html" in your terminal, or right click the index.html file and choose option "open with live server" or your editors equivalent option.
You can change the dimensions of the room, change the starting position, change the number of piles of dirt or change the list of directions.
Providing the starting position is located within the dimensions of the room and the directions only consist of the 4 basic compass directions, this program will give an output stating the final position of the roomba as well as the number of piles of dirt cleaned in that specific set code.
