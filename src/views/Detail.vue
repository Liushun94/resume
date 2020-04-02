<template>
  <div class="detail">
    <h2>{{ data.title }}</h2>

    <a-tooltip :title="$t('detail.back')" overlayClassName="customTooltip">
      <a-button shape="circle" icon="rollback" class="back" @click="toBack"></a-button>
    </a-tooltip>
    <hr />

    <p class="desc">
      <strong>简介：</strong>
      {{ data.desc1 }}
    </p>

    <div>
      <a-carousel arrows dotsClass="slick-dots slick-thumb" class="carousel">
        <div
          slot="prevArrow"
          slot-scope="props"
          class="custom-slick-arrow"
          style="left: 10px;zIndex: 1"
        >
          <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" />
        </div>
        <a slot="customPaging" slot-scope="props">
          <img :src="getImgUrl(props.i)" />
        </a>
        <div v-for="(item, i) in data.detail" :key="i">
          <img :src="item.src" />
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script>
import projectData from "@/assets/js/projectData";

export default {
  data() {
    return {};
  },
  created() {
    console.log(this);
    let id = window.location.search.replace("?id=", "");
    this.data = projectData[id];
  },
  methods: {
    getImgUrl(i) {
      return this.data.detail[i].src;
    },
    toBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.detail {
  position: relative;

  h2 {
    font-size: 35px;
    color: #fff;
  }

  .back {
    position: fixed;
    right: 50px;
    top: 30px;
  }

  .desc {
    margin: 10px;
  }

  .ant-carousel {
    min-height: 480px;
  }

  .ant-carousel /deep/ .slick-dots {
    height: auto;
  }

  .ant-carousel /deep/ .slick-slide img {
    border: 5px solid #fff;
    display: block;
    margin: auto;
    max-width: 80%;
  }

  .ant-carousel /deep/ .slick-thumb {
    bottom: -45px;
  }

  .ant-carousel /deep/ .slick-thumb li {
    width: 60px;
    height: 45px;
  }

  .ant-carousel /deep/ .slick-thumb li img {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }

  .ant-carousel /deep/ .slick-thumb li.slick-active img {
    filter: grayscale(0%);
  }

  .ant-carousel /deep/ .slick-slide {
    text-align: center;
    // height: 160px;
    // line-height: 160px;
    // background: #364d79;
    overflow: hidden;
  }

  .ant-carousel /deep/ .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    // background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }

  .ant-carousel /deep/ .custom-slick-arrow:before {
    display: none;
  }

  .ant-carousel /deep/ .custom-slick-arrow:hover {
    opacity: 0.5;
  }
}
</style>
