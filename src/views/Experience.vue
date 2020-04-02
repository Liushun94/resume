<template>
  <div class="experience" :class="isCn ? 'zh' : 'en'">
    <h2>{{ $t("experience.title") }}:</h2>

    <a-timeline mode="alternate" class="timeline">
      <a-timeline-item class="timelineIconBG">
        <a-icon slot="dot" type="clock-circle-o" :spin="spin" />
        {{ $t("experience.time1") }}
      </a-timeline-item>
      <a-timeline-item color="green" class="timelineIconBG timelineText">
        <a-icon slot="dot" type="code" />
        {{ $t("experience.text1") }}
      </a-timeline-item>

      <a-timeline-item class="timelineIconBG">
        <a-icon slot="dot" type="clock-circle-o" :spin="spin" />
        {{ $t("experience.time2") }}
      </a-timeline-item>
      <a-timeline-item color="green" class="timelineIconBG timelineText">
        <a-icon slot="dot" type="code" />
        {{ $t("experience.text2") }}
      </a-timeline-item>

      <a-timeline-item class="timelineIconBG">
        <a-icon slot="dot" type="clock-circle-o" :spin="spin" />
        {{ $t("experience.time3") }}
      </a-timeline-item>
      <a-timeline-item color="green" class="timelineIconBG timelineText">
        <a-icon slot="dot" type="code" />
        {{ $t("experience.text3") }}
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spin: true
    }
  },
  computed: {
    isCn() {
      return this.$i18n.locale === "zh"
    }
  }
}
</script>

<style lang="stylus" scoped>
.experience {
  color: #fff;
  font-size: 60px;
  // width: 1200px;
  padding: 0 50px;
  &.zh {
    font-family: "myFont_zh";
  }
  &.en {
    font-family: "myFont_en";
  }
  h2 {
    font-size: 50px;
    color: #fff;
  }
  .timeline /deep/ .ant-timeline-item {
    color: #fff !important;
    font-size: 30px;
  }
  .timelineIconBG /deep/ .ant-timeline-item-head {
    background: #000;
  }
  .timelineText /deep/ .ant-timeline-item-content {
    color: #fff !important;
    font-size: 20px;
  }
}
</style>
