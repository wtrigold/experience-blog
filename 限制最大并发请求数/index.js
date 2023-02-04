const group = (list = [], max = 0) => {
    if (!list.length) {
      return list
    }
    let results = []
    for (let i = 0, len = list.length; i < len; i += max) {
      results.push(list.slice(i, i + max))
    }
    return results
  }
  const requestHandler = async (groupedUrl = [], callback = () => {}) => {
    if (!groupedUrl.length) {
      callback()
      return groupedUrl
    }
    const newGroupedUrl = groupedUrl.map(fn => fn())
    const resultsMapper = results => results.map(callback)
    const data = await Promise.allSettled(newGroupedUrl).then(resultsMapper)
    console.log('data:::',data)
    return data
  }
  const sendRequest = async (urls = [], max = 0, callback = () => {}) => {
    if (!urls.length) {
      return urls
    }
    const groupedUrls = group(urls, max)
    const results = []
    console.log('start !')
    for (let groupedUrl of groupedUrls) {
      try {
        const result = await requestHandler(groupedUrl, callback)
        results.push(result)
        console.log('go')
      } catch {}
    }
    console.log('done !')
    console.log('results:::',results)
    return results
  }
  const p1 = () => new Promise((resolve, reject) => setTimeout(reject, 1000, 'p1'))
  const p2 = () => Promise.resolve(2)
  const p3 = () => new Promise((resolve, reject) => setTimeout(resolve, 2000, 'p3'))
  const p4 = () => Promise.resolve(4)
  const p5 = () => new Promise((resolve, reject) => setTimeout(reject, 2000, 'p5'))
  const p6 = () => Promise.resolve(6)
  const p7 = () => new Promise((resolve, reject) => setTimeout(resolve, 1000, 'p7'))
  const p8 = () => Promise.resolve(8)
  const p9 = () => new Promise((resolve, reject) => setTimeout(reject, 1000, 'p9'))
  const p10 = () => Promise.resolve(10)
  const p11 = () => new Promise((resolve, reject) => setTimeout(resolve, 2000, 'p10'))
  const p12 = () => Promise.resolve(12)
  const p13 = () => new Promise((resolve, reject) => setTimeout(reject, 1000, 'p11'))
  const p14 = () => Promise.resolve(14)
   
  const ps = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14]
  sendRequest(ps, 3, ({reason, value}) => {
    console.log(reason || value)
  })