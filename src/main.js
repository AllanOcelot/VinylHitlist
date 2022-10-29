import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import {createRouter, createWebHistory} from 'vue-router'

// Import Font Awesome
import FontAwesomeIcon from "@/utilities/fontawesome";


// COMPONENT IMPORT START

// Import components, move these to router file down the line
import Home from './views/Home.vue'
import About from './views/About.vue'

// User / dashboard / edit account / view user wishlist etc(?)
import Profile from './views/User/Profile.vue'


// COMPONENT IMPORT END 


const router = createRouter({
    history: createWebHistory(),
    routes:  [
     {path: '/', name: 'Home', component: Home},
     {path: '/About', name: 'About', component: About},
     {path: '/Profile/:userID', name: 'Profile', component: Profile}
    ]
})

loadFonts()

createApp(App)
    .use(vuetify)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
   .mount('#app')
