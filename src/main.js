import { createApp } from 'vue'
import './less/global.less'
import App from './App.vue'
import { router } from './routes'
import { createPinia } from 'pinia'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
