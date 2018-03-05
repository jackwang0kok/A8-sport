<template>
	<div style="margin-top: 50px;margin-bottom: 50px;">
		<div class="video_show" v-for="item in products">
			<img :src="item.img" />
			<div class="video_info">
				<p>{{item.content}}</p>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				products: [{
						img: require("../../../assets/body/home/highlights/high_07.png"),
						content: "利拉德状态不佳麦科勒姆失绝杀  灰熊98-97开拓者"
					},
					{
						img: require("../../../assets/body/home/highlights/high_09.png"),
						content: "兰多夫18+8威少20+12国王主场逆转雷霆止住7连败"
					}, {
						img: require("../../../assets/body/home/highlights/high_11.png"),
						content: "约基奇得分新高41+12掘金主场112-104撕破篮网"
					}, {
						img: require("../../../assets/body/home/highlights/high_13.png"),
						content: "内线失守快船遭遇连败  阿德25分助马刺三连胜"
					}, {
						img: require("../../../assets/body/home/highlights/high_15.png"),
						content: "波神28分连进关键球实现逆转 黄蜂113-118尼克斯"
					}, {
						img: require("../../../assets/body/home/highlights/high_17.png"),
						content: "德罗赞24分瓦兰21+10波蒂斯21+13猛龙险胜公牛"
					}
				]

			}
		}
	}
</script>

<style>
	.video_show {
		padding: 22px 24px;
	}
	
	.video_show>img {
		width: 100%;
	}
	
	.video_info {
		display: flex;
		padding-top: 27px;
		padding-bottom: 24px;
		border-bottom: 2px solid #e5e5e5;
	}
</style>