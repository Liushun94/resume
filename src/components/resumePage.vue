<template>
  <transition name="fade-resume">
    <div>
      <div class="resume" v-show="resumeCollapsed">
        <a-button type="primary" class="exportBtn" @click="exportPDF()">导出简历PDF格式</a-button>
        <a-tooltip title="退出" placement="left">
          <img :src="deleteIcon" alt srcset class="deleteIcon" @click="hideResume()" />
        </a-tooltip>
        <div class="resumeContent">
          <header>
            <span class="header-title">个人简历</span>
            <a-divider type="vertical" class="header-divider" />
            <span class="header-text">
              <div>求职意向：web前端</div>
              <div class="header-text-en">Personal resume</div>
            </span>
            <span class="header-icons">
              <img :src="headerIcon1" id="resumeHeaderIcon1" class="header-icon header-icon1" />
              <img :src="headerIcon2" id="resumeHeaderIcon2" class="header-icon header-icon2" />
              <img :src="headerIcon3" id="resumeHeaderIcon3" class="header-icon header-icon3" />
            </span>
          </header>
          <!-- 分割线 -->
          <div class="divide">
            <div class="divide-left">
              <div class="devide-left-after"></div>
            </div>
            <div class="divide-right">
              <div class="devide-right-after"></div>
            </div>
          </div>

          <!-- <embed :src="testSvg" type id="tableSvg" /> -->
          <canvas ref="table" id="table" width="1238" height="1326"></canvas>

          <!-- 表内容 -->
          <div ref="content" class="content">
            <!-- 竖线 -->
            <div class="content-link-line"></div>
            <!-- 基本信息 -->
            <div class="baseInfo content-item">
              <div class="content-header">
                基本信息
                <div class="content-header-divide"></div>
                <div class="content-header-divide content-header-divide1"></div>
              </div>
              <div class="content-text">
                <a-row>
                  <a-col :span="18" class="content-text-container">
                    <a-row class="content-text-container-row">
                      <a-col :span="12">
                        <span
                          v-html="
                            '姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名: '
                          "
                        ></span>
                        <span>刘舜</span>
                      </a-col>
                      <a-col :span="12">
                        <span>出生年月:</span>
                        <span>1994年12月</span>
                      </a-col>
                    </a-row>
                    <a-row class="content-text-container-row">
                      <a-col :span="12">
                        <span
                          v-html="
                            '名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族: '
                          "
                        ></span>
                        <span>汉</span>
                      </a-col>
                      <a-col :span="12">
                        <span
                          v-html="
                            '身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高: '
                          "
                        ></span>
                        <span>175cm</span>
                      </a-col>
                    </a-row>
                    <a-row class="content-text-container-row">
                      <a-col :span="12">
                        <span
                          v-html="
                            '电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话: '
                          "
                        ></span>
                        <span>15623457145</span>
                      </a-col>
                      <a-col :span="12">
                        <span v-html="'政治面貌: '"></span>
                        <span>团员</span>
                      </a-col>
                    </a-row>
                    <a-row class="content-text-container-row">
                      <a-col :span="12">
                        <span
                          v-html="
                            '邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱: '
                          "
                        ></span>
                        <span>1721864248@qq.com</span>
                      </a-col>
                      <a-col :span="12">
                        <span v-html="'毕业院校: '"></span>
                        <span>湖北工业大学商贸学院</span>
                      </a-col>
                    </a-row>
                    <a-row class="content-text-container-row">
                      <a-col :span="12">
                        <span
                          v-html="
                            '住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址: '
                          "
                        ></span>
                        <span>武汉市洪山区保利公园九里</span>
                      </a-col>
                      <a-col :span="12">
                        <span
                          v-html="
                            '学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历: '
                          "
                        ></span>
                        <span>本科</span>
                      </a-col>
                    </a-row>
                  </a-col>
                  <a-col :span="6" class="content-text-img">
                    <img :src="selfImg" class="selfImg" />
                  </a-col>
                </a-row>
              </div>
            </div>
            <!-- 教育工作经历 -->
            <div class="education content-item">
              <div class="content-header">
                教育工作经历
                <div class="content-header-divide"></div>
                <div class="content-header-divide content-header-divide1"></div>
              </div>
              <div class="content-text">
                <div class="content-text-box">
                  <h2>教育经历</h2>
                  <a-row>
                    <a-col :span="8">2012.6 -- 2016.6</a-col>
                    <a-col :span="8">湖北工业大学商贸学院</a-col>
                    <a-col :span="8">机械设计制造及自动化(本科)</a-col>
                  </a-row>
                  <br />
                  <h2>工作经历</h2>
                  <a-row>
                    <a-col :span="8">2016.6 -- 2018.2</a-col>
                    <a-col :span="16">从事的机械设计相关的工作。</a-col>
                  </a-row>
                  <a-row>
                    <a-col :span="8">2018.2 -- 至今</a-col>
                    <a-col :span="16">塞瓦软件武汉分公司，从事前端开发工作。</a-col>
                  </a-row>
                </div>
              </div>
            </div>
            <!-- 项目经验 -->
            <div class="exprience content-item">
              <div class="content-header">
                项目经验
                <div class="content-header-divide"></div>
                <div class="content-header-divide content-header-divide1"></div>
              </div>
              <div class="content-text">
                <div class="content-text-box">
                  <h2>智能分组传送网设备（SPTN）网管软件</h2>
                  <p>中国核电第34研究所的外包项目，项目主要需求为为客户那边的业务数据进行可视化展示，将各个现实中的设备采用图元代替，进而来模拟展示设备间的链接通信状态等场景。还有制作各种表单来满足对具体业务的配置功能。</p>
                  <br />
                  <h2>南瑞用电信息大屏展示项目</h2>
                  <p>结合南瑞的业务需求，制作大屏展示的外包项目，页面构成主要是通过各种图表和中间的地图，地图是通过公司的拓扑SDK实现（一种图元拖拽，信息显示，显示图元关系的库），是纯前端项目，没有后台。</p>
                  <br />
                  <h2>智慧铁路供配电运维管理平台</h2>
                  <p>给济南铁路做的管理平台外包项目，包含2D和3D界面，通过各种数据可视化的处理方式，来展现实际场景的业务数据以及真实场景。</p>
                  <br />
                  <h2>CIS智能检索</h2>
                  <p>华为外包的CIS业务，完成智能检索页面，实现业务数据的分类展示，定向查询功能。</p>
                  <br />
                </div>
              </div>
            </div>
            <!-- 自我评价 -->
            <div class="evaluate content-item">
              <div class="content-header">
                自我评价
                <div class="content-header-divide"></div>
                <div class="content-header-divide content-header-divide1"></div>
              </div>
              <div class="content-text">
                <div class="content-text-box">
                  <p>
                    虽然我不是计算机专业出身但是当初自己凭借着对web开发强大的兴趣，自学转行进入该行业，如今从事前端开发已经快3年了，参与过多个前端项目的开发。对于新技术有着高效的自学能力和强烈的求知欲。具备独立解决问题的能力。对工作具有责任心和执行力。对Web具有强烈热情。在这段工作期间以熟练掌握前端开发的多项技能，熟练掌握Javascript语言,熟练掌握的框架有vue,
                    angular,熟练掌握的后台nodejs相关的编写。熟练掌握git版本管理以及webpack，gulp等打包工具的使用。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import headerIcon1 from "@/assets/img/education.png";
