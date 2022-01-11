function foo (arr1, arr2) {
  const len1 = arr1.length
  const len2 = arr2.length
  let map = new Map()
  const res = []
  for (let i = 0; i < len1; i++) {
    if (map.has(arr1[i])) {
      map.set(arr1[i], map.get(arr1[i]) + 1)
    } else {
      map.set(arr1[i], 1)
    }
  }
  for (let j = 0; j < len2; j++) {
    if (map.has(arr2[j]) && map.get(arr2[j]) >= 1) {
      res.push(arr2[j])
      map.set(arr2[j], map.get(arr2[j]) - 1)
    }
  }
  return res
}
console.log(foo([4,9,5,4,4],[9,4,9,8,4]))
