class RangeList {
  constructor () {
    this.list = []
  }
  add (range) {
    const res = []
    let i = 0
    const len = this.list.length
    while (i < len && this.list[i][1] < range[0]) {
      res.push(this.list[i])
      i++
      console.log(res)
    }

    while (i < len && this.list[i][0] <= range[1]) {
      range[0] = Math.min(range[0], this.list[i][0])
      range[1] = Math.max(range[1], this.list[i][1])
      i++
    }
    res.push(range)
    while (i < len) {
      res.push(this.list[i])
      i++
    }
    this.list = res
  }
  remove (range) {
    let res = []
    for (let item of this.list) {
      if (item[0] >= range[1] || item[1] <= range[0]) res.push(item)
      else {
        if (item[0] < range[0]) res.push([item[0], range[0]])
        if (item[1] > range[1]) res.push([range[1], item[1]])
      }
    }
    this.list = res
  }
  print () {
    let out = ''
    if (this.list.length) {
      this.list.reduce((initVal, currentVal) => {
        out += `[${currentVal[0]},${currentVal[1]}),`
      }, out)
      out = out.slice(0, out.length - 1)
    }
    console.log(out)
  }
}
let rl = new RangeList()
rl.add([1, 3])
rl.add([3, 6])
rl.remove([2, 4])
rl.print()
rl.add([100, 900])
rl.print()
