<template>
		<div>

				<div class="thematic">
					<div class="thematic-content">
					   <div class=" thimg">
					   		<img src="../../../assets/body/home/thematic/them_03.png" style="width: 100%;height: 140px;"/>
					   		<span>篮球实战教学</span>
					   </div>
					    <div class="thematic-content-img thimg">
					   		<img src="../../../assets/body/home/thematic/them_05.png" style="width: 100%;height: 140px;"/>
					   		<span>模仿帝</span>
					   </div>
					    <div class="thematic-content-img thimg">
					   		<img src="../../../assets/body/home/thematic/them_07.png" style="width: 100%;height: 140px;"/>
					   		<span>脚踝终结者</span>
					   </div>


				</div>
				<ul class="slide-pages">
					    <li class="active"></li>
					    <li class="blur"></li>
					    <li class="blur"></li>
					    <li class="blur"></li>
  				 </ul>

		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	.thematic{
	margin-top:0 ;
	position: relative;
	background: #FFFFFF;
	}
	.thematic-content{
		margin: 32px auto;
		margin-bottom: 0;
		width: 88%;
		height: 190px;
		display: flex;
		position:relative;
		overflow: hidden;
		/*margin: 16px 23px 0 16px;*/
	}
	.thimg{
		display: inline-block;
		 width: 30%;
		 height: 186px;
		 border:2px #d2d2d2 solid;
	}
	.thematic-content-img{
		 	margin-left: 19px;
	}
	.thimg span{
		display: inline-block;
		width: 100%;
		height: 46px;
		font-size: 24px;
		line-height: 40px;
		text-align: center;
	}
	.slide-pages{
		display: inline-block;
		position:relative;
		left:50%;
		margin-left:-60px;

	}
	.slide-pages li {
	  float: left;
	  width: 13px;
	  height: 13px;
	  list-style-type:none ;

	  border-radius: 14px;

	  line-height: 0;
	  margin: 20px 8px 10px 8px;
	}
	.active{
		background: black;
	}
	.blur{
		background: #DEDEDE;
	}
</style>
