function multiply(a,b) {
    const aSign = Math.sign(a)
    const bSign = Math.sign(b)

    a = Math.abs(a)
    b = Math.abs(b)

    var res = 0
    for (let i = 0; i < a; i++){
        res += b
    }
    if (aSign != bSign) {
        return (-res)
    } else {
        return (res)
    }
}

function divide(a,b) {
    const aSign = Math.sign(a)
    const bSign = Math.sign(b)

    a = Math.abs(a)
    b = Math.abs(b)

    let div = 0
    let i = 0

    while (i < a) {
        i += b
        div++
    }
    div--
    
    if (aSign != bSign) {
        return (-div)
    } else {
        return (div)
    }
}

function modulo(a,b) {
    const aSign = Math.sign(a)
    
    a = Math.abs(a)
    b = Math.abs(b)

    var res = 0;
    let i = 0;

    while (i <= a) {
        i += b;
    }

    i -= b;

    res = a - i;
    if (aSign < 0) {
        res = -res;
    }
    return res
}