<template>
<div>
  <div class="game-pre" >
    <div class="game-pre-head">
      <div class="game-pre-head-p"></div>
      <span v-text="num2.p1"></span>
    </div>
    <div class="game-pre-content">
      <div class="game-pre-div1">
        <span class="game-pre-span1" v-text="num2.p2"></span>
        <span class="game-pre-span2" v-text="num2.word1"></span>
        <div class="game-pre-div1-1">
          <div class="game-pre-div1-2" :style="'width:'+(num2.present1)"></div>
          <span v-text="num2.present1"></span>
        </div>
      </div>
      <div class="game-pre-div2">
        <span class="game-pre-span1" v-text="num2.p3"></span>
        <span class="game-pre-span2" v-text="num2.word2"></span>
        <div class="game-pre-div1-1">
          <div class="game-pre-div1-2" :style="'width:'+(num2.present2)"></div>
          <span v-text="num2.present2"></span>
        </div>
      </div>
    </div>
    <div class="game-bottom" v-if="num2.show" :class="{'bottom1':num2.onepx,'bottom2':num2.twopx}">
      <div class="game-bottom-p1"></div>
      <div v-text="num2.link"></div>
      <div class="game-bottom-p2"></div>
      <div v-text="num2.num"></div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    props:{
      num2:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style>
  .game-pre{
    width:100%;
    height:316px;
    position:relative;
  }
  .game-pre-head-p{
    width:32px;
    height:35px;
    background-image:url(../assets/join-img/href2_13.png);
    background-size:32px 35px;
    position:absolute;
    top:40px;
    left:30px;
  }
  .game-pre-head span{
    font-size:30px;
    color:#545454;
    position:absolute;
    top:44px;
    left:10%;
  }
  .game-pre-content{
    position:relative;
    top:110px;
  }
  .game-pre-content div{
    float:left;
  }
  .game-pre-div1{
    width:41%;
    height:124px;
    border:3px #dfdfdf solid;
    margin-left:5.4%;
    position:relative;
  }
  .game-pre-span1{
    text-align:center;
    display:block;
    color:#000000;
    font-size:28px;
    margin-top:14px;
    margin-bottom:12px;
  }
  .game-pre-span2{
    text-align:center;
    display:block;
    color:#8c8c8c;
    font-size:22px;
  }
  .game-pre-div1-1{
    width:100%;
    height:27px;
    border-top:4px #dfdfdf solid;
    position:absolute;
    left:0;
    bottom:0;
  }
  .game-pre-div1-1 span{
    display:block;
    color:#000;
    font-size:22px;
    /*text-align:center;*/
    position:absolute;
    left:42%;
    bottom:0;
  }
  .game-pre-div2{
    width:41%;
    height:124px;
    border:3px #dfdfdf solid;
    margin-left:4.4%;
    position:relative;
  }
  .game-pre-div1-2{
    background-color:#dfdfdf;
    height:100%;
    position:absolute;
    left:0;
    bottom:0;
  }
  .game-bottom{
    height:70px;
    width:88.4%;
    position:absolute;
    left:21px;
    bottom:0;
  }
  .bottom1{
    border-bottom:1px #dfdfdf solid;
  }
  .bottom2{
    border-bottom:2px #dfdfdf solid;
  }
  .game-bottom div{
    display:inline-block;
    float:left;
    line-height:70px;
    color:#8c8c8c;
    font-size:20px;
  }
  .game-bottom-p1{
    width:29px;
    height:27px;
    background-image:url(../assets/join-img/8_03.jpg);
    background-size:29px 27px;
    margin-right:8px;
    margin-top:22px;
  }
  .game-bottom-p2{
    width:29px;
    height:27px;
    background-image:url(../assets/join-img/2_05.jpg);
    background-size:29px 27px;
    margin-left:20px;
    margin-right:8px;
    margin-top:20px;
    line-height: 27px;
  }
  .game-pre-bottomhr{
    width:88%;
    border-top:1px #d2d2d2 solid;
    margin-left:21px;
  }
  .game-pre-bottomhr2{
    width:88%;
    margin-left:21px;
  }
  .gray{
    width:100%;
    height:11px;
    background-color:#f7f4f6;
  }
</style>
