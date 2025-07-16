// necessary modules
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'

// style modules
import './assets/base.scss'

// views modules
import App from './App.vue'
import MainView from "@/route/MainView.vue";
import ProjectsView from "@/route/projectsView.vue";

// projects definition and initialization
const routes = [
    { path: '/', component: MainView },
    { path: '/projects', component: ProjectsView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
