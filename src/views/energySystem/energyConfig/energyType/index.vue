<template>
  <div class="index">
    <div class="main-wrap" id="mainWrap">
<!--      <el-button @click="handleFullScreen">全屏</el-button>-->
    <div class="screen-title">123321</div>
    <div style="width: 20vw;height: 20vh;">
      <dv-border-box-1>dv-border-box-1</dv-border-box-1>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    // 全屏事件
    handleFullScreen () {
      const element = document.getElementById('mainWrap')
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>

<style scoped>
.main-wrap {
  background-color: #0c1941;
}
.screen-title {
  height: 15%;
  background-color: #fff;
}
</style>
