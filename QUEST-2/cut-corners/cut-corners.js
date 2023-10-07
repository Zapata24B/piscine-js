function round (n) {
  if (isNaN(n)) return 0
  let i = 0
  if (n < 0) {
    while (n < i) {
      i--
    }
  } else {
    while (n > i) {
      i++
    }
  }
  const d = n - i
  if (d < -0.5) return i - 1
  if (d > 0.5) return i + 1
  return i
}

function ceil (n) {
    if (Number.NaN) {
        return 0;
    }
    let r = modulo(n, 1);
    if (r == 0) {
        return n;
    } else {
        if (n < 0) {
            return n + Math.abs(r);
        } else {
            return n + (1 - r);
        }
    }
}

function floor (n) {
    if (Number.NaN) {
        return 0;
    }
    let r = modulo(n, 1);
    if (r == 0) {
        return n;
    } else {
        if (r < 0) {
            return n - (1 + r)
        } else {
            return n - r;
        }

    }
}

function trunc(n) {
    if (n >= 0xfffffffff) {
        let res = n - 0xfffffffff
        return trunc(res) + 0xfffffffff
    }

    if (n >= 0) {
        return floor(n);
    } else {
        return ceil(n);
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

