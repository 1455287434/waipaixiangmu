<template>
  <div>
    <transition name="fade-transform" mode="out-in">
      <el-breadcrumb class="app-breadcrumb" separator="/">
        <el-breadcrumb-item :to="{path: routerName.path}">{{routerName.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    routerName () {
      return this.$route.meta
    }
  }
}
</script>

<style scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    color: #fff !important;
  }
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
</style>
