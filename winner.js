let table = [];

exports.fillTableHelp = function (argArr) {
    let al = argArr.length + 1;
    var x = new Array(al);
    let countWin = Math.floor(argArr.length / 2);
    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(x.length);
        cWin = countWin;
        if (i == 0) {
            for (let index = 0; index < al; index++) {
                if (index == 0) {
                    x[i][index++] = 'x'
                };
                x[i][index] = argArr[index - 1];
            }
        } else {
            for (let index = 0; index < al; index++) {
                if (index == 0)
                    x[i][index] = argArr[i - 1];
                else {

                    if (i == index) {
                        x[i][index] = 'draw';
                    } else if (index > i && cWin > 0) {
                        x[i][index] = 'win';
                        cWin--
                    } else {
                        x[i][index] = 'lose';
                    }

                    if (cWin > 0 && index == al - 1) {
                        for (let ind = 1; ind <= cWin; ind++) {
                            x[i][ind] = 'win';
                        }
                    }
                }
            }
        }
    }
    table = x;
}

exports.getWinner = function (uStep, cStep) {
    let result = (table[uStep][cStep] == 'draw') ? 'Nobody' :
        (table[uStep][cStep] == 'lose') ? 'Computer Win' : 'You Win';
    return result;
}

exports.help = function () {
    console.log(table.join('\n'));
}