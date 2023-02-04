function foo (arr) {
  if (arr.length === 1) {
    return {
      key: arr[0]
    }
  }
  let center = Math.floor(arr.length / 2)
  return {
    key: arr[center],
    left: foo(arr.slice(0, center)),
    right: foo(arr.slice(center + 1))
  }
}
console.log(foo([1,2,2,3,4,4,3]))