//核心模块
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//载入模块
import { loadComponents } from "./components"
import {loadPulgins} from './plugins'
import { loadDirectives } from "./directives"

//样式模块
// https://unocss.dev/interactive/
import 'virtual:uno.css'

const app = createApp(App)

loadComponents(app)
loadPulgins(app)
loadDirectives(app)

app.use(createPinia())
app.use(router)
app.mount('#app')
