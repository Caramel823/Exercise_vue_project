/**
 * 防抖函数
 * 1. 声明一个 timer 变量（在闭包外层）
 * 2. 返回一个函数
 * 3. 每次调用：先 clearTimeout(timer)
 * 4. 再 timer = setTimeout(执行 fn, delay)
 */

export interface DebouncedFn<T extends (...args: any[]) => any> {
  (this: any, ...args: Parameters<T>): void
  /** 取消待执行的调用 */
  cancel: () => void
  /** 立即执行待执行的调用（如果有） */
  flush: () => void
}

export default function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): DebouncedFn<T> {
  let timer: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null
  let lastThis: any = null

  const invoke = () => {
    if (!lastArgs) return
    const args = lastArgs
    const context = lastThis
    lastArgs = null
    lastThis = null
    fn.apply(context, args)
  }

  const debounced = function (this: any, ...args: Parameters<T>) {
    lastArgs = args
    lastThis = this

    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      invoke()
    }, delay)
  }

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    lastArgs = null
    lastThis = null
  }

  debounced.flush = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
      invoke()
    }
  }

  return debounced
}