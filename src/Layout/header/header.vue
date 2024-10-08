<script setup>

</script>

<template>
 <div class="body">
    <div class="tleader">
        <div class="leader">
            <div class="left"><strong>古韵传习堂</strong></div>
            <div class="right">
                <a href="">首页</a>
                <a href="">书阁</a>
                <a href="">AI学习</a>
                <a href="">登录/注册</a>
            </div>
        </div>
    </div>
 </div>
 
</template>

<style scoped lang="scss">
@mixin block(){
  margin: 0 auto;
}

.tleader
{
  width: 1200px;
  height: 90px;
  background-color: #f3f3f3;
  color: black;
  box-shadow: 0 4px 8px rgba(218, 217, 217, 0.568);
}


.body{
  width: 1200px;
  height: 900px;
  background-color: aqua;
  @include block();
} 

.leader{
  display: flex;
  width: 1200px;
  height: 90px;
  // background-color: #ed85e9;
  justify-content: space-between;
  @include block();
  .left{
    width: 250px;
    height: 90px;
    // background-color: #68d792;
    color: #aca9a9;
    text-align: center;
    line-height: 90px ;
    font-size: 30px;
  }
  .right{
    width: 800px;
    height: 90px;
    // background-color: #965959;
    display: flex;
    a{
      text-align: center;
      line-height: 90px ;
      text-decoration: none;
      color: #0d0c0c;
      display: block;
      width: 200px;
      height: 90px;
      &:hover{
        background-color:#cbcaca ;
        text-decoration: none;
      }
    }
  }
}
</style>