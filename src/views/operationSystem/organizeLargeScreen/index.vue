<template>
  <div>
    <div class="bg-b">
      <div class="pong-size">
        <dv-border-box-10>
          <div class="center-s">
            <div class="center">组织大屏</div>
          </div>
        </dv-border-box-10>
      </div>
      <div class="row-flex">
        <div class="flex-35">
          <div class="content-f">
            <dv-scroll-board :config="config" />
          </div>
          <div class="content-f">
            <dv-scroll-board :config="config" />
          </div>
          <div class="content-f">
            <dv-scroll-board :config="config" />
          </div>
        </div>
        <div class="flex-60">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        header: ["列1", "列2", "列3"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.pong-size {
  width: 300px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.center-s {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-b {
  background: rgb(47, 6, 80);
  height: 100%;
}
.row-flex {
  display: flex;
  justify-content: center;
  height: calc(100% - 70px);
  .flex-35 {
    flex: 0.3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content-f {
      border: 1px solid black;
      flex: 0.3;
    }
  }
  .flex-60 {
    background: rgb(34, 17, 192);
    flex: 0.67;
  }
}
</style>