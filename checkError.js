exports.checkCountArg = function (aMenu) {

    if (aMenu.length == 1) {
        console.log('you entered one argument');
        return false;
    }

    if (aMenu.length % 2 == 0) {
        console.log('you entered an even number');
        return false;
    }

    let uniqArray = aMenu.filter((item, index) => {
        return index === aMenu.indexOf(item);
    })

    if(uniqArray.length != aMenu.length ){
        console.log('you entered duplicates');
        return false;
    }

    return true;
}