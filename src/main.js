import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import {createRouter, createWebHistory} from 'vue-router'

// Import components, move these to router file down the line
import Home from './views/Home.vue'
import About from './views/About.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:  [
     {path: '/', name: 'Home', component: Home},
     {path: '/About', name: 'About', component: About}
    ]
})

loadFonts()

createApp(App)
    .use(vuetify)
    .use(router)
   .mount('#app')
