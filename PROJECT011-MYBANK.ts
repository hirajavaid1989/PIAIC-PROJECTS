import inquirer from "inquirer";
import { faker } from "@faker-js/faker";

class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  mobileNumber: number;
  accountNumber: number;

  constructor(
    fName: string,
    lName: string,
    age: number,
    gender: string,
    mob: number,
    acc: number
  ) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.gender = gender;
    this.mobileNumber = mob;
    this.accountNumber = acc;
  }
}

interface BankAccount {
  accNumber: number;
  balance: number;
}

class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];

  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }
  addAccount(obj: BankAccount) {
    this.account.push(obj);
  }
  transaction(accObj: BankAccount) {
    let NewAccounts = this.account.filter(
      (acc) => acc.accNumber !== accObj.accNumber
    );
    this.account = [...NewAccounts, accObj];
  }
}

let myBank = new Bank();

for (let i: number = 1; i <= 10; i++) {
  let fName = faker.person.firstName("male");
  let lName = faker.person.lastName();
  let num = parseInt(faker.phone.number());
  const cus = new Customer(fName, lName, 25 * i, "male", num, 1000 + i);
  myBank.addAccount({ accNumber: cus.accountNumber, balance: 100 * i });
}

async function bankService(bank: Bank) {

    do{
    
  let service = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please Select the Service",
    choices: ["View Balance", "Cash Withdraw", "Cash Deposit"],
  });

  if (service.select == "View Balance") {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please Enter Account Number",
    });

    let account = myBank.account.find((acc) => acc.accNumber == res.num);
    if (!account) {
      console.log("Invalid Account Number");
    } else if (account) {
      let name = myBank.account.find(
        (item) => item.accNumber == account?.accNumber
      );
      console.log(`Your Account Balance is = ${account.balance}`);
    }
  } 
  
  
  
  
  
  if ((service.select == "Cash Withdraw")) {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please Enter Account Number",
    });

    let account = myBank.account.find((acc) => acc.accNumber == res.num);
    if (!account) {
      console.log("Invalid Account Number");
    } 
    if (account) {
      let ans = await inquirer.prompt({
        type: "input",
        name: "rupee",
        message: "Please Amount to Withdraw",
      });

      if(ans.rupee >account.balance){
        console.log("Not Enough Balance!")
     }
      else{
      let newBalance = account.balance - ans.rupee;
      bank.transaction({ accNumber: account.accNumber, balance: newBalance });
        }
    }



  }
  
  
  
  if ((service.select == "Cash Deposit")) {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please Enter Account Number",
    });

    let account = myBank.account.find((acc) => acc.accNumber == res.num);
    if (!account) {
      console.log("Invalid Account Number");
    } 
    if (account) {
      let ans = await inquirer.prompt({
        type: "number",
        name: "rupee",
        message: "Please Amount to Deposit",
      });
      let newBalance = account.balance + ans.rupee;

      console.log(newBalance);
      bank.transaction({ accNumber: account.accNumber, balance: newBalance });
      
    }



  }

}
while(true)


}

bankService(myBank);
