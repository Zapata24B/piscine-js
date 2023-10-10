function get(src,path) {
    path = path.split(".")
    for (let i = 0; i < path.length; i++) {
        src = src[path[i]]
        if (src == null){
            return undefined
        }
    }
    return src
}

