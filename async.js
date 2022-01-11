function request () {
  return new Promise((rs, rj) => {
    rj(new Error())
  })
}
const foo = async () => {
  const a = await request()
  console.log(a)
}
foo()
