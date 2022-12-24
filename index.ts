import inquirer from 'inquirer';
import chalk from 'chalk';

const answer: {
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first number: "
    },
        {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second number: "
    },
        {
        type: "list",
        name: "operator",
        choices: ["*","+","-","/"],
        message: "Select Operator: "
    },
]);


const { numberOne, numberTwo, operator } = answer;

if(numberOne && numberTwo && operator) {
    let result: number | null = null;
    switch(operator) {
        case "*":
            result = numberOne * numberTwo;
            break;
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        default: result = null
    }
    console.log(chalk.green("Result:",result));
} else {
    console.log(chalk.red("Error: Input value is invalid or empty"));
}