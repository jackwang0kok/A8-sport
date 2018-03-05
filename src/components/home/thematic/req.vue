<template>	
		<div>
				<div class="video_show" v-for="item in allvideos">
			<img :src="item.src"/>
			<div class="video_info" >
				<div class="vname" v-show="item.flag">{{item.title}}</div>
				<div class="exactFont">{{item.content}}</div>
				<div class="watchers"><img class="icon_common" src="../../../assets/common/common_06.png"><span>{{item.like}}</span></div>
				<div class="watchers"><img class="icon_common" src="../../../assets/common/common_08.png"><span >{{item.comment}}</span></div>
			</div>
		</div>
		</div>

</template>

<script>
export default{
	props:{
		allvideos:{
			type:Array,
			default:[]
		}
	}
}
</script>

<style scoped>
.video_show{
	padding:22px 24px;
}
.video_show>img{
	width: 100%;
}
.video_info{
	display:flex;
	padding-top:27px;
	padding-bottom:24px;
	border-bottom:2px solid #e5e5e5;
}
.exactFont{
	
	font-size:22px;
	color:#8C8C8C;
	position:relative;
	top:0;
	margin-right:10px;
	border-radius:4px;

}

.vname{
	height: 30px;
	padding: 0 10px 0 10px ;
	line-height: 30px;
	background: #f7c600;
	font-size:18px;
	color:#fcfdf3;
}
.watchers{
	width:100px;
	font-size:22px;
	color:#8c8c8c;
}
.icon_common{
	width:23px;
	height:22px;
	padding:0 16px;
}
</style>