// 节流函数
// 1. 声明 lastTime = 0
// 2. 返回一个函数
// 3. 每次调用：now = Date.now()
// 4. 如果 now - lastTime >= interval：执行 fn，更新 lastTime
export interface ThrottledFn<T extends (...args: any[]) => any> {
  (this: any, ...args: Parameters<T>): void
  cancel: () => void
}

export default function throttle<T extends (...args: any[]) => any>(
  fn: T,
  interval: number
): ThrottledFn<T> {
  let lastTime = 0
  let timer: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null
  let lastThis: any = null

  const invoke = () => {
    if (!lastArgs) return
    const args = lastArgs
    const context = lastThis
    lastArgs = null
    lastThis = null
    lastTime = Date.now()
    fn.apply(context, args)
  }

  const throttled = function (this: any, ...args: Parameters<T>) {
    const now = Date.now()
    const remaining = interval - (now - lastTime)

    lastArgs = args
    lastThis = this

    if (remaining <= 0) {
      // 距上次执行已超过间隔，立即执行
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      invoke()
    } else if (!timer) {
      // 还没到间隔，安排一次尾部执行
      timer = setTimeout(() => {
        timer = null
        invoke()
      }, remaining)
    }
  }

  throttled.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    lastTime = 0
    lastArgs = null
    lastThis = null
  }

  return throttled
}