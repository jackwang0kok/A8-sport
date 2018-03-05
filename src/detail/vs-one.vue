<template>
  <div>
  <div class="game">
    <div class="game-1">
      <div class="game-p1"><img :src="aaa.src1"/></div>
      <span v-text="aaa.name1"></span>
    </div>
    <div class="game-2">
      <div class="game-p2">NBA</div>
      <span>VS</span>
      <p>
        <span v-text="aaa.time1"></span>
        <span v-text="aaa.time2"></span>
        <span v-text="aaa.time3"></span>
        <span v-text="aaa.time4"></span>
      </p>
    </div>
    <div class="game-3">
      <div class="game-p3"><img :src="aaa.src2"/></div>
      <span v-text="aaa.name2"></span>
    </div>
  </div>
  </div>
</template>

<script>
  export default{
    props:{
      aaa:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style>
  .game{
    width:100%;
    height:213px;
    border-bottom:1px #d2d2d2 solid;
    position:relative;
  }
  .game-p1{
    /* width:85px;
     height:84px;*/
    position:absolute;
    top:20px;
    left:34px;
  }
  .game-p1 img{
    width:87px;
    height:82px;
  }
  .game-1 span{
    font-size:30px;
    color:#8f8f8f;
    position:absolute;
    left:6%;
    bottom:32px;
  }
  .game-2{
    height:100%;
    width:35%;
    text-align:center;
    position:absolute;
    left:33.4%;
  }
  .game-p2{
    width:50%;
    height:41px;
    background-color:#515151;
    border-radius:0 0 10px 10px;
    margin-left:23%;
    color:#d2d2d2;
    line-height: 41px;
  }
  .game-2 span:nth-of-type(1){
    display: inline-block;
    margin-top:20px;
    /* margin-bottom:10px;*/
    font-size:30px;
  }
  .game-2 p{
    float: left;
    display: inline-block;
    font-size:24px;
    color:#8f8f8f;
  }
  .game-p3{
    width:44px;
    height:84px;
    position:absolute;
    right:9%;
    top:20px;
  }
  .game-p3 img{
    width:88px;
    height:84px;
  }
  .game-3 span{
    font-size:30px;
    color:#8f8f8f;
    position:absolute;
    right:35px;
    bottom:32px;
  }
</style>
