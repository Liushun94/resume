import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Skill from "../views/Skill.vue"
import Experience from "../views/Experience.vue"
import Project from "../views/Project.vue"
import Detail from "../views/Detail.vue"
import Resume from "../views/Resume.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/skill",
    name: "Skill",
    component: Skill
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience
  },
  {
    path: "/project",
    name: "Project",
    component: Project
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
