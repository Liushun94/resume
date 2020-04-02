<template>
  <div class="skill" :class="isCn ? 'zh' : 'en'">
    <h2>{{ $t("skill.title") }}:</h2>

    <a-collapse :defaultActiveKey="activeKey" :bordered="false">
      <a-collapse-panel :header="header1" key="1">
        <a-tooltip :key="index" v-for="(tag, index) in tags" :title="tag.text">
          <a-tag :color="tag.color">{{ tag.text }}</a-tag>
        </a-tooltip>
      </a-collapse-panel>
      <a-collapse-panel :header="header2" key="2">
        <div
          :key="index"
          v-for="(tag, index) in tags"
          :style="{ color: tag.color }"
        >
          <a-row>
            <a-col :span="4">
              <span> {{ tag.text }}</span>
            </a-col>
            <a-col :span="20">
              <a-rate
                allowHalf
                :defaultValue="tag.value"
                disabled
                :style="{ color: tag.color }"
              >
                <a-icon slot="character" type="heart" />
              </a-rate>
            </a-col>
          </a-row>
        </div>
      </a-collapse-panel>
      <a-collapse-panel :header="header3" key="3">
        <div id="radar" ref="radar"></div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import radar from "@/assets/js/radar"

export default {
  data() {
    return {
      activeKey: ["1", "2", "3"],
      header1: this.$t("skill.collapse.header1"),
      header2: this.$t("skill.collapse.header2"),
      header3: this.$t("skill.collapse.header3"),
      tags: [
        {
          color: "#FFB6C1",
          value: 5,
          score: 100,
          text: "H5"
        },
        {
          color: "#DC143C",
          value: 4,
          score: 80,
          text: "JavaScript"
        },
        {
          color: "#8B008B",
          value: 3.5,
          score: 70,
          text: "nodeJs"
        },
        {
          color: "#7B68EE",
          value: 3.5,
          score: 75,
          text: "Vue"
        },
        {
          color: "#1E90FF",
          value: 4,
          score: 70,
          text: "Angular8"
        },
        {
          color: "#00CED1",
          value: 4,
          score: 80,
          text: "Git"
        },
        {
          color: "#FFD700",
          value: 3,
          score: 60,
          text: "Webpack"
        },
        {
          color: "#FF7F50",
          value: 4,
          score: 85,
          text: "ES6"
        }
      ]
    }
  },
  computed: {
    isCn() {
      return this.$i18n.locale === "zh"
    }
  },
  mounted() {
    let id = this.$refs.radar
    let data = this.tags.map(tag => {
      return {
        item: tag.text,
        score: tag.score
      }
    })

    radar(id, data, this.$g2plot.Radar).render()
  }
}
</script>

<style lang="stylus" scoped>
.skill {
  color: #fff;
  font-size: 60px;
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
}
</style>
