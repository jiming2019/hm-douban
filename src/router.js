// 路由相关功能
import Vue from 'vue'
import VueRouter from 'vue-router'

import Hot from '@/views/hot'
import Movie from '@/views/movie'
import Top from '@/views/top'
import Detail from '@/views/detail'

Vue.use(VueRouter)

const router = new VueRouter({
  // TODO 路由规则
  routes: [
    {path:'/',redirect:'/hot'},
    {path:'/hot',component:Hot},
    {path:'/movie',component:Movie},
    {path:'/top',component:Top},
    { path: '/detail/:id', name:'detail', component: Detail }
  ]
})

export default router