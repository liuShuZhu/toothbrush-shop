import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import HomeView from '../App.vue'
import Home from '../views/home.vue'
import Demo from '../views/demo.vue'
import Notfound from '../components/notfound.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/product',
      name:'warranty',
      component:() => import('@/views/warranty/index.vue'),
      children:[
        {
          path:'warranty',
          name:'warrantyPage',
          component:() => import('@/views/warranty/pages/index.vue'),

        },
        {
          path:'warranty/question',
          name:'questionPage',
          component:() => import('@/views/warranty/pages/question.vue'),
        },
        {
          path:'warranty/registration',
          name:'registrationPage',
          component:() => import('@/views/warranty/pages/regis.vue'),
        },
        {
          path:'warranty/checkstatus',
          name:'checkstatusPage',
          component:() => import('@/views/warranty/pages/checkStatus.vue'),
        },
        {
          path:'warranty/checkresult',
          name:'checkresultPage',
          component:() => import('@/views/warranty/pages/checkResult.vue'),
        },
        {
          path:'information',
          name:'informationPage',
          component:() => import('@/views/warranty/pages/info.vue'),
        },
        {
          path: '/product',
          name:'product',
          component:() => import('@/views/product/index.vue'),
        },
      ]
    },
    
    {
      path:'/404',
      component:Notfound,
    },
    { path: "/:pathMatch(.*)", redirect: "/404", name: "notMatch" },
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // vue2.0  x  y  控制
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }  }
})

export default router
