import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const res = await inquirer.prompt({
  type: "number",
  name: "userInput",
  message: "Enter amount in seconds",
  validate: (input) => {
    if (isNaN(input)) {
      return "please enter valid number";
    } else if (input > 60) {
      return "seconds must be in 60";
    } else {
      return true;
    }
  },
});

let input = res.userInput;

function startTime(val: number) {
  const initTime = new Date().setSeconds(new Date().getSeconds() + val);
  const intervalTime = new Date(initTime);

  setInterval(() => {
    const currenTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currenTime);
    if (timeDiff <= 0) {
      console.log("Timer is Expired");
      process.exit();
    }
    const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
    const sec = Math.floor(timeDiff % 60);
    console.log(
      ` ${min.toString().padStart(2, "0 ")} ${sec.toString().padStart(2, "0 ")}`
    );
  }, 1000);
}

startTime(input);
