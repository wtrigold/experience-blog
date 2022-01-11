//最长公共前缀
function aa (strs) {
  let sortStr = strs.sort()
  let firstStr = sortStr[0]
  let lastStr = sortStr[sortStr.length - 1]
  const len = firstStr.length
  let res = ''
  for (i = 0; i < len; i++) {
    if (firstStr[i] === lastStr[i]) {
      res += firstStr[i]
    } else {
      break
    }
  }
  return res
}
console.log(aa(['floor', 'flower', 'flex']))

//数组两数之和
function bb(nums,target){
    let map=new Map()
    const len=nums.length
    for(i=0;i<len;i++){
        if(map.has(target-nums[i])){
            return([i,map.get(target-nums[i])])
        }
        map.set(nums[i],i)
    }


}
console.log(bb([1,2,3,4], 4))

