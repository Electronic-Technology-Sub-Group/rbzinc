<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { userRegisterService, userLoginService } from '../../api/modules/user'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form =ref(null)
const formModel = ref({
  username: '',
  password: '',
})
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名必须是 5-10位 的字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是 6-15位 的非空字符',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是 6-15位 的非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        // 判断 value 和 当前 form 中收集的 password 是否一致
        if (value !== formModel.value.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback() // 就算校验成功，也需要callback
        }
      },
      trigger: 'blur'
    }
  ]
}

const register = async () => {
  await form.value.validate()
  await userRegisterService(formModel.value)
  alert('注册成功')
  router.push('/login')
}


</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <!-- 注册相关表单 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="name">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item> -->
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      
        <el-form-item>
          <el-button
            @click="register"
            class="button"
            type="primary"
            auto-insert-space
            style="color: white; background-color: #cbcaca; border-color: #cbcaca;"
          >
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" >
            <router-link to="/login" style="text-decoration: none">返回 →</router-link>
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

      
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  // .bg {
  //   // background: url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
  //   //   url('@/assets/login_bg.jpg') no-repeat center / cover;
  //   // border-radius: 0 20px 20px 0;
  // }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>

