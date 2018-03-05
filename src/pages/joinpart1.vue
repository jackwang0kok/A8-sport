<template>
	<div>
		<div class="game" v-for="item in content">
			<div class="game-1">
				<div class="game-p1"><img :src="item.src1"/></div>
				<span v-text="item.name1"></span>
			</div>
			<div class="game-2">
				<div class="game-p2">NBA</div>
				<span>VS</span>
				<p>
					<span v-text="item.time1"></span>
					<span v-text="item.time2"></span>
					<span v-text="item.time3"></span>
					<span v-text="item.time4"></span>
				</p>
			</div>
			<div class="game-3">
				<div class="game-p3"><img :src="item.src2"/></div>
				<span v-text="item.name2"></span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		content:{
			type:Array,
			default:[]
		}
	}
}
</script>

<style>
.game{
	width:100%;
	height:100px;
	border-bottom:1px #d2d2d2 solid;
	position:relative;
}
.game-p1{
	width:43.5px;
	height:41px;
	position:absolute;
	top:20px;
	left:34px;
}
.game-p1 img{
	width:43.5px;
	height:41px;
}
.game-p11{
	width:43.5px;
	height:41px;
	background-image:url(../assets/join-img/href2_16.png);
	background-size:43.5px 41px;
	position:absolute;
	top:20px;
	left:34px;
}
.game-1 span{
	font-size:15px;
	color:#8f8f8f;
	position:absolute;
	left:40px;
	bottom:10px;
}
.game-2{
	height:100%;
	width:32%;
	text-align:center;
	position:absolute;
	left:33.4%;
}
.game-p2{
	width:50%;
	height:20.5px;
	background-color:#515151;
	border-radius:0 0 10px 10px;
	margin-left:23%;
	color:#d2d2d2;
}
.game-2>span:nth-of-type(1){
	display:block;
	margin-top:17.5px;
	margin-bottom:8px;
}
.game-2 p{
	font-size:12px;
	color:#8f8f8f;
}
.game-p3{
	width:44px;
	height:42px;
	position:absolute;
	right:33.5px;
	top:20px;
}
.game-p3 img{
	width:44px;
	height:42px;
}
.game-p33{
	width:44px;
	height:42px;
	background-image:url(../assets/join-img/href2_18.png);
	background-size:44px 42px;
	position:absolute;
	right:33.5px;
	top:20px;
}
.game-3 span{
	font-size:15px;
	color:#8f8f8f;
	position:absolute;
	right:35px;
	bottom:10px;
}
</style>
