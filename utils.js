const utils = {
    // 帮忙method执行的次数在规定的时间内只有一次
    // method执行时，函数内的this指向pureFullPage this.container
    throttle(method, context, delay) {
        //args? event对象  
        // 返回的函数就是事件执行的真正函数
        //闭包
        let wait = false;
        return function (...args) {
            // 执行时，上下文环境要和以前一样
            // console.log(args);
            if (!wait) {
                method.apply(context, args)
                wait = true;
                setTimeout(() => {
                    wait = false
                }, delay)
            }
        }
    }
}