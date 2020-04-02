import coverImg34suo from "@/assets/img/project/34suo/1.png"
import coverImgNanRui from "@/assets/img/project/nanRui/1.png"
import coverImgJiNan from "@/assets/img/project/jiNan/1.png"
import coverImgCIS from "@/assets/img/project/cis/1.png"

import detailImg1_34suo from "@/assets/img/project/34suo/2.png"
import detailImg2_34suo from "@/assets/img/project/34suo/3.png"
import detailImg3_34suo from "@/assets/img/project/34suo/4.png"
import detailImg4_34suo from "@/assets/img/project/34suo/5.png"
import detailImg5_34suo from "@/assets/img/project/34suo/6.png"
import detailImg6_34suo from "@/assets/img/project/34suo/7.png"

import detailImg1_nanRui from "@/assets/img/project/nanRui/2.png"
import detailImg2_nanRui from "@/assets/img/project/nanRui/3.png"
import detailImg3_nanRui from "@/assets/img/project/nanRui/4.png"
import detailImg4_nanRui from "@/assets/img/project/nanRui/5.png"
import detailImg5_nanRui from "@/assets/img/project/nanRui/6.png"
import detailImg6_nanRui from "@/assets/img/project/nanRui/7.png"
import detailImg7_nanRui from "@/assets/img/project/nanRui/8.png"
import detailImg8_nanRui from "@/assets/img/project/nanRui/9.png"

import detailImg1_jiNan from "@/assets/img/project/jiNan/2.png"
import detailImg2_jiNan from "@/assets/img/project/jiNan/3.png"

import detailImg1_cis from "@/assets/img/project/cis/2.png"
import detailImg2_cis from "@/assets/img/project/cis/3.png"
import detailImg3_cis from "@/assets/img/project/cis/4.png"
import detailImg4_cis from "@/assets/img/project/cis/5.png"
import detailImg5_cis from "@/assets/img/project/cis/6.png"
import detailImg6_cis from "@/assets/img/project/cis/7.png"

const list = [
  {
    title: "智能分组传送网设备（SPTN）网管软件",
    desc:
      "中国核电第34研究所的外包项目，项目主要需求为为客户那边的业务数据进行可视化展示，将各个现实中的设备采用图元代替，进而来模拟展示设备间的链接通信状态等场景。还有制作各种表单来满足对具体业务的配置功能。",
    desc1:
      "该项目采用了原生JS开发，大部分使用到的组件都是通过自己手写完成，前端使用到的第三方库包含echart,select2,twaver, 后端采用的koa2进行的开发模拟真实数据交换。打包使用的gulp",
    coverImgSrc: coverImg34suo,
    detail: [
      {
        src: detailImg1_34suo
      },
      {
        src: detailImg2_34suo
      },
      {
        src: detailImg3_34suo
      },
      {
        src: detailImg4_34suo
      },
      {
        src: detailImg5_34suo
      },
      {
        src: detailImg6_34suo
      }
    ]
  },
  {
    title: "南瑞用电信息大屏展示项目",
    desc:
      "结合南瑞的业务需求，制作大屏展示的外包项目，页面构成主要是通过各种图表和中间的地图，地图是通过公司的拓扑SDK实现（一种图元拖拽，信息显示，显示图元关系的库），是纯前端项目，没有后台。",
    desc1:
      "该项目采用了原生JS开发，大部分使用到的组件都是通过自己手写完成，前端使用到的第三方库包含echart，twaver。打包使用的rollup。",
    coverImgSrc: coverImgNanRui,
    detail: [
      {
        src: detailImg1_nanRui
      },
      {
        src: detailImg2_nanRui
      },
      {
        src: detailImg3_nanRui
      },
      {
        src: detailImg4_nanRui
      },
      {
        src: detailImg5_nanRui
      },
      {
        src: detailImg6_nanRui
      },
      {
        src: detailImg7_nanRui
      },
      {
        src: detailImg8_nanRui
      }
    ]
  },
  {
    title: "智慧铁路供配电运维管理平台",
    desc:
      "给济南铁路做的管理平台外包项目，包含2D和3D界面，通过各种数据可视化的处理方式，来展现实际场景的业务数据以及真实场景。",
    desc1:
      "该项目采用了原生JS开发，大部分使用到的组件都是通过自己手写完成，前端使用到的第三方库包含echart, antv/g2，mono，twaver。打包使用的gulp。",
    coverImgSrc: coverImgJiNan,
    detail: [
      {
        src: detailImg1_jiNan
      },
      {
        src: detailImg2_jiNan
      }
    ]
  },
  {
    title: "CIS智能检索",
    desc:
      "华为外包的CIS业务，完成智能检索页面，实现业务数据的分类展示，定向查询功能",
    desc1:
      "项目使用的angular8作为框架，ui框架使用了ant-design和华为自己的tinyUI，使用到的第三方框架包含ag-grid, ace, i18n以及他们需要的权限管理功能, 后台采用的express模拟真实数据交互环境，打包使用的angular自带的build打包功能",
    coverImgSrc: coverImgCIS,
    detail: [
      {
        src: detailImg1_cis
      },
      {
        src: detailImg2_cis
      },
      {
        src: detailImg3_cis
      },
      {
        src: detailImg4_cis
      },
      {
        src: detailImg5_cis
      },
      {
        src: detailImg6_cis
      }
    ]
  }
]

export default list
