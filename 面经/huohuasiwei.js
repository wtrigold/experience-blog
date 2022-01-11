// 请实现sleep函数方法体及调用
async function log () {
    console.log(1)
     await sleep(1000)
    console.log(2)
  }
  console.log(log())
  // 运行log函数后，希望得到结果：
  // 打印1，等待一秒钟，打印2
  
  function sleep (time) {
    // 实现此函数
    return new Promise((rs, rj) => {
      setTimeout(rs, time)
    })
  }
  
  1 2 3 4