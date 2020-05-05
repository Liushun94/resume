<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <div v-if="loading" class="loading">
      <h1>
        <strong>Loading...</strong>
      </h1>
      <h2>
        <strong>{{ percent }}</strong>
      </h2>
      <staggeringGrid :loading="loading"></staggeringGrid>
    </div>
    <!-- ant design vue 使用国际化 -->
    <a-locale-provider v-else :locale="language">
      <a-layout>
        <!-- 内容区域 -->
        <a-layout>
          <div class="container">
            <a-back-top></a-back-top>
            <div class="music" :class="{musicFullWidth: !musicMini}">
              <aplayer
                :autoplay="true"
                :controls="false"
                :music="musicList"
                :list="musicLists"
                :mini="musicMini"
                :listFolded="true"
                :showLrc="true"
                :theme="'pic'"
                class="musicDiv"
                :class="{ expendMusic: !musicMini }"
              ></aplayer>
              <div
                class="expendMusicBtn"
                :class="{ expendMusicBtnHeighe: !musicMini }"
                @click="() => (musicMini = !musicMini)"
              >{{ musicMini ? ">" : "<" }}</div>
            </div>

            <!-- 设置 -->
            <a-tooltip
              :title="$t('setting.title')"
              overlayClassName="customTooltip"
              placement="left"
            >
              <img
                :src="setImg"
                class="setImg"
                @click="collapsedSlide()"
                :style="{ right: iconSlideRight }"
              />
            </a-tooltip>

            <!-- 背景图 -->
            <div class="imgbox">
              <img :src="bgImgSrc" alt class="bgImg" :class="{ animationImg: isAutoPlayImg }" />
            </div>

            <!-- 流星、星星 -->
            <meteorCanvas v-show="isAutoPlayImg"></meteorCanvas>

            <img :src="resumeSrc" class="resumeImg" @click="showResume()" />

            <a-icon
              type="arrow-right"
              class="routerArrow"
              ref="routerArrow"
              :style="{ top: arrowTop }"
            />

            <div class="btns" @click="moveArrow">
              <router-link to="/home">
                <a-tooltip
                  :title="$t('home.title')"
                  overlayClassName="customTooltip"
                  placement="right"
                >
                  <a-button
                    :type="homeBtnType"
                    shape="circle"
                    icon="home"
                    ref="home"
                    data-name="home"
                  ></a-button>
                </a-tooltip>
              </router-link>
              <a-divider />
              <router-link to="/about">
                <a-tooltip
                  :title="$t('about.title')"
                  overlayClassName="customTooltip"
                  placement="right"
                >
                  <a-button
                    :type="aboutBtnType"
                    shape="circle"
                    icon="user"
                    ref="about"
                    data-name="about"
                  ></a-button>
                </a-tooltip>
              </router-link>
              <a-divider />
              <router-link to="/skill">
                <a-tooltip
                  :title="$t('skill.title')"
                  overlayClassName="customTooltip"
                  placement="right"
                >
                  <a-button :type="skillBtnType" shape="circle" icon="tags" data-name="skill"></a-button>
                </a-tooltip>
              </router-link>
              <a-divider />
              <router-link to="/experience">
                <a-tooltip
                  :title="$t('experience.title')"
                  overlayClassName="customTooltip"
                  placement="right"
                >
                  <a-button
                    :type="experienceBtnType"
                    shape="circle"
                    icon="experiment"
                    data-name="experience"
                  ></a-button>
                </a-tooltip>
              </router-link>
              <a-divider />
              <router-link to="/project">
                <a-tooltip
                  :title="$t('project.title')"
                  overlayClassName="customTooltip"
                  placement="right"
                >
                  <a-button
                    :type="projectBtnType"
                    shape="circle"
                    icon="project"
                    data-name="project"
                  ></a-button>
                </a-tooltip>
              </router-link>
            </div>

            <!-- 子页面内容 -->
            <div class="content">
              <router-view></router-view>
            </div>
          </div>
        </a-layout>

        <custom-slide :collapsed="collapsed"></custom-slide>

        <resume-page></resume-page>
      </a-layout>
    </a-locale-provider>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";
