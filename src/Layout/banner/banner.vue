<script setup>

</script>

<template>
 <div class="body">
  <div class="banner">
      <router-link to="">分类</router-link>
      <router-link to="">古诗</router-link>
      <router-link to="">作者</router-link>
      <router-link to="">名句</router-link>
      <img src="../banner/pic/98903ef06c7b8f687f0dade7485098b.jpg" alt="" width="250px" height="570px" >
  </div>
 
 </div>
</template>

<style scoped lang="scss">

.banner{
  width: 250px;
  height: 810px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column; 
  a{
    text-align: center;
    line-height: 60px ;
    text-decoration: none;
    color: #0d0c0c;
    display: block;
    width: 250px;
    height: 60px;
    background-color: #fefefe;
    &:hover{
      background-color:#cbcaca ;
      text-decoration: none;
  }
}
}
</style>