import Vue from 'vue'
import Router from 'vue-router'

import Authentication from '@/components/pages/Authentication/Authentication'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    }
  ]
})
