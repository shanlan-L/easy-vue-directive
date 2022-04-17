import { FunctionDirective } from 'vue'

// 元素是否在窗口范围内
const inViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// 设置图片src
const setSrc = (el: HTMLImageElement, value: string | (() => string)) => {
  el.src =
    typeof value === 'string'
      ? value
      : typeof value === 'function'
      ? value()
      : ''
}

const vLazy: FunctionDirective = (el, binding) => {
  if (el.tagName !== 'IMG') {
    console.warn('v-lazy only support img tag')
  }

  inViewport(el) && setSrc(el, binding.value)

  const scrollHandler = () => {
    if (!inViewport(el)) return
    setSrc(el, binding.value)
    window.removeEventListener('scroll', scrollHandler)
  }

  window.addEventListener('scroll', scrollHandler)
}

export default vLazy
