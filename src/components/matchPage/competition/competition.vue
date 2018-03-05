<template>
  <article class="competition">
    <div class="title">
      <span>我的联赛</span>
      <span>编辑</span>
    </div>
    <div class="head">
      <div class="headTop">
        <div class="top-left">
          <img src="../../../assets/conpetition/head0.png" alt="">
        </div>
        <div class="top-content">
          <h3>综合体育</h3>
          <p>今天有4场比赛</p>
        </div>
        <div class="top-right">
          <img src="../../../assets/conpetition/head-right.png" alt="">
        </div>
      </div>
      <div class="headBody">
        <div class="bd bd-left bd-border">
          <div>
            <img src="../../../assets/conpetition/head1.png" alt="">
          </div>
          <div>
            <h1>体育新闻</h1>
            <span>18:00 开始</span>
          </div>
        </div>
        <div class="bd bd-right">
          <div>
            <img src="../../../assets/conpetition/head2.png" alt="">
          </div>
          <div>
            <h1>冠军欧洲-世预赛前瞻</h1>
            <span>18:35 开始</span>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 15px;background-color: #EEEEEE"></div>
    <!-- 下面的内容 -->
    <div class="head">
      <div class="headTop">
        <div class="top-left">
          <img src="../../../assets/conpetition/nba1.png" alt="">
        </div>
        <div class="top-content">
          <h3>NBA</h3>
          <p>今天有6场比赛</p>
        </div>
        <div class="top-right">
          <img src="../../../assets/conpetition/head-right.png" alt="">
        </div>
      </div>
      <div class="headBody">
        <div class="bd1 bd-border">
          <div>
            <img src="../../../assets/conpetition/nba2.png" alt="">
            <b>活塞</b>
            <span>114</span>
          </div>
          <div>
            <img src="../../../assets/conpetition/nba3.png" alt="">
            <b>步行者</b>
            <span>97</span>
          </div>
          <div>
            <div>
              <img src="../../../assets/conpetition/nba6.png" alt="">
              <span>录像</span>
            </div>
            <div>
              <img src="../../../assets/conpetition/nba7.png" alt="">
              <span>集锦</span>
            </div>
          </div>
        </div>
        <div class="bd1 bd-border">
          <div>
            <img src="../../../assets/conpetition/nba4.png" alt="">
            <b>魔术</b>
            <span>114</span>
          </div>
          <div>
            <img src="../../../assets/conpetition/nba5.png" alt="">
            <b>尼克斯</b>
            <span>97</span>
          </div>
          <div>
            <div>
              <img src="../../../assets/conpetition/nba6.png" alt="">
              <span>录像</span>
            </div>
            <div>
              <img src="../../../assets/conpetition/nba7.png" alt="">
              <span>集锦</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div style="height: 15px;background-color: #EEEEEE"></div>
    <section class="list" v-for="(item,index) in list">
      <div class="content">
        <div>
          <img :src="require(`../../../assets/conpetition/data/d${index+1}.png`)" alt="">
        </div>
        <div>
          <h3>{{ item.name }}</h3>
          <p>{{ item.introduction  }}</p>
        </div>
        <div>
          <img src="../../../assets/conpetition/head-right.png" alt="">
        </div>
      </div>
      <div style="height: 15px;background-color: #EEEEEE"></div>
    </section>
  </article>

</template>

<script>
  export default {
    data:function () {
      return {
        list:[
          {
            name:"英超",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"CBA",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"西甲",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"中超",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"德甲",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"意甲",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"欧冠",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"法甲",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"足协杯",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"亚冠",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
          {
            name:"重甲",
            introduction:"下一场比赛将于2017年11月18日开始"
          },
        ]
      }
    }
  }
</script>

<style>  /*  scoped */
@import "../../../assets/css/competition.css";

</style>
