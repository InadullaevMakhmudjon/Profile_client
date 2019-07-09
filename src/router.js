import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Auth.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      meta: { requiresAuth: true },
      beforeEnter(_, __, next) {
        store.commit('logout');
        next({
          name: 'login',
        });
      },
    },
    {
      path: '/',
      meta: { requiresAuth: true },
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/Main.vue'),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthonticated = store.state.token;
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (isAuthonticated) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
