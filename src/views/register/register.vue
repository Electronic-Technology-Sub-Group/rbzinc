<script setup>
import { User, Lock } from '@element-plus/icons-vue'
</script>

<template>
  
<div>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="请输入用户名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="请输入账号">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="请输入姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="请输人电话号码">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="form.region" placeholder="请选择性别">
      <el-option label="区域一" value="男"></el-option>
      <el-option label="区域二" value="女"></el-option>
    </el-select>
  </el-form-item>
 
</el-form>
</div>
</template>

<style lang="scss" scoped>
//  export default {
//     data() {
//       return {
//         form: {
//           name: '',
//           region: '',
//           date1: '',
//           date2: '',
//           delivery: false,
//           type: [],
//           resource: '',
//           desc: ''
//         }
//       }
//     },
//     methods: {
//       onSubmit() {
//         console.log('submit!');
//       }
//     }
//   }
</style>

