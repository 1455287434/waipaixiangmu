<template>
  <div class="login">
    <div class="login-wrap">
      <el-button type="primary" style="width: 100%" @click="submit">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    submit () {
      this.$router.push('/selectSystem')
    }
  }
}
</script>

<style scoped>
.login {
  height: 100%;
  background: url("../../assets/login-bg.jpg") no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  /*background-color: #409EFF;*/
}
.login-wrap {
  width: 500px;
  height: 600px;
  /*background-color: #fff;*/
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  border: 2px solid #172e52;
}
</style>
