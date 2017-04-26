
const map = (arr, cb, ctx) => {
  var res = []
  arr.forEach(function(elem, index) {
    res.push(cb.apply(ctx, [elem, index, arr]))
  })
  return res
}

module.exports = map
