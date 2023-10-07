function cutFirst(str) {
    return str.slice(2)
}

function cutLast(str) {
    return str.slice(0,str.length - 2)
}

function cutFirstLast(str) {
    return str.slice(2,str.length - 2)
}

function keepFirst(str) {
    return str.slice(0,2)
}

function keepLast(str) {
    return str.slice(-2)
}

function keepFirstLast(str) {
    let res = ''
    res = str.slice(0, 2)

    switch (str.length) {
        case 2:
            return res;
        case 3:
            return res + str[2]
        default:
            return res + str.slice(-2)
    }
}