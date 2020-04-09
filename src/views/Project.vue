<template>
  <div class="project" :class="isCn ? 'zh' : 'en'">
    <h2>{{ $t("project.title") }}:</h2>

    <div class="content1 clearfix" ref="boxParent">
      <div
        v-for="(item, i) in list"
        :key="i"
        class="box"
        ref="box"
        @click="toDetail(i)"
      >
        <a-card hoverable style="width: 350px" class="card raised">
          <img
            alt="example"
            :src="item.coverImgSrc"
            slot="cover"
            @load="loadImg"
          />
          <a-card-meta :title="item.title">
            <template slot="description">{{ item.desc }}</template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import waterFall from "@/assets/js/waterFall"
import projectData from "@/assets/js/projectData"

import Waterfall from "vue-waterfall/lib/waterfall"
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot"

export default {
  data() {
    return {
      list: projectData
    }
  },
  computed: {
    isCn() {
      return this.$i18n.locale === "zh"
    }
  },
  mounted() {
    this.$notification["info"]({
      message: "友情提示",
      icon: <a-icon type="smile" style="color: #108ee9" />,
      style: {
        backgroundColor: "#87CEFA",
        color: "#fff"
      },
      placement: "bottomRight",
      duration: 4,
      description: this.$t("project.prompt")
    })

    window.onresize = () => {
      console.log("onresize")
      let that = this
      setTimeout(() => {
        waterFall(that.$refs.box, that.$refs.boxParent)
      })
    }
  },
  methods: {
    loadImg() {
      waterFall(this.$refs.box, this.$refs.boxParent)
    },
    toDetail(id) {
      this.$router.push({
        path: "detail",
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.project {
  color: #fff;
  font-size: 60px;

  &.zh {
    font-family: 'myFont_zh';
  }

  &.en {
    font-family: 'myFont_en';
  }

  h2 {
    font-size: 50px;
    color: #fff;
  }

  .prompt {
    font-size: 20px;
  }

  .content1 {
    position: relative;

    .box {
      float: left;
      width: 400px;
      padding: 25px;

      .card {
        transition: all 0.5s;

        &:hover {
          // box-shadow: 7px 10px 12px #0B8F86;
          transform: scale(1.1, 1.1);
        }
      }
    }
  }

  .clearfix:after {
    content: ' ';
    display: block;
    clear: both;
  }
}
</style>
