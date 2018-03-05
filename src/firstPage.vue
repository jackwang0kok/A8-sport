<template>
  <div class="homeInfo">
    <nav-header></nav-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <hot-foot :footData="footData"></hot-foot>
  </div>
</template>

<script>
  import hotFoot from './components/matchPage/myFoot.vue'
  import navHeader from './components/home/head/NavHeader.vue'

  export default {
    data() {
      return {
        hotNews_01: [],
        hotNews_02: [],
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
      navHeader,
      hotFoot
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style>
  .homeInfo {
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    margin: 48px auto;
  }
</style>
