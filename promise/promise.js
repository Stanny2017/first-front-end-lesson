/**
 * 手动实现一个 promise
 * 参考：https://segmentfault.com/a/1190000011241512
 */

class myPromise {
    constructor(executor) {
        this.status = 'pending';// 初始状态
        this.value;
        this.execute(executor);
    }
    execute(executor) {
        if (typeof executor !== 'function') {
            throw new Error('function params is needed')
        }
        try {
            executor(data => {
                this.status = 'resolved';
                this.value = data;
            }, data => {
                this.status = 'rejected';
                this.value = data;
            })
        } catch (e) {
            this.status = 'rejected';
            this.value = e;
        }
    }

    then(onfufilled, onrejected) {

        let result = new Promise(() => { }),
            ref = null;
        // 监听 状态值，一旦状态值 改变就触发了 then 里面的回调
        let timer = setInterval(() => {
            if (typeof onfufilled === 'function' && this.status === 'resolved') {
                ref = onfufilled(this.value)
                clearInterval(timer)
                if (ref instanceof myPromise) {
                    let timerInner = setInterval(() => {
                        if (ref.status === 'resolved' || ref.status === 'rejected') {
                            clearInterval(timerInner);
                            result.value = ref.value;
                            result.status = ref.status;
                        }
                    })
                } else {
                    // 返回的是非promise 直接把值fu
                    result.value = ref;
                    result.status = 'resolved';
                }
            }
            if (typeof onrejected === 'function' && this.status === 'rejected') {
                onrejected(this.value)
                clearTimeout(timer)
            }
        }, 0)
    }
}

myPromise.PEDDING = 'pedding';
myPromise.RESOLVE = 'resolved';
myPromise.REJECT = 'rejected';