<template>
  <div>
    <div class="header-mask" @mouseenter="showHeader"></div>

    <transition name="head-expand">
      <div v-show="isShowHeader" class="header" @mouseleave="hideHeader">
        <span class="item">
          <label for>{{ $t("header.set_local_text") }}：</label>
          <a-radio-group
            :defaultValue="defaultRadio"
            buttonStyle="solid"
            size="small"
            @change="changeLanguage"
          >
            <a-radio-button value="zh">zh</a-radio-button>
            <a-radio-button value="en">en</a-radio-button>
          </a-radio-group>
        </span>

        <span class="item">
          <label for="">{{ $t("header.set_bg_animation") }}:</label>
          <a-switch
            :defaultChecked="defaultBGAnimation"
            @change="onBGAnimationChange"
          />
        </span>

        <span class="item">
          <label for="">{{ $t("header.set_music") }}:</label>
          <a-switch :defaultChecked="defaultMusic" @change="onMusicChange" />
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  name: "resumeHeader",
  data() {
    return {
      isShowHeader: false,
      defaultRadio: this.$store.state.locale,
      defaultBGAnimation: this.$store.state.isOpenBGAnimation,
      defaultMusic: this.$store.state.isMusicOpen
    }
  },
  computed: {
    ...mapState({
      language: state => state.language
    }),
    home() {
      return this.$store.state.locale + "/home"
    }
  },
  methods: {
    ...mapMutations(["changeLanguage, changeBGAnimation, changeMusicState"]),
    showHeader() {
      this.isShowHeader = true
    },
    hideHeader() {
      this.isShowHeader = false
    },
    changeLanguage(e) {
      let local = e.target.value

      let fullPath = this.$router.app._route.fullPath
      let childPath = fullPath.replace(`/${this.$store.state.locale}/`, "")
      this.$router.push({
        path: "/" + local + "/" + childPath
      })

      this.$store.commit("changeLanguage", local)
    },
    onBGAnimationChange(e) {
      this.$store.commit("changeBGAnimation", e)
    },
    onMusicChange(e) {
      this.$store.commit("changeMusicState", e)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-mask {
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 5;
}

.header {
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: rgba(83, 80, 80, 0.555);
    z-index: 10;
    color: #fff;
    overflow: hidden;
    .item {
        margin: 0 20px;
    }
}

.head-expand-enter-active, .head-expand-leave-active {
    transition: all 0.5s;
}
.head-expand-enter, .head-expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
    // height: 0;
    width: 0
}
</style>
