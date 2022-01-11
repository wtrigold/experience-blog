Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let args = [...arguments].slice(1),
    result = null
  context = context || window
  context.fn = this
  result = context.fn(...args)
  delete context.fn
  return result
}
Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let args = arguments[1],
    result = null
  context = context || window
  context.fn = this
  result = context.fn(...args)
  delete context.fn
  return result
}
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let args = [...arguments].slice(1)
  let fn = this
  return function Fn () {
    if (this instanceof Fn) {
      context = this
    }
    return fn.apply(context, args.concat(...arguments))
  }
}
