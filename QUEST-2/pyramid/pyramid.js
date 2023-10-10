function pyramid (str, n) {
  let res = ''

  for (let i = 1; i <= n; i++) {
    let nChar = 2 * i - 1
    let nSpaces = (2 * n - 1 - nChar) * str.length
    nSpaces /= 2

    for (let j = 0; j < nSpaces; j++) {
      res += ' '
    }

    for (let k = 0; k < nChar; k++) {
      res += str
    }
    if (i != n) {
      res += '\n'
    }
  }
  return res
}