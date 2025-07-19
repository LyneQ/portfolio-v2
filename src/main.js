// necessary modules
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'

// style modules
import './assets/base.scss'

// views modules
import App from './App.vue'
import MainView from "@/route/MainView.vue";
import ProjectsView from "@/route/ProjectsView.vue";
import SkillsView from "@/route/SkillsView.vue";
import ExperienceView from "@/route/ExperienceView.vue";
// import ContactView from "@/route/ContactView.vue";

// projects definition and initialization
const routes = [
    { path: '/', component: MainView },
    { path: '/projects', component: ProjectsView },
    { path: '/skills', component: SkillsView},
    { path: '/experience', component: ExperienceView},
    // { path: '/contact', component: ContactView},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
