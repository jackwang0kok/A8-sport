<template>
  <div>
    <hot-head :headData="headData" headType="select1"></hot-head>
    <transition name="match">
      <router-view></router-view>
    </transition>

    <hot-foot :footData="footData"></hot-foot>
  </div>
</template>

<script>
  import hotHead from './components/matchPage/myHead.vue'
  import hotFoot from './components/matchPage/myFoot.vue'
  export default {
    data:function () {
      return{
        headData: ['热门', '竞赛', '联赛'],
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
        ]
      }
    },
    components:{
      hotHead,
      hotFoot
    },
  }
</script>

<style>
  .match-enter-active {
    transition: all .3s ease;
  }
  .match-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .match-enter, .match-leave-to
  {
    transform: translateX(750px);
    opacity: 0;
  }
</style>
