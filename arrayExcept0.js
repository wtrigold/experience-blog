// 给定一个数组,在不开辟新的内存空间的情况下将其中所有的0移动至数组开头。
// 例:
// 输入：
// 	[0, 8, 5, 0, 134, 0, 3, 6, 5, 0, 7, 0]
// 输出：
// 	[0,0,0,0,0,8,5,134,3,6,5,7]
function opt (arr) {
  let i=arr.length-1
  let zeroNum=0
  while(i>=0){
      if(arr[i]!==0){
          arr[i+zeroNum]=arr[i]
          i--
      }else{
          zeroNum++
          i--
      }
  }
  for(let j=0;j<zeroNum;j++){
      arr[j]=0
  }
  return arr
}
console.log(opt([0, 8, 5, 0, 134, 0, 3, 6, 5, 0, 7, 0]))


// 全部移到后面
function opt2(arr){
    let len=arr.length
    let zeroNum=0
    for(let i=0;i<len;i++){
        if(arr[i]===0){
            zeroNum++
        }else {
            arr[i-zeroNum]=arr[i]
        }
    }
    while(zeroNum>0){
        arr[len-zeroNum]=0
        zeroNum--
    }
    
    return arr
}
console.log(opt2([0, 8, 5, 0, 134, 0, 3, 6, 5, 0, 7, 0]))