import { App, Ref } from 'vue'
import copy from './directives/v-copy'
import lazy from './directives/v-lazy'

const directives = [
  { name: 'copy', component: copy },
  { name: 'lazy', component: lazy },
]

export interface CopyConfig {
  value: string | number
  success?: (copyValue?: Ref<string | number>) => void
  event?: keyof GlobalEventHandlersEventMap
}

export default function (app: App) {
  directives.forEach((directive) =>
    app.directive(directive.name, directive.component),
  )
}
