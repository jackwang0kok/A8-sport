<template>
  <div>
    <header class="living-header">
      <img src="../../assets/living/livingHeader.png" alt="">
    </header>
    <article>
      <div class="panel" v-for="item in listData">
        <div style="width: 100%;height: 15px;background-color: #F8F3F7;clear: both"></div>
        <div class="panel-head">
          <div class="panel-head-lt">
            <img :src="item.titleImg" alt="">
          </div>
          <div class="panel-head-content">
            <div><b>{{ item.title }}</b><img src="../../assets/living/map.png" alt=""> <span>地点:{{ item.map }}</span>
              <span>{{ item.viewer }}</span></div>
            <div><span>等级1</span> <span>体育主播</span></div>
          </div>
        </div>
        <div class="panel-body">
          <img :src="item.mainImage" alt="">
        </div>

      </div>
    </article>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    props:{
      listData:{
        type:Array,
        default:function () {
          return [];
        }
      }
    }
  }
</script>

<style>  /*  scoped */
@import '../../assets/css/livingHot.css';

</style>
