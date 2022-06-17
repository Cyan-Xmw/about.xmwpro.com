<script setup lang="ts">
import { reactive } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const state = reactive<any>({
  locale: zhCn,
});
</script>

<template>
  <el-config-provider :locale="state.locale">
    <XmwAbout />
  </el-config-provider>
</template>
<style>
@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@1&display=swap";
@import "https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap";
body {
  font-family: jetbrains mono, zcool kuaile, cursive, sans-serif;
}
#fp-nav a span {
  background: rgba(154, 205, 50, 0.65) !important;
}
</style>
