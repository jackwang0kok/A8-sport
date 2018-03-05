<template>
	<div>
		<div style="background: #EEEEEE;margin-top: 50px;margin-bottom: 50px;">			
			<slide-show></slide-show>
				<div class="thematic-body">
					<div class="thematic-title">
						最近更新
					</div>
					<div class="themtic-new">
						NEW
					</div>
				</div>	
		</div>
			<them-video :allvideos="themtic1"></them-video>
			<base-news :one="news1"></base-news>
			<them-video :allvideos="themtic2"></them-video>
			<base-news :one="news2"></base-news>
		
	</div>	
</template>

<script>
	import themVideo from "./req.vue"
	import slideShow from "./slideshow.vue"
	import baseNews from "../hot/hotnews.vue"
		export default {
			components:{
				themVideo,
				baseNews,
				slideShow
			},
			data () {
			    return {
					themtic1:[
					{
						 	src:require("../../../assets/body/home/thematic/them_13.png"),
				         	content:"8小时前",
				         	like:800,
				         	comment:4,
				         	flag:true,
				         	title:"体育秀场"
					}
				   ],
				    news1: [
					 {
					          img: require("../../../assets/body/home/thematic/them_16.png"),
					          title:"国际友谊赛,冰岛以和为贵!",
					           top:"竞彩",
					           flag:false,
					           isshow:true,
					           name:"狗哥看盘",
					            font:"fonta1",
					          pop:453,
					          good:"0"
					        },
					        {
					          img: require("../../../assets/body/home/thematic/them_19.png"),
					          title:"周三009: 目标坚定 桑托斯上'马'取分",
					           top:"竞彩",
					           flag:false,
					           isshow:true,
					           name:"一壶米",
					           font:"fonta1",
					          pop:699,
					          good:"8"
					        },
					         {
					          img: require("../../../assets/body/home/thematic/them_21.png"),
					          title:"开奖公告: 现金大奖究竟花落谁家,5位幸运儿已经诞生",
					           top:"竞彩",
					           flag:false,
					           isshow:true,
					           name:"活动专区",
					           font:"fonta1",
					          pop:890,
					          good:"8"
					        }
					 ],
					 themtic2:[
					{
						 	src:require("../../../assets/body/home/thematic/them_23.png"),
				         	content:"昨天07:29",
				         	like:755,
				         	comment:9,
				         	flag:true,
				         	title:"天下足球"
					},
					{
						 	src:require("../../../assets/body/home/thematic/them_25.png"),
				         	content:"昨天09:15",
				         	like:899,
				         	comment:50,
				         	flag:true,
				         	title:"天下足球"
					}
				   ],
				    news2: [
					 {
					          img: require("../../../assets/body/home/thematic/them_27.png"),
					          title:"掘金篇: 米尔赛普来投   锋线崛起",		     
					           flag:true,
					           hour:"5小时前",
					           isshow:true,
					           name:"NBA巡礼",
					           font:"fonta1",
					          pop:200,
					          good:"9"
					        },
					        {
					          img: require("../../../assets/body/home/thematic/them_30.png"),
					          title:"射手本色: 莱万多夫斯基的足球之路(下)",
					           top:"深度",
					           flag:true,
					           hour:"5小时前",
					           isshow:true,
					           name:"翻译官",
					           font:"fonta1",
					          pop:273,
					          good:"8"
					        },
					         {
					          img: require("../../../assets/body/home/thematic/them_32.png"),
					          title:"枪手战蓝月亮: 同传控足球不同流派的碰撞",
					           top:"复盘",
					           flag:true,
					           hour:"6小时前",
					           font:"fonta1",
					          pop:375,
					          good:"96"
					        }
					 ]
				}
			  }
		}
</script>

<style>

.thematic-body{
height: 120px;
background: #FFFFFF;
margin-top:13px ;

}

.thematic-title{
	width: 254px;
	height: 64px;
	border-bottom:2px #202020 solid ;
	font-size: 30px;
	color: #202020;
	margin: 0 auto;
	text-align: center;
	line-height: 80px;
}
.themtic-new{
	width: 254px;
	height: 58px;
	color:#f23a28;
	font-size: 24px;
	margin: 0 auto;
	text-align: center;
	line-height: 40px;
}
</style>
