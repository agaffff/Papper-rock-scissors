var choice = require('./choice.js');
var winner = require('./winner.js');
var generateTable = require('./generateTable.js');
var generateKey = require('./generateKey');

isDigit = true;
errorText = 'You entered incorrect value!\nGame ower!';

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

async function main(str) {
    key256 = generateKey.HMAC(generateKey.generateGuid());

    generateTable.createMenu(str);

    compStep = choice.сhoiceComp();
    console.log('HMAC:' + generateKey.HMAC(key256 + compStep));


    generateTable.viewMenu();
    userStep = await choice.choiceUser();

    if (!isNumber(userStep)) {
        this.isDigit = false;
        if (userStep == '?') {
            winner.help();
            generateTable.arrMenu.length = 0;
            main(str);
            return;
        }
        if (/\s/.test(userStep)) {
            console.log(errorText)
            return;
        }

        let res = generateTable.arrMenu.indexOf(userStep);
        if (res < 0) {
            console.log(errorText);
            return
        }
        userStep = res;
    } else {
        if (userStep < 0) {
            console.log(errorText);
            return
        }
        if (generateTable.arrMenu.length < userStep) {
            console.log(errorText);
            return;
        }
    }

    if (this.isDigit && userStep == 0) {
        console.log('Exit game!');
        return
    }

    let win = winner.getWinner(--userStep, compStep);

    console.log("Your move:" + generateTable.arrMenu[userStep]);
    console.log("Computer move:" + generateTable.arrMenu[compStep]);
    console.log(win);
    console.log('HMAC key:' + key256);
}

main(process.argv.slice(2));