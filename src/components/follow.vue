<template>
<div>
  <div class="a8-header">
    <span class="a-head"></span>
    <span class="a-write">无关注,不精彩!</span>
  </div>
  <!--篮球关注-->
  <div  class="basket">
    <p  class="hot">热门篮球球队点击关注</p>
       <div  class="basket-icon">
         <img src="../assets/boll/one.png" alt="">
         <img src="../assets/boll/two.png" alt="">
         <img src="../assets/boll/three.png" alt="">
         <img src="../assets/boll/four.png" alt="">
         <img src="../assets/boll/five.png" alt="">
       </div>
    <div  class="a-name">
      <span class="name">勇士</span>
      <span class="name">骑士</span>
      <span class="name">火箭</span>
      <span class="name">雷霆</span>
      <span class="name">马刺</span>
    </div>
    <div  class="basket-icon1">
      <img src="../assets/boll/two-1.png" alt="">
      <img src="../assets/boll/two-2.png" alt="">
      <img src="../assets/boll/two-3.png" alt="">
      <img src="../assets/boll/two-4.png" alt="">
      <img src="../assets/boll/two-5.png" alt="">
    </div>
    <div  class="a-name1">
      <span class="name">湖人</span>
      <span class="name">快船</span>
      <span class="name">公车</span>
      <span class="name">热火</span>
      <span class="name">猛龙</span>
    </div>
  </div>


<!--足球关注-->
  <div  class="football">
    <p  class="hot">热门足球球队点击关注</p>
    <div  class="foot-icon">
      <img src="../assets/boll/three-1.png" alt="">
      <img src="../assets/boll/three-2.png" alt="">
      <img src="../assets/boll/three-3.png" alt="">
      <img src="../assets/boll/three-4.png" alt="">
      <img src="../assets/boll/three-5.png" alt="">
    </div>
    <div  class="foot-name">
      <span class="name">皇家</span>
      <span class="name">巴塞罗那</span>
      <span class="name">曼联</span>
      <span class="name">广州恒大</span>
      <span class="name">拜仁慕</span>
    </div>
    <div  class="foot-icon1">
      <img src="../assets/boll/four-1.png" alt="">
      <img src="../assets/boll/four-2.png" alt="">
      <img src="../assets/boll/four-3.png" alt="">
      <img src="../assets/boll/four-4.png" alt="">
      <img src="../assets/boll/four-5.png" alt="">
    </div>
    <div  class="foot-name1">
      <span class="name">阿森纳</span>
      <span class="name">切尔西</span>
      <span class="name">&nbsp曼城</span>
      <span class="name">马德里</span>
      <span class="name">利物浦</span>
    </div>
  </div>
  <!--点击关注更多-->

    <div  class="click-more">
        <span>关注更多球队</span>
    </div>
</div>
</template>

<script>
    export default {
      components:{
        }
    }
</script>

<style>
  .a8-header{
    /*    border: 1px black solid;*/
    position: fixed;
    display: flex;
    top: 0;
    left:0;
    width: 100%;
    height: 73.5px;
    z-index: 999;
    background: #F9FCFC;
  }
  .a-head{
    width:4%;
    height: 30px;
    background-color: #DDDDDD;
    border-radius: 30px;
    margin-left:3%;
    margin-top: 18.5px;
  }
  .a-write{
    font-size: 21px;
    color: #DDDDDD;
    margin-top: 28.5px;
    margin-left: 4%;
  }
  .basket{
    position: fixed;
    top: 73.5px;
    left:0;
    display: flex;
    height:100%;
    width:100%;
    background-color: #F2F2F2;
  }
  .basket .basket-icon{
    display: flex;
    position: fixed;
    top: 130px;
    left:0;
     width:100%;
    height:296px;
    background-color: #ffffff;
  }
  .basket .basket-icon1{
    display: flex;
    position: fixed;
    top: 300px;
    left:0;
    width:100%;
    height:78px;
    background-color: #ffffff;
  }
  .basket .a-name{
    width:100%;
    position: fixed;
    top: 205px;
    left:0;
    line-height: 70px;
    background-color:#ffffff ;
  }
  .basket .a-name1{
    width:100%;
    position: fixed;
    top: 350px;
    left:0;
    line-height: 70px;
    background-color:#ffffff ;
  }
  .name{
        font-size: 24px;
        color:#161616;
        margin-right: 12%;
  }
  .name:nth-of-type(1){
    margin-left: 7%;
  }
  .basket-icon img{
    width:7%;
    height:50px;
    margin-top: 18.5px;
    margin-right: 13%;
  }
  .basket-icon img:nth-of-type(1){
  margin-left:7%;

  }
  .hot{
    margin-left: 6%;
    margin-top: 20px;
  }
  .basket-icon1 img{
    width:7%;
    height:50px;
    margin-right: 13%;
  }
  .basket-icon1 img:nth-of-type(1) {
    margin-left: 7%;
  }

  /*足球*/
  .football{
    position: fixed;
    top: 430px;
    left:0;
    display: flex;
    height:400px;
    width:100%;
    background-color: #F2F2F2;
  }
  /*足球图片:*/
  .foot-icon{
    position: fixed;
    display: flex;
    top: 490px;
    left:0;
    width: 100%;
    height:184.5px;
    background-color: #FFFFFF;
  }
  .foot-icon img{
    width:7%;
    height:50px;
    margin-top: 18.5px;
    margin-right: 12%;
  }
  .foot-icon img:nth-of-type(1) {
    margin-left: 7%;
  }

  /*足球队名字*/
  .foot-name{
    display: flex;
    width:100%;
    position: fixed;
    top: 570px;
    left:0;
    line-height: 70px;
    text-overflow: ellipsis;
  }
  .foot-name .name{
    display: flex;
    font-size: 18px;
    margin-right: 11%;

  }

  /*第二行*/
  .foot-icon1{
    display: flex;
    position: fixed;
    top: 620px;
    left:0;
    width:100%;
    height:156px;
    background-color: #ffffff;
  }
  .foot-icon1 img{
    width:7%;
    height:50px;
    margin-top: 5%;
    margin-right: 12%;
  }
  .foot-icon1 img:nth-of-type(1) {
    margin-left: 7%;
  }

  .foot-name1{
    position: fixed;
    top: 730px;
    left:0;
    display: flex;
    width:100%;
    height:60px;
    line-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color:#ffffff ;
  }

  .foot-name1 .name{
    display: flex;
    font-size: 18px;
    margin-right: 11%;
  }
/*点击关注更多  */
  .click-more{
    position: fixed;
    display: flex;
    top: 900px;
    left:0;
    width: 100%;
    height:260px;
    background-color: #F2F2F2;
  }
  .click-more span{
    text-align: center;
    display: inline-block;
    width:395px;
    height:57px;
    border:1px #121212 solid;
    border-radius:10px;
    line-height: 57px;
    color: #121212;
    font-size: 30px;
    margin: 37px auto;
  }
</style>
