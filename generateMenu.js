exports.arrMenu = []

exports.createMenu = function (str) {
    str.forEach(element => {
        this.arrMenu.push(element);
    });
}

exports.viewMenu = function () {
    let i = 0;
    console.log('Available moves:');
    this.arrMenu.forEach(x => console.log(++i + ' - ' + x));
    console.log('0 - exit');
    console.log('? - help');
}