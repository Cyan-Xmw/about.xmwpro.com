<template>
  <el-container>
    <el-header
      ><!-- 侧边栏菜单 -->
      <Menu
    /></el-header>
    <!-- 全屏组件 -->
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">3 section ...</div>
      <div class="section">4 section ...</div>
    </full-page>
  </el-container>
</template>

<script lang="ts" setup>
import Menu from "./XmwMenu.vue";
const options = {
  // licenseKey: "YOUR_KEY_HEERE",
  menu: isMobile() ? "#mobile-menu" : "#menu",
  anchors: ["page1", "page2", "page3", "page4"],
  sectionsColor: ["#41b883", "#ff5f45"],
  paddingTop: "4rem",
  navigation: true, //是否显示导航栏
  navigationPosition: "right", //导航栏的位置
  navigationTooltips: ["主页", "关于我", "我会啥", "联系我"],
};

function isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}
</script>
<style scoped>
.el-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 4rem !important;
  background-color: var(--cyan-bg-color) !important;
  box-shadow: 0 1px 4px rgb(140 153 167 / 18%);
}
</style>