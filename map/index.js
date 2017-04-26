
const map = (arr, cb, ctx) => {
  let res = []
  arr.forEach((elem, index) => res.push(cb.apply(ctx, [elem, index, arr])))
  return res
}

module.exports = map
