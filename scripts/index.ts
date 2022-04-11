import { App } from 'vue'
import copy from './directives/v-copy'

export interface CopyConfig {
  value: string | number
  success: (copyValue?: string) => void
}

export default function (app: App) {
  app.directive('copy', copy)
}
