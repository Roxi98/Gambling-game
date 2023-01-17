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

function gameMode() {
  return new Promise((resolve, reject) => {
    rl.question(
      "Please choose a door between 1-3. If you pich the right, you will get the new car! If you dont u have to pay me 5000$. ",
      (answer) => {
        if (Doors[answer - 1] === "Fcking new car") {
          console.log("Congrats, you pick the right door. The car is yours! ");
          resolve(false);
        } else {
          console.log("You loose,give me your money");
        }
        resolve(false);
      }
    );
  });
}
async function game() {
  await gameMode();

  rl.close();
}

game();
