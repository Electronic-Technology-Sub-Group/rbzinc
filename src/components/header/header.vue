<script setup>

</script>

<template>
    <div class="tleader">
        <div class="leader">
            <div class="left"><strong>古韵传习堂</strong></div>
            <div class="right">
                <router-link to="/">首页</router-link>
                <router-link to="/layout/banner">书阁</router-link>
                <router-link to="">AI学习</router-link>
                <router-link to="/login">登录/注册</router-link>
            </div>
        </div>
    </div>
 
</template>

<style scoped lang="scss">
// @mixin block(){
//   margin: 0 auto;
// }

.tleader
{
  width: 1200px;
  height: 90px;
  background-color: #f3f3f3;
  color: black;
  box-shadow: 0 4px 8px rgba(218, 217, 217, 0.568);
  margin: 0 auto;
}

.leader{
  display: flex;
  width: 1200px;
  height: 90px;
  justify-content: space-between;
  .left{
    width: 250px;
    height: 90px;
    color: #aca9a9;
    text-align: center;
    line-height: 90px ;
    font-size: 30px;
  }
  .right{
    width: 800px;
    height: 90px;
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