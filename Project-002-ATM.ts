import inquirer from "inquirer";
import { faker } from "@faker-js/faker";


interface User {
  id: number;
  pin: number;
  name: string;
  accountNumber: number;
  balance: number;
}

const createUser = () => {
  let users: User[] = [];

  for (let i = 0; i < 6; i++) {
    let user: User = {
      id: i,
      pin: 1000 + i,
      name: faker.person.fullName(),
      accountNumber: Math.floor(100000000 * Math.random() * 900000000),
      balance: 1000000 * i,
    };

    users.push(user);
  }
  return users;
};

// console.log(users)

const atmMachine = async (users: User[]) => {
  const res = await inquirer.prompt({
    type: "number",
    message: "Please Enter Your Pin Please ===>  ",
    name: "pin",
  });

  //  console.log(res)
  const user = users.find((val) => val.pin == res.pin);

  if (user) {
    console.log(`Welcome Mr. ${user.name}`);
    atmFunc(user);
  } else {
    console.log("No User Found");
  }
};

const atmFunc = async (user: User) => {
  const ans = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Enter your Choice",
    choices: ["Withdrow", "Deposit", "Balance", "Exit"],
  });

  // console.log(ans)
  if ((ans.select == "Withdrow")) {
    const getAmount = await inquirer.prompt({
      type: "number",
      name: "deduct",
      message: "Enter Amount which you want to withdrow: ",
    });

    if (getAmount.deduct > user.balance) {
      console.log("You Excide your Account Balance");
    } else {
      console.log("Amount Deducted");
      console.log(`Your Current balance is ${user.balance - getAmount.deduct}`);
      console.log("Thanks to Using This Machine");
    }
  }



  else if ((ans.select == "Deposit")) {
    const getAmount = await inquirer.prompt({
      type: "number",
      name: "add",
      message: "Enter Amount which you want to Deposit: ",
    })

    
      console.log("Amount Deposited");
      console.log(`Your Current balance is ${user.balance + getAmount.add}`);
      console.log("Thanks to Using This Machine");

  }

  else if ((ans.select == "Balance")) {
        
      console.log(`Your Current balance is ${user.balance}`);
      console.log("Thanks to Using This Machine");

  }

  else if ((ans.select == "Exit")) {
        
      console.log("Thanks to Using This Machine");
      console.log("Good By.....................")

  }



};

const users = createUser();
atmMachine(users);
// console.log(users)
