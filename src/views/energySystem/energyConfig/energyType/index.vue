<template>
  <div class="index" style="position: relative">
    <el-button type="text" @click="handleFullScreen" style="z-index: 9999; position: absolute; right: 5%;top: 1%;">切换全屏</el-button>
<div class="index">
    <div class="main-wrap" id="mainWrap">
      <!--表头部分-->
      <div class="screen-title set-flex">
        <div class="screen-title-l">
          <dv-decoration-8 class="w100h100"/>
        </div>
        <div class="screen-title-c">机械大数据监控平台</div>
        <div class="screen-title-r">
          <dv-decoration-8 :reverse="true" class="w100h100"/>
        </div>
      </div>
      <!--中间部分-->
      <div class="screen-center set-flex">
        <div class="screen-center-item">
          <dv-border-box-11 title="生产指数">
            <div class="screen-center-item-main">
              <dv-decoration-9 style="width:23vh;height: 23vh;">
                <div class="text-center">
                  <p class="set-p">实际开机率</p>
                  <p class="set-big-text">90</p>
                  <p class="set-p">%</p>
                </div>
              </dv-decoration-9>
            </div>
            <div class="screen-center-item-des set-flex">
              <div class="center-item-des">
                <dv-border-box-10>
                  <div class="w100h100 set-flextext-center">
                    <p class="set-p mb10">昨日开机率</p>
                    <h2 class="set-big-text">58.43%</h2>
                  </div>
                </dv-border-box-10>
              </div>
              <div class="center-item-des">
                <dv-border-box-10>
                  <div class="w100h100 set-flextext-center">
                    <p class="set-p mb10">昨日开机率</p>
                    <h2 class="set-big-text">58.43%</h2>
                  </div>
                </dv-border-box-10>
              </div>
            </div>
          </dv-border-box-11>
        </div>
        <div class="screen-center-item">
          <dv-border-box-11 title="产量统计">
            <div class="screen-center-item-main">
              <dv-decoration-9 style="width:23vh;height: 23vh;">
                <div class="text-center">
                  <p class="set-p">今日产量</p>
                  <p class="set-big-text">4325.32</p>
                  <p class="set-p">kg</p>
                </div>
              </dv-decoration-9>
            </div>
            <div class="screen-center-item-des set-flex">
              <div class="center-item-des">
                <dv-border-box-10>
                  <div class="w100h100 set-flextext-center">
                    <p class="set-p mb10">昨日产量</p>
                    <h2 class="set-big-text">3214.44Kg</h2>
                  </div>
                </dv-border-box-10>
              </div>
              <div class="center-item-des">
                <dv-border-box-10>
                  <div class="w100h100 set-flextext-center">
                    <p class="set-p mb10">昨日产量</p>
                    <h2 class="set-big-text">4231.21Kg</h2>
                  </div>
                </dv-border-box-10>
              </div>
            </div>
          </dv-border-box-11>
        </div>
        <div class="screen-center-item">
          <dv-border-box-11 title="能耗统计">
            <div class="screen-center-item-main">
              <dv-decoration-9 style="width:23vh;height: 23vh;">
                <div class="text-center">
                  <p class="set-p">今日能耗</p>
                  <p class="set-big-text">829.83</p>
                  <p class="set-p">Kwh</p>
                </div>
              </dv-decoration-9>
            </div>
            <div class="screen-center-item-des set-flex">
              <div class="center-item-des">
                <dv-border-box-10>
                  <div class="w100h100 set-flextext-center">
                    <p class="set-p mb10">昨日能耗</p>
                    <h2 class="set-big-text">523.32Kwh</h2>
                  </div>
                </dv-border-box-10>
              </div>
              <div class="center-item-des">
                <dv-border-box-10>
                  <div class="w100h100 set-flextext-center">
                    <p class="set-p mb10">今日能耗</p>
                    <h2 class="set-big-text">432.12Kwh</h2>
                  </div>
                </dv-border-box-10>
              </div>
            </div>
          </dv-border-box-11>
        </div>
      </div>
      <div class="screen-bottom">
        <dv-border-box-11 class="w100h100" title="本月与上月产量对比">
          <div class="w100h100 set-flex space-between">
            <div class="charts-wrap" id="lineChart">
              <div id="myChart" class="w100h100"></div>
            </div>
            <div class="bar-charts-wrap" id="barChartWrap">
              <div id="barChart" class="w100h100"></div>
            </div>
          </div>
        </dv-border-box-11>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      fullscreen: false
    }
  },
  mounted () {
    this.drawLine()
    this.drawBar()
    this.handleFullScreen()
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
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          x: 'left',
          top: '10%',
          textStyle: {
            color: '#fffff'
          },
          data: ['本月产量', '上月产量', '总产量']
        },
        grid: {
          left: '0',
          right: '2%',
          bottom: '0',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            }
          }
        ],
        series: [
          {
            name: '本月产量',
            type: 'line',
            stack: '总量',
            data: [120, 132, 800, 134, 90, 230, 210, 132, 800, 134],
            itemStyle: {
              normal: {
                color: 'rgba(35,174,229,0.5)',
                lineStyle: {
                  color: '#614f96',
                  width: 1
                }
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(35,174,229,1)' // 0% 处的颜色
                }, {
                  offset: 0.5, color: 'rgba(35,174,229,0.8)' // 100% 处的颜色
                }, {
                  offset: 1, color: 'rgba(35,174,229,0.6)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: '上月产量',
            type: 'line',
            stack: '总量',
            data: [120, 132, 800, 134, 1000, 230, 210, 800, 134, 90],
            itemStyle: {
              normal: {
                color: 'rgba(179,127,235,0.5)',
                lineStyle: {
                  color: '#198bbe',
                  width: 1
                }
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(12,127,235,1)' // 0% 处的颜色
                }, {
                  offset: 0.5, color: 'rgba(33,127,235,0.8)' // 100% 处的颜色
                }, {
                  offset: 1, color: 'rgba(123,127,235,0.6)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: '总产量',
            type: 'line',
            stack: '总量',
            data: [150, 232, 200, 154, 190, 330, 410, 150, 232, 200],
            itemStyle: {
              normal: {
                color: 'rgba(179,127,235,0.5)',
                lineStyle: {
                  color: '#198bbe',
                  width: 1
                }
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(142,127,235,1)' // 0% 处的颜色
                }, {
                  offset: 0.5, color: 'rgba(163,127,235,.8)' // 100% 处的颜色
                }, {
                  offset: 1, color: 'rgba(132,127,235,.6)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          }
        ]
      })
      const chartsHeight = document.getElementById('lineChart').offsetHeight
      myChart.resize({ height: chartsHeight })
      window.addEventListener('resize', function () {
        const chartsHeight = document.getElementById('lineChart').offsetHeight
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
  background-color: #0c1941;
  position: relative;
  overflow: hidden;
}

.screen-title {
  height: 8%;
  width: 100%;
}
.screen-title-c {
  width: 24%;
  min-width: 24%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff
}
.screen-title-l,.screen-title-r {
  width: 38%;
  min-width: 38%;
}

/*中间部分*/
.screen-center {
  height: 55%;
  justify-content: space-between;
}
.screen-center-item {
  width: 32%;
}
.screen-center-item-main {
  height: 70%;
  /*background-color: #fff;*/
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
  box-sizing: border-box;
}
.screen-center-item-des {
  height: 25%;
  justify-content: space-around;
  padding: 0 20px;
  box-sizing: border-box;
}
.center-item-des {
  width: 45%;
}
/*底部*/
.screen-bottom {
  height: 35%;
}
.w100h100 {
  width: 100%;
  height: 100%;
}
.set-flex {
  display: flex;
}
.set-flextext-center {
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
.set-p {
  font-size: 18px;
  color: #4ca5eb;
}
.set-big-text {
  color: #fff;
  font-size: 30px;
  font-weight: 400;
}
.mb10 {
  margin-bottom: 10px;
}
.text-center {
  text-align: center;
}
.charts-wrap {
  width: 70%;
  height: 80%;
  padding: 3% 20px;
  box-sizing: border-box;
}
.bar-charts-wrap {
  width: 30%;
  height: 100%;
  padding: 3% 20px;
  box-sizing: border-box;
}
.space-between {
  justify-content: space-between;
}
</style>
