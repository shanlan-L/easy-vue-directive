import { createApp } from 'vue'
import App from './App.vue'

import easyVueDirective from 'easy-vue-directive'

const app = createApp(App)

app.use(easyVueDirective)

app.mount('#app')
