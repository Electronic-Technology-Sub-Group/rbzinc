<script setup>
import { ref } from 'vue';
const input = ref('')
function handleSearch() {
  if (input.value) {
    console.log('Searching for:', input.value);
}
}
    
</script>

<template>
 <div class="search">
  <el-input v-model="input" 
  class="el-input"
  placeholder="请输入诗名，诗人名，名句进行搜索"
  @keyup.enter="handleSearch" />
 </div>
 
</template>

<style scoped lang="scss">
.search{
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  background-color: #76a7e7;
  box-sizing: border-box; 
  text-align: center;
  align-items: center
}

.el-input{
  border: 2px #aca9a9 ;
  border-radius: 50px; 
  width: 720px;
  height: 40px;
  margin: 0 auto;
}
</style>