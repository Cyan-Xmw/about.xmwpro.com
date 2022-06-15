<template>
  <div id="container">
    <!-- 左边名称 -->
    <div class="website-name">
      {{ myinfo.global.name }}({{ myinfo.global.nickName }})
    </div>
    <!-- 切换黑暗模式 -->
    <div class="toggle_day_night">
      <el-switch v-model="isDark" :active-icon="Moon" :inactive-icon="Sunny">
      </el-switch>
    </div>
    <!-- PC端菜单 -->
    <nav id="menu" v-if="!myinfo.isMobile()">
      <a
        :href="'#' + path.link"
        :data-menuanchor="path.link"
        class="link"
        v-for="path in myinfo.menu"
        :key="path.link"
        >{{ path.name }}</a
      >
    </nav>
    <!-- 移动端菜单 -->
    <div
      v-if="myinfo.isMobile()"
      id="mobile_menu"
      style="font-size: 1.5rem"
      @click="show_menu = !show_menu"
    >
      <MoreFilled />
    </div>

    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInRight"
      leave-active-class="animate__fadeOutRight"
    >
      <ul class="menu" v-if="show_menu" id="mobile-menu">
        <li v-for="(path, index) in myinfo.menu" :key="index">
          <a :href="'#' + path.link" :data-menuanchor="path.link">
            {{ path.name }}
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon, MoreFilled } from "@element-plus/icons-vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const show_menu = ref(false);
onMounted(() => {});
</script>

<style scoped lang="less">
@import "./config.less";
#container {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 4;
  font-size: 1.2rem;

  .website-name {
    flex: 1 0 auto;
    color: var(--cyan-text-color);
  }

  .toggle_day_night {
    :deep .el-switch__label * {
      font-size: 1.2rem;
    }
    :deep .el-switch__label .el-icon {
      width: 1.2rem;
      display: block;
    }
    :deep .el-switch {
      @media screen and (max-width: @Mobile_width) {
        line-height: 1.8rem;
      }
      @media screen and (min-width: @Mobile_width) {
        line-height: 1.55rem;
      }

      // 白天时切换按钮的背景颜色
      & .el-switch__core {
        background-color: @header_toggle_button_day_bgColor !important;
      }

      // 夜晚时切换按钮的背景颜色
      &.is-checked {
        & .el-switch__core {
          background-color: @header_toggle_button_night_bgColor !important;
        }
      }

      & .el-switch__label {
        i {
          font-size: 1rem;
        }
      }

      // 按钮选中时左侧icon的颜色
      & .el-switch__label.el-switch__label--left.is-active {
        color: @header_toggle_left_icon_active;
      }
      // 按钮选中时右侧icon的颜色
      & .el-switch__label.el-switch__label--right.is-active {
        color: @header_toggle_right_icon_active;
      }
    }
  }
  #menu {
    display: flex;
    flex: 2 0 auto;
    justify-content: flex-end;
    a.link {
      margin: 0 25px;
      text-decoration: none;
      color: var(--cyan-text-color);
    }
  }

  .menu {
    --animate-duration: 0.3s; // 调整与动画样式库
    width: 70%;
    height: 100vh;
    background-color: var(--cyan-bg-color);
    position: absolute;
    right: 0;
    top: 4rem;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      margin-bottom: 5px;
      text-align: center;

      a {
        text-decoration: none;
        color: var(--cyan-text-color);
      }
    }
  }
}

@media screen and (max-width: @Mobile_width) {
  #container {
    justify-content: space-between;
  }

  .website-name {
    font-size: 1.4rem;
    text-align: left;
  }

  #mobile_menu {
    display: flex;
    justify-content: flex-end;
    width: 20px;
    height: 20px;
    flex: 2 0 auto;
  }
}
@media screen and (min-width: @Mobile_width) {
}
</style>