<template>
	<div>
		<div class="dialog-wrap">
			<div class="dialog-cover" v-if="isShow"></div>
			<transition name="drop">
				<div class="dialog-content" v-if="isShow">
          <span class="content-span">账号登录</span><br>
          <img  class="img-login" src="../../assets/login/登录_06.png">
          <img  class="img-login" src="../../assets/login/登录_08.png">
          <img  class="img-login" src="../../assets/login/登录_03.png">
          <span class="login">QQ登录</span><span  class="login">微信登录</span><span class="login">微博登录</span>
					<p class="dialog-close"  @click="closeMyself">取消</p>
          <img class="img-last" src="../../assets/login/bg.png" alt="">
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
    methods:{
      closeMyself(){
        this.$emit("on-close")
      }
    }
	}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
  position: absolute;
  width: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width:50% ;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 40%;
  margin-right: 25%;
  margin-left: -25%;
  z-index: 10;
  padding: 10%;
  line-height: 1.6;
  border-radius:10px ;
}
.dialog-close{
  color:#ccc;
  margin-top: 30px;
}
.dialog-close:hover {
  color: #4fc08d;
}
  .content-span{
    font-size:30px;
    color:#000000;
  }
.img-login{
   display: inline-block;
  margin-top: 60px;
  margin-left:5%;
}
  .login{
    display: inline-block;
    margin-top: 20px;
    margin-left:25px;
    margin-right: 25px;
    font-size: 20px;
  }
.img-last{
  width:80px;
  height:80px;
  display: flex;
  position:absolute;
  bottom:0;
  right: 0;
}
</style>
