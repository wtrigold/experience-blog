// 发布订阅
class PubSub {
    constructor() {
        // 维护事件及订阅行为
        this.events = {}
    }
    /**
     * 注册事件订阅行为
     * @param {String} type 事件类型
     * @param {Function} cb 回调函数
     */
    subscribe(type, cb) {
        if (!this.events[type]) {
            this.events[type] = []
        }
        this.events[type].push(cb)
    }
    /**
     * 发布事件
     * @param {String} type 事件类型
     * @param  {...any} args 参数列表
     */
    publish(type, ...args) {
        if (this.events[type]) {
            this.events[type].forEach(cb => {
                cb(...args)
            })
        }
    }
    /**
     * 移除某个事件的一个订阅行为
     * @param {String} type 事件类型
     * @param {Function} cb 回调函数
     */
    unsubscribe(type, cb) {
        if (this.events[type]) {
            const targetIndex = this.events[type].findIndex(item => item === cb)
            if (targetIndex !== -1) {
                this.events[type].splice(targetIndex, 1)
            }
            if (this.events[type].length === 0) {
                delete this.events[type]
            }
        }
    }
    /**
     * 移除某个事件的所有订阅行为
     * @param {String} type 事件类型
     */
    unsubscribeAll(type) {
        if (this.events[type]) {
            delete this.events[type]
        }
    }
}

// 观察者
class Observer {
    /**
     * 构造器
     * @param {Function} cb 回调函数，收到目标对象通知时执行
     */
    constructor(cb){
        if (typeof cb === 'function') {
            this.cb = cb
        } else {
            throw new Error('Observer构造器必须传入函数类型！')
        }
    }
    /**
     * 被目标对象通知时执行
     */
    update() {
        this.cb()
    }
}

// 目标对象
class Subject {
    constructor() {
        // 维护观察者列表
        this.observerList = []
    }
    /**
     * 添加一个观察者
     * @param {Observer} observer Observer实例
     */
    addObserver(observer) {
        this.observerList.push(observer)
    }
    /**
     * 通知所有的观察者
     */
    notify() {
        this.observerList.forEach(observer => {
            observer.update()
        })
    }
}

const observerCallback = function() {
    console.log('我被通知了')
}
const observer = new Observer(observerCallback)

const subject = new Subject();
subject.addObserver(observer);
subject.notify();

