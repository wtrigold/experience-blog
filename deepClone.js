// 深拷贝的实现
function deepCopy (object, hash = new WeakMap()) {
  if (!object || typeof object !== 'object') return
  if (hash.has(object)) return hash.get(object)
  let newObject = Array.isArray(object) ? [] : {}
  hash.set(object, newObject)
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] =
        typeof object[key] === 'object' ? deepCopy(object[key]) : object[key]
    }
  }

  return newObject
}

// 以上代码中利用额外的变量 map 来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去 map 中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。
// 之所以采用 ES6 中 Map 数据结构，是因为相对于普通的 Object 结构，其键值不限于字符串，各种类型的值（包括对象）都可以当作键。换句话来说。Object 结构提供了“字符串——值”的对应，Map 结构提供了“值——值” 的对应。若采用 Object 结构，当 target 不是字符串时，那么其键值全部都是 [Object Object]，会引起混乱。
// 最后需要执行 map.clear();map = null; ，释放内存，防止内存泄露。
// 在这里可以向面试官展示你的三个编程能力。

// 对循环引用的理解，如何解决循环引用引起的问题的能力。
// 熟悉 ES6 中 Map 数据结构的概念及应用
// 对内存泄露的认识和避免泄露的能力。

// 判断是否有循环引用 打标记法
function cycle (obj, parent) {
  //表示调用的父级数组
  var parentArr = parent || [obj]
  for (var i in obj) {
    if (typeof obj[i] === 'object') {
      //判断是否有循环引用
      parentArr.forEach(pObj => {
        if (pObj === obj[i]) {
          obj[i] = '[cycle]'
        }
      })
      cycle(obj[i], [...parentArr, obj[i]])
    }
  }
  return obj
}

console.log(deepCopy({ a: 1, b: { c: b } }))

function deepCopy (obj, map = new WeakMap()) {
  if (!obj || typeof obj !== 'object') return
  if (map.has(obj)) return map.get(obj)
  let newObj = Array.isArray(obj) ? [] : {}
  map.set(obj, newObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}
