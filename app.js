var choice = require('./choice.js');
var winner = require('./winner.js');
var generateMenu = require('./generateMenu.js');
var generateKey = require('./generateKey');
var checkError = require('./checkError.js');

isDigit = true;
errorText = 'You entered incorrect value!\nGame ower!';

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

async function main(str) {
    if(!checkError.checkCountArg(str))
    return
    key256 = generateKey.HMAC(generateKey.generateGuid());
    generateMenu.createMenu(str);
    winner.fillTableHelp(str);
    compStep = choice.сhoiceComp();
    console.log('HMAC:' + generateKey.HMAC(key256 + compStep));
    generateMenu.viewMenu();
    userStep = await choice.choiceUser();

    if (!isNumber(userStep)) {
        this.isDigit = false;
        if (userStep == '?') {
            winner.help();
            generateMenu.arrMenu.length = 0;
            main(str);
            return;
        }
        if (/\s/.test(userStep)) {
            console.log(errorText)
            return;
        }

        let res = generateMenu.arrMenu.indexOf(userStep);
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
        if (generateMenu.arrMenu.length < userStep) {
            console.log(errorText);
            return;
        }
    }

    if (this.isDigit && userStep == 0) {
        console.log('Exit game!');
        return
    }
    let win = winner.getWinner(userStep, compStep);
    console.log("Your move:" + generateMenu.arrMenu[--userStep]);
    console.log("Computer move:" + generateMenu.arrMenu[--compStep]);
    console.log(win);
    console.log('HMAC key:' + key256);
}
main(process.argv.slice(2));