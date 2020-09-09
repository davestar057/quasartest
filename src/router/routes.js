import { Store } from '../store/index'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
         beforeEnter(to, from, next) {
          if(Store.getters['auth/authenticated']){
            next({path: '/dashboard/home'})
          } else {
            next()
          }
        }
      },
      {
        path: 'register', component: () => import('pages/Register.vue')
      },
    ],


  },
  {
    path: '/dashboard',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('pages/Home.vue'),
        beforeEnter(to, from, next) {
          if (!Store.getters['auth/authenticated']) {
            next({path: '/'})
          } else {
            next()
          }
        }
      },

    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
