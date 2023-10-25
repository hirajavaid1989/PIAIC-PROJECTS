import inquirer from "inquirer";

class Student {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];

  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

const persons = new Person();

const programStart = async (persons: Person) => {
  do {
    console.log("Welcome Guest");

    const ans = await inquirer.prompt({
      type: "list",
      message: "Aap Kis Say Baat Karna Pasand Karanga",
      name: "Select",
      choices: ["Khud Sa", "Kisi Student Sa"],
    });
    if (ans.Select == "Khud Sa") {
      console.log("Hello Khud Sa Baat Kar Raha Hon");
      console.log("Meri Tabiat Bilkul Theek Ha");
    }

    if (ans.Select == "Kisi Student Sa") {
      const ans = await inquirer.prompt({
        type: "input",
        message: "Student Ka Name Batain",
        name: "student",
      });

      const student = persons.students.find((val) => val.name == ans.student);

      if (!student) {
        const name = new Student(ans.student);
        persons.addStudent(name);

        console.log(`Hello! Mera Naam ${name} Ha Owr Manh Bilkul Theek Hoon`);
        console.log(persons.students);
      }

      if (student) {
        console.log(
          `Hello! Mera Naam ${student.name} Ha Owr Manh Bilkul Theek Hoon`
        );
        console.log(persons.students);
      }
    }
  } while (true);
};

programStart(persons);
