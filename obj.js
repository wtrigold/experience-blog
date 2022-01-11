const obj = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false,
  });
  
  const symbol = Symbol('d');
  
  obj[symbol] = 4;
  
  obj.__proto__ = {
    e: 5,
  };
  
  for (const key in obj) {
    console.log(key); // 'a', 'b', 'e'
  }//不包括不可枚举的，但是包含原型链上的
  
  const keys = Object.getOwnPropertyNames(obj); // 包括不可枚举的  不包括symbol和原型链上的
  const keys2=Object.keys(obj) // 不包括不可枚举的和原型链上的
//   const keys2=Object.has  
console.log(keys)
console.log(keys2)