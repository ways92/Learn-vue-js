import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import router from './router'

// export const eventBus = createApp(App)

createApp( App )
    .use( router )
    .use(store)
    .mount( '#app' )
