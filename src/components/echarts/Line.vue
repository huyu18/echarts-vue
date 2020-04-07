<template>
  <div ref="containerline" class="chart"></div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {};
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.containerline);

      // (1)准备数据
      var data = {
        year: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
      };

      // 2. 指定配置和数据
      var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          // 通过坐标轴来触发
          trigger: "axis"
        },
        legend: {
          // 距离容器10%
          right: "10%",
          // 修饰图例文字的颜色
          textStyle: {
            color: "#4c9bfd"
          }
          // 如果series 里面设置了name，此时图例组件的data可以省略
          // data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "#012f4a",
          containLabel: true
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          // 去除刻度
          axisTick: {
            show: false
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "rgba(255,255,255,.7)"
          },
          // 去除x坐标轴的颜色
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          // 去除刻度
          axisTick: {
            show: false
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "rgba(255,255,255,.7)"
          },
          // 修改y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "#012f4a"
            }
          }
        },
        series: [
          {
            name: "新增粉丝",
            type: "line",
            stack: "总量",
            // 是否让线条圆滑显示
            smooth: true,
            data: data.year[0]
          },
          {
            name: "新增游客",
            type: "line",
            stack: "总量",
            smooth: true,
            data: data.year[1]
          }
        ]
      };
      // 3. 把配置和数据给实例对象
      myChart.setOption(option);

      // 重新把配置好的新数据给实例对象
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>

<style scoped></style>
