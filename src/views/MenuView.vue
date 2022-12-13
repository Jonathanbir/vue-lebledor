<template>
  <section class="menu-section">
    <header class="header">
      <div class="menu-kv">
        <div class="menu-kv-title"></div>
      </div>
    </header>

    <nav
      class="menu-nav-desk"
      :style="
        scroll && {
          position: 'fixed',
          top: '40px',
          zIndex: '98',
          height: '40px',
        }
      "
    >
      <div class="menu-nav-container">
        <ul class="menu-nav">
          <li
            class=""
            :style="
              scroll && {
                position: 'fixed',
                top: '40px',
                fontSize: '13px',
              }
            "
          >
            <a href="#signature-menu">精選菜色</a>
          </li>
        </ul>
      </div>
    </nav>

    <section id="signature-menu" class="menu-category signature-menu first">
      <div class="kv-canvas">
        <div class="kv-image signature"></div>
        <div class="kv-title signature">
          <img src="../images/signature-kv-title.png" />
        </div>
      </div>
      <!-- Slick -->
      <div id="signature-slick" class="menu-carousel">
        <div class="slider-for">
          <div class="menu-slide">
            <div class="cuisine-info">
              <h2>金色三麥現釀啤酒蝦</h2>
              <p>
                精選新鮮大蝦事先去除蝦殼，加入蔥蒜、辣椒乾煎後以啤酒調味，蝦肉鮮甜略帶淡淡啤酒麥香，是不可錯過的下酒良伴。
              </p>
            </div>
            <div class="cuisine-image">
              <img
                class="prev"
                src="//lebledor-img.s3.amazonaws.com/cover/7b942d07cdd519e2d815ed7f632c27e2.png"
                width="432"
                height="329.390625"
              /><img
                class="current"
                src="//lebledor-img.s3.amazonaws.com/cover/7b942d07cdd519e2d815ed7f632c27e2.png"
              />
            </div>
          </div>
        </div>
        <div class="slider-nav slick-initialized slick-slider">
          <swiper
            :slidesPerView="5"
            :spaceBetween="30"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              ><div
                class="menu-slide slick-slide slick-current slick-active active"
                data-slick-index="0"
                aria-hidden="false"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide00"
                style="width: 154px"
              >
                <img
                  src="//lebledor-img.s3.amazonaws.com/cover/7b942d07cdd519e2d815ed7f632c27e2.png"
                  alt="金色三麥現釀啤酒蝦"
                  data-info="精選新鮮大蝦事先去除蝦殼，加入蔥蒜、辣椒乾煎後以啤酒調味，蝦肉鮮甜略帶淡淡啤酒麥香，是不可錯過的下酒良伴。"
                />
                <p>金色三麥現釀啤酒蝦</p>
              </div></swiper-slide
            ><swiper-slide
              ><div
                class="menu-slide slick-slide slick-active"
                data-slick-index="1"
                aria-hidden="false"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide01"
                style="width: 154px"
              >
                <img
                  src="//lebledor-img.s3.amazonaws.com/cover/45bde60ce8bab51f706ca2a5b1d6a6b8.png"
                  alt="金色三麥經典大拼盤"
                  data-info="經典招牌組合，含酥炸椒麻雞、德國豬腳、美式薯條、德式香腸，一次享受所有經典、品味異國特色料理。"
                />
                <p>金色三麥經典大拼盤</p>
              </div></swiper-slide
            ><swiper-slide
              ><div
                class="menu-slide slick-slide slick-active"
                data-slick-index="2"
                aria-hidden="false"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide02"
                style="width: 154px"
              >
                <img
                  src="//lebledor-img.s3.amazonaws.com/cover/fcb1903e38bbf04a580bd835022346a3.png"
                  alt="墨魚醉嗆烏魚子"
                  data-info="大火將墨魚煎至金黃酥脆口感，再與烘烤過的烏魚子、培根丁拌炒，濃郁鹹香，一口接一口。"
                />
                <p>墨魚醉嗆烏魚子</p>
              </div></swiper-slide
            ><swiper-slide
              ><div
                class="menu-slide slick-slide slick-active"
                data-slick-index="3"
                aria-hidden="false"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide03"
                style="width: 154px"
              >
                <img
                  src="//lebledor-img.s3.amazonaws.com/cover/3f003b081f2f681fa9a6102a852fb369.png"
                  alt="海陸交響曲"
                  data-info="以墨魚醉嗆烏魚子與椒香滿天飛共譜驚豔味蕾的磅礡交響曲，一次擁有海陸美味。"
                />
                <p>海陸交響曲</p>
              </div></swiper-slide
            ><swiper-slide
              ><div
                class="menu-slide slick-slide slick-active"
                data-slick-index="4"
                aria-hidden="false"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide04"
                style="width: 154px"
              >
                <img
                  src="//lebledor-img.s3.amazonaws.com/cover/0c80741437f6c0a2184b482cad162ca1.png"
                  alt="蜜香滿天飛 "
                  data-info="尾韻輕盈的蜂蜜香氣，好吃到讓心飛起來！來自精選中段雞翅先炸再爆炒，飽滿吸收主廚的天然蜂蜜蔬果醬，香甜卻不膩口，蜜香迴盪久久。"
                />
                <p>蜜香滿天飛</p>
              </div> </swiper-slide
            ><swiper-slide
              ><div
                class="menu-slide slick-slide"
                data-slick-index="5"
                aria-hidden="true"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide05"
                style="width: 154px"
              >
                <img
                  src="//lebledor-img.s3.amazonaws.com/cover/536c9e8a9dc058d004a0294b55840313.png"
                  alt="極鮮和風紅鮪魚〔季節限定〕"
                  data-info="嚴選紅鮪魚以慢火微烤至半熟，
