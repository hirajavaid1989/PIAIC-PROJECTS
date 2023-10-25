#!/usr/bin/env node

import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "num1",
      message: "Enter First Number --> ",
      type: "number",
    },

    {
      name: "num2",
      message: "Enter Second Number --> ",
      type: "number",
    },

    {
      name: "operator",
      message: "Select operators",
      type: "list",
      choices: ["+", "-", "/", "*"],
    },
  ])
  .then(function (answer) {

    
    if (answer.operator === "+") {
      console.log(`Your Answer is = ${answer.num1 + answer.num2}`);
    } else if (answer.operator === "-") {
      console.log(`Your Answer is = ${answer.num1 - answer.num2}`);
    } else if (answer.operator === "/") {
      console.log(`Your Answer is = ${answer.num1 / answer.num2}`);
    } else if (answer.operator === "*") {
      console.log(`Your Answer is = ${answer.num1 * answer.num2}`);
    }
  });
