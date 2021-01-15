class EventEmitter {
    constructor() {
        this._events = new Map(); // 事件/回调存储
    }
}
/**
 * 触发事件
 * @param {String} type 事件类型 
 */
EventEmitter.prototype.emit = function(type, ...args) {
    let handler;
    // 取出该类事件对应的回调函数
    handler = this._events.get(type)
    handler.forEach(fn => {
        if (args.length > 0) {
            fn.apply(this, args)
        } else {
            fn.call(this)
        }
    })
}
/**
 * 监听事件
 * @param {String} type 事件类型
 * @param {Function} fn 触发的方法
 */
EventEmitter.prototype.on = function(type, fn) {
    // 事件将以数组形式储存
    if (!this._events.has(type)) {
        this._events.set(type, [])
    }
    let handler = this._events.get(type)
    handler.push(fn)
}
/**
 * 取消监听事件
 * @param {String} type 事件类型 
 * @param {Function} fn 触发的方法
 */
EventEmitter.prototype.off = function(type, fn) {
    let handler = this._events.get(type)
    handler = handler.filter(item => item.name !== fn.name)
    this._events.set(type, handler)
}

// 测试例子
const emitter = new EventEmitter();
const mo1 = time => {
    console.log(`才${time}，摸了`)
}
const mo2 = time => {
    console.log(`${time}这个时间，不如去吃个夜宵`)
}
emitter.on('onMole', mo1)
emitter.on('onMole', mo2)
emitter.emit('onMole', '11点')      // 才11点，摸了; 11点这个时间，不如去吃个夜宵
emitter.off('onMole', mo2)
emitter.emit('onMole', '8点')       // 才8点，摸了