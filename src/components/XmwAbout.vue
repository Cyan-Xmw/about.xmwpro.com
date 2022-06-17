<template>
  <el-container>
    <div id="container-wrap"></div>
    <el-header
      ><!-- 侧边栏菜单 -->
      <Menu ref="menuRef"
    /></el-header>
    <!-- 全屏组件 -->
    <full-page ref="fullpageRef" :options="options" id="fullpage">
      <!-- 关于我 -->
      <div
        class="section"
        style="
          background-image: linear-gradient(to right top, #a8c0ff, #3f2b96);
        "
      >
        <div class="section1-wrap">
          <div class="page1-wrap">
            <div class="page1-wrap-title">您好呀，朋友！</div>
            <div class="content">
              <p>
                我叫<span style="color: yellowgreen; font-size: 2.8rem">{{
                  myinfo.global.name
                }}</span
                >,你可以叫我<span
                  style="color: yellowgreen; font-size: 2.8rem"
                  >{{ myinfo.global.nickName }}</span
                >
              </p>
              <p>
                标签：<el-space wrap>
                  <el-tag
                    size="large"
                    v-for="(tag, index) in myinfo.tags"
                    :key="index"
                    >{{ tag }}</el-tag
                  >
                </el-space>
              </p>
            </div>
          </div>
          <div class="me_photo">
            <img
              src="https://cyan-blog.oss-cn-shenzhen.aliyuncs.com/about/me.jpg"
              alt="个人照片"
            />
          </div>
        </div>
      </div>
      <!-- 我会啥 -->
      <div
        class="section"
        style="
          background-image: linear-gradient(to right top, #ee9ca7, #ffdde1);
        "
      >
        <div class="page2-wrap page-wrap">
          <p class="page-wrap-title">所了解的技能</p>
          <ul class="page2-wrap-content">
            <li v-for="(skill, index) in myinfo.skills" :key="index">
              <span class="skill_name">
                <i class="bx" :class="skill.icon"></i>
                {{ skill.name }}</span
              >
              <span class="progress_num">{{ skill.progress + "%" }}</span>
              <el-progress
                :stroke-width="20"
                :percentage="skill.progress"
                :show-text="false"
                style="width: 100%; margin-top: 10px"
              />
            </li>
          </ul>
        </div>
      </div>
      <!-- 项目展示 -->
      <div
        class="section"
        style="
          background-image: linear-gradient(to right top, #8fe514, #1bb7ba);
        "
      >
        <div class="page3-wrap page-wrap">
          <p class="page-wrap-title">个人作品</p>
        </div>
      </div>
      <!-- 联系我 -->
      <div
        class="section"
        style="
          background-image: linear-gradient(to right top, #009fff, #ec2f4b);
          position: relative;
        "
      >
        <div class="page4-wrap page-wrap">
          <p class="page-wrap-title">联系我</p>
          <p style="text-align: center; font-size: 2rem">
            乾坤未定，你我皆是黑马🐎
          </p>
          <div class="social">
            <div class="social-item" v-for="(s, i) in myinfo.social" :key="i">
              <a :href="s.link" class="social-item-link" target="_blank">
                <i class="iconfont" :class="s.icon"></i>
                <p>{{ s.name }}</p>
              </a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <a target="_blank" href="https://beian.miit.gov.cn"
            ><img
              src="../assets/img/icp.png"
              alt="备案号：粤ICP备2021126986号-1"
              style="vertical-align: text-top; margin-right: 5px"
            />备案号：粤ICP备2021126986号-1</a
          >
        </div>
      </div>
    </full-page>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import $ from "jquery";
import Menu from "./XmwMenu.vue";
const fullpageRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const options = {
  // licenseKey: "YOUR_KEY_HEERE",
  menu: isMobile() ? "#mobile-menu" : "#menu",
  anchors: ["page1", "page2", "page3", "page4"],
  easing: "easeInExpo",
  paddingTop: "4rem",
  scrollingSpeed: 700,
  navigation: true, //是否显示导航栏
  navigationPosition: "right", //导航栏的位置
  navigationTooltips: ["关于我", "我会啥", "项目展示", "联系我"],
};

function isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}

function initCircleMagic() {
  (function ($) {
    $.fn.circleMagic = function (options) {
      var width,
        height,
        canvas,
        ctx,
        animateHeader = true;
      var circles = [];

      var settings = $.extend(
        {
          color: "rgba(255,255,255,.5)",
          radius: 10,
          density: 0.3,
          clearOffset: 0.2,
        },
        options
      );

      //  Main

      var container = this["0"];
      initContainer();
      addListeners();

      function initContainer() {
        width = container.offsetWidth;
        height = container.offsetHeight;

        //  create canvas element

        initCanvas();
        canvas = document.getElementById("canvas");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");

        //  create circles
        for (var x = 0; x < width * settings.density; x++) {
          var c = new Circle();
          circles.push(c);
        }
        animate();
      }

      //Init canvas element
      function initCanvas() {
        var canvasElement = document.createElement("canvas");
        canvasElement.id = "canvas";
        container.appendChild(canvasElement);
        canvasElement.parentElement.style.overflow = "hidden";
      }

      // Event handling
      function addListeners() {
        window.addEventListener("scroll", scrollCheck, false);
        window.addEventListener("resize", resize, false);
      }

      function scrollCheck() {
        if (document.body.scrollTop > height) {
          animateHeader = false;
        } else {
          animateHeader = true;
        }
      }

      function resize() {
        width = container.clientWidth;
        height = container.clientHeight;
        container.height = height + "px";
        canvas.width = width;
        canvas.height = height;
      }

      function animate() {
        if (animateHeader) {
          ctx.clearRect(0, 0, width, height);
          for (var i in circles) {
            circles[i].draw();
          }
        }
        requestAnimationFrame(animate);
      }

      function randomColor() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var alpha = Math.random().toPrecision(2);
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      }

      //  Canvas manipulation

      function Circle() {
        var that = this;

        // constructor
        (function () {
          that.pos = {};
          init();
        })();

        function init() {
          that.pos.x = Math.random() * width;
          that.pos.y = height + Math.random() * 100;
          that.alpha = 0.1 + Math.random() * settings.clearOffset;
          that.scale = 0.1 + Math.random() * 0.3;
          that.speed = Math.random();
          if (settings.color === "random") {
            that.color = randomColor();
          } else {
            that.color = settings.color;
          }
        }

        this.draw = function () {
          if (that.alpha <= 0) {
            init();
          }
          that.pos.y -= that.speed;
          that.alpha -= 0.0005;
          ctx.beginPath();
          ctx.arc(
            that.pos.x,
            that.pos.y,
            that.scale * settings.radius,
            0,
            2 * Math.PI,
            false
          );
          ctx.fillStyle = that.color;
          ctx.fill();
          ctx.closePath();
        };
      }
    };
  })($);

  $("#container-wrap").circleMagic({
    radius: 25,
    density: 0.1,
    color: "rgba(255,255,255, .4)",
    clearOffset: 0.9,
  });
}

onMounted(() => {
  initCircleMagic();
});
</script>
<style lang="less" scoped>
@import "./config.less";
a {
  text-decoration: none;
  color: var(--cyan-font-color);
}
.el-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 4rem !important;
  background-color: var(--cyan-bg-color) !important;
  box-shadow: 0 1px 4px rgba(140, 153, 167, 0.18);
}
#container-wrap {
  z-index: 2;
  width: 100%;
  height: 100%;
  position: fixed;
  pointer-events: none;
}
.section {
  animation: bganimation 10s infinite;
  background-size: 800%;
}
.section1-wrap {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  .me_photo {
    flex: 0 0 20%;
    img {
      display: block;
      width: 100%;
    }
  }
}
.page-wrap {
  &-title {
    position: relative;
    font-weight: 600;
    font-size: 1.8rem;
    color: #269cf7;
    text-align: center;
    &::before {
      position: absolute;
      content: "";
      width: 80px;
      height: 0.18rem;
      left: 0;
      right: 0;
      margin: auto;
      top: 2.5rem;
      background-color: #269cf7;
    }
  }
}
.page1-wrap {
  font-size: 2rem;
  color: var(--cyan-font-color);
  &-title {
    font-size: 2.4rem;
  }
}
.page2-wrap {
  width: 90%;
  margin: 0 auto;
  &-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
      background-color: var(--cyan-bg-color);
      margin-bottom: 18px;
      padding: 0.72rem 1.39rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 25px rgba(14, 35, 48, 0.15);
      flex-wrap: wrap;
      justify-content: space-between;
      transition-duration: 0.2s;
      color: var(--cyan-font-color);
      transition-property: all;
      transition-timing-function: linear;
      font-size: 1.6rem;
      flex: 0 0 42%;
      cursor: pointer;
      &:hover {
        transform: translateY(-6px);
      }
      .skill_name {
        display: flex;
        align-items: center;
        font-weight: bold;
        i {
          font-size: 2rem;
          color: #269cf7;
          margin: 5px 5px 0 0;
        }
      }
    }
  }
}
.page3-wrap {
}
.page4-wrap {
  .social {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    &-item {
      position: relative;
      height: 10rem;
      flex: 0 0 20%;
      background: var(--cyan-card-color);
      border-radius: 10px;
      overflow: hidden;
      transition: 0.75s all;
      &-link {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        i.iconfont {
          font-size: 4rem;
          display: inline-block;
          margin-top: 1.5rem;
        }
        p {
          font-size: 1.2rem;
          margin: 10px 0 0;
        }
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    &:hover .social-item:not(:hover) {
      filter: blur(3px);
      opacity: 0.65;
    }
  }
}
.copyright {
  position: absolute;
  text-align: center;
  bottom: 20px;
  transform: translateX(-50%);
  left: 50%;
}
:deep .el-space {
  vertical-align: middle;
}
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media screen and (max-width: @Mobile_width) {
  .me_photo {
    display: none;
  }
  .page2-wrap-content {
    padding: 0;
    display: block;
    li {
      flex: 0 0 100%;
    }
  }
  .page4-wrap .social-item {
    flex: 0 0 42%;
    margin-top: 10px;
  }
}
</style>