function arrToSet (arr) {
  return new Set(arr)
}

function arrToStr (arr) {
  return arr.join('')
}

function setToArr (set) {
  return [...set]
}

function setToStr (set) {
  return [...set].join('')
}

function strToArr (str) {
  return str.split('')
}

function strToSet (str) {
  return new Set(str)
}

function mapToObj (map) {
  return Object.fromEntries(map.entries())
}

function objToArr (obj) {
  return Object.values(obj)
}

function objToMap (obj) {
  return new Map(Object.entries(obj))
}

function arrToObj (arr) {
  return Object.assign({}, arr)
}

function strToObj (str) {
  return Object.assign({}, [...str])
}

function superTypeOf (val) {
  if (val === null) return 'null'
  if (typeof val === 'number') return 'Number'
  if (Array.isArray(val)) return 'Array'
  if (val === undefined) return 'undefined'
  if (val === superTypeOf) return 'Function'
  if (val instanceof Map) return 'Map'
  if (val instanceof Set) return 'Set'
  if (typeof val === 'string') return 'String' // Return 'String' for strings
  return typeof val === 'object' ? 'Object' : typeof val
}
