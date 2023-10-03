const escapeStr = "\' \` \\ \/ \""
const arr = [4, '2']
Object.freeze(arr)
const obj = {
    str: 'abc',
    num: 123,
    bool: true,
    undef: undefined,
}
Object.freeze(obj)

const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'abc',
        num: 123,
        bool: false,
    }
}


const deepfreeze = obj => {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object') deepfreeze(obj[prop])
    });
    return Object.freeze(obj);
}
deepfreeze(Object.freeze(nested))