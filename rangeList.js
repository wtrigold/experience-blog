class RangeList {
    constructor(){
      this.list = []
    }
    add(range){
      if(range[0] === range[1]) {
        return false
      }else if (range[0] > range[1]) {
        throw new Error('Range error')
      } else if (range[0] < range[1]) {
        for(let i = range[0]; i <= range[1]; i ++) {
          this.list[i] = 1
        }
      }
    }
    remove(range){
      if(range[0] === range[1]) {
        return false
      }else if (range[0] > range[1]) {
        throw new Error('Range error')
      } else if (range[0] < range[1]) {
        for(let i = range[0]; i <= range[1]; i ++) {
          delete this.list[i]
        }
      }
    }
    print() {
      let out = ''
      console.log(this.list)
      let begin = 0
      this.list.reduce((lastIndex, currentVal, currentIndex) => {
        if(!lastIndex) {
          begin = lastIndex = currentIndex
        }
        if(currentIndex-1 === lastIndex) {
          if(currentIndex === this.list.length-1) {
            out += `[${begin},${currentIndex})`
          }
          return currentIndex
        } else if(currentIndex-1 !== lastIndex){
          if(currentIndex === lastIndex) return currentIndex
          out += `[${begin},${lastIndex})`
          begin = currentIndex
          return currentIndex
        }
      },0)
      console.log(out)
    }
  }
  
  const rl = new RangeList()
  rl.add([1,4])
  rl.add([1000,1002])
  rl.print()
  