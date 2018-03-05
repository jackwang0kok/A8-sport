<template>
  <div>
    <div  class="money-2">
      <router-link class="footer-tab myself"  to="/select4/myself"  active-class="myselfActive"><img src="../assets/返回统一.png" width="29px" height="52px"></router-link>
      <span>竞猜</span>
      <span>已参与</span>
    </div>
    <!--活塞VS步行者-->
          <v-one :aaa="aaa"></v-one>
    <!--维克托-奥拉迪波的得分-->
         <v-num :num1="num1"></v-num>
    <!--魔术VS尼克斯-->
   <v-one :aaa="bbb"></v-one>
      <!--阿龙-戈登的篮板数-->
      <v-two :num2="num2"></v-two>
  </div>
</template>

<script>
  import vOne from "../detail/vs-one.vue"
  import vNum from "../detail/num.vue"
  import vTwo from "../detail/vs-two.vue"
  export default{
    data(){
      return{
        isShow:true,
        aaa:{
          "name1":"活塞",
          "name2":"步行者",
          "time1":"截止",
          "time2":"11月9日",
          "time3":"08:",
          "time4":"00",
          "src1":"../src/assets/join-img/href2_06.png",
          "src2":"../src/assets/join-img/href2_08.png"
        },
        bbb:{
          "name1":"魔术",
          "name2":"尼克斯",
          "time1":"截止",
          "time2":"11月9日",
          "time3":"08:",
          "time4":"00",
          "src1":"../src/assets/join-img/href2_16.png",
          "src2":"../src/assets/join-img/href2_18.png"
        },
          "num1":[
            {
              "p1":"本场比赛维克托-奥拉迪波的得分会不会比比托...",
              "p2":"会",
              "p3":"不会",
              "word1":"(1.75)",
              "word2":"1.75",
              "present1":"23.8%",
              "present2":"76.2%",
              "link":"890",
              "num":"9",
              "show":true,
              "onepx":true,
              "twopx":false
            },
            {
              "p1":"本场比赛活塞能否赢步行者6分或者更多?",
              "p2":"会",
              "p3":"不会",
              "word1":"(1.75)",
              "word2":"1.75",
              "present1":"29.8%",
              "present2":"70.2%",
              "link":"564",
              "num":"6",
              "show":true,
              "onepx":false,
              "twopx":true
            },
            {
              "p1":"本场比赛总分能否达到211分或更多?",
              "p2":"能",
              "p3":"不能",
              "word1":"(1.75)",
              "word2":"1.75",
              "present1":"83.9%",
              "present2":"16.1%",
              "link":"890",
              "num":"9",
              "show":false,
              "onepx":false,
              "twopx":false
            }
          ],
          "num2":
            {
              "p1":"本场比赛阿龙-戈登的篮板数会不会比克里斯...",
              "p2":"会",
              "p3":"不会",
              "word1":"(1.75)",
              "word2":"1.75",
              "present1":"14.1%",
              "present2":"85.9%",
              "link":"385",
              "num":"17",
              "show":true,
              "onepx":false,
              "twopx":true
            }
        }
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    },
    components:{
      vOne,
      vNum,
      vTwo
    }
  }
</script>

<style>
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
  /*<!--维克托-奥拉迪波的得分-->*/

</style>
