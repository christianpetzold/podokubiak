import App from './App.vue'
import {createApp} from 'vue'
import vuetify from "@/plugins/vuetify.ts";
import router from "@/router";

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
}

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')
