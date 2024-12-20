import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/projects/:id', name: 'ProjectDetails', component: ProjectDetails },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
