import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'

createApp(App)
    .use(router)
    .use(createMetaManager())
    .use(metaPlugin)
    .mount('#app')
