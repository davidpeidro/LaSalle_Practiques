
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from "vue-router";

import './assets/main.css'

import ListView from './views/ListView.vue'
import StateView from './views/StateView.vue'
import PageNotFound from './views/PageNotFound.vue'

import App from './App.vue'

const routes = [
    { path: '/', component: ListView },
    { path: '/ListView', component: ListView },
    { path: '/StateView', component: StateView },
    { path: '/:pathMatch(.*)*', component: PageNotFound }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const pinia = createPinia()
const app = createApp(App)


app.use(pinia);
app.use(router); 
app.mount('#app')
