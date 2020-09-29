<template>
  <div class="home">
    <div class="side-wrap" :style="{'width': mainWidth?'65px':'200px'}">
      <sidebar></sidebar>
    </div>
    <div class="main" :style="{'left': mainWidth?'65px':'200px'}">
      <Header></Header>
      <div class="tag-wrap" v-if="$store.state.switchType">
        <tag></tag>
      </div>
      <transition name="fade-transform" mode="out-in">
        <!--<router-view :key="key" />-->
        <router-view class="view-wrap" :key="key" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './header/index'
import sidebar from './sidebar/index'
import tag from '../components/tags/index'
export default {
  name: 'home',
  components: {
    Header,
    sidebar,
    tag
  },
  computed: {
    key () {
      return this.$route.path
    },
    mainWidth () {
      return this.$store.state.isCollapse
    }
  }
}
</script>

<style scoped>
.home {
  height: 100%;
}
.side-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transition: all .3s;
  overflow-y: auto;
}
.main {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  overflow-y: auto;
  transition: all .3s;
  min-width: 824px;
}
.tag-wrap {
  margin-bottom: 10px;
  height: 25px;
}
.view-wrap {
  padding: 10px;
  box-sizing: border-box;
  height: calc(100% - 90px);
}
</style>
