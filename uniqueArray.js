// 数组去重的几种方法

function unique1(arr){
    if(!Array.isArray(arr)){
       return  new TypeError('type error')
    }
    let res=[arr[0]]
    for(let i=1;i<arr.length;i++){
        let flag=true
        for(let j=0;j<res.length;j++){
            if(res[j]===arr[i]){
                flag=false
                break
            }
           
        }
        if(flag){
            res.push(arr[i])
        }
    }
    return res
}
console.log(unique1([2,1,3,6,5,3,1]))
function unique2(arr){
    if(!Array.isArray(arr)){
        return  new TypeError('type error')
     }
     return Array.from(new Set(arr))
}
console.log(unique2([2,1,3,6,5,3,1]))

function unique3(arr){
    if(!Array.isArray(arr)){
        return  new TypeError('type error')
     } 
     arr.sort()
     let res=[]
     for(let i=0;i<arr.length;i++){
         if(arr[i]!==arr[i-1]){
             res.push(arr[i])
         }
     } 
     return res
}
console.log(unique3([2,1,3,6,5,3,1]))

function unique4(arr){
    if(!Array.isArray(arr)){
        return  new TypeError('type error')
     } 
     let res=[]
     for(let i=0;i<arr.length;i++){
         if(res.indexOf(arr[i])<0){
             res.push(arr[i])
         }
     }
     return res
}
console.log(unique4([2,1,3,6,5,3,1]))

function unique5(arr){
    if(!Array.isArray(arr)){
        return  new TypeError('type error')
     } 
     return arr.filter((n,i)=>{
         return arr.indexOf(n)===i
     })
     
}
console.log(unique5([2,1,3,6,5,3,1]))
console.log([...new Set([NaN,NaN])])


