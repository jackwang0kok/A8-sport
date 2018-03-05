<template>
  <div>
  <div class="settings">
    <div class="setting-detail" v-for="item in myself" :class="{left:item.left}"><img :src="item.src"><span   class="ul-span">{{item.name}}</span>
      <p class="ul-p">{{item.content}}</p></div>
  </div>
  <div class="settings">
    <div class="setting-detail" v-for="item in myselfTwo" :class="{left:item.left}"><img :src="item.src"><span   class="ul-span">{{item.name}}</span>
      <p class="ul-p">{{item.content}}</p></div>
  </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          isShowAbout:false,
          myself:[
            {
              name:"数据排行",
              src:require("../assets/my/我_28.png"),
              content:"掌握各大球队数据资料",
              left:false
            },
            {
              name:"我的预约",
              src:require("../assets/my/我_30.png"),
              content:"掌握各大球队数据资料",
              left:true
            },
            {
              name:"设置",
              src:require("../assets/my/我_33.png"),
              content:"定义个性化服务",
              left:false
            },
            {
              name:"自定义",
              src:require("../assets/my/我_34.png"),
              content:"添加更多高清播放路线",
              left:true
            },
            {
              name:"意见反馈",
              src:require("../assets/my/我_40.png"),
              content:"定义个性化服务",
              left:false
            },
            {
              name:"分享我们",
              src:require("../assets/my/我_38.png"),
              content:"谢谢你对我们的肯定",
              left:true
            }
          ],
          myselfTwo:[
            {
              name:"足球Q群",
              src:require("../assets/my/我_47.png"),
              content:"掌握各大球队数据资料",
              left:false
            },
            {
              name:"篮球Q群",
              src:require("../assets/my/我_44.png"),
              content:"掌握各大球队数据资料",
              left:true
            },
            {
              name:"竞彩Q群",
              src:require("../assets/my/我_51.png"),
              content:"定义个性化服务",
              left:false
            },
            {
              name:"加入线路直播群",
              src:require("../assets/my/我_52.png"),
              content:"添加更多高清播放路线",
              left:true
            }
          ]
        }
      }
    }
</script>

<style>
  /*s设置*/
  .settings{
    margin-top:16px;
    width: 100%;
    height:320px;
    border-top:1px #959595 solid;
    background-color: #FFFFFF;
  }

  .left{
    border-left:1px #959595 solid;
  }
  .setting-detail{
    float:left;
    width:49%;
    height:80px;
    margin-top: 20px;
  }
  .setting-detail img{
    margin-left:10% ;
  }
  .setting-detail span{
    margin-left: 3%;
    position: relative;
    top:-10px;
    font-size:24px;
    color:#545454;
  }
  .setting-detail p{
    margin-left:10%;
    font-size:18px;
    color:#959595;
  }
</style>
