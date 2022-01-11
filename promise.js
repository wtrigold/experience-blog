let a=new Promise((rs,rj)=>{rs(2)})
console.log(a)
console.log(a.then(()=>{return new Promise((rs,rj)=>{rs(3)})},()=>{}))