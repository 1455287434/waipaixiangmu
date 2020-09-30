<template>
  <div class="index" style="position: relative">
    <el-button type="text" @click="handleFullScreen" style="z-index: 9999; position: absolute; right: 5%;top: 1%;">切换全屏</el-button>
    <div class="main-wrap" id="mainWrap">
      <dv-border-box-13 class="w100h100" style="position: relative;">
        <div class="screen-title">
          生产大数据云监控平台
          <dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />
        </div>
        <div class="screen-main">
          <div class="screen-main-item screen-main-item-l">
            <div class="main-item">
              <dv-border-box-7 id="pieSB" class="w100h100">
                <div id="myChart" class="w100h100"></div>
              </dv-border-box-7>
            </div>
            <div class="main-item">
              <dv-border-box-7 id="pieSB" class="w100h100">
                <div id="chartKH" class="w100h100"></div>
              </dv-border-box-7>
            </div>
            <div class="main-item">
              <dv-border-box-7 id="pieSB" class="w100h100">
                <div id="chartYH" class="w100h100"></div>
              </dv-border-box-7>
            </div>
          </div>
          <div class="screen-main-item screen-main-item-c">2</div>
          <div class="screen-main-item screen-main-item-r">
            <div class="main-item main-item-t">
              <dv-border-box-12 class="w100h100" style="padding: 15px; box-sizing: border-box;">
                <dv-scroll-board :config="config"  />
              </dv-border-box-12>
            </div>
            <div class="main-item main-item-c">
              <dv-border-box-12 class="w100h100" :reverse="true">dv-border-box-8</dv-border-box-12>
            </div>
            <div class="main-item main-item-b">
              <dv-border-box-12 class="w100h100">dv-border-box-8</dv-border-box-12>
            </div>
          </div>
        </div>
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      fullscreen: false,
      config: {
        header: ['公司名', '接入设备', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ],
        headerBGC: '',
        headerHeight: 20,
        columnWidth: 20
      },
      configSB: {
        data: [
          {
            name: '设备接入数',
            value: 12475
          }
        ],
        lineWidth: 10,
        radius: '50%',
        showOriginValue: true,
        activeRadius: '82%',
        color: ['#eab469']
      }
    }
  },
  mounted () {
    this.drawPieSB()
    this.drawPieKH()
    this.drawPieYH()
    // this.drawBar()
    // this.handleFullScreen()
  },
  methods: {
    // 全屏事件
    handleFullScreen () {
      const element = document.getElementById('mainWrap')
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
      this.fullscreen = !this.fullscreen
    },
    drawPieSB () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        grid: {
          left: '0',
          right: '0',
          bottom: '10%',
          top: '0'
        },
        color: ['#fd7f56'],
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: true,
            label: {
              formatter: function (param) {
                var view = '设备接入数\r\n' + '\r\n' + 12343
                return view
              },
              textStyle: {
                fontSize: 16,
                color: '#FF7F50'
              },
              show: true,
              position: 'center',
              fontSize: '16'
            },
            data: [
              { value: 12343, name: '设备接入数' }
            ]
          }
        ]
      })
      const chartsHeight = document.getElementById('pieSB').offsetHeight
      myChart.resize({ height: chartsHeight })
      window.addEventListener('resize', function () {
        const chartsHeight = document.getElementById('pieSB').offsetHeight
        myChart.resize({ height: chartsHeight })
      })
    },
    drawPieKH () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('chartKH'))
      // 绘制图表
      myChart.setOption({
        grid: {
          left: '0',
          right: '0',
          bottom: '10%',
          top: '0'
        },
        color: ['#31cefd'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: true,
            label: {
              formatter: function (param) {
                var view = '客户数\r\n' + '\r\n' + 321
                return view
              },
              textStyle: {
                fontSize: 16,
                color: '#31cefd'
              },
              show: true,
              position: 'center',
              fontSize: '16'
            },
            data: [
              { value: 12343, name: '设备接入数' }
            ]
          }
        ]
      })
      const chartsHeight = document.getElementById('pieSB').offsetHeight
      myChart.resize({ height: chartsHeight })
      window.addEventListener('resize', function () {
        const chartsHeight = document.getElementById('pieSB').offsetHeight
        myChart.resize({ height: chartsHeight })
      })
    },
    drawPieYH () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('chartYH'))
      // 绘制图表
      myChart.setOption({
        grid: {
          left: '0',
          right: '0',
          bottom: '10%',
          top: '0'
        },
        color: ['#23d28e'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: true,
            label: {
              formatter: function (param) {
                var view = '用户数\r\n' + '\r\n' + 543
                return view
              },
              textStyle: {
                fontSize: 16,
                color: '#23d28e'
              },
              show: true,
              position: 'center',
              fontSize: '16'
            },
            data: [
              { value: 12343, name: '设备接入数' }
            ]
          }
        ]
      })
      const chartsHeight = document.getElementById('pieSB').offsetHeight
      myChart.resize({ height: chartsHeight })
      window.addEventListener('resize', function () {
        const chartsHeight = document.getElementById('pieSB').offsetHeight
        myChart.resize({ height: chartsHeight })
      })
    },
    drawBar () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('barChart'))
      // 绘制图表
      myChart.setOption({
        grid: {
          left: '0',
          right: '2%',
          bottom: '21%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['本月总产量', '上月总产量'],
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          show: false,
          axisLine: {
            show: false
          }
        },
        color: ['#1bed23'],
        series: [{
          data: [120, 200],
          type: 'bar',
          label: {
            show: true, // 开启显示
            // rotate: 70, // 旋转70度
            position: 'top', // 在上方显示
            distance: 20, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
            verticalAlign: 'middle',
            textStyle: { // 数值样式
              color: '#ffff',
              fontSize: 12
            },
            itemStyle: {
              normal: {
                color: '#dddd'
              }
            },
            borderColor: '#dsadwe'
          },
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1b9ace'
              }, {
                offset: 1,
                color: '#14618f'
              }])
            }
          }
        }]
      })
      const chartsHeight = document.getElementById('barChartWrap').offsetHeight
      myChart.resize({ height: chartsHeight })
      window.addEventListener('resize', function () {
        const chartsHeight = document.getElementById('barChartWrap').offsetHeight
        myChart.resize({ height: chartsHeight })
      })
    }
  }
}
</script>

<style scoped>
.main-wrap {
  background-color: #063244;
  position: relative;
  overflow: hidden;
  padding: 5px;
}
.screen-title {
  height: 8%;
  padding-top: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /*background-color: #fff;*/
  color: #fff;
  font-size: 30px;
}
.screen-title-text {
  text-align: center;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff
}
.screen-main {
  height: 92%;
  /*background-color: red;*/
  display: flex;
  justify-content: space-between;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
}
.screen-main-item {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main-item {
  height: 31%
}
.screen-main-item-l {
  width: 25%;
  /*background-color: #fff;*/
}
.screen-main-item-c {
  width: 45%;
  /*background-color: yellowgreen;*/
}
.screen-main-item-r {
  width: 30%;
  /*background-color: green;*/
}
.main-item-b,.main-item-c {
  height: 28%;
}
.main-item-t {
  height: 40%;
}
.w100h100 {
  width: 100%;
  height: 100%;
}
.set-flex {
  display: flex;
}
</style>
