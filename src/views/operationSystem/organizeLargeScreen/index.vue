<template>
  <div>
<!--<div class="bg-b">
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
          <div class="flex-r-1">
            <div class="flex-r-1-1">
              <dv-border-box-9>
                <div class="flex-header-t">
                  <div class="flex-t">数设备接入</div>
                  <div class="bor-t-2"></div>
                  <div class="flex-t">1234567</div>
                </div>
              </dv-border-box-9>
            </div>
            <div class="flex-r-1-1">
              <dv-border-box-9>
                <div class="flex-header-t">
                  <div class="flex-t">数设备接入</div>
                  <div class="bor-t-2"></div>
                  <div class="flex-t">1234567</div>
                </div>
              </dv-border-box-9>
            </div>
            <div class="flex-r-1-1">
              <dv-border-box-9>
                <div class="flex-header-t">
                  <div class="flex-t">数设备接入</div>
                  <div class="bor-t-2"></div>
                  <div class="flex-t">1234567</div>
                </div>
              </dv-border-box-9>
            </div>
          </div>
          <div class="flex-r-2">
            <div class="flex-r-2-1">
            
                <div
                  :style="{ height: '100%', width: '100%' }"
                  ref="myEchart"
                ></div>
           
            </div>
          </div>
          <div class="flex-r-3">3</div>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
import "../../../../node_modules/echarts/map/js/china";
function randomValue() {
  return Math.round(Math.random() * 1000);
}
export default {
  data() {
    return {
       chart: null,
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
    beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  mounted(){
        this.chinaConfigure();
  },
   methods: {
    chinaConfigure() {
      console.log(this.userJson);
      let myChart = this.$echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      // window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        // backgroundColor: "#02AFDB",
        tooltip: {
          backgroundColor: "#4169E1",
        }, // 鼠标移到图里面的浮动提示框
        emphasis: {
          itemStyle: {
            // 高亮时点的颜色
            color: "red",
          },
          label: {
            show: true,
            // 高亮时标签的文字
          },
        },
   
        label: {
          show: true,

          //fontWeight:'bold',
          color: "#fff",
        },

        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["#093a79", "#093a79", "#093a79"],
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
            
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "#f0f2f5",
                fontSize: 10,
                fontFamily: "Arial",
              },
            },
            emphasis: {
              //动态展示的样式
              color: "#43d0d6",
                fontSize: 10,
                fontFamily: "Arial",
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "rgb(34, 17, 192)",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "scatter",
           
            coordinateSystem: "geo", // 对应上方配置
          },

          {
            name: "启动次数", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [
              { name: "南海诸岛", value: 0 },
              { name: "北京", value: randomValue() },
              { name: "天津", value: randomValue() },
              { name: "上海", value: randomValue() },
              { name: "重庆", value: randomValue() },
              { name: "河北", value: randomValue() },
              { name: "河南", value: randomValue() },
              { name: "云南", value: randomValue() },
              { name: "辽宁", value: randomValue() },
              { name: "黑龙江", value: randomValue() },
              { name: "湖南", value: randomValue() },
              { name: "安徽", value: randomValue() },
              { name: "山东", value: randomValue() },
              { name: "新疆", value: randomValue() },
              { name: "江苏", value: randomValue() },
              { name: "浙江", value: randomValue() },
              { name: "江西", value: randomValue() },
              { name: "湖北", value: randomValue() },
              { name: "广西", value: randomValue() },
              { name: "甘肃", value: randomValue() },
              { name: "山西", value: randomValue() },
              { name: "内蒙古", value: randomValue() },
              { name: "陕西", value: randomValue() },
              { name: "吉林", value: randomValue() },
              { name: "福建", value: randomValue() },
              { name: "贵州", value: randomValue() },
              { name: "广东", value: randomValue() },
              { name: "青海", value: randomValue() },
              { name: "西藏", value: randomValue() },
              { name: "四川", value: randomValue() },
              { name: "宁夏", value: randomValue() },
              { name: "海南", value: randomValue() },
              { name: "台湾", value: randomValue() },
              { name: "香港", value: randomValue() },
              { name: "澳门", value: randomValue() },
            ],
          },
        ],
      });
    },
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
   
      flex: 0.3;
    }
  }
  .flex-60 {

    flex: 0.67;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .flex-r-1 {
  
      flex: 0.2;
      display: flex;
      justify-content: start;
      .flex-r-1-1 {
        // flex: 1;
  
        flex: 1;
      }
    }
    .flex-r-2 {
   
      flex: 0.5;
      display: flex;
      justify-content: center;
      align-items: center;
      .flex-r-2-1 {
        width: 80%;
        height: 100%;
     
      }
    }
    .flex-r-3 {
      border: 1px solid black;
      flex: 0.2;
    }
  }
}
.flex-header-t {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  .flex-t {
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .bor-t-2 {
    width: 80%;
    height: 2px;
    // background: black;
    background-image: linear-gradient(
      to right,
      rgb(30, 5, 143),
      rgb(35, 32, 66)
    );
  }
}
</style>