// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


//比赛页面 需要引入的组件
import matchPage from './matchPage.vue'
import hotContent from './components/matchPage/hot/hotContent.vue'
import guessContent from './components/matchPage/guess/guessContent.vue'
import competitionContent from './components/matchPage/competition/competition.vue'

//直播页面需要引入的组件
import living from './living.vue'
import hotLiving from './components/living/hotLiving.vue'
import newLiving from './components/living/newLiving.vue'
import showLiving from './components/living/showLiving.vue'


Vue.config.productionTip = false;


//src1----刘婷婷的 我的账户页面
import myCount from './myCount.vue'
import Myself from './components/myself.vue'
import One from "./pages/one.vue"
import Two from "./pages/two.vue"
import Three from "./pages/three.vue"
import Four from "./pages/four.vue"


//关注的页面
import watchPage from './watchPage.vue';
import Follow from './components/follow.vue'


//刘通的页面--就是首页
//其余的三页面
import firstPage from './firstPage.vue';

import Hot from './components/home/hot/hot.vue'
import Highlights from './components/home/highlights/highlights.vue'
import Thematic from './components/home/thematic/thematic.vue'
import Guess from './components/home/guess/guess.vue'
import Video from './components/home/video/video.vue'


import axios from "axios"

Vue.prototype.$ajax = axios;


let router = new VueRouter({
  mode: 'history',  // history  滚动行为
  routes: [
    {
      path: '/',
      redirect: '/select2/page0',  //跳转到我的页面
    },
    {
      path: '/select0',
      component: firstPage,
      name: 0,
      redirect: '/select0/hot',
      children: [
        {
          path: 'hot',
          component: Hot,
          name: 0.1
        },
        {
          path: 'video',
          component: Video,
          name: 0.2
        },
        {
          path: 'highlights',
          component: Highlights,
          name: 0.3
        },
        {
          path: 'thematic',
          component: Thematic,
          name: 0.4
        },
        {
          path: 'guess',
          component: Guess,
          name: 0.5
        }
      ]
    },
    {
      path: '/select3',
      component: watchPage,
      name: 3,
      redirect: '/select3/follow',
      children: [
        {
          path: 'follow',
          component: Follow,
          name: 3.1
        },
      ]
    },
    {
      path: '/select4',  //账户页面
      component: myCount,
      name: 4,
      redirect: "/select4/myself",
      children: [
        {
          path: 'myself',
          component: Myself,
          name: 4.1
        },
        {
          path: 'one',
          component: One,
          name: 4.2
        },
        {
          path: 'two',
          component: Two,
          name: 4.3
        },
        {
          path: 'three',
          component: Three,
          name: 4.4
        },
        {
          path: 'four',
          component: Four,
          name: 4.5
        }
      ]
    },
    {
      path: '/select1',
      component: matchPage,
      redirect: '/select1/page0',
      name: 1,
      children: [  //重复的路由命名 会出现问题--先这样用吧
        {
          path: 'page0',
          component: hotContent,
          name: 1.1
        },
        {
          path: 'page1',
          component: guessContent,
          name: 1.2
        },
        {
          path: 'page2',
          component: competitionContent,
          name: 1.3
        },
      ]
    },
    {
      path: '/select2',
      component: living,
      redirect: '/select2/page0',
      index: 2,
      children: [
        {
          path: 'page0',
          component: hotLiving,
          props: true,
          name: 2.1
        },
        {
          path: 'page1',
          component: newLiving,
          props: true,
          name: 2.2
        },
        {
          path: 'page2',
          component: showLiving,
          props: true,
          name: 2.3
        },
      ]
    },
  ],
  //动画
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

});

//不管用  --日了狗了
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
