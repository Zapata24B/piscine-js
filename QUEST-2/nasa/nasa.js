function nasa (N) {
  let arr = []
  for (let i = 1; i <= N; i++) {
    arr.push(i)
  }
  
  for (let j = 0; j <= arr.length; j++) {
    if (arr[j] % 3 == 0 && arr[j] % 5 == 0) {
      arr[j] = 'NASA'
    } else if (arr[j] % 3 == 0) {
      arr[j] = 'NA'
    } else if (arr[j] % 5 == 0) {
      arr[j] = 'SA'
    }
  }

  let res = ''
  for (let k = 0; k < arr.length; k++) {
    res += arr[k]
    if (k != arr.length - 1) {
      res += ' '
    }
  }
  return res
}
