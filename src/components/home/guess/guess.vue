<template>
	<div style="margin-top: 50px;margin-bottom: 50px;">
	  <base-news :one="news2"></base-news>
	</div>
	
</template>

<script>
	import baseNews  from "../hot/hotnews.vue"
export default{
	components:{
		baseNews
	},
	data () {
    return {
      news2: [
        {
        img: require("../../../assets/body/home/guess/guess_03.png"),
          title:"金州勇士继续保持强势,活塞生猛主场不留机会",
          top:"竞彩",
          hour:"一小时前",
          flag:true,
          font:"fonta1",
          pop:453,
          good:"0"
        },
        {
         img: require("../../../assets/body/home/guess/guess_13.png"),
          title:"国际友谊赛,冰岛以和为贵!",
          top:"竞彩",
          hour:"一小时前",
          flag:true,
          font:"fonta1",
          pop:273,
          good:"8"
        },
        {
          img: require("../../../assets/body/home/guess/guess_15.png"),
          title:"周三彩经,弗拉门戈VS克鲁赛罗,帕丘卡VS提华纳",
          top:"竞彩",
          hour:"一小时前",
          flag:true,
          font:"fonta1",
          pop:273,
          good:"8"
        },
        {
          img: require("../../../assets/body/home/guess/guess_17.png"),
          title:"【NBA常规赛推荐】 有人说NBA的历史就是胡凯交锋史",
          top:"竞彩",
          hour:"一小时前",
          flag:true,
          font:"fonta1",
          pop:273,
          good:"8"
        },
        {
          img: require("../../../assets/body/home/guess/guess_19.png"),
          title:"【周三竞彩推荐】8倍大奶奉上,看到了是缘分",
          top:"竞彩",
          hour:"一小时前",
          flag:true,
          font:"fonta1",
          pop:273,
          good:"8"
        },
        {
          img: require("../../../assets/body/home/guess/guess_21.png"),
          title:"周三009: 目标坚定 桑托斯上'马'取分",
          top:"竞彩",
          hour:"一小时前",
          flag:true,
          font:"fonta1",
          pop:273,
          good:"8"
        },
        {
          img: require("../../../assets/body/home/guess/guess_23.png"),
          title:"自古01出下盘, 今晚上赛事推荐",
          top:"竞彩",
          flag:false ,
          font:"fonta1",
          pop:273,
          good:"8"
        }
        
      ]

    }
  }
}
</script>

<style>

</style>