import bg1 from "@/assets/img/4.jpg";
import bg2 from "@/assets/img/3.jpg";
import setImg from "@/assets/img/set.png";
import resumeSrc from "@/assets/img/icon_resume-01.png";
import { mapState, mapMutations } from "vuex";
import meteorCanvas from "@/components/meteorCanvas.vue";
import customSlide from "@/components/customSlide.vue";
import aplayer from "vue-aplayer";
import musicList from "@/assets/js/musicList";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import resumePage from "@/components/resumePage.vue";
import staggeringGrid from "@/components/staggeringGrid.vue";

export default {
  data() {
    return {
      resumeSrc,
      // count: 0,
      percent: "0%",
      loading: true,
      collapsed: false,
      // resumeCollapsed: false,
      iconSlideRight: "20px",
      test: "hello",
      bgImgSrc: bg1,
      arrowTop: "",
      setImg,
      homeBtnType: "",
      aboutBtnType: "",
      skillBtnType: "",
      experienceBtnType: "",
      projectBtnType: "",
      musicMini: true,
      musicList: musicList[0],
      musicLists: musicList
    };
  },
  components: {
    meteorCanvas,
    customSlide,
    aplayer,
    resumePage,
    staggeringGrid
  },
  created() {},
  beforeCreate() {
    // 预加载
    this.$Progress.start();
    let count = 0;
    let imgs = [
      require("./assets/img/1.jpg"),
      require("./assets/img/2.jpg"),
      require("./assets/img/3.jpg"),
      require("./assets/img/4.jpg"),
      require("./assets/img/5.jpg"),
      require("./assets/img/me.jpg"),
      require("./assets/img/qq.jpg"),
      require("./assets/img/set.png"),
      require("./assets/img/weixin.jpg"),
      require("./assets/img/zhiFuBao.jpg"),
      require("./assets/img/bag.png"),
      require("./assets/img/pen.png"),
      require("./assets/img/education.png"),
      require("./assets/img/self.jpg"),
      require("./assets/img/delete.png"),
      require("./assets/img/project/34suo/1.png"),
      require("./assets/img/project/34suo/2.png"),
      require("./assets/img/project/34suo/3.png"),
      require("./assets/img/project/34suo/4.png"),
      require("./assets/img/project/34suo/5.png"),
      require("./assets/img/project/34suo/6.png"),
      require("./assets/img/project/34suo/7.png"),
      require("./assets/img/project/cis/2.png"),
      require("./assets/img/project/cis/3.png"),
      require("./assets/img/project/cis/4.png"),
      require("./assets/img/project/cis/5.png"),
      require("./assets/img/project/cis/6.png"),
      require("./assets/img/project/cis/7.png"),
      require("./assets/img/project/cis/1.png"),
      require("./assets/img/project/jiNan/1.png"),
      require("./assets/img/project/jiNan/2.png"),
      require("./assets/img/project/jiNan/3.png"),
      require("./assets/img/project/nanRui/1.png"),
      require("./assets/img/project/nanRui/2.png"),
      require("./assets/img/project/nanRui/3.png"),
      require("./assets/img/project/nanRui/4.png"),
      require("./assets/img/project/nanRui/5.png"),
      require("./assets/img/project/nanRui/6.png"),
      require("./assets/img/project/nanRui/7.png"),
      require("./assets/img/project/nanRui/8.png"),
      require("./assets/img/project/nanRui/9.png")
    ];
    let that = this;
    for (let img of imgs) {
      let image = new Image();
      image.src = img;
      image.onload = () => {
        count += 1;
        // 计算图片加载的百分数，绑定到percent变量
        let percentNum = Math.floor((count / imgs.length) * 100);
        that.percent = `${percentNum}%`;
        if (count === imgs.length) {
          that.$Progress.finish();
          that.loading = false;
        }
      };
    }
  },
  mounted() {
    console.log(this);
    let fullPath = window.location.pathname;
    let target;
    if (fullPath.indexOf("/") > -1) {
      target = fullPath.split("/")[1];
    } else {
      target = fullPath;
    }

    // if (this.$route.name !== "Home") {
    //   this.$router.push({
    //     path: "/home"
    //   });
    // }

    let arrowTop;
    this.homeBtnType = "";
    this.aboutBtnType = "";
    this.skillBtnType = "";
    this.experienceBtnType = "";
    this.projectBtnType = "";
    switch (target) {
      case "home":
        arrowTop = "155px";
        this.homeBtnType = "primary";
        break;
      case "about":
        arrowTop = "236px";
        this.aboutBtnType = "primary";
        break;
      case "skill":
        arrowTop = "317px";
        this.skillBtnType = "primary";
        break;
      case "experience":
        arrowTop = "398px";
        this.experienceBtnType = "primary";
        break;
      case "project":
        arrowTop = "479px";
        this.projectBtnType = "primary";
        break;
      case "detail":
        arrowTop = "479px";
        this.projectBtnType = "primary";
        break;
      default:
        arrowTop = "155px";
        this.homeBtnType = "primary";
    }

    this.arrowTop = arrowTop;
  },
  methods: {
    ...mapMutations(["changeResumeState"]),
    moveArrow(e) {
      if (e.target.tagName === "BUTTON") {
        let top = e.target.getClientRects()[0].top + 5;
        this.$refs.routerArrow.style.top = top + "px";

        this.selectedBtnState(e.target.dataset.name);
      }
    },
    selectedBtnState(target) {
      this.homeBtnType = "";
      this.aboutBtnType = "";
      this.skillBtnType = "";
      this.experienceBtnType = "";
      this.projectBtnType = "";

      switch (target) {
        case "home":
          this.homeBtnType = "primary";
          break;
        case "about":
          this.aboutBtnType = "primary";
          break;
        case "skill":
          this.skillBtnType = "primary";
          break;
        case "experience":
          this.experienceBtnType = "primary";
          break;
        case "project":
          this.projectBtnType = "primary";
          break;
        case "detail":
          this.projectBtnType = "primary";
          break;
      }
    },
    collapsedSlide() {
      if (this.collapsed) {
        this.iconSlideRight = "20px";
      } else {
        this.iconSlideRight = "160px";
      }
      this.collapsed = !this.collapsed;
    },
    showResume() {
      this.$store.commit("changeResumeState", true);
      // this.resumeCollapsed = !this.resumeCollapsed;
    }
  },
  computed: {
    ...mapState({
      isAutoPlayImg: state => state.isOpenBGAnimation,
      resumeCollapsed: state => state.isShowResume
    }),
    language() {
      return this.$i18n.locale === "zh" ? zhCN : enUS;
    },
    locale() {
      return this.$i18n.locale;
    }
  }
};
</script>

