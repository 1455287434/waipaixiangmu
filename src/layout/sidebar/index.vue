<template>
    <div class="sidebar">
      <div class="sidebar-title">
        <div class="left-item-wrap" :class="{'set-logo-bg': !isCollapse}" v-if="!isCollapse">
          <p class="system-name">ESINT</p>
          <!--<img src="../../assets/companyLogo.png">-->
        </div>
        <div class="sidebar-title-icon" style="" v-if="isCollapse">
          <img src="../../assets/images/s-logo.png" style="width: 30px;">
        </div>
      </div>
      <!--菜单部分-->
      <el-menu
        :unique-opened="true"
        :default-active="$route.path"
        class="el-menu-vertical-demo sidebar-menu"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#fff"
        :collapse="isCollapse"
        :collapse-transition="true"
        :router="true">
        <el-submenu v-show="item.children.length > 0" :index="item.url" v-for="(item, index) in menuList" :key="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item v-show="v.children.length === 0" :index="v.url" v-for="(v, i) in item.children" :key="i">
            <i class="el-icon-location"></i>
            <span slot="title">{{v.title}}</span>
          </el-menu-item>
          <el-submenu v-show="n.children.length > 0" :index="n.url" v-for="(n, f) in item.children" :key="f">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{n.title}}</span>
            </template>
            <el-menu-item :index="d.url" v-for="(d, m) in n.children" :key="m">
              <i class="el-icon-location"></i>
              <span slot="title">{{d.title}}</span>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item v-show="item.children.length === 0" :index="item.url" v-for="(item, index) in $store.state.menu" :key="index">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      setBtnColor: '#'
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    },
    menuList () {
      return JSON.parse(sessionStorage.menuList)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  transition: all .2s;
  background: #304156;
}
.sidebar-menu {
  width: 100% !important;
}
.sidebar-title {
  height: 50px;
  background: #2b2f3a;
  .left-item-wrap {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center;*/
    box-sizing: border-box;
    width: 220px;
    overflow: hidden;
    margin-right: 10px;
    transition: all .3s;
    background-color: #2b2f3a;
    color: #fff;
  }
}
.sidebar-title-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgba(255,255,255,.1);
}
.system-name {
  color: #fff;
  text-align: center;
  &:first-child {
    font-size: 13px;
    height: 18px;
    line-height: 18px;
  }
  &:last-child {
    font-size: 20px;
  }
}
.font-color {
  color: #bfcbd9;
  margin-right: 15px;
  font-size: 20px;
}
</style>
