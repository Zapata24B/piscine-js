function slice(str,indexStart,indexEnd) {
    if (indexStart < 0){
        indexStart = str.length + indexStart
    }

    if ((indexEnd < 0) && (indexEnd!=null)) {
        indexEnd = str.length + indexEnd
    }

    let len = str.length

    if (indexEnd != null){
        len = indexEnd     
    }

    if (Array.isArray(str)) {
        let res = []

        for (let i = indexStart; i < len; i++) {
            res.push(str[i])
        }
        return res
    } else {
        let res = ''
        for (let i = indexStart; i < len; i++) {
            res += str[i]    
        }
        return res
    }
}
