const readline = require('readline');

var generateTable = require('./generateTable.js');

exports.choiceUser=function () {
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter your move: ", (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}

exports.сhoiceComp=function () {
    let rand = Math.floor(Math.random() * generateTable.arrMenu.length)
    return rand;
}