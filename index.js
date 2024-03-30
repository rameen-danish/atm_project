#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code!"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code.Welcome to your account.");
}
else {
    console.log("Incorrect pincode.Please enter valid pin code.");
}
let features = await inquirer.prompt([
    {
        name: "operations",
        type: "list",
        message: "Please select option.",
        choices: ["Balance Inquiry", "Withdraw", "Fast Cash", "Exit"]
    }
]);
if (features.operations === "Balance Inquiry") {
    console.log(`Your current balance is ${myBalance}`);
}
else if (features.operations === "Withdraw") {
    let amount = await inquirer.prompt([
        {
            name: "withdrawAmount",
            type: "number",
            message: "Enter Amount to withdraw"
        }
    ]);
    if (amount.withdrawAmount <= myBalance) {
        myBalance -= amount.withdrawAmount;
        console.log(`You Withdraw ${amount.withdrawAmount}`);
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else
        console.log("You did'nt have sufficent balance");
}
else if (features.operations === "Fast Cash") {
    let option = await inquirer.prompt([
        {
            name: "fastcash",
            type: "list",
            message: "Select amount to with draw.",
            choices: ["5000", "10000", "15000", "20000", "25000"]
        }
    ]);
    myBalance -= option.fastcash;
    console.log(`You Withdraw Fast Cash ${option.fastcash}`);
    console.log(`Your remaining balance is ${myBalance}`);
}
