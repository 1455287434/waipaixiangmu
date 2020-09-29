<template>
    <div class="no-authority">
      <div class="info-wrap">
        <div>
          <h1 class="mb10">您没有相应页面权限~</h1>
          <p class="set-color-blue" style="letter-spacing: .5px;font-size: 16px;">请联系管理员分配权限...</p>
        </div>
        <img src="https://panjiachen.github.io/vue-element-admin/static/img/401.089007e7.gif?1564374663924">
      </div>
    </div>
</template>

<script>
export default {
  name: 'noAuthority'
}
</script>

<style lang="scss" scoped>
.no-authority {
  height: calc(100% - 100px);
  .info-wrap {
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
