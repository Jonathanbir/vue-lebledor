<template>
  <section class="location">
    <article class="intro" id="article-intro">
      <div class="container-article">
        <div class="container-imgs"></div>
        <div class="container-text">
          <h1 class="sprite title" id="article-intro-title">台北美麗華店</h1>
          <p class="paragraph" id="article-intro-paragraph">
            <b>氣勢磅礡，尊貴非凡</b
            ><br />美麗華旗艦店為全台首創圓弧形歌劇院式設計的餐廳<br />步入店內宛若置身歐洲歌劇院，感受旗艦格局的尊貴氣度<br />是與重要的人分享重要時刻，一生必訪的經典選擇
          </p>
        </div>
      </div>
    </article>

    <article class="info" id="article-info">
      <div class="container-article transition">
        <h3 class="title-article sprite sprite-article-info-title">分店資訊</h3>

        <hr class="title-article-hr" />

        <p class="paragraph">
          <a class="button tel" href="tel:(02)2175-3739">(02)2175-3739</a><br />
          台北市中山區敬業3路20號5樓<br />週日至週四&nbsp;11:00-22:00<br />週五至週六&nbsp;11:00-23:00
        </p>
        <div class="stats" id="article-info-stats-trigger">
          <div class="sprite sprite-article-info-chair"></div>
          <div class="text">座位數</div>

          <div class="text counter big" value="640">
            <span class="number active">6</span
            ><span class="number active">4</span
            ><span class="number first active">0</span>
          </div>

          <div class="text">席</div>
        </div>

        <div class="stats second">
          <div class="sprite sprite-article-info-block"></div>
          <div class="text">包廂</div>
          <div class="text counter" value="2">
            <span class="number first active">2</span>
          </div>
          <div class="text">間</div>

          <div class="text counter" value="40/100">
            <span class="number active">4</span
            ><span class="number active">0</span
            ><span class="number active">/</span
            ><span class="number active">1</span
            ><span class="number active">0</span
            ><span class="number first active">0</span>
          </div>
          <div class="text">席</div>
        </div>

        <button class="button button-rectangle">
          <div class="text">
            立即訂位
            <span class="arrow sprite sprite-button-rectangle-arrow"></span>
          </div>
        </button>
      </div>
      <div
        class="article-loader"
        id="article-info-loader"
        style="
          transform: matrix(1, 0, 0, 1, 0, 0);
          visibility: hidden;
          opacity: 0;
        "
      ></div>
    </article>
  </section>
</template>
<script setup></script>

<style lang="scss" scoped>
.location {
  .intro {
    position: relative;
    min-height: 750px;
    height: 100vh;
    overflow: hidden;
    background: #000;
    .container-article {
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      background-image: url("https://www.lebledor.com/img/location/1-miramar/img3-x2.jpg");
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      text-align: center;
      opacity: 1;
      .container-imgs {
        width: 100%;
        height: 100%;
      }
      .container-text {
        position: absolute;
        color: #fff;
        .title {
          width: 364px;
          height: 58px;
          margin: 0 auto 40px;
          background-image: url("https://www.lebledor.com/img/location/1-miramar/title.png");
          background-size: cover;
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
      }
      .title-article {
        display: block;
        margin: 0 auto;
        width: 164px;
        height: 37px;
      }
    }
  }
  .info {
    overflow: hidden;
    background-color: #2a2319;

    .container-article {
      text-align: center;
      padding: 75px 0;
      background-position: 50% 50%;
      background-repeat: repeat;
      background-size: 400px 400px;
      background-image: url("https://www.lebledor.com/img/location/info-background-pattern.png");
      .title-article {
        display: block;
        margin: 0 auto;
        width: 164px;
        height: 37px;
        margin-bottom: 20px;
        font-weight: 400;
        line-height: 47px;
        font-size: 43px;
        color: #bd7461;
        font-weight: 400;
      }
      .sprite-article-info-title {
        background-image: url(data:image/png;base64,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);
      }
      .paragraph {
        letter-spacing: 1px;
        color: #fff;
        margin: auto;
        margin-bottom: 50px;
        .tel {
          color: #fff;
        }
      }
      .stats {
        margin-bottom: 20px;
        height: 34px;
        .sprite-article-info-chair {
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAAuElEQVQ4y2M4s30pA5nYE4jfMVBgQAsQP6PEgM1AvJ0SAx4CcSe5mgWA+D8QR5FrgD3UAB1yDcgF4p9AzEKuAbOA+DyITa4BJ4F4AbkGMAHxVyAuhhnACMTSQKxAJLaGBqALzICNUAFSsRjMABCnC4gdiMR7gPgXzEsg4h0QvwLi60B8gQC+CVV/A9kAMyB+CY2WCQTwbSjWRjaAAWr6BCJiYAMUM4waMCwN2AnE9UQYMAOI5yOLAQAjCYz7A8Y8pAAAAABJRU5ErkJggg==");
        }
        .text {
          display: inline-block;
          vertical-align: top;
          color: #ccb9aa;
          line-height: 34px;
          font-size: 14px;
        }
        .counter {
          font-family: "Noto Sans TC", myriad-pro, Helvetica Neue,
            Segoe UI Light, Microsoft JhengHei, 微軟正黑體, sans-serif;
          font-size: 20px;
          font-weight: 300;
          margin: -1px 7px 0;
          letter-spacing: 3px;
          color: #fff;
        }
        .big {
          font-size: 34px;
        }
      }
      .second {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
