<template>
  <div class="home">
    <div class="header">
      <h1>可视化展板-ECharts</h1>
      <div class="showTime">
        当前时间：2020年3月17-0时54分14秒
        <router-link to="/layout">管理平台</router-link>
      </div>
    </div>
    <section class="mainbox">
      <div class="column">
        <Box>
          <h2 slot="title">
            柱状图-就业行业
            <a href="javascript:;">2019</a>
            <a href="javacript:;"> 2020</a>
          </h2>
          <echart-bar ref="bar" :data="employmentlist"></echart-bar>
        </Box>

        <Box>
          <h2 slot="title">折线图-人员变化</h2>
          <echart-line ref="line"></echart-line>
        </Box>

        <Box>
          <h2 slot="title">最新动态</h2>
          <div class="noticeContent">
            <ul
              class="notice_list"
              :class="newslist.length > 1 ? { notice_top: animate } : ''"
            >
              <li v-for="(item, index) in newslist" :key="index">
                【<span>{{ item.type }}</span
                >】
                {{ item.content }}
                <span style="color:green;font-size:12px;margin-left:10px;">{{
                  item.time
                }}</span>
              </li>
            </ul>
          </div>
        </Box>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
              <li>104563</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <echart-area ref="map"></echart-area>
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>
      <div class="column">
        <Box>
          <h2 slot="title">柱状图-技能掌握</h2>
          <echart-bar1 ref="bar1"></echart-bar1>
        </Box>

        <Box>
          <h2 slot="title">折线图-播放量</h2>
          <echart-line1 :data="playquantity" ref="line1"></echart-line1>
        </Box>

        <Box>
          <h2 slot="title">饼形图-地区分布</h2>
          <echart-pie1 ref="pie1"></echart-pie1>
        </Box>
      </div>
    </section>
  </div>
</template>

<script>
import "@/assets/css/index.css";
// import "@/assets/js/setFontSize";
import Box from "@/components/echarts/Box";
import echartBar from "@/components/echarts/Bar";
import echartLine from "@/components/echarts/Line";
import echartBar1 from "@/components/echarts/Bar1";
import echartLine1 from "@/components/echarts/Line1";
import echartPie1 from "@/components/echarts/Pie1";
import echartArea from "@/components/echarts/Area";

export default {
  name: "Home",
  components: {
    Box,
    echartBar,
    echartLine,
    echartBar1,
    echartLine1,
    echartPie1,
    echartArea
  },
  data() {
    return {
      animate: false,
      employmentlist: [
        {
          label: "旅游行业",
          value: 200
        },
        {
          label: "教育培训",
          value: 300
        },
        {
          label: "游戏行业",
          value: 300
        },
        {
          label: "医疗行业",
          value: 900
        },
        {
          label: "电商行业",
          value: 1500
        },
        {
          label: "社交行业",
          value: 1200
        },
        {
          label: "金融行业",
          value: 600
        }
      ],
      playquantity: {
        title: ["播放量", "转发量"],
        color: ["#0184d5", "#00d887"],
        date: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30
        ],
        data: [
          [
            30,
            40,
            30,
            40,
            30,
            40,
            30,
            60,
            20,
            40,
            20,
            40,
            30,
            40,
            30,
            40,
            30,
            40,
            30,
            60,
            20,
            40,
            20,
            40,
            30,
            60,
            20,
            40,
            20,
            40
          ],
          [
            50,
            30,
            50,
            60,
            10,
            50,
            30,
            50,
            60,
            40,
            60,
            40,
            80,
            30,
            50,
            60,
            10,
            50,
            30,
            70,
            20,
            50,
            10,
            40,
            50,
            30,
            70,
            20,
            50,
            10
          ]
        ]
      },
      newslist: [
        {
          id: 1,
          content: "已成交188.24万元",
          time: "5分钟前",
          type: "成交额"
        },
        {
          id: 2,
          content: "已成交1828.24万件",
          time: "5分钟前",
          type: "销售量"
        },
        {
          id: 3,
          content: "已退款88.99万件",
          time: "5分钟前",
          type: "退款量"
        },
        {
          id: 4,
          content: "已退款188.99万元",
          time: "5分钟前",
          type: "退款额"
        },
        {
          id: 5,
          content: "已成交188.24万元",
          time: "5分钟前",
          type: "成交额"
        },
        {
          id: 6,
          content: "已成交1828.24万件",
          time: "5分钟前",
          type: "销售量"
        },
        {
          id: 7,
          content: "已退款88.99万件",
          time: "5分钟前",
          type: "退款量"
        },
        {
          id: 8,
          content: "已退款188.99万元",
          time: "5分钟前",
          type: "退款额"
        }
      ]
    };
  },
  created() {
    // 页面显示
    let t = this;
    setInterval(t.showNotice, 3000);
  },
  mounted() {
    if(this.$route.query.zzz) {
      this.initEcharts();
    }
    
    window.onload = window.onresize = () => {
      let html = document.querySelector("html");
      html.style.fontSize = window.innerWidth / 20 + "px";

      this.initEcharts();
    };
  },
  methods: {
    initEcharts() {
      Object.keys(this.$refs).forEach(r => {
        this.$refs[r].init();
      });
    },
    showNotice() {
      let t = this;
      t.animate = true;
      setTimeout(() => {
        t.newslist.push(t.newslist[0]);
        t.newslist.shift();
        t.animate = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.home {
  background: url(../assets/images/bg.jpg) no-repeat #000;
  /*  背景图定位 / 背景图尺寸  cover 完全铺满容器  contain 完整显示在容器内 */
  background-size: cover;
}
.noticeContent {
  display: block;
  position: relative;
  width: 100%;
  height: 190px;
  overflow: hidden;
  border-top: 1px solid #ece6ed;
  border-bottom: 1px solid #ece6ed;
}
.noticeContent li {
  text-align: left;
  line-height: 25px;
  height: 26px;
  font-size: 13px;
  color: #fff;
}
.notice_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.notice_top {
  transition: all 0.5s;
  margin-top: -30px;
}
</style>
