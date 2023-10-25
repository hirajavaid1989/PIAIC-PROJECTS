import inquirer from 'inquirer';

const counter = (paragraph:string)=> paragraph.replace(/\s/g,"").length

async function startWordCount(counter:(text:string)=>number) {
    do{

        let res = await inquirer.prompt({
                type: "input",
                message:"Please Enter Some Text ...",
                name: "Para"
        })
                console.log(counter(res.Para))

    }
    while(true)
}

startWordCount(counter)













