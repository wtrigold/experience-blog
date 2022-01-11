function arrayList(arr){
    if(!Array.isArray(arr)){
        throw new TypeError('Type is error!')
    }
    let header={val:arr[0],next:null}
    let obj=header
    for(let i=1;i<arr.length;i++){
        obj.next={val:arr[i],next:null}
        obj=obj.next
    }
    return header
}
console.log(arrayList([1,2,3]))