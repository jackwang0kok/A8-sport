<template>
<div>
  <!--第二个页面-->
  <div  class="money-2">
    <router-link class="footer-tab myself"  to="/select4/myself"  active-class="myselfActive"><img src="../assets/返回统一.png" width="29px" height="52px"></router-link>
    <span>金币任务</span>
    <span>指南</span>
  </div>
  <div  class="radius-div">
    <div  class="radius">

      <span  class="zero">0</span>
      <span class="already">已领取</span>
      <span  class="today">今日可领取2000金币</span>
      <div  class="little"></div>
      <div  class="little"></div>
    </div>
  </div>
  <div  class="sign-in">
    <span>签到任务</span>
  </div>
  <div  class="sign-in-detail">
    <img src="../assets/link/链接3_03.png" class="link-1">
    <img src="../assets/link/链接3_03.png" class="link-1">
    <img src="../assets/link/链接3_03.png" class="link-1">

    <div><span class="qiandao">签到</span>
     <p  class="qiandao-day">已连续签到0天</p>
    </div>
  </div>
  <div  class="sign-in2">
    <span>每日任务</span>
  </div>

  <!--每日任务-->
  <div  class="every">
    <img class="every-one" src="../assets/link/链接3_07.png" alt="">
    <div class="every-ul">
      <div  class="news-li" v-for="item in myNewList">
        <span class="li-one">{{item.name}}</span>
        <span class="li-two">{{item.num}}</span>
        <span class="li-three">{{item.count}}</span>
        <img  class="li-img" src="../assets/link/链接3_09.png" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
           data(){
             return{
               myNewList:[
                 {
                   name:"每天阅读新闻",
                   num:"(0/3)",
                   count:"+50"
                 },
                 {
                   name:"每天观看视频",
                   num:"(0/3)",
                   count:"+50"
                 },
                 {
                   name:"每天参与竞猜",
                   num:"(0/1)",
                   count:"+50"
                 },
                 {
                   name:"每天分享新闻",
                   num:"(0/1)",
                   count:"+150"
                 },
                 {
                   name:"每天分享比赛",
                   num:"(0/1)",
                   count:"+150"
                 },
                 {
                   name:"每天分享视频",
                   num:"(0/1)",
                   count:"+150"
                 },
                 {
                   name:"评论上热门",
                   num:"(0/1)",
                   count:"+200"
                 },
                 {
                   name:"每天分享快讯",
                   num:"(0/1)",
                   count:"+150"
                 }
               ],
               myNewListTwo:[
                 {
                   name:"关注订阅号",
                   num:"(0/1)",
                   count:"+1000",
                   scr:require("../assets/link/链接3_09.png")
                 },
                 {
                   name:"每天观看视频",
                   num:"(1/1)",
                   scr:require("../assets/link/链接3_14.png")
                 }
               ]
             }
           }
    }
</script>

<style>
  /*第二个页面*/

  .money-2{
    width: 100%;
    height:100px;
    line-height: 132px;
    border-bottom: 1px #ccc solid;
  }
  .money-2 img{
    width:26px;
    height:46px;
    margin-left: 3%;
    margin-top: 25px;
  }
  .money-2 span:nth-of-type(1){
    color:#7f7f7f;
    font-size:36px;
    margin-left: 33%;
  }
  .money-2 span:nth-of-type(2){
    color:#6F6E6E;
    font-size:25px;
    margin-left: 26%;
    font-weight: bold;
  }
  .radius-div{
    width: 100%;
    height:331px;
  }
  .radius{
    width:37%;
    height:280px;
    border:19px #d9d8d8 solid;
    border-radius:300px;
    margin-left: 27%;
    margin-top: 7px;
    position: relative;
  }

  .zero{
    color:#ffcc00;
    font-size:50px;
    font-weight: bold;
    margin-left: 45%;
    margin-top: 68px;
  }
  .little{
    width:19px;
    height:19px;
    -webkit-border-radius:9.5px ;
    -moz-border-radius: 9.5px;
    border-radius: 9.5px;
    background-color:#d9d8d8 ;
  }
  .little:nth-of-type(1){
    position:absolute;
    top:257px;
    left:18%;
  }
  .little:nth-of-type(2){
    position:absolute;
    top:257px;
    left:75%;
  }
  .already{
    display: flex;
    color:#1c1c1c;
    font-size:30px;
   margin-top:31px;
   margin-left: 35%;
  }
  .today{
    display: flex;
    color:#d9d8d8;
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;;
    position: absolute;
    bottom:-20px;
    left:20%;
  }
  .sign-in{
    display: flex;
    width: 100%;
    height:66px;
    background-color: #F7F4F6;
  }
  .sign-in span{
    margin-top: 19px;
    margin-left: 3%;
    color:#BFBEBF;
  }
  .sign-in-detail{
    display: flex;
    width: 100%;
    height:213px;
  }
  .link-1{
    margin-top: 67px;
    margin-left: 7%;
    width:11%;
    height:74px;
  }
  .qiandao{
    display: inline-block;
    width:200px;
    height:63px;
    line-height: 63px;
    background-color: #fdcc00;
   margin-top: 77px;
    margin-left: 35%;
    border-radius: 10px;
    text-align: center;
    color: #ffffff;
    font-size:34px;
  }
  .qiandao-day{
    margin-top: 26px;
    margin-left: 100px;
    color:#ADAAAC;
    font-size:24px;
  }
  .sign-in2{
    display: flex;
    width: 100%;
    height:66px;
    background-color: #F7F4F6;
  }
  .sign-in2 span{
    margin-left: 38px;
    margin-top: 19px;
    color:#D3D1D2;
  }

  /*每日任务*/
 .every{
    display: flex;
  }

 .every-one{
   margin-top: 19px;
   margin-left: 3%;
 }

    .every-ul{
      margin-left: 3%;
      width:100%;
    }
  .news-li:nth-of-type(1){
    margin-top:-10px ;
/*    background-color: red;*/
  }
    .news-li{
      padding: 32px 0;
      width:95%;
      height:35px;
/*      border:1px red solid;*/
    }
  .li-one{
    color:#000000;
    font-size:30px;
  }
  .li-two{
    color:#acabac;
    font-size:30px;
  }
  .li-three{
    color:#acabac;
    font-size:30px;
    padding-left: 210px;
  }
  .li-img{
    padding-left: 10px;
  }
</style>
