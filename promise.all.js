Promise.prototype.myAll = promises => {
  return new Promise((resolve, reject) => {
    const len = promises.length
    if (!len) {
      return resolve([])
    }
    let i = 0,
      result = []
    promises.forEach(promise => {
      promise
        .then(v => {
          if (i === len) {
            resolve(result)
          }
          i++
          result.push(v)
        })
        .catch(rj)
    })
  })
}
Promise.prototype.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('error')
    }
    const len = promises.length
    let resolveCounter = 0
    res = []
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then(v => {
          res.push(v)
          resolveCounter++
          if (resolveCounter === len) {
            return resolve(res)
          }
        })
        .catch(error => {
          return reject(error)
        })
    }
  })
}
