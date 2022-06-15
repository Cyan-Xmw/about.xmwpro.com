<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">First section ...</div>
    <div class="section">Second section ...</div>
  </full-page>
</template>

<script lang="ts" setup>
const options = {
  licenseKey: "YOUR_KEY_HEERE",
  menu: "#menu",
  anchors: ["page1", "page2", "page3"],
  sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
};
</script>