import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/administration',
    name: 'Administration',
    component: () => import(/* webpackChunkName: "Administration" */ '../views/Administration/Administration.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "Calendar" */ '../views/Calendar/Calendar.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact/Contact.vue')
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import(/* webpackChunkName: "Departments" */ '../views/Departments/Departments.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import(/* webpackChunkName: "Resources" */ '../views/Resources/Resources.vue')
  },
  {
    path: '/schools',
    name: 'Schools',
    component: () => import(/* webpackChunkName: "Schools" */ '../views/Schools/Schools.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/Search/Search.vue')
  },
  {
    path: '/state-required-information',
    name: 'State Required Information',
    component: () => import(/* webpackChunkName: "State Required Information" */ '../views/State-Required-Information/StateRequiredInformation.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
