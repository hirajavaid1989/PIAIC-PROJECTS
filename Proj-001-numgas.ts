#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let rndnum = Math.round(Math.random() * 10);

// console.log(rndnum);

for (let lop = 0; lop < 3; lop++) {
  chalk.bgCyanBright(
    console.log(chalk.blueBright(`Attempt No --> ${lop + 1}`))
  );
  let answers = await inquirer.prompt([
    {
      name: "input",
      type: "number",
      message: chalk.green("Guesss number in between 1 to 10 "),
    },
  ]);

  if (answers.input === rndnum) {
    console.log(chalk.bold.white.bgRedBright("Congrts !!! You Win"));
    break;
  } else {
    if (lop >= 2) {

        console.log(chalk.bold.white.bgRed("Kicked Out !!"));
      break;
    } else {
      console.log(chalk.magenta("Oop's! You Enter Wrong Number Try again"));
    }
  }
}
