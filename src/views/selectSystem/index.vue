<template>
  <div class="select-system">
    <div class="select-system-wrap">
      <h1 class="title">云拓设备云平台</h1>
      <div class="sys-item-wrap">
        <router-link to="/energySystem">
          <div>
            <i class="iconfont icon-nengyuan1"></i>
            <p>能源管理系统</p>
          </div>
        </router-link>
        <router-link to="/equipmentSystem">
          <div>
            <i class="iconfont icon-shebei"></i>
            <p>设备管理系统</p>
          </div>
        </router-link>
        <router-link to="/operationSystem">
          <div>
            <i class="iconfont icon-yuancheng"></i>
            <p>远程运维系统</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.select-system {
  height: 100%;
  background-color: #172134;
}
.select-system-wrap {
  //width: 800px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  font-size: 70px;
  background-image:-webkit-linear-gradient(bottom,#11466d,#20c2de,#25dbd3);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  text-align: center;
}
.sys-item-wrap {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  div {
    border: 1px solid #28e3f9;
    width: 280px;
    height: 400px;
    cursor: pointer;
    //border-radius: 4px;
    background: rgba(40,227,249, .05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      box-shadow: 0 0 10px 2px #28e3f9;
      transition: all .5s;
      .iconfont {
        transform: scale(1.2);
        transition: all .5s;
      }
    }
    p {
      width: 180px;
      font-size: 25px;
      font-weight: bold;
      color: #fff;
      margin-top: 50px;
      border-top: 1px solid #28e7ea;
      border-bottom: 1px solid #28e7ea;
      padding: 10px 0;
      box-sizing: border-box;
      text-align: center;
    }
  }
}
.iconfont {
  font-size: 130px;
  color: #28e7ea;
}
</style>
