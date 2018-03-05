<template>
  <div>
    <div id="all">
      <div class="one-header">
        <img src="../assets/my/我_03.png" class="one-img-1" alt="" @click="showAbout">
        <span class="span1" @click="showAbout">点击登录</span>
        <img src="../assets/my/我_05.png" class="one-img-2" alt="">
      </div>
      <div class="title">
        <div class="div-warp">
          <router-link class="one-tab" to="/select4/one" @click.native="clicka"></router-link>
          <router-link class="one-tab" to="/select4/two" @click.native="clicka"></router-link>
          <router-link class="one-tab" to="/select4/three" @click.native="clicka"></router-link>
          <a @click="showAbout" class="one-tab" to="/select4/four"></a>
        </div>
      </div>
      <div class="myshow">
        <img src="../assets/my/我_23.png" alt="">
        <span class="span2">我的直播</span>
        <span class="more"> > </span>
      </div>
      <div class="mywatch">
        <img src="../assets/my/我_26.png" alt="">
        <span class="span2">我关注的球队</span>
        <span class="more2">更多球队&nbsp></span><br>
        <hr>
        <span class="span3">您还没有关注任何球队呢~</span>
      </div>

      <!--使用组件封装的数据-->
      <v-settings></v-settings>
      <this-dialog :isShow="isShowAbout" @on-close="hideAbout"></this-dialog>

    </div>
  </div>
</template>

<script>

  import thisDialog from '../components/base/Dialog.vue'
  import VSettings from "../detail/settings.vue"

  export default {
    data:function () {
      return {
        isShowAbout:false,
        footData: [
          {
            name: '首页',
            src: [
              require('../assets/hot/foot/home.png'),
              require('../assets/hot/foot/clicked/home.png'),
            ]
          },
          {
            name: '比赛',
            src: [
              require('../assets/hot/foot/competition.png'),
              require('../assets/hot/foot/clicked/competition.png'),
            ]
          },
          {
            name: '直播',
            src: [
              require('../assets/hot/foot/living.png'),
              require('../assets/hot/foot/clicked/living.png'),
            ]
          },
          {
            name: '关注',
            src: [
              require('../assets/hot/foot/collection.png'),
              require('../assets/hot/foot/clicked/collection.png'),
            ]
          },
          {
            name: '我的',
            src: [
              require('../assets/hot/foot/user.png'),
              require('../assets/hot/foot/clicked/user.png'),
            ]
          }
        ],
      }
    },
    methods: {
      showAbout() {
        this.isShowAbout = true;
      },
      hideAbout() {
        this.isShowAbout = false;
      },
      clicka() {
        console.log("clicka");
        this.$emit('on-close');
      }
    },
    components: {
      thisDialog,
      VSettings,
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  #all {
    background-color: #F7F4F6;
    min-height: 1300px;
    border: 1px red solid;
  }

  /*myself页面*/

  .one-header {
    display: flex;
    width: 100%;
    height: 239px;
    line-height: 239px;
    border: 1px red solid;
    background-color: #262626;
  }

  .one-img-1 {
    width: 17%;
    height: 126px;
    margin-left: 5%;
    margin-top: 50px;
  }

  .span1 {
    color: #fefefe;
    font-size: 30px;
  }

  .one-img-2 {
    width: 7%;
    height: 48px;
    margin-top: 50px;
    margin-left: 47%;
  }

  .div-warp {
    background-color: white;
    display: flex;
    margin-top: -30px;
    margin-left: 5%;
    width: 90%;
    height: 137px;
    /*    z-index: 2;*/
    /*border:1px red solid;*/
    box-shadow: -3px 5px 5px -2px #A09FA0;
  }

  .one-tab {
    display: block;
    z-index: 5;
    width: 25%;
    margin: 0 3.75%;
    font-size: 18px;
    color: #060606;
    text-align: center;
    text-decoration: none;
  }

  .one-tab::before {
    content: '';
    display: block;
    margin: 15px auto;
    width: 52px;
    height: 52px;
    padding-bottom: 3px;
  }

  .one-tab:nth-of-type(1)::before {
    background: url("../assets/my/我_10.png") center no-repeat;
    background-size: 52px 52px;
  }

  .one-tab:nth-of-type(1)::after {
    content: '1100';
  }

  .one-tab:nth-of-type(2)::before {
    background: url("../assets/my/我_12.png") center no-repeat;
    background-size: 52px 52px;
  }

  .one-tab:nth-of-type(2)::after {
    content: '参与竞赛';
  }

  .one-tab:nth-of-type(3)::before {
    background: url("../assets/my/我_14.png") center no-repeat;
    background-size: 52px 52px;
  }

  .one-tab:nth-of-type(3)::after {
    content: '金币任务';
  }

  .one-tab:nth-of-type(4)::before {
    background: url("../assets/my/我_16.png") center no-repeat;
    background-size: 52px 52px;
  }

  .one-tab:nth-of-type(4)::after {
    content: '礼品兑换';
  }

  /*我的直播*/
  .myshow {
    margin-top: 10px;
    width: 100%;
    height: 92px;
    background-color: #FFFFFF;
  }

  .myshow img {
    margin-top: 40px;
    margin-left: 5%;
    width: 32px;
    height: 21px;
  }

  .myshow .span2 {
    color: #404404;
    font-size: 18px;
    margin-top: 40px;
  }

  .more {
    color: #404404;
    font-size: 18px;
    margin-top: 40px;
    margin-left: 70%;
  }

  /*我的关注*/
  .mywatch {
    margin-top: 16px;
    left: 0;
    width: 100%;
    height: 185px;
    background-color: white;
  }

  .mywatch img {
    width: 4%;
    height: 27px;
    margin-top: 20px;
    margin-left: 5%;
  }

  .mywatch .span2 {
    color: #404404;
    font-size: 18px;
    margin-top: 20px;
  }

  .more2 {
    color: #aaaaaa;
    font-size: 18px;
    margin-top: 20px;
    margin-left: 55%;
  }

  hr {
    margin-top: 18px;
    width: 100%;
    border: 1px #FCFAFC solid;
    height: 1px;
  }

  .span3 {
    margin-left: 33%;
    width: 100%;
    line-height: 125px;
    color: #a9a9a9;
    font-size: 24px;
  }
</style>
