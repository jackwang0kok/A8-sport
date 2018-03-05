<template>
  <article>
    <h3 class="today">今天</h3>
    <section>
      <div class="media" v-for="(item,index) in liveList.list">
        <div class="media-top">
          <div v-if="item.head">
            <span style="color: #D64A49">
              {{item.headTitle}}
            </span>
            {{ item.head }}
          </div>
        </div>
        <div class="media-middle">
          <div class="media-left">
            <div>
              <img :src="item.img[0].src" alt=""><span>{{ item.img[0].name }}</span>
              <img :src="item.img[1].src" alt=""><span>{{ item.img[1].name }}</span>
            </div>
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
        <div class="media-extend">
          <i>爆料:  </i>
          <span>  &nbsp;&nbsp; {{item.tipOff}}</span>
        </div>
        <div class="media-bottom">
          <div ></div>
          <div class="foot-lt">
            <img :src="require('../../../assets/hot/img/info.png')" alt="">
            <span>{{ item.num }}</span>
          </div>
          <div class="foot-rt">
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
          list: [
            {
              img: [
                {
                  src: require('../../../assets/gimg/g1.png'),
                  name: '罗马尼亚'
                },
                {
                  src: require('../../../assets/gimg/g2.png'),
                  name: '土耳其'
                }
              ],
              living: false,
              time: "02:15开始",
              headTitle:'#竞足 009#',
              head: '足球友谊赛',
              tipOff:'罗马尼亚无缘世界杯',
              num:1728,
            },
            {
              img: [
                {
                  src: require('../../../assets/gimg/g3.png'),
                  name: '伊朗'
                },
                {
                  src: require('../../../assets/gimg/g4.png'),
                  name: '巴拿马'
                }
              ],
              living: false,
              time: "02:30开始",
              headTitle:'#竞足 010#',
              head: '足球友谊赛',
              tipOff:'巴拿马世界排名,上升11位',
              num:12222,
            },
            {
              img: [
                {
                  src: require('../../../assets/gimg/g5.png'),
                  name: '克罗地亚'
                },
                {
                  src: require('../../../assets/gimg/g6.png'),
                  name: '希腊'
                }
              ],
              living: false,
              time: "03:45开始",
              headTitle:'#竞足 004#',
              head: '世预赛欧洲赛区附加赛首回合',
              tipOff:'马诺斯因洗牌被停赛',
              num:1837,
            },
            {
              img: [
                {
                  src: require('../../../assets/gimg/g7.png'),
                  name: '北爱尔兰'
                },
                {
                  src: require('../../../assets/gimg/g8.png'),
                  name: '瑞士'
                }
              ],
              living: false,
              time: "03:45开始",
              headTitle:'#竞足 003#',
              head: '世预赛欧洲赛区附加赛首回合',
              tipOff:'北爱尔兰队长百场里程碑',
              num:1783,
            },
            {
              img: [
                {
                  src: require('../../../assets/gimg/g9.png'),
                  name: '苏格兰'
                },
                {
                  src: require('../../../assets/gimg/g10.png'),
                  name: '荷兰'
                }
              ],
              living: false,
              time: "03:45开始",
              headTitle:'#竞足 011#',
              head: '足球热身赛',
              tipOff:'橙衣军团三连胜',
              num:1783,
            },
            {
              img: [
                {
                  src: require('../../../assets/gimg/g11.png'),
                  name: '米竞技'
                },
                {
                  src: require('../../../assets/gimg/g12.png'),
                  name: '戈竞技'
                }
              ],
              living: false,
              time: "06:00开始",
              headTitle:'#竞足 005#',
              head: '巴甲',
              tipOff:'米竞技阵容接近完整,仅一主力停赛',
              num:1728,
            },
            {
              img: [
                {
                  src: require('../../../assets/gimg/g13.png'),
                  name: '圣保罗'
                },
                {
                  src: require('../../../assets/gimg/g14.png'),
                  name: '沙佩科'
                }
              ],
              living: false,
              time: "06:00开始",
              headTitle:'#竞足 006#',
              head: '巴甲',
              tipOff:'土耳其决赛之战',
              num:6221,
            },
            {
              img: [
                {
                  src: require('../../../assets/gimg/g15.png'),
                  name: '佛路米嫩'
                },
                {
                  src: require('../../../assets/gimg/g16.png'),
                  name: '科里蒂巴'
                }
              ],
              living: false,
              time: "07:00开始",
              headTitle:'#竞足 007#',
              head: '巴甲',
              tipOff:'科里蒂巴王牌射手复出'
            },
          ],
        }
      }
    }

  }
</script>

<style>  /*  scoped */
</style>
