<template>
  <div class="about" :class="isCn ? 'zh' : 'en'">
    <a-skeleton
      :loading="loading"
      :avatar="SkeletonAvatarProps"
      :active="true"
      :paragraph="SkeletonParagraphProps"
      :title="SkeletonTitleProps"
    >
      <div :v-if="!loading">
        <h2>{{ $t("about.title") }}:</h2>
        <img :src="meSrc" width="70%" alt="" srcset="" />
        <span class="contentText">
          {{ $t("about.detail") }}
        </span>
      </div>
    </a-skeleton>
  </div>
</template>

<script>
import me from "@/assets/img/me.jpg"
export default {
  data() {
    return {
      meSrc: me,
      loading: true,
      SkeletonParagraphProps: {
        rows: 10,
        width: []
      },
      SkeletonTitleProps: {
        width: 100
      },
      SkeletonAvatarProps: {
        size: "large"
      }
    }
  },
  computed: {
    isCn() {
      return this.$i18n.locale === "zh"
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
}
</script>

<style lang="stylus" scoped>
.about
    color: #fff;
    font-size: 50px;
    &.zh
        font-family: 'myFont_zh';
    
    &.en
        font-family: 'myFont_en';
    
    h2 
        color: #fff;
    
    img 
        max-width: 250px;
        float: left;
        margin-right: 30px;
        border-radius: 50%;
    
    .contentText
        font-size: 30px;
    
</style>
