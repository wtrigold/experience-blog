// 冒泡排序
function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    if (flag === false) return arr
  }
  return arr
}
console.log(bubbleSort([2, 6, 3, 5]))
// 选择排序 O（n^2）
function selectSort (arr) {
  const len = arr.length
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
// 插入排序
function insertSort(arr) {
    // 缓存数组长度
    const len = arr.length
    // temp 用来保存当前需要插入的元素
    let temp  
    // i用于标识每次被插入的元素的索引
    for(let i = 1;i < len; i++) {
      // j用于帮助 temp 寻找自己应该有的定位
      let j = i
      temp = arr[i]  
      // 判断 j 前面一个元素是否比 temp 大
      while(j > 0 && arr[j-1] > temp) {
        // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
        arr[j] = arr[j-1]   
        j--
      }
      // 循环让位，最后得到的 j 就是 temp 的正确索引
      arr[j] = temp
    }
    return arr
  }
  console.log(insertSort([4,3,6]))