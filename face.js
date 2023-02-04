// intersect([4,9,5,4,4],[9,4,9,8,4])`
//  输出一个数组，数组中每项为两个数组相同的元素（可以不按照顺序），输出的数组中每项出现的次数为两个数组中该数字出现次数的最小值 ，
//  输出`[ 9, 4, 4 ]
function foo (arr1, arr2) {
  let obj1 = {},
    obj2 = {}
  for (let item of arr1) {
    if (!obj1[item]) {
      obj1[item] = 1
    } else {
      obj1[item]++
    }
  }
  for (let item of arr2) {
    if (obj1[item]) {
      if (!obj2[item]) {
        obj2[item] = 1
      } else if (obj2[item] < obj1[item]) {
        obj2[item]++
      }
    }
  }
  let res=[]
  for(let key in obj2){
    for(let i=0;i<obj2[key];i++){
      res.push(+key)
    }
  }
  return res
}
console.log(foo([4,9,5,4,4],[9,4,9,8,4]))