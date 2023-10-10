function flat(arr, depth = 1) {
    if (depth === 0) {
      return arr.slice();
    }
  
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const nested = flat(arr[i], depth - 1);
        result = result.concat(nested);
      } else {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
