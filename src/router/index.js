import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
import FlowerKnowledge from '@/pages/Yhzs/FlowerKnowledge'
import FkAll from '@/pages/Yhzs/component/FkAll'
import FkFamily from '@/pages/Yhzs/component/FkFamily'
import FkFlower from '@/pages/Yhzs/component/FkFlower'
import FkHealth from '@/pages/Yhzs/component/FkHealth'
import FkMake from '@/pages/Yhzs/component/FkMake'
import FkSkill from '@/pages/Yhzs/component/FkSkill'
import FkVegetable from '@/pages/Yhzs/component/FkVegetable'
import MoreList from '@/pages/More/MoreList'
import MyPages from '@/pages/VuexTest/MyPages'
import MyParent from '@/pages/Props/MyParent'
import MySearch from '@/pages/Search/MySearch'
import CurrentActive from '@/pages/CurrentActive/CurrentActive'
import StyleClass from '@/pages/StyleClass/StyleClass'
import CheckAll from '@/pages/CheckAll/CheckAll'
import TwoChild from '@/pages/MyBus/TwoChild'
import MyComponents from '@/pages/TabComponents/MyComponents'
import MySlot from '@/pages/MySlot/MySlot'
import SlotSwiper from '@/pages/SlotSwiper/SlotSwiper'
import SlideUpdown from '@/pages/SlideUpdown/SlideUpdown'
import MyAnimate from '@/pages/MyAnimate/MyAnimate'
import FloorScroll from '@/pages/FloorScroll/FloorScroll'
import SlideIn from '@/pages/SlideIn/SlideParent'
import MyActive from '@/pages/MyActive/MyActive'
import MyCenter from '@/pages/MyActive/MyCenter'
import MyFilm from '@/pages/MyActive/MyFilm'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/MyActive',
      name: 'MyActive',
      component: MyActive,
      children:[
        {
          path: 'MyCenter',
          name: 'MyCenter',
          component: MyCenter,
        },
        {
          path: 'MyFilm',
          name: 'MyFilm',
          component: MyFilm,
        }
        ]
    },
    {
      path: '/SlideIn',
      name: 'SlideIn',
      component: SlideIn
    },
    {
      path: '/FloorScroll',
      name: 'FloorScroll',
      component: FloorScroll,
      meta:{
        title:'Title'
      }
    },
    {
      path: '/MyAnimate',
      name: 'MyAnimate',
      component: MyAnimate
    },
    {
      path: '/SlideUpdown',
      name: 'SlideUpdown',
      component: SlideUpdown
    },
    {
      path: '/SlotSwiper',
      name: 'SlotSwiper',
      component: SlotSwiper
    },
    {
      path: '/MySlot',
      name: 'MySlot',
      component: MySlot
    },
    {
      path: '/MyComponents',
      name: 'MyComponents',
      component: MyComponents
    },
    {
      path: '/TwoChild',
      name: 'TwoChild',
      component: TwoChild
    },
    {
      path: '/CheckAll',
      name: 'CheckAll',
      component: CheckAll
    },
    {
      path: '/StyleClass',
      name: 'StyleClass',
      component: StyleClass
    },

    {
      path: '/CurrentActive',
      name: 'CurrentActive',
      component: CurrentActive
    },
    {
      path: '/MySearch',
      name: 'MySearch',
      component: MySearch
    },
    {
      path: '/MyPages',
      name: 'MyPages',
      component: MyPages
    },
    {
      path: '/MyParent',
      name: 'MyParent',
      component: MyParent
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'FlowerKnowledge',
      component: FlowerKnowledge,
      children:[
        {
          path:'FkAll',
          name:'FkAll',
          component:FkAll,
          meta:{
            index:0
          }
        },
        {
          path:'FkFamily',
          name:'FkFamily',
          component:FkFamily,
          meta:{
            index:1
          }
        },
        {
          path:'FkFlower',
          name:'FkFlower',
          component:FkFlower,
          meta:{
            index:2
          }
        },
        {
          path:'FkHealth',
          name:'FkHealth',
          component:FkHealth,
          meta:{
            index:3
          }
        },
        {
          path:'FkMake',
          name:'FkMake',
          component:FkMake,
          meta:{
            index:4
          }
        },
        {
          path:'FkSkill',
          name:'FkSkill',
          component:FkSkill,
          meta:{
            index:5
          }
        },
        {
          path:'FkVegetable',
          name:'FkVegetable',
          component:FkVegetable,
          meta:{
            index:6
          }
        }
      ]
    },
    {
      path: '/MoreList',
      name: 'MoreList',
      component: MoreList
    }
  ]
})
