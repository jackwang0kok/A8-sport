<template>
	<div style="margin-top: 50px;margin-bottom: 50px;">
		<all-video :allvideos="video"></all-video>
	</div>
</template>

<script>
	import allVideo from "../thematic/req.vue"
export default{
	components:{
				allVideo
			},
	  data () {
	    return {
	      video: [
	        {
	        	src:require("../../../assets/body/home/video/video_03.png"),
	         	content:"半小时前",
	         	like:273,
	         	comment:0,
	         	flag:false,
	         	title:"体育专场"
	
	        },
	        {
	          src: require("../../../assets/body/home/video/video_06.png"),
	          content:"半小时前",
	          like:196,
	          comment:"8",
	          flag:false,
	          
	        },
	        {
	          src: require("../../../assets/body/home/video/video_08.png"),
	          content:"一小时前",
	          like:354,
	          comment:"150",
	          flag:false,
	          
	        },
	        {
	          src:require("../../../assets/body/home/video/video_10.png"),
	          content:"一小时前",
	          like:384,
	          comment:"10",
	           flag:false,
	        },
	        {
	          src: require("../../../assets/body/home/video/video_12.png"),
	          content:"两小时前",
	          like:654,
	          comment:"540",
	           flag:false,
	        },
	        {
	          src: require("../../../assets/body/home/video/video_14.png"),
	          content:"两小时前",
	          like:354,
	          comment:"850",
	           flag:false,
	        }
	      ]
	
	    }
	  }
}
</script>

<style scoped>
.video_show{
	padding:11px 12px;
}
.video_show>img{
	width: 100%;
}
.video_info{
	display:flex;
	padding-top:13.5px;
	padding-bottom:12px;
	border-bottom:1px solid #e5e5e5;
}
.exactFont{
	padding:3px 4px;
	font-size:9px;
	color:#8C8C8C;
	position:relative;
	top:-3px;
	margin-right:5px;
	border-radius:2px;
}

.vname{
	font-size:12px;
	color:#8c8c8c;
}
.watchers{
	width:50px;
	font-size:10px;
	color:#8c8c8c;
}
.icon_common{
	width:11.5px;
	height:11px;
	padding:0 8px;
}
</style>