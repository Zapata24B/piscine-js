function sign(num) {
    if (num > 0){
        return 1
    }else if (num < 0){
        return -1
    } else {
        return 0
    }
}

function sameSign(a, b) {
    if (sign(a) === sign(b)){
        return true
    }else{
        return false
    }
}