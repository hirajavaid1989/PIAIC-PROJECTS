import inquirer from "inquirer";
let apilink =
  "https://v6.exchangerate-api.com/v6/cd7780116c4bb8f4bf01aa01/latest/PKR";

let fatchData = async (data: any) => {
  let fatchData = await fetch(data);
  let res = await fatchData.json();
  return res.conversion_rates;
};

let data = await fatchData(apilink);
let countries = Object.keys(data);

let firstCountry = await inquirer.prompt({
  type: "list",
  name: "name",
  message: "Enter First country",
  choices: countries,
});

let useerMoney = await inquirer.prompt({
  type: "number",
  name: "rupee",
  message: `Enter Amount in ${firstCountry.name}`,
});

let SecondCountry = await inquirer.prompt({
  type: "list",
  name: "name",
  message: "Enter First country",
  choices: countries,
});

let cnv = `https://v6.exchangerate-api.com/v6/cd7780116c4bb8f4bf01aa01/pair/${firstCountry.name}/${SecondCountry.name}`;
console.log(cnv);

let cnvData = async (data: any) => {
  let cnvData = await fetch(data);
  let res = await cnvData.json();
  return res.conversion_rate;
};

let convrRate = await cnvData(cnv);
let rate = useerMoney.rupee * convrRate;
console.log(rate);
