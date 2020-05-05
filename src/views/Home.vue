<template>
  <div class="home" :class="isCn ? 'zh' : 'en'">
    <div class="icons">
      <a-popover title>
        <template slot="content">
          <img :src="weiXinIcon" width="100px" />
        </template>
        <a-icon type="wechat" />
      </a-popover>
      <a-popover title>
        <template slot="content">
          <img :src="qqIcon" width="100px" />
        </template>
        <a-icon type="qq" />
      </a-popover>
      <a-popover title>
        <template slot="content">
          <img :src="zhiFuBaoIcon" width="100px" />
        </template>
        <a-icon type="alipay" />
      </a-popover>
      <a href="https://github.com/Liushun94" target="view_window">
        <a-icon type="github" />
      </a>
    </div>
    <p v-html="currentText"></p>
  </div>
</template>

<script>
import weiXinIcon from "@/assets/img/weixin.jpg";
import qqIcon from "@/assets/img/qq.jpg";
import zhiFuBaoIcon from "@/assets/img/zhiFuBao.jpg";

export default {
  data() {
    return {
      weiXinIcon,
      qqIcon,
      zhiFuBaoIcon,
      isShow: false,
      currentText: "",
      textArr: [
        `${this.$t("home.name")}<br/>`,
        `${this.$t("home.job")}<br/>`,
        `${this.$t("home.email")}<br/>`,
        `${this.$t("home.phone")}`
      ]
    };
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
      return this.$i18n.locale === "zh";
    }
  },
  watch: {
    async isCn() {
      this.currentText = "";
      await this.progressivelyShowText(0);
      await this.progressivelyShowText(1);
      await this.progressivelyShowText(2);
      await this.progressivelyShowText(3);
    }
  },
  methods: {
    progressivelyShowText(n) {
      return new Promise(res => {
        let showText = function() {
          let text = this.textArr[n];
          if (!text) return;
          let length = this.textArr
            .filter((_, i) => i <= n)
            .map(item => item.length)
            .reduce((p, c) => p + c);
          let prefixLength = length - text.length;
          if (this.currentText.length < length) {
            let l = this.currentText.length - prefixLength;
            let char = text.substring(l, l + 1);
            this.currentText += char;
            setTimeout(showText, 50);
          } else {
            res();
          }
        }.bind(this);
        showText();
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.home {
  font-size: 35px;
  margin-top: 50px;
  // text-align: center;
  line-height: 2;

  &.zh {
    font-family: 'myFont_zh';
  }

  &.en {
    font-family: 'myFont_en';
  }

  .icons {
    i {
      margin: 0 20px;
    }
  }
}
</style>