保留鮪魚新鮮微霜口感與風味，
灑上烏魚子、海苔絲，拌上特調芥末海苔粉，
極致鮮美、風味高雅。"
                />
                <p>極鮮和風紅鮪魚〔季節限定〕</p>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div
                class="menu-slide slick-slide"
                data-slick-index="6"
                aria-hidden="true"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide06"
                style="width: 154px"
              >
                <img
                  src="//lebledor-img.s3.amazonaws.com/cover/9af4cfad2ddb8b7186ccfeba474762fe.png"
                  alt="中卷花開滿堂香"
                  data-info="中卷新鮮美味富有嚼勁，加上主廚特製沙茶炒醬，混合蔥白、蔥綠、辣椒，炒拌出海鮮爽口新風味"
                />
                <p>中卷花開滿堂香</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="menu-slide slick-slide"
                data-slick-index="7"
                aria-hidden="true"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide07"
                style="width: 154px"
              >
                <img
                  src="//lebledor-img.s3.amazonaws.com/cover/6b1f37ccb3cf8fe181c1a76f53f7b914.png"
                  alt="舞味鮮蝦拌墨魚"
                  data-info="為了加倍襯出新鮮海鮮的清甜，主廚由經典「五味醬」為靈感創作醬汁，拌入彈脆的鮮蝦、墨魚與當季沙拉時蔬，舞動蒜香與酸甜鹹的滋味，又清爽又開胃！"
                />
                <p>舞味鮮蝦拌墨魚</p>
              </div>
            </swiper-slide>
          </swiper>

          <div aria-live="polite" class="slick-list">
            <div
              class="slick-track"
              role="listbox"
              style="opacity: 1; width: 1536px; left: 0px"
            ></div>
          </div>
        </div>
      </div>
      <!-- Slick -->
    </section>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

