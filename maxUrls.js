// 并发请求
// 假设 fetch(1) 代表请求参数为1, 结果是promise
// max 是最大并发数，
function sendRequest(arr, max, callback) {
  let index = 0;
  const result = [];
  for (let i = 0; i < max; i++) {
    sendPromise();
  }
  function sendPromise() {
    let i = index;
    const item = arr[index++]
    if (i >= arr.length) return;
    fetch(item).then(res => {
      result[i] = res;
      sendPromise();
    }).finally(() => {
      result.length === arr.length && callback(result)
    })
  }
}
sendRequest([1,2,3,4,5,6,7,8,9,10], 3, res => {
  console.log('sendRequest', res);
})
// 并发任务
function sendRequest(arr, max, callback) {
  let index = 0;
  const result = [];
  for (let i = 0; i < max; i++) {
    sendPromise();
  }
  function sendPromise() {
    let i = index;
    let item = arr[index++]
    if (item instanceof Promise) item : Promise.resolve(item);
    if (i >= arr.length) return;
    item.then(res => {
      result[i] = res;
      sendPromise();
    }).finally(() => {
      result.length === arr.length && callback(result)
    })
  }
}
sendRequest([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(123);
      resolve(123);
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(111);
      resolve(111);
    }, 300);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(222);
      resolve(222);
    }, 0);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(333);
      resolve(333);
    }, 500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(444);
      resolve(444);
    }, 5000);
  }),
], 3, res => {
  console.log('sendRequest', res);
})