<style lang="stylus" scoped>
#app {
  .loading {
    margin: 200px auto;
    text-align: center;
  }

  .container {
    min-height: 100vh;

    // width: 100vw;
    .music {
      position: fixed;
      bottom: 0;
      z-index: 10;
      display: flex;

      &.musicFullWidth {
        width: 100%;
      }

      .musicDiv {
        margin: 0;

        &.expendMusic {
          width: calc(100% - 20px);
        }
      }

      .expendMusicBtn {
        width: 20px;
        height: 66px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        &.expendMusicBtnHeighe {
          height: 90px;
        }
      }
    }

    .setImg {
      width: 32px;
      height: 32px;
      position: fixed;
      top: 20px;
      // right: 20px;
      z-index: 10;
      animation: rotation 4s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      transition: all 0.4s;
      transition-delay: 0.1s;
    }

    .resumeImg {
      position: fixed;
      width: 50px;
      top: 20px;
      left: 20px;
      // z-index: 1000;
    }

    .imgbox {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: fixed;

      .bgImg {
        width: 100%;
        height: 100vh;

        &.animationImg {
          animation: bgImgAnimation 3s;
          animation-iteration-count: infinite;
        }
      }
    }

    .content {
      width: 50%;
      background: rgba(255, 255, 255, 0.1);
      position: absolute;
      top: 100px;
      color: #fff;
      left: 50%;
      transform: translateX(-50%);
      min-height: 50%;
      border-radius: 50px;
      padding: 20px;
      box-shadow: 0 0 25px #DAA520;

      &:hover {
        box-shadow: 0 0 60px rgba(249, 196, 39, 1);
      }
    }
  }

  .btns {
    position: fixed;
    top: 150px;
    left: 80px;
  }

  .routerArrow {
    position: fixed;
    left: 40px;
    color: #FFD700;
    font-size: 20px;
    animation: rotation360 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transition: top 0.5s;
    transition-timing-function: ease-out;
  }
}
</style>
