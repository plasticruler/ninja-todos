import Vue from 'vue'
import Router from 'vue-router'
import AuthGaurd from './auth-gaurd'
const Dashboard = () => import('@/views/Dashboard');
const Team = () => import('@/views/Team')
const Projects = ()=> import( '@/views/Projects')
const Join = () => import('@/views/Join')
const Profile = () => import('@/components/User/Profile')
const Signup = () => import('@/components/User/Signup')
const Signin = () => import('@/components/User/Signin')
const Joplin = () => import('@/views/Joplin')


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path:'/joplin',
      name:'joplin',
      component: Joplin
    },
    {
      path:'/team',
      name:'team',
      component: Team
    },
    {
      path:'/projects',
      name:'projects',
      component:Projects,
      beforeEnter:AuthGaurd
    },
    {
      path:'/join',
      name:'join',
      component:Join
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGaurd
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
