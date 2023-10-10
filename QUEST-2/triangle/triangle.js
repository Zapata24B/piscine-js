function triangle(str,n) {
    let res = ''

    for (let i = 0; i <= n ; i++) {
        for (let j = 0; j < i; j++) {
            res += str
            if ((j == i-1 ) && (i != n)) {
                res += '\n'
            }
        }
    }
    return res
}
