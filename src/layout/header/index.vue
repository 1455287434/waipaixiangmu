<template>
    <div class="header">
      <!--header左侧部分-->
      <div class="left-wrap">
        <img class="toggle-menu-icon" src="../../assets/images/toggle.png" :style="{transform: $store.state.isCollapse ? 'rotate(90deg)': ''}" @click="changeSide">
        <breadcrumb class="breadcrumb"/>
      </div>
      <!--header右侧部分-->
      <div class="right-wrap">
        <span @click="goBack" style="cursor: pointer;"><i class="el-icon-s-home" style="margin-right: 5px;"></i>返回系统首页 <i style="margin-left: 10px;">|</i></span>
        <fullscreen class="screen-icon"/>
        <span class="mr10">欢迎您：admin</span>
        <el-button type="text" size="mini" class="quit-btn ml10" @click="quitFn">注销</el-button>
      </div>
    </div>
</template>

<script>
import fullscreen from '../../components/fullScreen'
import breadcrumb from '../../components/breadcrumb'
export default {
  data () {
    return {
      loginData: {},
      bgBorder: 0,
      tagSelect: 0,
      skipList: [
        { color: '#001529', name: 'default' },
        { color: '#E6A23C', name: 'yellow' },
        { color: '#F56C6C', name: 'red' }
      ],
      fullscreen: false,
      options: [],
      value: sessionStorage.groupId,
      user: {},
      menu: []
    }
  },
  components: {
    fullscreen,
    breadcrumb
  },
  methods: {
    // 伸缩左侧side
    changeSide () {
      this.$store.state.isCollapse = !this.$store.state.isCollapse
    },
    goBack () {
      this.$router.replace('/selectSystem')
    },
    // 退出
    quitFn () {
      this.$confirm('是否确认退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/login')
        sessionStorage.removeItem('token')
        sessionStorage.tags = []
      }).catch(() => {})
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  line-height: 50px;
  text-align: left;
  position: relative;
  color: #333 !important;
  border-bottom: 1px solid #ededed;
  overflow: hidden;
  position: relative;
  background: #fff;
  /*box-shadow: 0 1px 4px rgba(0,21,41,.08);*/
}
.left-wrap {
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  .breadcrumb {
    height: 100%;
  }
  .h-logo {
    margin-right: 5px;
    width: 18px;
    height: auto;
  }
  .toggle-menu-icon {
    height: 24px;
  }
}
.right-wrap {
  height: 100%;
  float: right;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .screen-icon {
    margin-right: 20px;
  }
}
</style>
