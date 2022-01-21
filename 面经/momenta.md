## 1. 项目亮点，技术难点

## 2. redux 的应用场景，项目中用它存储哪些数据，能简单说一下实现思路么

## 3. react-router 是怎么实现的，history 或 hash,如果用 history,服务端（ngnix try_files）应该做什么配置

```js
// hashRouter
// 原生js实现hashRouter主要是监听它的hashchange事件的变化，然后拿到对应的location.hash更新对应的视图
;<ul>
  <li>
    <a href='#/home'>home</a>
  </li>
  <li>
    <a href='#/about'>about</a>
  </li>
  <div id='routeView'></div>
</ul>
window.addEventListener('DOMContentLoaded', onLoad)

window.addEventListener('hashchange', changeView)

let routeView = ''

function onLoad () {
  routeView = document.getElementById('routeView')

  changeView()
}

function changeView () {
  switch (location.hash) {
    case '#/home':
      routeView.innerHTML = 'home'
      break
    case '#/about':
      routeView.innerHTML = 'about'
      break
  }
}

//historyRouter
// 能够实现history路由跳转不刷新页面得益与H5提供的pushState(),replaceState()等方法，这些方法都是也可以改变路由状态（路径），但不作页面跳转，我们可以通过location.pathname来显示对应的视图
;<ul>
  <li>
    <a href='/home'>home</a>
  </li>
  <li>
    <a href='/about'>about</a>
  </li>
  <div id='routeView'></div>
</ul>
window.addEventListener('DOMContentLoaded', onLoad)

window.addEventListener('popstate', changeView)

let routeView = ''

function onLoad () {
  routeView = document.getElementById('routeView')

  changeView()

  let event = document.getElementsByTagName('ul')[0]

  event.addEventListener('click', e => {
    if (e.target.nodeName === 'A') {
      e.preventDefault()

      history.pushState(null, '', e.target.getAttribute('href'))

      changeView()
    }
  })
}

function changeView () {
  switch (location.pathname) {
    case '/home':
      routeView.innerHTML = 'home'
      break
    case '/about':
      routeView.innerHTML = 'about'
      break
  }
}
```

## 4. 限制最大并发数手写题

## 二面：

## 1.前端性能优化怎么做的

## 2.项目中的两点

## 3.如何并发三个请求（浏览器内核)
