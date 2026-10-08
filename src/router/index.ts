import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/debounce',
      component: () => import('@/views/debounce/index.vue')
    },
    {
      path: '/throttle',
      component: () => import('@/views/throttle/index.vue')
    },
    {
      path: '/reactive_system',
      component: () => import('@/views/reactiveSystem/index.vue')
    },
    {
      path: '/card',
      component: () => import('@/views/demo/Card/index.vue')
    },
    {
      path: '/todoList',
      component: () => import('@/views/demo/TodoList/index.vue')
    },
    {
      path: '/grid',
      component: () => import('@/views/grid/index.vue')
    }
  ],
})

export default router
