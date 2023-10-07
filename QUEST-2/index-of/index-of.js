const tests = []
const t = (f) => tests.push(f)

function indexOf (arr, val, start = 0) {
  while (start < arr.length) {
    if (arr[start] == val) {
      return start
    }
    start++
  }
  return -1
}

function lastIndexOf (arr, val, start = arr.length) {
  let res = -1
  for (let i = 0; i <= start; i++) {
    if (arr[i] == val) {
      res = i
    }
  }
  return res
}

function includes (arr, val) {
  let check = indexOf(arr, val)
  if (check == -1) {
    return false
  } else {
    return true
  }
}

console.log(lastIndexOf([t, 0, 0, t], t, 2))