const twoSum = (arr, targetNum) => {
  const len = arr.length
  const diff = {}
  for (i = 0; i < len; i++) {
    if (diff[targetNum - arr[i]] !== undefined) {
      return [diff[targetNum - arr[i]], i]
    }
    diff[arr[i]] = i
  }
}
const arr=[6,5,7,8]
console.log(twoSum(arr,14))
