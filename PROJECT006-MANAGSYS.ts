import inquirer from "inquirer";

class School {
  name: string;
  students: student[] = [];
  teachers: teachers[] = [];

  addStudent(stdObj: student) {
    this.students.push(stdObj);
  }

  addTeacher(teachObj: teachers) {
    this.teachers.push(teachObj);
  }

  constructor(name: string) {
    this.name = name;
  }
}

class student {
  name: string;
  age: number;
  schoolName: string;

  constructor(name: string, age: number, schoolName: string) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
  }
}

class teachers extends student {}

let school1 = new School("Alpha");
let school2 = new School("Noby");

let s1 = new student("Fawwad", 45, school1.name);
let s2 = new student("Hira", 35, school2.name);
let s3 = new student("Haram", 16, school2.name);
let t1 = new teachers("Sir Zia", 65, school1.name);
let t2 = new teachers("Ms. Sana Khan", 40, school2.name);
let t3 = new teachers("Sir Imran", 45, school2.name);

school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);

school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);

console.log(school1);
console.log(school2);