let modules = [Navigation];
const scroll = ref(false);

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 704) {
        scroll.value = true;
      } else {
        scroll.value = false;
      }
    },
    true
  );
});
</script>
<style lang="scss">
.swiper {
  position: relative;
}
.swiper-button-prev {
  position: absolute;
  bottom: 50%;
  z-index: 2;
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  opacity: 0.5;
  color: white;
  width: 11px;
  height: 19px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATBAMAAAC0B+rjAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMAD9wdy8gb3r/StSEf9w0oPWcAAABESURBVAjXYwCBzAUgkk2vAUQZPREAksx6jmDOUzCnLhDEOQ7mcEM428Echr7LDDApsC6gHNQMmCEILhuUmwTjNkBtBwAgxxN2m5eeFgAAAABJRU5ErkJggg==");
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
}
.swiper-button-next {
  position: absolute;
  right: 0;
  bottom: 50%;
  z-index: 2;
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  opacity: 0.5;
  color: white;
  width: 11px;
  height: 19px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATBAMAAAC0B+rjAAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMAENrNHBXXyhne0B/GwCDcgbhvAAAASElEQVQI12O4HMAAAvWpYCrqWwOIYl2fgcK1VwFzhT85gChGKFccwuX+fwFEyfx8AJKrnw2W+rkBwoFqQ+gKhmg6D7HgFNh8ABv2F5K6a92UAAAAAElFTkSuQmCC");
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
}

.menu-section {
  position: relative;
  .header {
    position: relative;
    .menu-kv {
      width: 100%;
      height: 746px;
      background-image: url("../images/menu-banner.jpeg");
      background-size: cover;
    }
    .menu-kv-title {
      width: 556px;
      height: 130px;
      position: absolute;
      background-image: url("../images/menu-kv-title.png");
      background-size: 100% 100%;
      top: 45%;
      left: 20%;
    }
  }
  .menu-nav-desk {
    background-color: #2e2822;
    position: absolute;
    height: 86px;
    width: 100%;
    z-index: 10;
    transition: height 0.3s ease-in;
    .menu-nav-container {
      height: 86px;
      display: block;
      position: relative;
      box-sizing: border-box;
      margin: 0 auto;
      text-align: center;
      width: 100%;
      max-width: 1170px;
      .menu-nav {
        display: flex;
        justify-content: center;
        width: 576px;
        color: #fff;
        margin: 0 auto;
        padding: 1em 0;
        height: 100%;
        box-sizing: border-box;
        text-align: center;
        li {
          height: 54px;
          list-style: none;
          position: relative;
          a {
            display: block;
            height: 100%;
            line-height: 3.5em;
            cursor: pointer;
            text-decoration: none;
            color: #fff;
          }
          &:hover a {
            color: #ffe87f;
          }
        }
      }
    }
  }
  .menu-category {
    width: 100%;
    min-height: 700px;
    height: auto;
    background-color: #d5c3b4;
    position: relative;
    .kv-canvas {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 374px;
      background-image: url("../images/signature-kv-parallax.jpeg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      .kt-image {
        width: 100%;
        height: 100%;
        max-width: 100%;
        background-size: cover;
        position: relative;
      }
      .kv-title {
        position: relative;
        top: 300px;
        z-index: 1;
        margin: auto;
        max-width: 768px;
        overflow: hidden;
      }
    }
    .menu-carousel {
      width: 960px;
      padding: 146px 0 60px;
      position: relative;
      z-index: 5;
      margin: auto;
      .slider-for {
        width: 65%;
        min-height: auto;
        height: auto;
        margin: auto auto 20px;
        color: #fff;
        .menu-slide {
          text-align: center;
          .cuisine-info {
            width: 80%;
            margin: auto auto 20px;
            height: 80px;
            padding: 0 1em;
            h2 {
              margin-bottom: 10px;
            }
            p {
              display: block;
              line-height: 1.5;
              font-size: 15px;
            }
          }
          .cuisine-image {
            width: 50%;
            margin: auto;
            position: relative;
            .prev {
              opacity: 0;
              position: absolute;
              z-index: 1;
              height: 100%;
              top: 0;
              left: 0;
            }
            .current {
              position: relative;
              z-index: 2;
              width: 100%;
            }
          }
        }
      }
      .slider-nav {
        border-top: 1px solid #f7f4f1;
        border-bottom: 1px solid #f7f4f1;
        padding: 1em 0;
        width: 80%;
        margin: auto;
        margin-top: 30px;
        .menu-slide {
          cursor: pointer;
          text-align: center;
          img {
            margin: auto;
            width: 120px;
            height: 89.6px;
          }
        }
      }
    }
  }
}
</style>
