<template>
  <section id="indexMenus" class="menu-container">
    <div class="index-menus">
      <h2 class="maintitle">
        <img
          src="https://www.lebledor.com/m/img/index/menus-maintitle.png"
          alt="道道是風情"
        />
      </h2>
      <div class="menu-item">
        <div class="menu-banner menu-banner-1"></div>
        <div class="slider-nav slick-initialized slick-slider">
          <swiper
            :slidesPerView="3"
            :spaceBetween="200"
            :navigation="false"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="item in menudata[0].data">
              <router-link
                to="menu/chef-recommended/signature"
                @click="
                  store.commit('handleChangeMenu', menudata[0]);
                  store.commit('handleSubMenu', {
                    show: false,
                    submenu: submenu,
                  });
                "
              >
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
                    :src="item.src"
                    :alt="item.title"
                    data-info="為了加倍襯出新鮮海鮮的清甜，主廚由經典「五味醬」為靈感創作醬汁，拌入彈脆的鮮蝦、墨魚與當季沙拉時蔬，舞動蒜香與酸甜鹹的滋味，又清爽又開胃！"
                  /></div
              ></router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="index-menus">
      <div class="menu-item">
        <div class="menu-banner menu-banner-2"></div>
        <div class="slider-nav slick-initialized slick-slider">
          <swiper
            :slidesPerView="3"
            :spaceBetween="200"
            :navigation="false"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="item in menudata[2].data">
              <router-link
                to="menu/chef-recommended/signature"
                @click="
                  store.commit('handleChangeMenu', menudata[2]);
                  store.commit('handleSubMenu', {
                    show: false,
                    submenu: submenu,
                  });
                "
              >
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
                    :src="item.src"
                    :alt="item.title"
                    data-info="為了加倍襯出新鮮海鮮的清甜，主廚由經典「五味醬」為靈感創作醬汁，拌入彈脆的鮮蝦、墨魚與當季沙拉時蔬，舞動蒜香與酸甜鹹的滋味，又清爽又開胃！"
                  /></div
              ></router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="index-menus">
      <div class="menu-item">
        <div class="menu-banner menu-banner-3"></div>
        <div class="slider-nav slick-initialized slick-slider">
          <swiper
            :slidesPerView="3"
            :spaceBetween="200"
            :navigation="false"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="item in menudata[7].data">
              <router-link
                to="menu/chef-recommended/signature"
                @click="
                  store.commit('handleChangeMenu', menudata[7]);
                  store.commit('handleSubMenu', {
                    show: false,
                    submenu: submenu,
                  });
                "
              >
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
                    :src="item.src"
                    :alt="item.title"
                    data-info="為了加倍襯出新鮮海鮮的清甜，主廚由經典「五味醬」為靈感創作醬汁，拌入彈脆的鮮蝦、墨魚與當季沙拉時蔬，舞動蒜香與酸甜鹹的滋味，又清爽又開胃！"
                  /></div
              ></router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="index-menus">
      <div class="menu-item">
        <div class="menu-banner menu-banner-5"></div>
        <div class="slider-nav slick-initialized slick-slider">
          <swiper
            :slidesPerView="3"
            :spaceBetween="200"
            :navigation="false"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="item in menudata[10].data">
              <router-link
                to="menu/chef-recommended/signature"
                @click="
                  store.commit('handleChangeMenu', menudata[10]);
                  store.commit('handleSubMenu', {
                    show: false,
                    submenu: submenu,
                  });
                "
              >
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
                    :src="item.src"
                    :alt="item.title"
                    data-info="為了加倍襯出新鮮海鮮的清甜，主廚由經典「五味醬」為靈感創作醬汁，拌入彈脆的鮮蝦、墨魚與當季沙拉時蔬，舞動蒜香與酸甜鹹的滋味，又清爽又開胃！"
                  /></div
              ></router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const store = useStore();
const menudata = computed(() => store.state.menu.data);
</script>

<style lang="scss">
.menu-container {
  .index-menus {
    padding-top: 2.1875em;
    background: #cdb8a5;
    .maintitle {
      margin-bottom: 0;
      img {
        width: 100%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .menu-item {
      position: relative;
      width: 100%;
      height: 210px;
      margin-top: 50px;
      .menu-banner {
        position: absolute;
        top: 60px;
        width: 100%;
        height: 150px;
        background-size: 130%;
        background-position-x: -64px;
        background-position-y: -42px;
        background-repeat: no-repeat;
      }

      .menu-banner-1 {
        background-image: url("https://www.lebledor.com/m/img/index/menus-bg-chef.jpg");
      }

      .menu-banner-2 {
        background-image: url("https://www.lebledor.com/m/img/index/menus-bg-appetizer.jpg");
      }

      .menu-banner-3 {
        background-image: url("https://www.lebledor.com/m/img/index/menus-bg-maindish.jpg");
      }

      .menu-banner-4 {
        background-image: url("https://www.lebledor.com/m/img/index/menus-bg-maindish.jpg");
      }

      .menu-banner-5 {
        background-image: url("https://www.lebledor.com/m/img/index/menus-bg-dessert.jpg");
      }
      .swiper-wrapper {
        left: -100px;
        top: -50px;
      }
      .menu-slide {
        margin-top: 50px;
        img {
          width: 220px;
        }
      }
    }
  }
}
</style>
