<template>
  <section class="news">
    <header class="header" v-if="screenWidth > 530">
      <div class="image"></div>
      <div class="container">
        <h1 class="title sprite sprite-article-new-title">歡樂，五花八門</h1>
        <p class="desc hide-text">LET'S PARTY</p>
      </div>
    </header>
    <div class="context">
      <div id="news-fliter" class="category">
        <a href="#cate-all" class="active">所有活動</a>
        <a href="#cate-1">全店活動</a>
        <a href="#cate-2">分店活動</a>
      </div>
      <div id="event-list" class="event-list">
        <div
          :class="
            (item.imgSize == '3' && 'item span3') ||
            (item.imgSize == '4' && 'item span4') ||
            (item.imgSize == '5' && 'item span5') ||
            (item.imgSize == '6' && 'item span6')
          "
          v-for="(item, index) in news"
        >
          <div class="cover">
            <img :src="item.src" />
          </div>
          <div class="body">
            <div class="share-btn hide-text">open share</div>
            <div class="date">{{ item.date }}</div>
            <h2 class="title">{{ item.title }}</h2>
            <p>{{ item.descr }}</p>
            <div class="share">
              <div class="close-btn hide-text">close</div>
              <div class="box">
                <a
                  class="flipper facebook"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.lebledor.com/news/2022-worldcup"
                  target="_blank"
                  ><div class="front"></div>
                  <div class="back"></div
                ></a>
                <a
                  class="flipper link"
                  href="https://www.lebledor.com/news/2022-worldcup"
                  target="_blank"
                  ><div class="front"></div>
                  <div class="back"></div
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="next-link"
        class="loading-context"
        href="#"
        style="display: none"
      >
        <div id="infscr-loading" style="display: none">
          <img alt="Loading..." src="/img/news/loading.gif" />
          <div><em>Loading the next set of posts...</em></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const news = computed(() => store.state.news.data);
const screenWidth = ref(document.documentElement.scrollWidth);
</script>

<style lang="scss" scoped>
.news {
  background-color: #2e2823;
  .header {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 560px;
    .image {
      width: 100%;
      height: 527px;
      overflow: hidden;
      z-index: 9;
      position: relative;
      top: -50px;
      background-repeat: no-repeat;
      background-image: url("../images/news-bg.png");
      background-size: 100%;
      background-position: center center;
    }
    .container {
      margin: 0 auto 0 -685px;
      position: absolute;
      z-index: 10;
      width: 1370px;
      left: 50%;
      top: 0;
      .title {
        width: 423px;
        height: 58px;
        margin: 255px auto 90px;
        text-indent: 100%;
        white-space: nowrap;
      }
      .sprite-article-new-title {
        background-image: url("data:image/png;base64,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");
      }

      .desc {
        width: 1371px;
        height: 157px;
        background-image: url("../images/news-desc.png");
      }
    }
  }
  .context {
    padding: 70px 0 0;
    min-height: 200px;
    .category {
      text-align: center;
      margin-bottom: 40px;
      a {
        text-decoration: none;
        color: #e3e2e2;
        font-size: 16px;
        padding: 10px 0;
        margin: 0 30px;
        display: inline-block;
        border-bottom: 1px solid transparent;
        font-weight: 700;
      }
      a:hover {
        border-bottom: 1px solid #9d8c7e;
        color: #ccb7a4;
      }
    }
    .event-list {
      display: grid;
      grid-gap: 5px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 150px;
      grid-auto-flow: row dense;
      width: 1150px;
      height: auto;
      margin: auto;
      .item {
        width: 364px;
        background-color: #fff;
        margin-bottom: 18px;
        grid-column-start: auto;
        grid-row-start: auto;
        grid-row-end: span 4;
        .cover {
          overflow: hidden;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .body {
          padding: 30px 45px 20px;
          text-align: center;
          position: relative;
          cursor: pointer;
          .date {
            font-size: 16px;
            color: #555;
          }
          .title {
            font-size: 24px;
            color: #8a422f;
            padding: 12px 0 20px;
          }
          .share {
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #bc8170;
            opacity: 0.9;
            text-align: center;
            box-sizing: border-box;
            display: none;
            cursor: default;
            .close-btn {
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEXRSTlMA6udJOzRV7k9DP18wLiuOjGwIYxQAAABYSURBVAjXPc1JFsAgCAPQiCLi1N7/tG1sH9mEzyYYDZE8oCmHkgIqNCXKKuIslwIcpw709OucfEXczIFIMSsBjp2REBCe0lhNJmtRTJUFbKmf6I3rVfh+AJ1gAatJX4iXAAAAAElFTkSuQmCC)
                center center no-repeat;
              width: 40px;
              height: 40px;
              position: absolute;
              top: 0;
              right: 0;
              cursor: pointer;
            }
            .box {
              position: absolute;
              width: 198px;
              height: 36px;
              margin: auto;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }
          }
          p {
            padding-top: 16px;
            font-size: 14px;
            line-height: 25px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAABCAYAAAChQ5zUAAAAEElEQVQImWPsctIvYBiCAAAEeQFt8tCPdwAAAABJRU5ErkJggg==)
              center top no-repeat;
            min-height: 75px;
            max-height: 125px;
            overflow: hidden;
            color: #393939;
          }
        }
        .share-btn {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAMAAAB4HKeYAAAATlBMVEUAAAC1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2C1c2BbY0mlAAAAGXRSTlMA88f5a9mmEOzh0byqqJKGhGJgXEY9IyAPmRxwbgAAAF5JREFUGNNlkEkOwDAIA0uSJt33jf9/tEFK64M5MUIGmwq1iI8PMGiuCHbGHtwby4+7GE+F0qhD6Oo5t3dY09nKViaHV23UXZ+uNpnDWgXTnPW0n+6TP/JP+Tg//vMCoGMH1oi/roAAAAAASUVORK5CYII=)
            center no-repeat;
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          z-index: 1;
        }
      }
      .span3 {
        grid-row-end: span 3;
      }
      .span4 {
        grid-row-end: span 4;
      }
      .span5 {
        grid-row-end: span 5;
      }
      .span6 {
        grid-row-end: span 6;
      }
    }
  }
}

@media (max-width: 530px) {
  .news {
    background: #cdb8a5;
    .context {
      .category {
        position: relative;
        top: -20px;
        margin-bottom: 10px;
        background: #2e2822;
      }
      .event-list {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
      }
    }
  }
}
</style>
