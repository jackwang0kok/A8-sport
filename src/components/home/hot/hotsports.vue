<template>
	<div class="sports-body">
		<div class="sports-head">
			<div class="sports-head-left"> <span></span> <span>体育主播</span></div>
			<div class="sports-head-right">查看更多 > </div>
		</div>
		<div class="sports-content">			
			<div class="sports-content-item">
				<div class="sports-content-item-img">
				<img src="../../../assets/body/home/hot/home_hot_24.png" width="100%"/>
				</div>
				<div class="sports-title">
					<div>
						<span>等你吃鸡</span>
						<span></span>
					</div>
					<p>没有标题也很精彩哦</p>
				</div>
			</div>
			
			<div class="sports-content-item">
				<div class="sports-content-item-img">
				<img src="../../../assets/body/home/hot/home_hot_26.png" width="100%"/>
				</div>
				<div class="sports-title">
					<div>
						<span>垂钓小助手</span>
						<span></span>
					</div>
					<p>没有标题也很精彩哦</p>
				</div>
			</div>
			
			<div class="sports-content-item">
				<div class="sports-content-item-img">
				<img src="../../../assets/body/home/hot/home_hot_28.png" width="95%"/>
				</div>
				<div class="sports-title">
					<div>
						<span>乒羽小助手</span>
						<span></span>
					</div>
					<p>没有标题也很精彩哦</p>
				</div>
			</div>
			
			<div class="sports-content-item">
				<div class="sports-content-item-img">
				<img src="../../../assets/body/home/hot/home_hot_28.png" width="95%"/>
				</div>
				<div class="sports-title">
					<div>
						<span>乒羽小助手</span>
						<span></span>
					</div>
					<p>没有标题也很精彩哦</p>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default {
	
}
</script>

<style>
	/*去除滚动条*/
	::-webkit-scrollbar{
		display: none;
	}
	.sports-body{
		width: 100%;
		height: 423px;
		background: #F7F7F7;
	}
	.sports-head{
		height: 30px;
		padding: 20px 22px;
	}
	.sports-head-left{
		float: left;
		height: 30px;
		font-size: 30px;
		color: #1E1E1E;
		
	}
	.sports-head-left span:nth-of-type(1){
		display: inline-block;
		width: 7px;
		height: 30px;
		background: #F9C300;
	}
	.sports-head-right{
		float: right;
		font-size: 24px;
		color: #969696;
	}
	.sports-content{
		height: 330px;
		display: flex;
		overflow: auto;
		padding-left: 10px ;
	}
	.sports-content-item{
		width: 273px;
		margin-left: 16px;
		display: inline-block;
	}
	.sports-content-item-img{
		width: 273px;
		height: 243px;
	}
	.sports-title{
		width:260px ;
		height: 80px;
		padding-top:8px ;
		padding-left: 14px;
		background: #FFFFFF;
	}
	.sports-title div span:nth-of-type(1){
		font-size: 23px;
		color: #1F1F1F;
		display: inline-block;
	}
	.sports-title div span:nth-of-type(2){
		width: 23px;
		height: 23px;
		display: inline-block;
		background-image: url("../../../assets/body/home/hot/home_hot_31.png") ;
		background-size:23px 23px;
	}
	.sports-title p{
		height: 20px;
		margin-top: 13px;
		font-size: 20px;
		color: #A3A3A3;
	}

</style>