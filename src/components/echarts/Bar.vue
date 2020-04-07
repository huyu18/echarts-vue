<template>
  <div ref="containerbar" class="chart"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: ["data"],
  data() {
    return {};
  },
  mounted() {
    // this.init();
  },
  methods: {
    init() {
      // 实例化对象
      let myChart = echarts.init(this.$refs.containerbar);
      // 指定配置和数据
      let option = {
        color: ["#2f89cf"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.data.map(r => r.label),
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
                // width: 1,
                // type: "solid"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "35%",
            data: this.data.map(r => r.value),
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ]
      };

      // 把配置给实例对象
      myChart.setOption(option);

      window.addEventListener("resize", function() {
        myChart.resize();
      });

      // 数据变化
      var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
      ];

      var dotObj = document.querySelectorAll(".bar h2 a");

      for (var i = 0; i < dotObj.length; i++) {
        dotObj[i].onclick = function(e) {
          var index = Array.prototype.indexOf.call(dotObj, this);
          option.series[0].data = dataAll[index].data;
          myChart.setOption(option);
        };
      }
    }
  }
};
</script>

<style scoped></style>
