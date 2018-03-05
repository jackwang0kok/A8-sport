<template>
	<div>
		<div class="game-pre" v-for="item in content">
			<div class="game-pre-head">
				<div class="game-pre-head-p"></div>
				<span v-text="item.p1"></span>
			</div>
			<div class="game-pre-content">
				<div class="game-pre-div1">
					<span class="game-pre-span1" v-text="item.p2"></span>
					<span class="game-pre-span2" v-text="item.word1"></span>
					<div class="game-pre-div1-1">
						<div class="game-pre-div1-2" :style="'width:'+(item.present1)"></div>
						<span v-text="item.present1"></span>
					</div>
				</div>
				<div class="game-pre-div2">
					<span class="game-pre-span1" v-text="item.p3"></span>
					<span class="game-pre-span2" v-text="item.word2"></span>
					<div class="game-pre-div1-1">
						<div class="game-pre-div1-2" :style="'width:'+(item.present2)"></div>
						<span v-text="item.present2"></span>
					</div>
				</div>
			</div>
			<div class="game-bottom" v-if="item.show" :class="{'bottom1':item.onepx,'bottom2':item.twopx}">
				<div class="game-bottom-p1"></div>
				<div v-text="item.link"></div>
				<div class="game-bottom-p2"></div>
				<div v-text="item.num"></div>
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
 	.game-pre{
  		width:100%;
  		height:158px;
  		position:relative;
  	}
  	.game-pre-head-p{
  		width:16px;
  		height:17.5px;
  		background-image:url(../assets/join-img/href2_13.png);
  		background-size:16px 17.5px;
  		position:absolute;
  		top:20px;
  		left:15px;
  	}
  	.game-pre-head span{
  		font-size:15px;
  		color:#545454;
  		position:absolute;
  		top:22px;
  		left:38px;
  	}
  	.game-pre-content{
  		position:relative;
  		top:55px;
  	}
  	.game-pre-content div{
  		float:left;
  	}
  	.game-pre-div1{
  		/*width:154px;*/
  		width: 41%;
  		height:62px;
  		border:3px #dfdfdf solid;
  		margin-left:5.4%;
  		position:relative;
  	}
  	.game-pre-span1{
  		text-align:center;
  		display:block;
  		color:#000000;
  		font-size:14px;
  		margin-top:7px;
  		margin-bottom:6px;
  	}
  	.game-pre-span2{
  		text-align:center;
  		display:block;
  		color:#8c8c8c;
  		font-size:11px;
  	}
  	.game-pre-div1-1{
  		width:100%;
  		height:13.5px;
  		border-top:4px #dfdfdf solid;
  		position:absolute;
  		left:0;
  		bottom:0;

  	}
  	.game-pre-div1-1 span{
  		display:block;
  		color:#000;
  		font-size:11px;
  		/*text-align:center;*/
  		position:absolute;
  		left:42%;
  		bottom:0px;
  	}
  	.game-pre-div2{
  		/*width:154px;*/
  		width:41%;
  		height:62px;
  		border:3px #dfdfdf solid;
  		margin-left:4.4%;
  		position:relative;
  	}
  	.game-pre-div1-2{
  		background-color:#dfdfdf;
  		height:100%;
  		position:absolute;
  		left:0;
  		bottom:0;
  	}
  	.game-bottom{
  		height:35px;
  		width:88.4%;
  		position:absolute;
  		left:21px;
  		bottom:0px;
  	}
  	.bottom1{
  		border-bottom:1px #dfdfdf solid;
  	}
  	.bottom2{
  		border-bottom:2px #dfdfdf solid;
  	}
  	.game-bottom div{
  		display:inline-block;
  		float:left;
  		line-height:35px;
  		color:#8c8c8c;
  		font-size:10px;
  	}
  	.game-bottom-p1{
  		width:14.5px;
  		height:13.5px;
  		background-image:url(../assets/join-img/8_03.jpg);
  		background-size:14.5px 13.5px;
  		margin-right:4px;
  		margin-top:11px;
  	}
  	.game-bottom-p2{
  		width:14.5px;
  		height:13.5px;
  		background-image:url(../assets/join-img/2_05.jpg);
  		background-size:14.5px 13.5px;
  		margin-left:10px;
  		margin-right:4px;
  		margin-top:11px;
  	}
</style>
