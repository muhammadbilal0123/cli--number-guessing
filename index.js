#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 to 10:"
    }]);
if (answers.userGuessNumber === randomNumber) {
    console.log("congtratulation you guess a right number");
}
else {
    console.log("you guessed a wrong number");
}
