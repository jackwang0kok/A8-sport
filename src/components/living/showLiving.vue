<template>
  <div class="imgGroup">
    <div class="img-item" v-for="item in listData">
      <div class="img-main">
        <img :src="item.src" alt="">
      </div>
      <div class="caption">
        <div class="img-title"><span  v-html="item.imgTitle"></span><img src="../../assets/living/v.png" alt=""></div>
        <div>
           <p class="map">{{ item.map }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    },
    components: {},
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
@import "../../assets/css/imgGroup.css";

</style>
