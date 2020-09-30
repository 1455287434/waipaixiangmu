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
          <div class="screen-main-item screen-main-item-c">
            <div class="main-item-top-wrap">
              <div>
                <dv-border-box-1 class="w100h100" id="barChartWrap">
                  <div id="barChart" class="w100h100"></div>
                </dv-border-box-1>
              </div>
              <div>
                <dv-border-box-1 class="w100h100" id="lineChartWrap">
                  <div id="lineChart" class="w100h100"></div>
                </dv-border-box-1>
              </div>
            </div>
            <div class="main-item-bottom-wrap">
              <dv-border-box-11 :reverse="true" class="w100h100" title="客户分布区域">dv-border-box-8</dv-border-box-11>
            </div>
          </div>
          <div class="screen-main-item screen-main-item-r">
            <div class="main-item main-item-t">
              <dv-border-box-12 class="w100h100" style="padding: 15px; box-sizing: border-box;">
                <dv-scroll-board :config="config"  />
              </dv-border-box-12>
            </div>
            <div class="main-item main-item-c">
              <dv-border-box-12 class="w100h100" :reverse="true">
                <div class="text-wrap w100h100">
                  <div style="height: 30%;">
                    <dv-border-box-7 class="w100h100">
                      <div class="text-item set-flex text-item-num-t">
                        <span>维保服务：</span>
                        <span class="text-item-num text-item-num-child-t">0000,0123</span>
                        <span>次数</span>
                      </div>
                    </dv-border-box-7>
                  </div>
                  <div style="height: 30%;">
                    <dv-border-box-7 class="w100h100">
                      <div class="text-item set-flex text-item-num-c">
                        <span>维修服务：</span>
                        <span class="text-item-num text-item-num-child-c">0000,1323</span>
                        <span>次数</span>
                      </div>
                    </dv-border-box-7>
                  </div>
                  <div style="height: 30%;">
                    <dv-border-box-7 class="w100h100">
                      <div class="text-item set-flex text-item-num-b">
                        <span>保养服务：</span>
                        <span class="text-item-num text-item-num-child-b">0000,0032</span>
                        <span>次数</span>
                      </div>
                    </dv-border-box-7>
                  </div>
                </div>
              </dv-border-box-12>
            </div>
            <div class="main-item main-item-b">
              <dv-border-box-12 class="w100h100" style="padding: 10px;box-sizing: border-box">
                <el-carousel :interval="4000" type="card" style="height: 100px;">
                  <el-carousel-item v-for="item in 6" :key="item" style="height: 100px;">
                    <h3 class="medium" style="height: 100px;">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </dv-border-box-12>
            </div>
          </div>
        </div>
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
function formatter (number) {
  const numbers = number.toString().split('').reverse()
  const segs = []
  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))
  return segs.join(',').split('').reverse().join('')
}
export default {
  name: 'index',
  data () {
    return {
      fullscreen: false,
      config: {
        header: ['公司名', '接入设备', '在线设备'],
        data: [
          ['行1列1', '2', '2'],
          ['行2列1', '34', '23'],
          ['行3列1', '42', '32'],
          ['行4列1', '3', '2'],
          ['行5列1', '543', '32'],
          ['行6列1', '123', '43'],
          ['行7列1', '65', '22'],
          ['行8列1', '1', '1'],
          ['行9列1', '43', '32'],
          ['行10列1', '22', '13']
        ],
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
      },
      numConfig: {
        number: [123456],
        content: '{nt}',
        formatter
      },
      numConfig1: {
        number: [432423123],
        content: '{nt}',
        formatter
      },
      numConfig2: {
        number: [123456],
        content: '{nt}',
        formatter
      }
    }
  },
  mounted () {
    this.drawPieSB()
    this.drawPieKH()
    this.drawPieYH()
    this.drawBar()
    this.drawLine()
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
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('lineChart'))
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
          left: '5%',
          right: '10%',
          bottom: '8%',
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
      const chartsHeight = document.getElementById('lineChartWrap').offsetHeight
      myChart.resize({ height: chartsHeight })
      window.addEventListener('resize', function () {
        const chartsHeight = document.getElementById('lineChartWrap').offsetHeight
        myChart.resize({ height: chartsHeight })
      })
    },
    drawBar () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('barChart'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['北京', '上海', '天津', '广州', '深圳', '南京', '沈阳'],
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
          data: [120, 200, 321, 54, 34, 131, 23],
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
  width: 22%;
  /*background-color: #fff;*/
}
.screen-main-item-c {
  width: 48%;
  /*background-color: yellowgreen;*/
}
.main-item-top-wrap {
  height: 31%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.main-item-bottom-wrap {
  height: 68%;
}
.main-item-top-wrap>div {
  width: 49%;
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
.text-wrap {
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.text-item {
  height: 100%;
  align-items: center;
  padding: 0 10px;
}
.text-item-num {
  margin: 0 5px;
  flex: 1;
  border: 1px solid #000;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
}
.text-item-num-child-t {
  border-color: #1dbd80;
  box-shadow: 0 0 10px 2px #1dbd80;
}
.text-item-num-child-c {
  border-color: #8e77f5;
  box-shadow: 0 0 10px 2px #8e77f5;
}
.text-item-num-child-b {
  border-color: #fcc02d;
  box-shadow: 0 0 10px 2px #fcc02d;
}
.text-item-num-t {
  color: #1dbd80;
}
.text-item-num-c {
  color: #8e77f5;
}
.text-item-num-b {
  color: #fcc02d;
}
.set-flex {
  display: flex;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
