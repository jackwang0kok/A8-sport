<template>
	<div>
		<div class="baseNews" v-for="item in one">
			<div class="newsImg">
				<img :src="item.img" width="230" height="120">
			</div>
			<div class="newsInfo">
				<div class="newsInfo-title"><div class="vname" v-show="item.isshow">{{item.name}}</div>{{item.title}}</div>
				<div class="userHandle">
					<div v-bind:class="item.font">{{item.top}}</div>
					<div v-show="item.flag">{{item.hour}}</div>
					<div class="commonHandle"><img src="../../../assets/common/common_06.png"><span>{{item.pop}}</span></div>
					<div class="commonHandle"><img src="../../../assets/common/common_08.png"><span>{{item.good}}</span></div>
				</div>
			</div>
			
		</div>
	</div>
	
</template>

<script>
	export default{
	props:{
		one:{
			type:Array,
			default:[]
		}
	}
}
</script>

<style>
.baseNews{
	width:100%;
	padding:20px 0 20px 0;
	display:flex;
	border-bottom:1px solid #e5e5e5;
}
.newsImg{
	width:221px;
	height:120px;
	margin-left:23px;
}
.newsImg img{
	width:221px;
}
.newsInfo{
	
}
.newsInfo-title{
	color: #1D1D1D;
	font-size:28px;
	height: 60px;
	padding-left:10px;
	padding-right:20px;
	line-height: 36px;
}
.userHandle{
	height:60px;
	line-height:76px;
	padding-top: 6px;
	text-indent:10px;
	display:flex;
}


.userHandle div:nth-of-type(2){
	color: #949494;
	font-size: 24px;
}
.userHandle div:nth-of-type(3),.userHandle div:nth-of-type(4){
	color: #8c8c8c;
	font-size: 22px;
	width: 110px;
}
.userHandle div:nth-of-type(3){
	margin-left: 24px;
}
.commonHandle img{
	width:24px;
	margin-right:8px;
	vertical-align:middle;
}
.vname{
	display: inline-block;
	height: 32px;
	padding: 0 10px 0 10px ;
	line-height: 30px;
	background: #f7c600;
	font-size:18px;
	margin-right: 10px;
	color:#fcfdf3;
}
.fonta1{
	font-size: 24px;
	color: #09a5cb;
}
.fonta2{
	font-size: 24px;
	color: #f93d39;
}
</style>