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
            <a href="#signature-menu">{{ menunow.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <section id="signature-menu" class="menu-category signature-menu first">
      <div
        class="kv-canvas"
        :style="
          'background-image:url(' +
          menunow.subbanner +
          ');background-size:cover;background-position: center;background-repeat: no-repeat;background-attachment:fixed;'
        "
      >
        <div class="kv-image signature"></div>
        <div class="kv-title signature">
          <img :src="menunow.title" />
        </div>
      </div>
      <!-- Slick -->
      <div id="signature-slick" class="menu-carousel" v-if="screenWidth > 530">
        <div class="slider-for">
          <div class="menu-slide">
            <div class="cuisine-info">
              <h2>{{ menunow.data[active[0]].title }}</h2>
              <p>
                {{ menunow.data[active[0]].description }}
              </p>
            </div>
            <Transition name="fadeAndShow" mode="out-in">
              <div v-show="animationShow" class="cuisine-image">
                <img class="current" :src="active[1]" />
              </div>
            </Transition>
          </div>
        </div>
        <div class="slider-nav slick-initialized slick-slider">
          <swiper
            :slidesPerView="menunow.data.length >= 4 ? 5 : 3"
            :spaceBetween="30"
            :navigation="menunow.data.length >= 5 ? true : false"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="item in menunow.data">
              <div
                class="menu-slide slick-slide"
                data-slick-index="7"
                aria-hidden="true"
                tabindex="-1"
                role="option"
                aria-describedby="slick-slide07"
                style="width: 154px"
                @click="
                  store.commit('handleChangeMenuActive', [item.id, item.src]);
                  store.commit('handleAnimation');
                "
              >
                <img
                  :src="item.src"
                  :alt="item.title"
                  data-info="為了加倍襯出新鮮海鮮的清甜，主廚由經典「五味醬」為靈感創作醬汁，拌入彈脆的鮮蝦、墨魚與當季沙拉時蔬，舞動蒜香與酸甜鹹的滋味，又清爽又開胃！"
                />
                <p :style="active[0] == item.id && { color: '#8A422E' }">
                  {{ item.title }}
                </p>
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
      <div v-else>
        <div class="menu-container" v-for="item in menunow.data">
          <div>
            <img :src="item.src" :alt="item.title" />
            <h2>
              {{ item.title }}
            </h2>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup>
import { ref, computed, onMounted, Transition } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";

const store = useStore();
const menunow = computed(() => store.state.menu.menu);
const animationShow = computed(() => store.state.animation);
const active = computed(() => store.state.menu.active);
const modules = [Navigation];
const scroll = ref(false);
const screenWidth = ref(document.documentElement.scrollWidth);
onMounted(() => {
  store.commit("handleAnimation");
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
          p {
            display: block;
            line-height: 1.5;
            font-size: 14px;
            margin-top: 0.5em;
            color: #000;
          }
        }
      }
    }
  }
}

@media (max-width: 530px) {
  .menu-section {
    .menu-kv {
      display: none;
    }
    .menu-carousel {
      width: 100%;
    }
    .menu-nav-desk {
      position: relative;
      top: 50px;
      height: 60px;
      .menu-nav-container {
        height: 60px;
        .menu-nav {
          width: 100%;
          li {
            a {
              line-height: initial;
            }
          }
        }
      }
    }
    .signature-menu {
      .kv-canvas {
        position: relative;
        top: 50px;
        background-repeat: no-repeat;
        text-align: left;
        height: 0;
        padding-top: 43.75%;
        background: no-repeat 50% 0;
        -webkit-background-size: 100% auto;
        background-size: 100% auto;
        .kv-title {
          width: 400px;
          top: -135px;
          max-width: initial;
          img {
            width: 100%;
          }
        }
      }
    }
    .menu-container {
      position: relative;
      top: -30px;
      z-index: 2;
      width: 350px;
      margin: auto;
      margin-bottom: 50px;
      img {
        width: 100%;
      }
      h2 {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0.535714em;
        margin-top: 0.178571em;
        font-size: 1.75em;
        line-height: 1.1;
        text-align: center;
        letter-spacing: 0.05em;
        color: #000;
      }
      p {
        margin-left: auto;
        margin-right: auto;
        font-size: 0.9375em;
        text-align: left;
        color: #000;
      }
    }
  }
}
</style>
