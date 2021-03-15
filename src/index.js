
exports.min = function min (array) {
  if (typeof(array) !== ('undefined' || null) ){
    return array.length != 0 ? Math.min.apply(null, array) : 0
  } else {
    return 0
  } 
}

exports.max = function max (array) {
  if (typeof(array) !== ('undefined' || null) ){
    return array.length != 0 ? Math.max.apply(null, array) : 0
  } else {
    return 0
  } 
}

exports.avg = function avg (array) {
  const sum = (a, b) => a + b
  if (typeof(array) !== ('undefined' || null) ){
    return array.length != 0 ? array.reduce(sum) / array.length : 0
  } else {
    return 0
  }
}
