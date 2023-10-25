import inquirer from "inquirer";

let todos: string[] = ["Hira", "Fawwad", "Owais", "M ali"];
let shutdown: boolean;
shutdown = true;



async function createTodo(arr: String[]) {

do{


  let ans = await inquirer.prompt({
    type: "list",
    message: "Select the options",
    name: "select",
    choices: ["Add", "Update", "View", "Delete","Exit"],
  });
  if (ans.select == "Add") {
    let addTodo = await inquirer.prompt({
      type: "input",
      message: "Enter your item to add",
      name: "todo",
    });
    arr.push(addTodo.todo);
    console.log(todos);
  } else if (ans.select == "Update") {
   
    let updateTodo = await inquirer.prompt({
      type: "list",
      message: "Select item to update",
      name: "todo",
      choices: todos.map((item) => item),
    });
    let addTodo = await inquirer.prompt({
      type: "input",
      message: "Add Item",
      name: "todo",
    });
    let newTodos = todos.filter((val) => val !== updateTodo.todo);
    todos = [...newTodos, addTodo.todo];
    console.log(todos);
  } else if (ans.select == "View") {
    
    console.log(todos)


  } else if (ans.select == "Delete") {
    let delTodo = await inquirer.prompt({
        type: "list",
        message: "Select item to Delete",
        name: "todo",
        choices: todos.map((item) => item),
      });
      let newTodos = todos.filter((val) => val !== delTodo.todo);
      todos = [...newTodos]
      console.log(todos)
      


  } else if(ans.select == "Exit") {
    console.log("Good By");
    shutdown = false

  }



} while(shutdown)

}

createTodo(todos);
