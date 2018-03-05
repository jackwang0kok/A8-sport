<template>
  <div>
    <router-view @on-close="showFooter=false"></router-view>
    <hot-foot v-if="showFooter" :footData="footData"></hot-foot>
  </div>
</template>

<script>
  import hotFoot from './components/matchPage/myFoot.vue'

  export default {
    data: function () {
      return {
        showFooter: true,
        footData: [
          {
            name: '首页',
            src: [
              require('./assets/hot/foot/home.png'),
              require('./assets/hot/foot/clicked/home.png'),
            ]
          },
          {
            name: '比赛',
            src: [
              require('./assets/hot/foot/competition.png'),
              require('./assets/hot/foot/clicked/competition.png'),
            ]
          },
          {
            name: '直播',
            src: [
              require('./assets/hot/foot/living.png'),
              require('./assets/hot/foot/clicked/living.png'),
            ]
          },
          {
            name: '关注',
            src: [
              require('./assets/hot/foot/collection.png'),
              require('./assets/hot/foot/clicked/collection.png'),
            ]
          },
          {
            name: '我的',
            src: [
              require('./assets/hot/foot/user.png'),
              require('./assets/hot/foot/clicked/user.png'),
            ]
          }
        ],
      }
    },
    components: {
      hotFoot
    },
    watch:{  //直接判断 路由  感觉会比较好一点--是吧
      $route:function (n,o) {
        if(n.path==='/select4/myself'){
          this.showFooter=true;
        }
      }
    }
  }
</script>

<style>
</style>
