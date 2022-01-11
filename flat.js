let demo = [[1, 2, 3], 5, 6, [8, [3, 4]]]
function myFlat (arr) {
  let res = []
  const foo = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        foo(arr[i])
      } else {
        res.push(arr[i])
      }
    }
  }
  foo(arr)
  return res
}
console.log(myFlat(demo))
function myFlat2 (arr) {
  return arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? myFlat2(cur) : cur),
    []
  )
}
console.log(myFlat2(demo))
