function a(){
    var b=1
    return function(){
        b++
        console.log(b)
    }
}
let foo=a()
foo()
foo()
foo()
a()()