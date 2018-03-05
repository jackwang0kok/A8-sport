<template>
  <div>
    <hot-head :headData="headData" headType="select2" @currentIndex="currentIndex"></hot-head>
    <transition name="living">
      <router-view :listData="livingList[iNow]"></router-view>
    </transition>
    <hot-foot :footData="footData"></hot-foot>
  </div>
</template>

<script>
  import hotHead from './components/matchPage/myHead.vue'
  import hotFoot from './components/matchPage/myFoot.vue'

  export default {
    data: function () {
      return {
        iNow:0,
        headData: ['热门', '最新', '秀场'],
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
        livingList: [
          [
            {
              title: "等你吃鸡",
              map: "未知",
              anchorType: "体育主播",
              viewer: "121再看",
              titleImg: require('./assets/living/protrait1.png'),
              mainImage: require('./assets/living/livingHot1.png')
            },
            {
              title: "垂钓小助手",
              map: "未知",
              anchorType: "快乐垂钓",
              viewer: "33553在看",
              titleImg: require('./assets/living/protrait2.png'),
              mainImage: require('./assets/living/livingHot2.png')
            },
            {
              title: "乒羽小助手",
              map: "未知",
              anchorType: "先锋乒羽",
              viewer: "32631在看",
              titleImg: require('./assets/living/protrait3.png'),
              mainImage: require('./assets/living/livingHot3.png')
            }],
          [
            {
              src: require("./assets/living/livingHot1.png"),
              imgTitle: "等你吃鸡",
              map: "",
              anchorType: "体育直播"
            },
            {
              src: require("./assets/living/livingHot2.png"),
              imgTitle: "乒羽小助手",
              map: "未知",
              anchorType: "体育直播"
            },
            {
              src: require("./assets/living/livingHot3.png"),
              imgTitle: "乒羽小助手",
              anchorType: "快乐垂钓",
              map: "未知"
            }
          ],
          [
            {
              src: require("./assets/living/show/show (1).png"),
              imgTitle: "佳佳求宠爱<img src='assets/living/'> ",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (2).png"),
              imgTitle: "倾听者",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (3).png"),
              imgTitle: "学会温柔润妹",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (4).png"),
              imgTitle: "偏偏起舞",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (5).png"),
              imgTitle: "淡淡的香 ",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (6).png"),
              imgTitle: "怡宝 ",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (7).png"),
              imgTitle: "玉米yomi ",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (8).png"),
              imgTitle: "行客 ",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (9).png"),
              imgTitle: "繁星 ",
              map: "南阳市",
            },
            {
              src: require("./assets/living/show/show (10).png"),
              imgTitle: "大牙妹 ",
              map: "四平市",
            },
            {
              src: require("./assets/living/show/show (11).png"),
              imgTitle: "橙子以磨头家族 ",
              map: "四平市",
            },
            {
              src: require("./assets/living/show/show (12).png"),
              imgTitle: "半夏,微微 ",
              map: "驻马店市",
            },
            {
              src: require("./assets/living/show/show (13).png"),
              imgTitle: "NH管管",
              map: "未知",
            },
            {
              src: require("./assets/living/show/show (14).png"),
              imgTitle: "轮椅叔的画笔",
              map: "驻马店市",
            },
            {
              src: require("./assets/living/show/show (15).png"),
              imgTitle: "一丹",
              map: "松原市",
            },
            {
              src: require("./assets/living/show/show (16).png"),
              imgTitle: "静宝贝",
              map: "未知",
            },
          ]
        ]
      }
    },

    components: {
      hotHead,
      hotFoot
    },
    methods: {
      currentIndex: function (i) {
        console.log(i);
        this.iNow=i;

      }
    }
  }
</script>

<style>
  .living-enter, .living-leave-active {
    transition: all .3s ease;
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .living-leave-active, .living-enter {
    transition: all .3s ease;
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

</style>
