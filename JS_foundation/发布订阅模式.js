class EventEmitter {
  constructor() {
    // key: 事件名
    // value: callback [] 回调数组
    this.events = {}
  }
  on(name, callback) {
    if (this.events[name]) {
      this.events[name].push(callback)
    } else {
      this.events[name] = [callback]
    }
  }
  off(name, callback) {
    if (!this.message[name]) return;
    if (!callback) {
      // 如果没有callback,就删掉整个事件
      this.message[name] = undefined;
    }
    this.message[name] = this.message[name].filter((item) => item !== callback);

  }
  emit(name, ...args) {
    if (!this.events[name]) return
    this.events[name].forEach(cb => cb(...args))
  }
}

// class EventCenter {
//     // 1. 定义事件容器，用来装事件数组
//     let handlers = {}
  
//     // 2. 添加事件方法，参数：事件名 事件方法
//     addEventListener(type, handler) {
//       // 创建新数组容器
//       if (!this.handlers[type]) {
//         this.handlers[type] = []
//       }
//       // 存入事件
//       this.handlers[type].push(handler)
//     }
  
//     // 3. 触发事件，参数：事件名 事件参数
//     dispatchEvent(type, params) {
//       // 若没有注册该事件则抛出错误
//       if (!this.handlers[type]) {
//         return new Error('该事件未注册')
//       }
//       // 触发事件
//       this.handlers[type].forEach(handler => {
//         handler(...params)
//       })
//     }
  
//     // 4. 事件移除，参数：事件名 要删除事件，若无第二个参数则删除该事件的订阅和发布
//     removeEventListener(type, handler) {
//       if (!this.handlers[type]) {
//         return new Error('事件无效')
//       }
//       if (!handler) {
//         // 移除事件
//         delete this.handlers[type]
//       } else {
//         const index = this.handlers[type].findIndex(el => el === handler)
//         if (index === -1) {
//           return new Error('无该绑定事件')
//         }
//         // 移除事件
//         this.handlers[type].splice(index, 1)
//         if (this.handlers[type].length === 0) {
//           delete this.handlers[type]
//         }
//       }
//     }
//   }
//   const eventCenter=new EventCenter