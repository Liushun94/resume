<template>
  <div class="stagger">
    <div class="grid">
      <div v-for="count in 224" :key="count" class="small square el"></div>
    </div>
    <div class="grid shadow">
      <div v-for="count in 224" :key="count" class="small square"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loading"],
  mounted() {
    this.$anime({
      targets: ".stagger .el",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 }
      ],
      delay: this.$anime.stagger(400, { grid: [20, 10], from: "center" }),
      loop: true
    }).play()
  },
  watch: {
    loading(isLoad) {
      if (!isLoad) {
        this.$anime.remove(".stagger .el")
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.stagger {
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 840px;
    height: 100%;
  .grid {
      display: flex;
      flex-wrap: wrap;
      .small {
        width: 18px;
        height: 18px;
      }
      .square {
        pointer-events: none;
        position: relative;
        width: 28px;
        height: 28px;
        margin: 1px;
        background-color: #00D672;
        font-size: 14px;
      }
  }
  .shadow {
    position: absolute;
    opacity: .2;
  }
}
</style>
