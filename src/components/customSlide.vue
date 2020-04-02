<template>
  <transition name="fade">
    <div class="slide" v-show="collapsed">
      <div class="item">
        <label for>{{ $t("setting.set_local_text") }}：</label>
        <a-radio-group
          :defaultValue="defaultRadio"
          buttonStyle="solid"
          size="small"
          @change="changeLanguage"
        >
          <a-radio-button value="zh">zh</a-radio-button>
          <a-radio-button value="en">en</a-radio-button>
        </a-radio-group>
      </div>

      <div class="item">
        <label for>{{ $t("setting.set_bg_animation") }}:</label>
        <a-switch :defaultChecked="defaultBGAnimation" @change="onBGAnimationChange" />
      </div>

      <!-- <div class="item">
          <label for="">{{ $t("setting.set_music") }}: </label>
          <a-switch :defaultChecked="defaultMusic" @change="onMusicChange" />
      </div>-->
    </div>
  </transition>
</template>

<script>
export default {
  props: ["collapsed"],
  data() {
    return {
      defaultRadio: this.$i18n.locale,
      defaultBGAnimation: this.$store.state.isOpenBGAnimation,
      defaultMusic: this.$store.state.isMusicOpen
    };
  },
  methods: {
    changeLanguage(e) {
      this.$i18n.locale = e.target.value;
    },
    onBGAnimationChange(e) {
      this.$store.commit("changeBGAnimation", e);
    }
  }
};
</script>

<style lang="stylus" scoped>
.slide {
  position: fixed;
  right: 0;
  width: 200px;
  height: 100%;
  background: rgba(83, 80, 80, 0.555);
  color: #fff;
  overflow: hidden;
  transition: width 1s;
  padding: 60px 10px;

  .item {
    margin: 20px 0;
    white-space: nowrap;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: width 0.5s;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active, 2.1.8 版本以下 */
  width: 0;
}
</style>