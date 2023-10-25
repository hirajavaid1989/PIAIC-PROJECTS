import inquirer from "inquirer";

const apilink: string =
  "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";

let fatchData = async (data: string) => {
  let fatchQuiz: any = await fetch(data);
  let res = await fatchQuiz.json();
  return res.results;
};

let data = await fatchData(apilink);

let startQuiz = async () => {
  let score: number = 0;

  let name = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your Name",
  });

  for (let i = 1; i < 5; i++) {
    let answers = [...data[i].incorrect_answers, data[i].correct_answer];

    let ans = await inquirer.prompt({
      type: "list",
      name: "quiz",
      message: data[i].question,
      choices: answers.map((val: any) => val),
    });

    if (ans.quiz == data[i].correct_answer) {
      score++;
    }
    console.log(score);
  }
};

startQuiz();
