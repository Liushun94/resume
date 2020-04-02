<template>
  <div class="home" :class="isCn ? 'zh' : 'en'">
    <!-- <p>{{ $t("home.name") }}</p>
    <p>{{ $t("home.job") }}</p>
    <p>1721864248@qq.com</p> -->
    <p v-html="currentText"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      currentText: '',
      text: `
        大家好! 我叫刘舜
        职业是一名前端工程师
        邮箱: 1721864248@qq.com
        电话：15623457145
      `,
      textArr: [
        `${this.$t("home.name")}<br/>`,
        `${this.$t("home.job")}<br/>`,
        `${this.$t("home.email")}<br/>`,
        `${this.$t("home.phone")}`
      ]
    }
  },
  async mounted() {
    // this.currentText = ''
    await this.progressivelyShowText(0);
    await this.progressivelyShowText(1);
    await this.progressivelyShowText(2);
    await this.progressivelyShowText(3);
  },
  computed: {
    isCn() {
      return this.$i18n.locale === "zh"
    }
  },
  watch: {
    async isCn() {
      this.currentText = ''
      this.textArr = [
        `${this.$t("home.name")}<br/>`,
        `${this.$t("home.job")}<br/>`,
        `${this.$t("home.email")}<br/>`,
        `${this.$t("home.phone")}`
      ]
      await this.progressivelyShowText(0);
      await this.progressivelyShowText(1);
      await this.progressivelyShowText(2);
      await this.progressivelyShowText(3);
    }
  },
  methods: {
    progressivelyShowText(n) {
      return new Promise(res => {
        let showText = (function(){
          let text = this.textArr[n];
          if(!text) return
          let length = this.textArr.filter((_,i) => i<=n).map(item => item.length).reduce((p,c) => p+c)
          let prefixLength = length - text.length
          if(this.currentText.length < length){
            let l = this.currentText.length - prefixLength
            let char = text.substring(l, l+1)
            this.currentText += char
            setTimeout(showText, 50)
          }else{
            res()
          }
        }).bind(this)
        showText()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
    font-size: 35px;
    margin-top: 50px;
    // text-align: center;
    line-height: 2;
    &.zh
        font-family: 'myFont_zh';

    &.en
        font-family: 'myFont_en';
</style>
