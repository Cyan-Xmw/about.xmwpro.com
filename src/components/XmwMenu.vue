<template>
  <div id="container">
    <!-- 左边名称 -->
    <div class="website-name">
      {{ myinfo.global.nickName }}
    </div>
    <!-- PC端菜单 -->
    <nav id="menu">
      <ul class="nav">
        <li class="slide"></li>
        <li v-for="path in myinfo.menu" :key="path.link">
          <a :href="'#' + path.link" :data-menuanchor="path.link" class="link">
            <i class="iconfont" :class="path.icon" />
            {{ path.name }}</a
          >
        </li>
      </ul>
    </nav>
    <!-- 切换黑暗模式 -->
    <div class="toggle_day_night">
      <el-switch
        v-model="isDark"
        :active-icon="Moon"
        :inactive-icon="Sunny"
        @change="changeTheme"
      >
      </el-switch>
    </div>
    <!-- 移动端菜单 -->
    <div id="mobile_wrap" @click="show_menu = !show_menu">
      <!-- <MoreFilled /> -->
      <svg
        class="ham-icon"
        viewBox="0 0 100 100"
        width="80"
        onclick="this.classList.toggle('active')"
      >
        <path
          class="line top"
          d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
        />
        <path
          class="line middle"
          d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
        />
        <path
          class="line bottom"
          d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
        />
      </svg>
    </div>

    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInRight"
      leave-active-class="animate__fadeOutRight"
    >
      <ul class="menu" v-if="show_menu" id="mobile-menu">
        <li v-for="(path, index) in myinfo.menu" :key="index">
          <a :href="'#' + path.link" :data-menuanchor="path.link">
            <i class="iconfont" :class="path.icon" />
            {{ path.name }}
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon, MoreFilled } from "@element-plus/icons-vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const show_menu = ref(false);
const emits = defineEmits(["changeTheme"]);

const changeTheme = (val: boolean) => {
  emits("changeTheme", val);
};
</script>

<style scoped lang="less">
@import "./config.less";
#container {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 4;
  font-size: 1.2rem;

  .website-name {
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
    .nav {
      position: relative;
      display: flex;
      align-items: center;
      list-style: none;
      li {
        margin: 0;
      }
    }
    a.link {
      margin: 0 10px;
      text-decoration: none;
      color: var(--cyan-text-color);
      position: relative;
      padding: 0.6em 1em;
      display: inline-block;
      z-index: 3;
      line-height: 1;
      transition: 0.5s all;
      i.iconfont {
        font-size: 20px;
      }
      &.active {
        color: var(--cyan-text-active-color);
        background-color: yellowgreen;
        border-radius: 10em;
      }
      &:hover {
        color: var(--cyan-text-active-color);
        background-color: yellowgreen;
        border-radius: 10em;
      }
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
        font-size: 1.6rem;
        padding: 0.3em 0.8em;
        transition: 0.5s all;
        i.iconfont {
          font-size: 20px;
        }
        &.active {
          color: var(--cyan-text-active-color);
          background-color: yellowgreen;
          border-radius: 10em;
        }
      }
    }
  }
}
#mobile_wrap {
  display: none;
}
@media screen and (max-width: @Mobile_width) {
  #menu {
    display: none;
  }
  #mobile_wrap {
    display: flex;
    width: 50px;
    height: 50px;
  }
}

.squeeze {
  transition: all 1.5s;
  transform: scale(0.9);
}

.ham-icon .line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}
.ham-icon .top {
  stroke-dasharray: 40 172;
}
.ham-icon .middle {
  stroke-dasharray: 40 111;
}
.ham-icon .bottom {
  stroke-dasharray: 40 172;
}
.ham-icon.active .top {
  stroke-dashoffset: -132px;
}
.ham-icon.active .middle {
  stroke-dashoffset: -71px;
}
.ham-icon.active .bottom {
  stroke-dashoffset: -132px;
}
</style>