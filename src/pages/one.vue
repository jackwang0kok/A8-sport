<template>
  <div>
    <div  class="money-1">
      <!-- 使用 $router.go(-1)试一试 -->
      <a @click="$router.go(-1)" class="footer-tab myself"   active-class="myselfActive"><img src="../assets/返回统一.png" width="29px" height="52px"></a>
      <span>金币明细</span>
    </div>
    <table border="1" cellspacing="0.5">
      <tr>
        <th style="background-color: #ea6200">日期</th>
        <th style="background-color: #83cdc9">操作</th>
        <th style="background-color: #00a1e7">变更</th>
        <th style="background-color: #f09148">剩余</th>
      </tr>
      <tr>
        <td>12:33<br><span class="spciel">今天</span></td>
        <td>任务</td>
        <td>+1000</td>
        <td style="color: #ff1645">1100</td>
      </tr>
      <tr>
        <td>15:39<br><span class="spciel">昨天</span></td>
        <td>新用户</td>
        <td>+100</td>
        <td  style="color: #ff1645">100</td>
      </tr>
    </table>
  </div>
</template>

<script>

  export default {

  }
</script>

<style>
  /*第一个页面*/
  .money-1{
    display: flex;
    width: 100%;
    height:132px;
    line-height: 132px;
    text-align: center;
  }
  .money-1 img{
    margin-top: 55px;
    margin-left: 40px;
  }
  .money-1 span{
    color:#a7a7a7;
    font-size:28px;
    margin-top: 15px;
    margin-left: 250px;
  }
  table{
    width: 100%;
    height:286px;
    border:none;
  }
  tr{
    width: 100%;
  }
  table th{
    width:25%;
    height:98px;
    text-align: center;
    color: #ede2de;
    font-size: 30px;
    margin: 0 3.75%;
  }
  table td{
    width:184px;
    height:94px;
    border:3px #CACACA solid;
    text-align: center;
    color:#6f6f6f;
    font-size:30px;
    font-weight:bold;
  }
  .spciel{
    font-size:20px;
  }
</style>
