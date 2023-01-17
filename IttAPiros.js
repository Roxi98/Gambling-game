const { randomIntBetweenTwoNumbers } = require("../XO/funkciok");
const readline = require("readline");

const { count } = require("console");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let Doors = [1, 2, 3];
let WinningDoor = randomIntBetweenTwoNumbers(0, 2);
Doors[WinningDoor] = "Fcking new car";

function gameMode(end) {
  return new Promise((resolve, reject) => {
    rl.question("Please choose a door between 1-3  ", (answer) => {
      if (Doors[answer - 1] === "Fcking new car") {
        console.log("You win!");
        resolve(false);
      } else {
        console.log("You loose,give me your money");
      }
      resolve(false);
    });
  });
}
async function game() {
  end = await gameMode();

  rl.close();
}

game();
