import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


const About  = () => {
 return import(/* webpackChunkName: "about" */ './views/About.vue')
}
const Users  = () => import(/* webpackChunkName: "Users" */ './views/Users.vue')
const ChildrenPage  = () => import(/* webpackChunkName: "Children" */ './views/ChildrenPage.vue')
const ChildrenDetail  = () => import(/* webpackChunkName: "Children" */ './views/ChildrenDetail.vue')
const ChildrenEdit  = () => import(/* webpackChunkName: "Children" */ './views/ChildrenEdit.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about-name',
      component: About
    },
    {
      path: '/users/:userId',
      name: 'users',
      component: Users
    },
    {
      path: '/page',
      name: 'page-name',
      beforeEnter: ( to, from, next) => {
        console.log('to: ' , to, 'from : ', from)
        next()
      },
      component: ChildrenPage,
      children: [
        {
          path: ':id',
          name: 'page-detail',
          component: ChildrenDetail,
        },
        {
          path: ':id/edit',
          name: 'page-edit',
          component: ChildrenEdit,
        }
      ]
    },
  ]
})
