import { App, Ref } from 'vue'
import copy from './directives/v-copy'

export interface CopyConfig {
  value: string | number
  success?: (copyValue?: Ref<string | number>) => void
  event?: keyof GlobalEventHandlersEventMap
}

export default function (app: App) {
  app.directive('copy', copy)
}
