let table =[
    [0, 1, 1, 1, 0, 0, 0], 
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0],
]

exports.getWinner=function (uStep, cStep) {
    if (uStep == cStep) {
         return 'Nobody';
    }
    if (table[uStep][cStep] == 0) {
        return 'Computer Win';
    }
    if (table[uStep][cStep] == 1) {
        return 'You Win';
    }
},

exports.help=function () {
    console.log(table.join('\n'));
 }