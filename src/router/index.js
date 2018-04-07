import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Images from '@/views/Images'
import Goods_Child_Parent from '@/views/goods_child_parent'
Vue.use(Router)

export default new Router({
    mode:'history', // 取消#
  routes: [
    {
      path: '/goods/:goodsId',  // 配置动态路由,动态变量
      component: GoodsList
    },
      {
          path: '/goods/:goodsId/user/:name',  // 配置动态路由,多个动态变量参数
          component: GoodsList
      },
      {
          path: '/goods_child',  // 配置子路由
          component: Goods_Child_Parent,
          children:[
              {
                  path:'title',
                  name:'title',
                  component:Title
              },
              {
                  path:'images',
                  name:'images',
                  component:Images
              }
          ]
      }
  ]
})
