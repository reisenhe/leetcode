const Pending = Symbol('Pending');
const Fulfilled = Symbol('Fulfilled');
const Rejected = Symbol('Rejected');

class MyPromise {
    constructor(exec) {
        this.status = Pending;  // 存储 Promise 状态
        this.value = undefined; // 存储 exec 执行成功结果
        this.reason = undefined; // 存储 exec 执行失败原因

        this.onFulfilled = [];  // 执行成功时的回调函数集合
        this.onRejected = [];   // 执行失败时的回调函数集合

        // 只有状态为 Pending 时才进行改变
        const resolve = value => {
            if (this.status === Pending) {
                this.status = Fulfilled

                // 成功时设置 exec 结果
                this.value = value
                this.onFulfilled.forEach(fn => fn())
            }
        };
        const reject = reason => {
            if (this.status === Pending) {
                this.status = Rejected

                // 失败时设置 exec 原因
                this.reason = reason
                this.onRejected.forEach(fn => fn())
            }
        }
        exec(resolve, reject)
    }

    then(onFulfilled, onRejected) {
        let isDef = (fn) => {
            return fn && typeof fn === 'function'
        }
        let myPromise;
        if (this.status === Fulfilled) {
            if (isDef(onFulfilled)) {
                return myPromise = new MyPromise((res, rej) => {
                    let value = onFulfilled(this.value)
                    res(value)
                })
            }
        }

        if (this.status === Rejected) {
            if (isDef(onRejected)) {
                return myPromise = new MyPromise((res, rej) => {
                    let value = onRejected(this.value)
                    res(value)
                })
            }
        }

        if (this.status === Pending) {
            return myPromise = new MyPromise((resolve, reject) => {
                try {
                    if (isDef(onFulfilled)) {
                        this.onFulfilled.push(() => {
                            let value = onFulfilled(this.value)
                            resolve(value)
                        })
                    }
                    if (isDef(onRejected)) {
                        this.onRejected.push(() => {
                            let value = onRejected(this.reason)
                            resolve(value)
                        })
                    }
                } catch (reason) {
                    reject(reason)
                }
            })
        }
    }
}


let test = new MyPromise((res, rej) => {
    setTimeout(() => {
        res('已失败')
    }, 3000)
})

test.then((res) => {
    console.log('第一次', res)
    return '第二次要成功'
}).then((res) => {
    console.log('第二次', res )
})