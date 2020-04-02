<template>
  <canvas id="stars"></canvas>
</template>

<script>
import meteorStart from "@/assets/js/stars.js"

export default {
  name: "meteorCanvas",
  mounted() {
    meteorStart(window.innerWidth, window.innerHeight)
  }
}
</script>

<style lang="stylus" scoped>
canvas
  width: 100%;
  height: 100vh;
  overflow: overlay;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
</style>
