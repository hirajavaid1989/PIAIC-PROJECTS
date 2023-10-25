import inquirer from "inquirer";
import chalk from "chalk";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }

  fuleDecrease() {
    this.fuel -= 25;
  }
  fuleIncrese(){

    this.fuel = 100

  }

}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuleDecrease() {
    this.fuel -= 25;
  }
}

let player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "Please Enter Your Name",
});

let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Please  Select Opponent",
  choices: ["Skeleton", "Assassin", "Zombia"],
});


let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);


do{

if(opponent.select == "Skeleton") {
  let ask = await inquirer.prompt({
    type: "list",
    name: "opt",
    message: "Select Action You Requred",
    choices: ["Attack", "Drink Portion", "Run For Life ..."],
  });
  if (ask.opt == "Attack") {
    let num = Math.floor(Math.random() * 2);
    if (num > 0) {
        p1.fuleDecrease();
        console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
        if(p1.fuel <= 0){
            console.log("You Lose");
            process.exit();
           }

    } else {
        o1.fuleDecrease();
        console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
        if(o1.fuel <= 0){
            console.log("You Win");
            process.exit();
           }
    
    }
  }
  if (ask.opt == "Drink Portion") {
    p1.fuleIncrese();
    console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
    console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));



}
  if (ask.opt == "Run For Life ...") {
    console.log("Exit ........");
    process.exit();

  }
} 


else if (opponent.select == "Assassin") {
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Action You Requred",
        choices: ["Attack", "Drink Portion", "Run For Life ..."],
      });
      if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuleDecrease();
            console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
            if(p1.fuel <= 0){
                console.log("You Lose");
                process.exit();
               }
    
        } else {
            o1.fuleDecrease();
            console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
            if(o1.fuel <= 0){
                console.log("You Win");
                process.exit();
               }
        
        }
      }
      if (ask.opt == "Drink Portion") {
        p1.fuleIncrese();
        console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
    
    
    
    }
      if (ask.opt == "Run For Life ...") {
        console.log("Exit ........");
        process.exit();
    
      }



} 

else if (opponent.select == "Zombia") {

    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Action You Requred",
        choices: ["Attack", "Drink Portion", "Run For Life ..."],
      });
      if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuleDecrease();
            console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
            if(p1.fuel <= 0){
                console.log("You Lose");
                process.exit();
               }
    
        } else {
            o1.fuleDecrease();
            console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
            if(o1.fuel <= 0){
                console.log("You Win");
                process.exit();
               }
        
        }
      }
      if (ask.opt == "Drink Portion") {
        p1.fuleIncrese();
        console.log(chalk.bold.red(`${p1.name} fule is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fule is ${o1.fuel}`));
    
    
    
    }
      if (ask.opt == "Run For Life ...") {
        console.log("Exit ........");
        process.exit();
    
      }


}
}



while(true)
