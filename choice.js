const readline = require('readline');

var generateMenu = require('./generateMenu.js');

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
    let rand = Math.floor(Math.random() * generateMenu.arrMenu.length)+1
    return rand;
}