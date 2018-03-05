<template>
  <footer>
    <ul>
      <li v-for="(item,index) in footData">
        <router-link tag="div" :to="`/select`+index">
          <img v-if="index===Math.floor($route.name-0)" :src="item.src[1]" alt="">
          <img v-else :src="item.src[0]" alt="">
          <p> {{ item.name }} </p>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    props: {
      footData: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    mounted:function (){
      this.iNow=this.$route.index
    },
    data: function () {
      return {
        iNow: this.$route.index,
      }
    },
  }
</script>

<style>  /*  scoped */
footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
</style>
