<template>
  <article>
    <h3 class="today">今天</h3>
    <section>
      <div class="media" v-for="(item,index) in liveList.list">
        <div class="media-top">
          <div v-if="item.head">{{ item.head }}</div>
        </div>
        <div class="media-middle">
          <div class="media-left">
            <div v-if="item.img">
              <img :src="item.img[0].src" alt=""><span>{{ item.img[0].name }}</span>
              <img :src="item.img[1].src" alt=""><span>{{ item.img[1].name }}</span>
            </div>
            <img v-else :src="item.src" alt="">
          </div>
          <div class="media-content">
            <div class="media-head">{{ item.title }}</div>
            <div class="media-body" :class="{'col-middle':!item.title}"> {{ item.time }}</div>
          </div>
          <div class="media-right">
            <div class="living" v-if="item.living==true">
              <span>直播中</span>
              <img src="../../../assets/hot/img/living.png" alt="">
            </div>
            <div v-else>
              <img class="waiting" :src="require('../../../assets/hot/img/clock.png')" alt="">
            </div>

          </div>
        </div>
        <div class="media-bottom">
          <div class="foot-lt">
            <img :src="require('../../../assets/hot/img/info.png')" alt="">
            <span>{{ item.num }}</span>
          </div>
          <div class="foot-rt">
            {{ item.flag }}
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    data:function () {
      return {
        liveList: {
          list: [{
            src: require('../../../assets/hot/img/golf1.png'),
            living: true,
            title: "蓝湾LPGA高尔夫大师赛",
            time: "进行中",
            head: '高尔夫',
            num:1728,
            flag:"CCTV5"
          }, {
            src: require('../../../assets/hot/img/golf2.png'),
            living: false,
            title: "体育新闻",
            time: "18:00开始",
            num:12222,
            flag:"CCTV5"
          }, {
            src: require('../../../assets/hot/img/golf3.png'),
            living: false,
            title: "冠军欧洲,世预赛前瞻",
            time: "18:35开始",
            num:1837,
            flag:"CCTV5"
          }, {
            src: require('../../../assets/hot/img/vallball1.png'),
            living: false,
            title: "中国男排联赛  上海VS湖北",
            time: "19:30开始",
            head: '排球',
            num:1783,
            flag:"CCTV5"
          },
            {
              src: require('../../../assets/hot/img/vallball2.png'),
              living: false,
              title: "NBA最前线",
              time: "19:30开始",
              num:5361,
              flag:"CCTV5"
            },
            {
              img: [
                {
                  src: require('../../../assets/hot/img/cba1.png'),
                  name: '福建'
                },
                {
                  src: require('../../../assets/hot/img/cba2.png'),
                  name: '天津'
                }
              ],
              living: false,
              time: "19:35开始",
              head: 'CBA',
              num:1753,
              flag:"QQ直播"
            },
            {
              img: [
                {
                  src: require('../../../assets/hot/img/cba3.png'),
                  name: '芬兰'
                },
                {
                  src: require('../../../assets/hot/img/cba4.png'),
                  name: '爱沙尼亚'
                }
              ],
              living: false,
              time: "01:00开始",
              num:6221,
              flag:""
            },
            {
              img: [
                {
                  src: require('../../../assets/hot/img/cba5.png'),
                  name: '罗马尼亚'
                },
                {
                  src: require('../../../assets/hot/img/cba6.png'),
                  name: '土耳其'
                }
              ],
              living: false,
              time: "02:30开始",
              num:7256,
              flag:""
            },
          ],
        }
      }
    }

  }
</script>

<style>  /*  scoped */


</style>
