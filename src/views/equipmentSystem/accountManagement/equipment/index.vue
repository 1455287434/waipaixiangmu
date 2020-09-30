<template>
  <div>
    <!-- <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
    <div id="main"></div>-->

    <div class="echarts">
      <div :style="{ height: '400px', width: '100%' }" ref="myEchart"></div>
    </div>
  </div>
</template>

<script>
import "../../../../../node_modules/echarts/map/js/china";
function randomValue() {
  return Math.round(Math.random() * 1000);
}
export default {
  name: "hello",
  data() {
    return {
      chart: null,
    };
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  mounted() {
    this.chinaConfigure();
    // this.drawLine();
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
              areaColor: "red",
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
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#main {
  width: 600px;
  height: 450px;
  margin: 150px auto;
  border: 1px solid #ddd;
  color: rgba(0, 0, 0, 0.5);
}
</style>