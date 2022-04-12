import { FunctionDirective, toRefs, Ref, watch } from 'vue'
import { CopyConfig } from '../index'

const copyText = (copyValue: Ref<string | number>) => {
  const textarea = document.createElement('textarea')
  textarea.value = copyValue.value.toString() || ''
  textarea.style.position = 'fixed'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

const vCopy: FunctionDirective<
  HTMLElement & { copyListener: () => void },
  CopyConfig
> = (el, binding) => {
  const { value: copyValue, success, event } = toRefs(binding.value)

  // 防止多次绑定
  if (el.copyListener) {
    el.removeEventListener(binding.oldValue?.event || 'click', el.copyListener)
  }

  el.copyListener = () => {
    copyText(copyValue)
    success?.value && success.value(copyValue)
  }

  el.addEventListener(event?.value || 'click', el.copyListener)

  watch(
    () => event?.value,
    (curVal, preVal) => {
      el.removeEventListener(preVal || 'click', el.copyListener)
      el.addEventListener(curVal || 'click', el.copyListener)
    },
  )
}

export default vCopy