import headerIcon2 from "@/assets/img/bag.png";
import headerIcon3 from "@/assets/img/pen.png";
import deleteIcon from "@/assets/img/delete.png";
import selfImg from "@/assets/img/self.jpg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      headerIcon1,
      headerIcon2,
      headerIcon3,
      deleteIcon,
      selfImg
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      resumeCollapsed: state => state.isShowResume
    })
  },
  methods: {
    ...mapMutations(["changeResumeState"]),
    exportPDF() {
      console.log("export");
      html2canvas(document.querySelector(".resumeContent"), {
        dpi: 172, //导出pdf清晰度
        //背景设为白色（默认为黑色）
        background: "#fff"
      }).then(canvas => {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;
        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = (contentWidth / 592.28) * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = contentHeight;
        //pdf页面偏移
        var position = 0;
        //html页面生成的canvas在pdf中图片的宽高（a4纸的尺寸[595.28,841.89]）
        var imgWidth = 595.28;
        var imgHeight = (592.28 / contentWidth) * contentHeight;
        var pageData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF("", "pt", "a4");
        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            //避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage();
            }
          }
        }
        pdf.save("刘舜的简历.pdf");
      });
    },
    hideResume() {
      // this.resumeCollapsed = false
      this.$store.commit("changeResumeState", false);
    },
    drawTable() {
      let canvas = this.$refs.table;
      const ctx = canvas.getContext("2d");
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#0080ff";
      ctx.moveTo(100, 0);
      let x = 100;
      let y = 0;
      let arr = [
        {
          x: 100,
          y: 60
        },
        {
          x: 1100,
          y: 60
        },
        {
          x: 100,
          y: 290
        },
        {
          x: 1100,
          y: 290
        },
        {
          x: 100,
          y: 550
        },
        {
          x: 1100,
          y: 550
        },
        {
          x: 100,
          y: 1120
        },
        {
          x: 1100,
          y: 1120
        },
        {
          x: 100,
          y: 1340
        }
      ];
      let count = 0;
      let current = arr[count];

      const time = setInterval(() => {
        if (count >= arr.length) {
          clearInterval(time);
          canvas.style.display = "none";

          var tl = this.$anime.timeline({
            easing: "easeOutExpo",
            duration: 1000
          });
          tl.add({
            targets: ".content",
            scale: 1,
            opacity: 1
          })
            .add({
              targets: ".baseInfo .content-header",
              opacity: 1,
              translateX: "-15px"
            })
            .add({
              targets: ".baseInfo .content-text-container",
              opacity: 1
            })
            .add({
              targets: ".baseInfo .content-text-img",
              opacity: 1
            })
            .add({
              targets: ".education .content-header",
              opacity: 1,
              translateX: "-15px"
            })
            .add({
              targets: ".education .content-text-box",
              opacity: 1
            })
            .add({
              targets: ".exprience .content-header",
              opacity: 1,
              translateX: "-15px"
            })
            .add({
              targets: ".exprience .content-text-box",
              opacity: 1
            })
            .add({
              targets: ".evaluate .content-header",
              opacity: 1,
              translateX: "-15px"
            })
            .add({
              targets: ".evaluate .content-text-box",
              opacity: 1
            });
        }
        if (current && x >= current.x && y >= current.y) {
          count += 1;
          current = arr[count];
          x = 100;
          ctx.moveTo(x, y);
        }

        if (current && x < current.x) {
          x += 100;
        }
        if (current && y < current.y) {
          y += 30;
        }
        ctx.lineTo(x, y);
        ctx.stroke();
      }, 100);
    }
  },
  watch: {
    resumeCollapsed(isShow) {
      let that = this;
      if (isShow) {
        var tl = this.$anime.timeline({
          easing: "easeOutExpo",
          duration: 450
        });

        tl.add({
          targets: ".resume",
          minHeight: "1250px"
        })
          .add({
            targets: ".header-title",
            opacity: 1,
            translateY: 30
          })
          .add({
            targets: ".header-divider",
            opacity: 1,
            translateY: 30
          })
          .add({
            targets: ".header-text",
            opacity: 1,
            translateY: 30
          })
          .add({
            targets: "#resumeHeaderIcon1",
            opacity: 1,
            right: 0,
            rotate: "1turn"
          })
          .add({
            targets: "#resumeHeaderIcon2",
            opacity: 1,
            right: "60px",
            rotate: "1turn"
          })
          .add({
            targets: "#resumeHeaderIcon3",
            opacity: 1,
            right: "120px",
            rotate: "1turn"
          })
          // .add({
          //   targets: ".header-icons",
          //   opacity: 1,
          //   translateY: 30
          // })
          .add({
            targets: ".divide-left",
            width: "58%"
          })
          .add(
            {
              targets: ".devide-left-after",
              opacity: 1
            },
            "-=300"
          )
          .add(
            {
              targets: ".devide-right-after",
              opacity: 1
            },
            "-=300"
          )
          .add(
            {
              targets: ".divide-right",
              width: "40%",
              complete: function(anim) {
                console.log("completed : " + anim.completed, that);
                that.drawTable();
              }
            },
            "-=300"
          );
        // .add({
        //   targets: ".content",
        //   opacity: 1
        // });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.exportBtn {
  left: 50%;
  position: absolute;
  top: 10px;
  transform: translateX(-50%);
}

.deleteIcon {
  width: 48px;
  position: absolute;
  top: 20px;
  right: 40px;
}

.resume {
  position: absolute;
  top: 0;
  width: 100%;
  // height: 0;
  z-index: 100;
  background: #fff;
  transition: height 1s;
  padding: 60px 10px;

  .resumeContent {
    width: 1240px;
    min-height: 1250px;
    border: 1px solid #ccc;
    margin: auto;

    // padding: 40px 30px;
    header {
      color: #004d99;
      padding: 0 80px;
      margin-bottom: 30px;

      .header-title {
        display: inline-block;
        font-size: 50px;
        opacity: 0;
      }

      .header-divider /deep/ .ant-divider, .ant-divider-vertical {
        height: 4.5em;
        width: 2px;
        top: -1em;
        background: #004d99;
        opacity: 0;
      }

      .header-text {
        display: inline-block;
        font-weight: bold;
        opacity: 0;

        .header-text-en {
          font-size: 1.4em;
        }
      }

      .header-icons {
        float: right;
        position: relative;

        // opacity: 0;
        .header-icon {
          width: 35px;
          // margin: 25px 10px;
          position: absolute;
          opacity: 0;
          top: 50px;
        }
      }
    }

    .divide {
      height: 20px;

      .divide-left {
        // width: 58%;
        width: 0;
        height: 20px;
        display: inline-block;
        background: #004d99;

        .devide-left-after {
          display: inline-block;
          float: right;
          opacity: 0;
          border-bottom: 20px solid #004d99;
          border-right: 20px solid transparent;
          transform: translateX(20px);
        }
      }

      .divide-right {
        // width: 40%;
        width: 0%;
        height: 15px;
        display: inline-block;
        background: #e8c464;
        margin-left: 24px;

        .devide-right-after {
          display: inline-block;
          opacity: 0;
          border-top: 16px solid #e8c464;
          border-left: 16px solid transparent;
          transform: translateX(-15px);
        }
      }
    }

    .content {
      padding: 0px 80px;
      opacity: 0;
      // display: none;
      transform: scale(2, 2);

      .content-link-line {
        height: 30px;
        width: 1px;
        background: #004d99;
      }

      .content-item {
        .content-header {
          width: 180px;
          height: 30px;
          line-height: 30px;
          background: #004d99;
          padding-left: 5px;
          color: #fff;
          font-size: 18px;
          transform: translateX(-60px);
          opacity: 0;
          // transform: translateX(-15px);
          position: relative;

          &::after {
            content: '';
            display: inline-block;
            border-top: 31px solid #fff;
            border-left: 31px solid transparent;
            float: right;
            transform: translate(1px, -1px);
          }

          &::before {
            content: '';
            display: inline-block;
            border-top: 15px solid #004d99;
            border-left: 15px solid transparent;
            float: left;
            transform: translate(-5px, 30px);
          }

          .content-header-divide {
            background: #fff;
            width: 3px;
            height: 100%;
            position: absolute;
            right: 40px;
            top: 0;
            transform: skew(45deg, 0deg);
          }

          .content-header-divide1 {
            right: 32px;
          }
        }

        .content-text {
          min-height: 200px;
          height: 100%;
          border: 1px solid #0080ff;
          border-right-color: transparent;
          border-bottom-color: transparent;
          box-sizing: content-box;
          font-size: 16px;
          font-weight: 550;

          .content-text-container {
            opacity: 0;
            padding: 20px 40px;

            .content-text-container-row {
              margin: 5px 0;
            }
          }

          .content-text-img {
            height: 100%;
            opacity: 0;

            .selfImg {
              width: 269px;
              height: 232px;
              position: absolute;
              border: 1px solid #0080ff;
            }
          }

          .content-text-box {
            opacity: 0;
            padding: 20px 40px;
          }
        }
      }
    }
  }
}

.fade-resume-enter-active, .fade-resume-leave-active {
  transition: height 0.5s;
}

.fade-resume-enter, .fade-resume-leave-to { /* .fade-leave-active, 2.1.8 版本以下 */
  height: 0;
}
</style>
