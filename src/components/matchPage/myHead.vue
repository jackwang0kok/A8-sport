<template>
  <div>
    <header>
      <ul class="header-list-group">
        <li v-for="(item,index) in headData" class="header-list-item">
          <router-link  @click.native="nowClick(index)"  active-class="active" :to="{path: '/'+headType+'/page'+index}" >{{ item }}</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
    export default {
      props:{
        headData:{
          type:Array,
          default:function () {
            return [];
          }
        },
        headType:{
          type:String,
          default:'match'
        }
      },
      data:function () {
        return{

        }
      },
      methods:{
        nowClick:function (index) {
          console.log(index);
          this.$emit('currentIndex',index)
        }
      }
    }
</script>

<style>  /*  scoped */

</style>
