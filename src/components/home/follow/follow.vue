<template>
  <div class="followInfo">
    <header class="header">
       <div class="showFollow"></div>
       <div class="showFont">无关注，不精彩！</div>
    </header>
    <section>
      <div class="showInfo">
        热门篮球球队点击关注
      </div>
      <div class="showBasePart">
        <div class="oneFloor">
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_01.png" width="23" height="23" alt="" /></div>
            <div class="baseName">勇士</div>
          </div>
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_04.png" width="23" height="23" alt="" /></div>
            <div class="baseName">骑士</div>
          </div>
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_02.png" width="23" height="23" alt="" /></div>
            <div class="baseName">火箭</div>
          </div>
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_05.png" width="23" height="23" alt="" /></div>
            <div class="baseName">雷霆</div>
          </div>
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_03.png" width="23" height="23" alt="" /></div>
            <div class="baseName">马刺</div>
          </div>
        </div>
        <div class="oneFloor">
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_09.png" width="23" height="23" alt="" /></div>
            <div class="baseName">湖人</div>
          </div>
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_06.png" width="23" height="23" alt="" /></div>
            <div class="baseName">快船</div>
          </div>
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_07.png" width="23" height="23" alt="" /></div>
            <div class="baseName">公牛</div>
          </div>
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_08.png" width="23" height="23" alt="" /></div>
            <div class="baseName">热火</div>
          </div>
          <div class="basketball">
            <div class="baseIco"><img src="../../assets/body/follow/follow_10.png" width="23" height="23" alt="" /></div>
            <div class="baseName">猛龙</div>
          </div>
        </div>
      </div>
      <div class="showHot">
        热门足球球队点击关注
      </div>
      <div class="showBasePart">
        <div class="oneFloor">
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_11.png" width="23" height="23" alt="" /></div>
            <div class="baseName">皇家马...</div>
          </div>
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_14.png" width="23" height="23" alt="" /></div>
            <div class="baseName">巴塞罗那</div>
          </div>
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_12.png" width="23" height="23" alt="" /></div>
            <div class="baseName">曼联</div>
          </div>
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_13.png" width="23" height="23" alt="" /></div>
            <div class="baseName">广州恒大</div>
          </div>
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_15.png" width="23" height="23" alt="" /></div>
            <div class="baseName">拜仁慕...</div>
          </div>
        </div>
        <div class="oneFloor">
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_17.png" width="23" height="23" alt="" /></div>
            <div class="baseName">阿森纳</div>
          </div>
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_16.png" width="23" height="23" alt="" /></div>
            <div class="baseName">切尔西</div>
          </div>
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_18.png" width="23" height="23" alt="" /></div>
            <div class="baseName">曼城</div>
          </div>
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_19.png" width="23" height="23" alt="" /></div>
            <div class="baseName">马德里</div>
          </div>
          <div class="football">
            <div class="baseIco"><img src="../../assets/body/follow/follow_20.png" width="23" height="23" alt="" /></div>
            <div class="baseName">利物浦</div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <a>关注更多球队</a>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .followInfo{
    width:100%;
    position: absolute;
    overflow: hidden;
    top:0;
    left:0;
  }
  .header{
    width:100%;
    display: flex;
    height:30px;
    padding: 18.5px 2.5% 24px 2.5%;
  }
  .showFollow{
    width: 30px;
    height: 30px;
    background: #cccccc;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .showFont{
    height: 30px;
    line-height: 30px;
    padding-left:3.7%;
    color: #a7a7a7;
    font-size: 14px;
  }
  .showInfo{
    height: 29.5px;
    color: #a7a7a7;
    font-size: 14px;
    line-height: 28.5px;
    padding-left:6.3%;
    background: #F2F2F2;
  }
  .showHot{
    height: 31px;
    color: #a7a7a7;
    font-size: 14px;
    line-height: 31px;
    padding-left:6.3%;
    background: #F2F2F2;
  }
  .showBasePart{
    height: 118.5px;
    padding: 18.5px 0 19px 0;
  }
  .oneFloor{
    display: flex;
  }
  .oneFloor:nth-of-type(1){
    margin-bottom: 35px;
  }
  .basketball,.football{
    width: 15%;
    height: 35px;
    margin:0 3%;
  }
  .baseIco{
    width: 23px;
    height: 23px;
    margin: 0 auto;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: #ffffff;
  }
  .baseName{
    margin-top:12px;
    text-align: center;
    color:#161616;
    font-size: 12px;
    white-space: nowrap;
  }
  .footer{
    height: 160px;
    background: #F2F2F2;
    color: #212121;
    padding-top: 31.5px;
  }
  .footer a{
    display: block;
    border:1px #212121 solid;
    width: 197.5px;
    height:28.5px;
    line-height:28.5px;
    text-align: center;
    margin: 0 auto;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
</style>
