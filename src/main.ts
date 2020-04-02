import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import Vue18n from "vue-i18n"
import antDesign from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import "@/assets/css/base.css"

const g2plot = require("@antv/g2plot")
Vue.prototype.$g2plot = g2plot

Vue.config.productionTip = false

Vue.use(Vue18n)
Vue.use(antDesign)

const i18n = new Vue18n({
  locale: "zh",
  messages: {
    zh: require("./locale/zh.js"),
    en: require("./locale/en.js")
  }
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app")
