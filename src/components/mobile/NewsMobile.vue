<template>
  <section id="indexNews" class="index-news">
    <h2 class="maintitle">
      <img
        src="https://www.lebledor.com/m/img/index/news-maintitle.png"
        alt="歡樂，五花八門"
      />
    </h2>
    <div class="slider-nav slick-initialized slick-slider">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="news in NEWS_DATA" class="event-item"
          ><div class="newsfeed">
            <a class="inner" href="/news/2022-worldcup">
              <div class="pic" :style="news.src"></div>
              <div class="text">
                <p class="time">{{ news.time }}</p>
                <h4 class="title">{{ news.title }}</h4>
                <p class="descr">{{ news.descr }}</p>
              </div>
            </a>
          </div></swiper-slide
        >
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import NEWS_DATA from "../../data/news-data";
const modules = [Navigation];
</script>

<style lang="scss">
.index-news {
  padding-top: 2.1875em;
  padding-bottom: 2.5em;
  background: #2e2822;
  .maintitle {
    margin-bottom: 1.5625em;
    text-align: center;
    img {
      width: 100%;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .swiper-wrapper {
    transform: translate3d(-200px, 0px, 0px);
  }
}
.event-item {
  width: 263px !important;
  .newsfeed {
    width: 100%;
    height: 345px;
    max-width: 320px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    background: white;
    .pic {
      width: 100%;
      padding-top: 58.139535%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .text {
      padding: 1.875em 0.625em;
      text-align: center;
      .time {
        display: block;
        margin-bottom: 0.625em;
        color: #555;
      }
      .title {
        position: relative;
        margin-bottom: 0.6em;
        padding-bottom: 0.6em;
        line-height: 1.2em;
        font-size: 1.5625em;
        color: #89422e;
      }
      .descr {
        font-size: 0.875em;
        color: #444;
      }
    }
  }
}
</style>
