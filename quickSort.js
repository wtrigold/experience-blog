function quickSort(arr) {
  const rec = arr => {
      console.log(arr)
    if (arr.length === 1) {
      return arr
    }
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  const res = rec(arr)
  return res
 
}
const a = [4, 7, 2, 5, 0]
console.log(quickSort(a))