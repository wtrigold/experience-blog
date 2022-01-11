class Foo {
    static foo(){
        console.log('123')
    }
    fn(){
        console.log('456')
    }
}
let foo = new Foo()
// foo.fn()
console.log(Foo.prototype.fn)
