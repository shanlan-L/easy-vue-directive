import { DirectiveHook, FunctionDirective, ObjectDirective } from 'vue'
import { CopyConfig } from '../index'

const copyText = (value: string) => {
  const textarea = document.createElement('textarea')
  textarea.value = value
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
  const copyConfig = binding.value
  let copyValue = copyConfig.value || el.textContent || ''

  !el.copyListener &&
    (el.copyListener = () => {
      copyText(copyValue.toString())
      copyConfig.success && copyConfig.success(copyValue.toString())
    })

  // 防止重复绑定复制事件
  el.removeEventListener('click', el.copyListener)
  el.addEventListener('click', el.copyListener)
}

export default vCopy
