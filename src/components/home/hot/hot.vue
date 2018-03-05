<template>
  <div class="hot">
  	<div class="hot_caro">
  		<img src="../../../assets/body/home/hot/home_hot_01.png">
  	</div>
  	<div class="hot_live">
  		<div class="hot_live_content">
  			<div class="live_content_title">
  				<div class="content_title">
  					<span>NBA</span>
  					<div class="basePart">
  						<img src="../../../assets/body/home/hot/home_hot_05.png">
  						骑士
  					</div>
  					<div class="basePart">
  						<img src="../../../assets/body/home/hot/home_hot_12.png">
  						雄鹿
  					</div>
  				</div>
  				<div class="content_live">
  					<span>直播中</span>
  					<div class="baseNum">
  						<div>124</div>
  						<div>119</div>
  					</div>
  				</div>
  			</div>
  		</div>
  		<div class="hot_live_content">
  			<div class="live_content_title">
  				<div class="content_title">
  					<span>NBA</span>
  					<div class="basePart">
  						<img src="../../../assets/body/home/hot/home_hot_07.png">
  						马刺
  					</div>
  					<div class="basePart">
  						<img src="../../../assets/body/home/hot/home_hot_11.png">
  						快船
  					</div>
  				</div>
  				<div class="content_live">
  					<span>直播中</span>
  					<div class="baseNum">
  						<div>52</div>
  						<div>55</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  	<div class="hot_news">
  		<div><img src="../../../assets/body/home/hot/home_hot_15.png"></div>
  		<div>
  			CBA:北京119-93大胜天津,翟晓川25-9
  		</div>
  	</div>
  	<base-news :one="news1"></base-news>
  	<base-sports></base-sports>
  	<base-news :one="news2"></base-news>
  </div>
</template>

<script>
import baseNews from './hotnews.vue'
import baseSports from "./hotsports.vue"
export default {
  components: {
    baseNews,
    baseSports
  },
data () {
    return {
    	 news1: [
        {
          img: require("../../../assets/body/home/hot/home_hot_19.png"),
          title:"【战报】骑士124-119送雄鹿四连败,字母哥空砍40+9",
          top:"置顶",
          font:"fonta2",
          pop:453,
          good:"0"
        },
        {
          img: require("../../../assets/body/home/hot/home_hot_22.png"),
          title:"【战报】双塔合砍69分,鹌鹧117-112逆转步行者取三连胜",
           top:"置顶",
           font:"fonta2",
          pop:273,
          good:"8"
        }
      ],
      news2: [
        {
          img: require("../../../assets/body/home/hot/home_hot_34.png"),
          title:"官方:中国杯明年3月南宁开打",
           top:"置顶",
           font:"fonta2",
          pop:453,
          good:"0"
        },
        {
          img: require("../../../assets/body/home/hot/home_hot_37.png"),
          title:"'琦还公',走上人生巅峰",
           top:"置顶",
           font:"fonta2",
          pop:273,
          good:"8"
        },
        {
          img:require("../../../assets/body/home/hot/home_hot_39.png"),
          title:"克劳德:赢家从不言放弃,轻言放弃绝不会赢",
          top:"置顶",
          flag:false,
          font:"fonta2",
          pop:273,
          good:"8"
        },
        {
          img: require("../../../assets/body/home/hot/home_hot_41.png"),
          title:"吉诺比利:就长期发展来说,伦纳德缺阵也是好事",
           top:"置顶",
           flag:false,
           font:"fonta2",
          pop:273,
          good:"8"
        },
        {
          img: require("../../../assets/body/home/hot/home_hot_43.png"),
          title:"耐克将为字母哥设计签名鞋,阿迪李宁曾参与争夺",
           top:"置顶",
           flag:false,
           font:"fonta2",
          pop:273,
          good:"8"
        },
        {
          img: require("../../../assets/body/home/hot/home_hot_45.png"),
          title:"小里弗斯:保罗和格里芬之间关系很奇怪,不懂谁是老大",
           top:"置顶",
           flag:false,
           font:"fonta2",
          pop:273,
          good:"8"
        }      
      ]
    }
  }
}
</script>

<style scoped>
	.hot{
		width:100%;
		box-sizing:border-box;
		margin-top: 50px;
		margin-bottom: 50px;
	}
	/* hot_caro */
	.hot_caro{
		width:100%;
	}
	.hot_caro img{
		width:100%;
	}
	/* hot_live */
	.hot_live{
		width:100%;
		height:189px;
		display:flex;	
	}
	.hot_live_content{
		width:50%;
		display:flex;
	}
	.live_content_title{
		width:100%;
		display:flex;
		padding-top:15px;
	}
	.content_title{
		width:40%;
		color:#858585;
		font-size:18px;
		padding-left:10%
	}
	.content_live{
		width:40%;
		color:#fa3c39;
		font-size:22px;
		padding-right:10%;
		text-align:right;
	}
	.basePart{
		height:50px;
		font-size:30px;
		color:#1f1f1f;
		padding-top:22px;
	}
	.basePart img{
		width:42px;
		height:39px;
		vertical-align:middle;
	}
	.baseNum div:nth-of-type(1){
		padding-top:24px;
		font-size:30px;
		color:#8c8c8c;
	}
	.baseNum div:nth-of-type(2){
		padding-top:28px;
		font-size:30px;
		color:#8c8c8c;
	}
	/* hot_news */
	.hot_news{
		background:#f2f2f2;
		width:100%;
		height:100px;
		padding:18px 0px 20px 0px;
		display:flex;
	}
	.hot_news div:nth-of-type(1){
		width:25%;
		background:#ffffff;
		padding:27px 0 27px 0px;
		text-align:right;	
		margin-left:23px;
	}
	.hot_news div:nth-of-type(1) img{
		width:57%;
	}
	.hot_news div:nth-of-type(2){
		width:70%;
		background:#ffffff;
		padding:27px 40px 10px 20px;
		margin-right:23px;
		font-size:28px;
		color:1e1e1e;
	}
</style>
