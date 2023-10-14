function findExpression(num, current = 1, expression = '1') {
    const add4 = '+4'
const mul2 = '*2'
    if (current === num) {
        return expression
      }
    
      if (current > num) {
        return undefined
      }
    
      const add4Expression = findExpression(num, current + 4, `${expression} ${add4}`)
      const mul2Expression = findExpression(num, current * 2, `${expression} ${mul2}`)
    
      if (add4Expression) {
        return add4Expression;
      }
      
      if (mul2Expression) {
        return mul2Expression;
      }
    
      return undefined;
    
}