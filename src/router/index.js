/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/homeView.vue'),
      meta: {
        title: 'home',
      },
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/listView.vue'),
      meta: {
        title: 'list',
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/settingsView.vue'),
      meta: {
        title: 'settings',
      },
    },
  ],
})

router.afterEach(to => {
  document.title = to.meta.title
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
