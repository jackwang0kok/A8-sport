<template>
  <div class="a8-header">
    <router-link to="/select0/hot"        class="headerTab" active-class="header-active" append>热门</router-link>
    <router-link to="/select0/video"      class="headerTab" active-class="header-active" append>视频</router-link>
    <router-link to="/select0/highlights" class="headerTab" active-class="header-active" append>集锦</router-link>
    <router-link to="/select0/thematic"   class="headerTab" active-class="header-active" append>专题</router-link>
    <router-link to="/select0/guess"      class="headerTab" active-class="header-active" append>竞猜</router-link>
    <div class="addImg"><img src="../../../assets/header/header-add.png" /></div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
  .a8-header{
    position: fixed;
    top: 0;
    left:0;
    overflow:auto;
    width: 100%;
    height: 85px;
    border-bottom: 1px #d2d2d2 solid;
    background: #FFFFFF;
    display: flex;   
    z-index: 999;
  }
  .headerTab{
    width:11.2%;
    height:82px;
    font-size: 36px;
    margin:0px 3.2%;
    text-decoration: none;
    text-align: center;
    line-height: 92px;
    color: #8a8d8c;
    white-space:nowrap;
  }
  .header-active{
    border-bottom:4px #2b102e solid;
    color:#1c1f1e;
  }
  .addImg{
    width: 11.2%;
    line-height: 85px;
    margin-left: 0.8%;
    text-align: center;
  }
  .addImg img{
    width: 40px;
    height: 40px;
    vertical-align: middle!important;
  }
</style>
