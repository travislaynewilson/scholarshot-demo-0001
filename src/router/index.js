import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    name: 'index',
    path: '/',
    redirect: { name: 'intro' }
  },
  {
    name: 'main',
    path: '/main',
    redirect: '/main/recommendations',
    component: () => import ('../views/main-tabs.vue'),
    children: [
      {
        name: 'recommendations',
        path: 'recommendations',
        component: () => import ('../views/recommendations.vue')
      },
      {
        name: 'favorites',
        path: 'favorites',
        component: () => import ('../views/favorites.vue')
      },
      {
        name: 'college-list',
        path: 'colleges',
        component: () => import ('../views/college-list.vue')
      },
      {
        name: 'college-detail',
        path: 'colleges/:name',
        component: () => import ('../views/college-detail.vue')
      },
      {
        name: 'planner',
        path: 'planner',
        component: () => import ('../views/planner.vue')
      }
    ]
  },
  {
    name: 'settings-home',
    path: '/settings',
    component: () => import ('../views/settings/settings-home.vue')
  },
  {
    name: 'profile',
    path: '/settings/profile',
    component: () => import ('../views/settings/profile.vue')
  },
  {
    name: 'high-school',
    path: '/settings/high-school',
    component: () => import ('../views/settings/high-school.vue')
  },
  {
    name: 'college-plans',
    path: '/settings/college',
    component: () => import ('../views/settings/college-plans.vue')
  },
  {
    name: 'login',
    path: '/auth/login',
    component: () => import ('../views/auth/login.vue')
  },
  {
    name: 'support-home',
    path: '/support',
    component: () => import ('../views/support/support-home.vue')
  },
  {
    name: 'support-article-list',
    path: '/support/articles',
    component: () => import ('../views/support/article-list.vue')
  },
  {
    name: 'support-article',
    path: '/support/articles/:id',
    component: () => import ('../views/support/article.vue')
  },
  {
    name: 'ask-expert',
    path: '/support/ask-expert',
    component: () => import ('../views/support/ask-expert.vue')
  },
  {
    name: 'contact',
    path: '/support/contact',
    component: () => import ('../views/support/contact.vue')
  },
  {
    name: 'feedback',
    path: '/support/feedback',
    component: () => import ('../views/support/feedback.vue')
  },
  {
    name: 'intro',
    path: '/intro',
    component: () => import ('../views/intro.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
