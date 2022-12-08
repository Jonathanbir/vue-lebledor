<template>
  <div class="banner">
    <BannerController />
    <h1 class="web-title"></h1>
    <div class="web-title-2"></div>
    <div class="web-title-3"></div>
    <div class="haccp"></div>
    <div class="awwwards"></div>
    <div class="cssdesignawards"></div>
  </div>
  <div class="signature">
    <div class="sprite"></div>
    <div class="container-article">
      <div class="container-inner">
        <div class="container-text">
          <div class="container-text-inner">
            <h3 class="title-article">It's our signature</h3>
            <h3 class="sprite-article-signature-title">經典不私藏</h3>
            <hr class="title-article-hr" />
            <p class="paragraph">
              <span class="no-break">金色三麥精心研發的獨家菜色，</span>
              <span class="no-break">尤其以啤酒入菜的手法，增添菜色層次。</span>
              <span class="no-break"
                >使用最傳統的歐洲烹調技術結合主廚的料理創意，</span
              >
              多年以來店內的人氣餐點，絕對不能錯過的美味。
            </p>
            <button
              class="button button-rectangle"
              onclick="window.location='/menu/chef-recommended';"
            >
              <div class="text">
                主廚推薦
                <span class="arrow sprite-button-rectangle-arrow"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-article transition">
    <div class="left">
      <div class="container-salad">
        <img
          class="img-salad"
          id="article-great-start-salad"
          width="662"
          height="331"
          src="../images/great-start-salad.jpeg"
        />
        <img
          class="img-salad fallback"
          id="article-great-start-salad-fallback"
          width="669"
          height="358"
          data-src="/img/home/great-start-salad-fallback"
          data-file="png"
        />
        <div class="container-pieces" id="article-great-start-salad-pieces">
          <div
            class="sprite sprite-salad-piece1"
            style="transform: matrix(1, 0, 0, 1, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece9"
            style="transform: matrix(1, 0, 0, 1, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece2"
            style="transform: matrix(1, 0, 0, 1, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece3"
            style="transform: matrix(0.9848, 0.17364, -0.17364, 0.9848, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece4"
            style="transform: matrix(0.96592, -0.25881, 0.25881, 0.96592, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece6"
            style="transform: matrix(1, 0, 0, 1, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece7"
            style="transform: matrix(1, 0, 0, 1, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece8"
            style="transform: matrix(0.96592, 0.25881, -0.25881, 0.96592, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece10"
            style="transform: matrix(1, 0, 0, 1, 0, 0)"
          ></div>
          <div
            class="sprite sprite-salad-piece5"
            style="transform: matrix(0.99862, 0.05233, -0.05233, 0.99862, 0, 0)"
          ></div>
        </div>
      </div>
    </div>
    <div class="right">
      <img
        class="img-right"
        id="article-great-start-right"
        width="381"
        height="257"
        style="transform: translate3d(0px, 64.1379px, 0px)"
        src="../images/10003.jpg"
      />
      <div class="container-text">
        <h3 class="title-article">Make a great start</h3>
        <hr class="title-article-hr" />
        <h3 class="sprite sprite-article-great-start-title">美好的開始</h3>
        <p class="paragraph">
          清新鮮脆，涼爽沁口，酥炸夠味，<br />想選哪一類，溫柔喚醒味覺，為饗宴揭開序幕。
        </p>
        <button
          class="button button-rectangle"
          onclick="window.location='/menu/appetizer';"
        >
          <div class="text">
            開胃前菜
            <span class="arrow sprite sprite-button-rectangle-arrow"></span>
          </div>
        </button>
      </div>
    </div>
  </div>
  <article class="main-attraction" id="article-main-attraction">
    <div class="container-article transition">
      <div class="center">
        <div class="left">
          <div class="container-text">
            <h3 class="title-article">
              Here's the <span class="no-break">main attraction</span>
            </h3>
            <div class="container-title">
              <hr class="title-article-hr" />
              <h3 class="sprite sprite-article-main-attraction-title">
                美味難以忘懷
              </h3>
            </div>
            <p class="paragraph">
              六大類主食交織出無限多種搭配，吃一口不加味精的健康料理，感受難以忘懷的美好滋味。
            </p>
            <button
              class="button button-rectangle"
              onclick="window.location='/menu/iconic-dishes';"
            >
              <div class="text">
                主打美食
                <span class="arrow sprite sprite-button-rectangle-arrow"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
  <article class="sweet-tooth" id="article-sweet-tooth">
    <div class="container-article transition">
      <div class="center">
        <div class="container-text">
          <h3 class="title-article">
            Have a <span class="no-break">sweet tooth</span>
          </h3>
          <hr class="title-article-hr" />
          <h3 class="sprite sprite-article-sweet-tooth-title">還有一個胃</h3>
          <p class="paragraph">
            捨不得結束，也或許只是嘴饞的小藉口。<br />今天決定，想吃至上！嘗到甜蜜滋味，才能滿足謝幕。
          </p>
          <button
            class="button button-rectangle"
            onclick="window.location='/menu/classic-confection';"
          >
            <div class="text">
              餐後甜點
              <span class="arrow sprite sprite-button-rectangle-arrow"></span>
            </div>
          </button>

          <img
            class="img-left"
            width="381"
            height="257"
            id="article-sweet-tooth-img1"
            style="transform: translate3d(0px, -46.8391px, 0px)"
            src="../images/10004.jpg"
          />
        </div>
      </div>
      <div class="right">
        <div class="container-cake">
          <img
            class="img-cake"
            width="869"
            height="281"
            id="article-sweet-tooth-cake"
            src="../images/10005.png"
          />
        </div>
      </div>
    </div>
  </article>
  <article class="honey" id="article-honey">
    <div class="container-article transition">
      <div class="beer-background-container">
        <div class="beer-background"></div>
      </div>
      <div class="center">
        <h3 class="title-background">滴滴是精釀</h3>

        <div class="left">
          <div class="container-beer">
            <div class="container-img">
              <img class="img-beer" src="../images/10006.png" />
            </div>
          </div>
          <div id="beer-buttons" class="container-text">
            <button class="button button-beer active" beer-id="0">蜂蜜</button>
            <hr class="hr" />
            <button class="button button-beer" beer-id="1">琥珀</button>
            <hr class="hr" />
            <button class="button button-beer" beer-id="2">小麥</button>
            <hr class="hr" />
            <button class="button button-beer" beer-id="3">黑麥</button>
          </div>
        </div>
        <div class="right">
          <div class="hidden-box">
            <div class="container-text">
              <div class="title-article">
                <h3 class="text active">
                  Honey <span class="no-break">in Charm</span>
                  <hr class="title-article-hr" />
                </h3>
              </div>
              <div class="subtitle-text">
                <h3 class="sprite sprite-article-honey-title active">
                  愈喝愈迷人的風味
                </h3>
              </div>
              <div class="paragraph">
                <p class="beer-shortcut active">
                  採用台灣特有龍眼蜜釀造，鮮明的花香結合麥芽糖般口感，蜂蜜獨特的甜味，讓你愈喝愈迷人。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
  <article class="locations" id="article-locations">
    <div class="container-article transition">
      <div class="container-text">
        <h3 class="title-article">
          It's like <span class="no-break">no place else</span>
        </h3>
        <h3 class="sprite sprite-article-locations-title">三五好友湊一桌</h3>

        <hr class="title-article-hr" />
        <div class="dropdown">
          <button
            class="dropdown-button"
            id="dLabel"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            選擇分店
            <div class="sprite sprite-button-arrow-down"></div>
          </button>
          <div class="dropdown-menu" aria-labelledby="dLabel"></div>
        </div>
      </div>
    </div>
    <div
      class="article-loader"
      id="article-locations-loader"
      style="
        transform: matrix(1, 0, 0, 1, 0, 0);
        visibility: hidden;
        opacity: 0;
      "
    ></div>
  </article>
  <footer>
    <div class="container-footer">
      <div class="sprite sprite-logo-footer"></div>
      <h3 class="title-company">金色三麥餐飲股份有限公司</h3>
      <hr class="title-hr" />
      <div class="meta">
        <div>
          <a class="button tel" href="tel:0800-090-000"
            >聯絡電話:0800-090-000</a
          >
        </div>
        <!--<div class="time">營業時間:9AM-6PM</div>-->
        <div class="address">地址:24158 新北市三重區新北大道二段260號1樓</div>
      </div>
      <div class="disclaimer">
        Copyright©2017 LEBLED'OR F&amp;B CO., LTD., All right reserved
      </div>
      <div class="privacy">
        <a href="/doc/site-privacy.pdf" target="_blank">隱私權聲明</a>
      </div>
    </div>
  </footer>
  <div class="notification-drink-safely">
    <div class="container-text">
      開車不喝酒 &nbsp;安全有保障 &nbsp;未成年請勿飲酒
    </div>
  </div>
</template>

<script setup>
import BannerController from "../components/BannerController.vue";
</script>

<style lang="scss" scoped>
// 共用
.transition {
  transition: all 0.5s ease-in-out;
}
.title-article {
  width: 210px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 47px;
  font-size: 43px;
  color: #bd7461;
  font-weight: 400;
}
.title-article-hr {
  display: inline-block;
  vertical-align: top;
  width: 114px;
  margin: 0;
  border: 0;
  border-bottom: solid 1px #bd7461;
}

.paragraph {
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 35px;
  width: 300px;
  margin-bottom: 35px;
}
.button.button-rectangle {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 15px 70px;
  border: 1px solid rgba(205, 184, 165, 0.6);
  -webkit-transition: border-color 0.1s ease-out;
  transition: border-color 0.1s ease-out;
  margin-left: 5px;
  margin: 0;
  background: 0 0;
  text-decoration: none;
  cursor: pointer;
}

.button.button-rectangle:hover:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

.button.button-rectangle:before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #cdb8a5;
  pointer-events: none;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition: -webkit-transform 0.2s ease-out;
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
}
.button.button-rectangle:hover .text {
  color: #2e2822;
}

.button.button-rectangle .text {
  position: relative;
  z-index: 2;
  color: #cdb8a5;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 400;
  -webkit-transition: color 0.1s ease-out;
  transition: color 0.1s ease-out;
}
/* home first section */
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("../images/10024.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .web-title {
    position: absolute;
    top: -80px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 150px;
    height: 150px;
    margin: auto;
    background-image: url("../images/10026.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .web-title-2 {
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50px;
    height: 50px;
    margin: auto;
    background-image: url("../images/10027.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .web-title-3 {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 150px;
    height: 150px;
    margin: auto;
    background-image: url("../images/10028.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .haccp {
    display: block;
    width: 99px;
    height: 99px;
    position: absolute;
    top: 100px;
    left: 0;
    background-image: url("../images/10021.png");
    background-size: 100%;
    background-position: 0 0;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .haccp:hover {
    left: 0;
    background-position: 0 -99px;
  }

  .awwwards {
    width: 90px;
    height: 135px;
    position: absolute;
    top: 200px;
    left: -40px;
    background-image: url("../images/10022.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .awwwards:hover {
    left: 0;
  }
  .cssdesignawards {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 350px;
    left: -50px;
    background-image: url("../images/10023.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .cssdesignawards:hover {
    left: 0;
  }
}

/* home second section */
.signature {
  position: relative;
  min-width: 1500px;
  max-height: 767px;
  box-sizing: border-box;
  padding-top: 5%;
  padding-left: 14%;
  text-align: left;
  overflow: hidden;
  background: #000;

  .container-article {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    height: 0;
    width: 100%;
    padding-bottom: 42.268%;
    .container-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      max-height: 699px;
      background-image: url("../images/10034.jpg");
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      .container-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        text-align: left;
        color: #fff;
        margin-top: 200px;
        text-align: left;

        .container-text-inner {
          position: absolute;
          left: 200px;
          top: 0px;
          width: 321px;
          .sprite-article-signature-title {
            position: absolute;
            top: -25px;
            left: 152px;
            width: 116px;
            height: 67px;
            background-image: url("data:image/png;base64,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");
            background-size: cover;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            text-indent: -9999px;
          }
        }
      }
    }
  }

  .sprite {
    position: absolute;
    top: 40px;
    left: 150px;
    z-index: 2;
    width: 320px;
    height: 219px;
    margin: auto;
    background-image: url("../images/10036.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.container-article {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #2e2822;
  .left {
    position: relative;
    width: 50%;
    height: 540px;
    max-width: 670px;
    text-align: right;
    .container-salad {
      display: inline-block;
      position: absolute;
      right: 0;
      bottom: 0;
      max-width: 670px;
      width: 100%;
      padding-bottom: 98.507%;
      pointer-events: none;
      .img-salad {
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: 0;
        right: 0;
      }
    }
  }
  .right {
    position: relative;
    width: 50%;
    height: 540px;
    .img-right {
      position: absolute;
      top: 27px;
      z-index: 1;
      will-change: transform;
      left: 510px;
    }
    .container-text {
      position: relative;
      margin-top: 140px;
      padding-left: 83px;
      color: #fff;
      z-index: 2;

      .sprite-article-great-start-title {
        display: inline-block;
        vertical-align: top;
        margin-top: -3px;
        margin-left: 17px;
        margin-bottom: 22px;
        width: 182px;
        height: 31px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAAfCAMAAAB9PccQAAAATlBMVEUAAADNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKW2dGG2dGG2dGG2dGG2dGG2dGG2dGG2dGG2dGHNuKW2dGHZM0ORAAAAGHRSTlMARHe7ESKZ7sxmM91Vqoi78SAK07+niDxRVoUsAAAElUlEQVRYw62Y24KjIAyGJRwFdGZnT+n7v+iaiEREW7u7/42WpskHiQE73JSK3ZAd7YWxWJh6H50a/lU7D98+Pj++nVuN01jvA2p1dILdWG8xbRaAmHIzp+0bXhCzjTZLAWk/WYupAn08Ho8fF2EdRyoA6I6zQkQ4jsEBG3W5nxB986Upk86oLQGCocGAM11lrjjLp527z8eiC2yTEPO22LQM7VKUmRhVNSLqNqre7lM3R6wCMq0KjYOJruLizmoPczGE9RLRtdjjupB6U6KoZv9zWxOM3rTOq2+9OuNBjUhFIylSTVE+r21TLX2kmH7lC02laPYpKgZ5ZyEZHstPIb7EHpoQ+zl4+6IF4KWg9Wltk5wQpXPEgRdYc3k5RLvSwRvYCZMwkb1x5hm3ebKoEjbQt07Jis5tn8EA4JBryWPVfKjtgl3VhJjqykxc9ODzcEeCbXRdStCLEL3WuwTE0p4EGxY5NsgLu1rkEEO8vdqRTQI6w/VqV3pn3sKeEDeuuDBQvpUKWNzYXGYl2CBXR5X9VpE4FJFFKMGNx3DNDXiq3LTtyGFM3VriFbbx3p5gO07Ahq1IAVHKFNi5xoluZ4kbros7vqptQM+xkxTFJfbI94VOsNPaNEOZDyk1vYOdewSbvV/mBCx+WJ6oxwa7H584tm4wsz3DTmTUYRcDHlBg+9oO6NhOZdmL9DwhTnexpY1LcwKGmveYxnvVY6u607gOWxRTPGDzsioqRo/JwajYjeUt4OvbV18AWuQRQ90EhdswwEhQLOBSnSmDHfaUja6L2WBnLUrknLElYbY8rDk2m5oafn8+Pn93240SBZfVTlsRZPa/YCrPswpcqixTYroyHcil3/bYZrHgmTsM5LzBBkwMqY90C8P35Uzy/dnGc3LOk76lMbW1vF+qVKYDa98ae+xyVeyuq21HBWjYzIaxrvVkn54AJbzMM+waDLBPd40NcuW8jG9iJ8xcI5GNErAmRDoh/Vyofz7Bhv2JV9faNuwtI+ab2BFRv8JWDbblrh0wrEYaWG593fj69fHrq3sBuBZzM3CaraNM3MMePE4vsDO6FVsO22NkKzEWf72MEnn0OamdtrpzvP3CbWxdN1XBnvGgeYetE1AIb+5it9HdEM4NbaCE3cXmCSeiEmy7tpq8dRJlK7Y8WX+D7aiGx/PdNK4LdAdbUIWqGvjh8EiKgMvybeyI7C6dcZuAgbKY/w0bcLrEtogzcd/FFjJvV9vZdIkgfxOivsCumsXfCXZAdYmt0Q3Ebd/Cjgu12pLlwR6oU+RtpMdud0k2sFv/0QdsxSM9dk2ESWR4H9sAMpmc2gMoI4/jZFbXeQTCuywSfn92ya/nG9dimxCKm6CUZcZdH9aGL0uJougptp09ejBdL/ec8uyDqq+dFkLvDjDl5g+1vBqpGoB/MAVTT7TOs4VELFPUrr5TyPKcyYwBvcttxWgiK6+jOvcbFAGIVO68Erdr0wGwOSCPJqBUkbzs3m2Ac5og9sOq/idou+8wvH7jGDkBgj11MbL8ywdND7C4TULR4/bfZO4YNZjGnFm8/O/WZrr7A0/6a0kP2zbdAAAAAElFTkSuQmCC");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-indent: -9999px;
      }
    }
  }
}
.main-attraction {
  height: 709px;
  padding-bottom: 0;
  .container-article {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #2e2822;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    width: 100%;
    height: 100%;
    background-image: url("../images/10048.jpg");
    background-size: cover;
    background-position: 50% 50%;
    .center {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      padding: 0 50px;
      max-width: 985px;
      .left {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        width: 50%;
        height: 100%;
        color: #fff;
        .container-text {
          margin-bottom: 50px;
          width: 342px;
          text-align: left;

          .title-article {
            width: 100%;
          }
          .container-title {
            position: relative;
            margin-bottom: 25px;
            height: 64px;
            .title-article-hr {
              width: 162px;
            }
            .sprite-article-main-attraction-title {
              position: absolute;
              top: -3px;
              left: 178px;
              width: 149px;
              height: 67px;
              background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAABDCAMAAACiG7dPAAAAVFBMVEUAAADNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKW2dGG2dGG2dGG2dGG2dGG2dGG2dGG2dGG2dGG2dGG2dGHNuKW2dGHQE+KsAAAAGnRSTlMARLt3EczuZiIz3ZlViKq89goe6tOIPKemK9oLJ+UAAAYrSURBVGjezNjZcuIwEIXhbrV2L0C2mTm8/3uOFQFSIpvKhUX4bqgCV/FXSwgD/QwHukOcp329HI6HF1rjZkdXBoppkwIM054O5/P5QKsGxPEyKgDD3apJ056OS9WRVukIjNdRpTW6rVP4bOCxVDE9alY0AUILyQ/hNi+xskRbDKWq/77SlDFsSCOyLk/stoyCi6GuckpTRx6b5FpFRMCsqypvYXpllWFtrk6pEh/VwgJGqQh0zlqp0iq0VcSJAYQ/BeqqrZoB11TV1/QnWDX+bpUOG/vqfpUT6q2tEn+/KqQTrJ+2qhxfddWkVPkM5k9hvyxRSfWOWUTOqmbleGEBqJkvaBenf6fmFOXCDCNXfLuCDguJtKeP1/PrB23SAOTubtcRixEj7eht+XZ+o00MxDJDU/YVM+cqQcJGUdL5TqZMZSo7v9pXIgLkO4doAJ52HdbfpeoPfeGwzYZ6BQeiGWAF8IioaTen98P7t+2uubCwY+QKlao4eRoByadHxEwPwmkeRlZ3e+LTuZmrJF36GAMQyMF9f9rkZ7RJJblKR0BpeoAAqLRUTRbVUbmKGIBl6k4bWJ/XcdKrL7v6W2nCYvbUV1iibrvbim+iYqBSlU+OWRz1pAWIoewvwAjrOko0fa3SvQflJwsrujnD7HS7IheUqt60M7DDSLWgADSr+MCqKc4SqMGzo3UKStPTcYGynX87P5v8P8OzyXcyz+Z/c+ai4zgIQ9GCzfvxAff/P3TjQAMNSTM70kp7NeokbRJObGMM/J+2+j/j6qf6ddfPdx2U8vFMJcfPUk6ustW1M355m59Gg9tiKJbLJiNAY5z/ScojYKMA4t6WsfRKKE+3VMc365jmOvdWni9Si2nXJkyfWjHLf5QgJ5NqamUCjVuW1scPx7CRZyr6KHp9K26t+0KlGxUbwx6Iu8F5ftNWEAcYfzReb6vsMcYnnqmoUBcMiQwAdzefj7DbJxANkNrErwB+puqQNM/GjiEoq6Fsbe5H2GR4ovJ0oW7PdT6fYLZPIdpEwNZwhn5RmqlaRFhYv1BpkQGsXuU/PKg+GFSSXx89KCcVRpqvIQDpTCU21J0qL67T912WNQSQPsgtQD+kspjkzlQBQKdSf0FFpGFQmMQrBiSeER/FcLcm834D7EnK9xnMaHRQiSLsL6m2v7S/v5ZbgWaN+zUZl5Su4nLejh+oKugXVDppEEEvVLdrMjkFuTL6V92sVR+ovHvHFy+bCTbMj9XjLEBrUEA5e1DfVjIKMNqKEwHr7aAit1CtXwxhkxmBPEFyRJE+qCRft1+j/Ium8liTWah6cgDIxYNKAeELlVniAGfFY78RrmWGsDkkjUTvYHhZk+lUh4sBqnl/YdNeO91SXQURS+qkLrXJHxeblttbOkxyotC0jrerrVJ9PcRVU7jNNE77i0zdzOOoaQyK4XZ0drBEGpEIVfEjFefmLXe3+Xk54A4QVcYJR3uHFfI7kbJcO1HxSsUUc5vzryYhCg243FD5tnKX9pPSVs/NnQdFGkY+0kyVDJ+omOzuILbnpxXaL6ptHVrolOYzlUq0i3V0/FTzTX1Vewn5PSaJTuOgMHXL0+JA06hYDnvMJauuPNgsbeT+R7S43yT19NwHNQ8qYYrSTl9J/sBi0GHQ2mzlOYKuqFjDkriBEPNXKO5+s+E22i1Q+TgLGTrMPUYfVDk6gaIWYQtViFI6piS9rNAdz7s4agnZ+ksqg7FrwWn3X8HobGwHVZcicQDyRDUXsR7aEj9MstIIobUPerIYa27BAK6RwI1JC52oqBW0ZqJqN9sedaB1d2kZWX1J6kTFRr9f7/Ae07FIWwA7LOlOVFVLQQvMVFyggwZ181b/fXdJo8gL6/BBpd9xYQ7vuYjD8ArAUQmaFm5+Sv5BorVOVDkm343GVBTkUV92lwiGmx/y1AcN0KPLW3ozxSkYDlsVTdyoIhHlTFTtPjZn4onKvw9UAvXRPOXLSqaP3GO9HaBlh9C3rB5L+OwC9G1T3b3Wixt7zzDKYpNRl5VMQRkT4u7BVc6UsAy6Sz62aIpajDALnUrZMZ33UmteVjJcp7xTQ6P6B0I8TyRF7qYtdf4+ute/0Cggl+f/AaMpg4yP/cvxAAAAAElFTkSuQmCC");
              background-size: cover;
              background-position: 50% 50%;
              background-repeat: no-repeat;
              text-indent: -9999px;
            }
          }
        }
      }
    }
  }
}
.sweet-tooth {
  width: 100%;
  height: 719px;
  padding-bottom: 0;
  overflow: hidden;
  .container-article {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    width: 100%;
    height: 100%;
    background-image: url("../images/sweet-tooth-background-x2.jpeg");
    background-size: cover;
    background-position: 50% 50%;
    .center {
      position: absolute;
      width: 100%;
      margin: 0 auto;
      max-width: 340px;
      .container-text {
        color: #fff;
        .title-article {
          width: 100%;
          .no-break {
            display: inline-block;
          }
        }
        .sprite-article-sweet-tooth-title {
          position: absolute;
          top: 8px;
          left: 150px;
          width: 185px;
          height: 35px;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAAjCAMAAAD/jltLAAAATlBMVEUAAADNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKXNuKW2dGG2dGG2dGG2dGG2dGG2dGG2dGG2dGG2dGHNuKW2dGHZM0ORAAAAGHRSTlMARHe7Ee7dmcxmIjOqVYi89goi6tOniDwjMm9UAAADpUlEQVRYw9WY65qjIAyGIRCOYuc8mfu/0UVaG8TDqrOdfeb7YUuF8BKTNK0Qzy/P4lfq8/Xr9VP8Rr19fX29id+op0z+9D0TnQ3nF59f+57J378FronI6pOL49/Wej+/LRHy9fnj8jFLUQvX6X0nJx8vOshnciVPkgORS9DCgawmIMhGSNStHFfm6aNdxSLCBcIug/Nor/N5sRSEvj2Or94bVWTuMEgZfd0Vtryo+rI4PxARnyceCxydabLdOx2TJSaB8d24j8p0qxaRKC6Qw3xqX59HD445gJ6IPNuNTNvrbXIGaaXytHXyqFhYR5QjOoRuCTXbJbSBGU+SA7nrVUp7v/ACL0cNLpeN9pMjWcHkijrNjBtxvkUeQV9doipx4rCyvfPVPJXFTD68Bt2SW1lk8zRZ5Jh8TX2XJhuFvl0BtRF59AwdKdGQR3T6XLRwSc8krdgMZ7LR1QB2FZSqLJkuFnIPWYYUOCK7k3zeK94Ze7Ug3ZRjw+m5LzstRqYqDPkSfIkCKwc15AqK1HCmIpMXLPaK6ZoOGIZDVK7qw0KcUvVEttsARhnRDZm8vonzrBk5i8kXe0VOcyDTj/PneREws/JQ1iMtl5WIRnRPoHaQG9lWjwwXZ70iQ4TbOhhVdpnI0QY50oZccbkTc/Kop+Qh9BCbh6bCeq/Ip1f1Y559jZiW/EAD4zFW5NKAzrsGdJHJx3x0TW+Afq1X9IT6RssFvaIc78VsVU0yVOyX8aImp1E4JwdZyRKZtGo0m/Kh0DnoiWgI9g5hejpz9dldcIg8WdGQ355bmpPL1a+QuctlKh1tiEI7oqEU6pK0PKd8qGbRckAr5PI8ucahcBJhGTgyRCYkpA40gw+rf4q80Qa5h5uJXIEc9ZrIdZixWWCk+DHyNs6ZfC1iBkJUxXJnyPSRb3aard5l/3u0FPVkRVDGjx3RkH4q8v0HkKss931yRz6NnWKZKrE0BKx/Hi0yC07GOSuMFZ270GgmBh8V5xi+53Oo/xi4TdXugT5PquwRkhY7yV8uT5eXhcKIgDjmpOrZ/1Hqh5Cz9pJfct9yEa0spaEgEqp7q9jf/k6wS+QevBT+PLlRtcwauVGWe9bFXtGTLy+GWmFs2oTMylNPk1tZy676POUBbfjco783F24zq5lVA2WpB0QLTka2/PBaiXOY1u0gszxcpRvyaRes4mFyDCJSF6YAptf1HrbOQDLrleXA9r7aMnTyCDT/U6vD5hzQi3R/AAJJW2Q5JbNJAAAAAElFTkSuQmCC");
          text-indent: -9999px;
        }
        .img-left {
          position: absolute;
          bottom: 50px;
          left: -550px;
          will-change: transform;
        }
      }
    }
    .right {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      pointer-events: none;
      .container-cake {
        left: 175px;
        height: 604px;
        padding-bottom: 0;
        .img-cake {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: auto;
          top: 66%;
        }
      }
    }
  }
}
.honey {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 43.854%;
  background: #1e1a17;
  overflow: hidden;
  .container-article {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    width: 100%;
    height: 100%;

    .beer-background-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      min-width: 1400px;
      .beer-background {
        position: relative;
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        background-size: cover;
        bottom: -60px;
        background-position: 50% 45%;
        background-image: url("../images/honey-background.png");
      }
    }
    .center {
      display: flex;
      align-items: flex-end;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      max-width: 1000px;
      position: relative;

      .title-background {
        position: absolute;
        top: 50px;
        right: -46px;
        text-align: right;
        z-index: 1;
        height: 101px;
        width: 546px;
        font-size: 0;
        color: transparent;
        background-size: 100% 100%;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiIAAABlCAMAAABHqHjlAAABgFBMVEUAAACJQi6JQi7///////////+JQi7//v7///+JQi7///////+JQi6JQi7///////+JQi7///////+JQi6JQi6JQi6JQi7///////////+JQi7///+JQi7+/f2JQi7+/fyJQi6JQi6JQi6JQi7///+JQi7///////////+JQS2JQS2JQi6JQi6JQi7///////////+JQi7///+JQi6JQi7///+JQi6JQi6JQi3///+JQi7///+JQi78+/qJQi6JQS2JQi7///////////////////////////+JQi6JQi7///+JQS3///////+JQi6JQi6JQS3///+JQS3///////////////+KQy////////////////+JQi6JQi7///+JQi7///////+JQi7//v6JQi6JQi7///+JQi7///////////////////////////////////////////////////+IQSz///////////+EOiWBNB+hZ1e2in6ncGH///+JQi4v0+LLAAAAfnRSTlMA9/v5h3vzBPvWuC0d3h6SGdwwmBTnfjn1mQvyhQadDS0F0iLPrSS9SczGtr2nNnZRJW5reVoPQY3ML+5HCbJeT06CKOSosWg0ZRdYKxq5bjozKOhDyauT7GBVPu/BwKJyEOoTdOPTUxXhwq5rY6CNAtezll0fxKWJ/t1ZQz5XzUK3AAAg7UlEQVR42uyc+VPiSBSAG1EEFQVFRRQRD0S8b8cRxRsHHQ9Q8XYcz/Ee19Hdrer860vSnTSBbtIJuEfVfj/MYCLGsr+8fu91B2CU+oHNNfC3ER5IrH4D//OfYs4avzx+m9uv9oG/Ad+l++ZTWcNQIgDyo/QJ/HsJ+8Dfy1Mp+ECWIea5oRp8OE/HEPF5u/9bXq4tna4ZGbzHH6PAELGvEyvjW2OAh8gfoemJ4aktD/ibeA2FeptmNl7BhzALFZKV4MO5hQoNIA+8lzD+uKpbrDII4UsYGGBFSGGyH+1eOYAWU4KEydYxMwYKRM4f5DgURM66mq+0tQy8LB/oGul6qPBJ/329975fretdDVChH+TDTwihu0GfJOEyKNJp5FaYEmRqr4AGkyZBJlQYR/w1tiY/YOKxCTJfNR358gvC+I/iA+47ZRVi4lXX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");
        text-indent: -9999px;
      }
      .left {
        position: relative;
        width: 50%;
        .container-beer {
          position: absolute;
          bottom: 0;
          right: 50px;
          width: 100%;
          z-index: 2;
          padding-bottom: 205.205%;
          max-width: 365px;
          pointer-events: none;
          .container-img {
            width: 80%;
            position: absolute;
            bottom: -8px;
            right: 0;
            height: auto;
            max-height: 749px;
            .img-beer {
              width: 110.136986%;
              margin-left: -3%;
            }
          }
        }
        .container-text {
          position: absolute;
          bottom: 150px;
          left: 35px;
          width: 50px;
          text-align: center;
          z-index: 2;
          .button {
            position: relative;
            border: none;
            margin: 0;
            background: 0 0;
            text-decoration: none;
            cursor: pointer;
          }
          .button:hover {
            color: #a2502f;
          }
          .active {
            color: #a2502f;
          }
          .hr {
            margin: 12px auto;
            height: 19px;
            width: 1px;
            border: 0;
            background: #382b22;
          }
        }
      }
      .right {
        position: relative;
        width: 50%;
        padding-left: 25px;
        .hidden-box {
          position: relative;
          width: 112%;
          overflow: hidden;
          .container-text {
            position: relative;
            margin-bottom: 24%;
            width: 300px;
            z-index: 2;

            .paragraph {
              color: #000;
              width: 364px;
              font-size: 14px;
              line-height: 30px;
              overflow: hidden;
              .beer-shortcut {
                display: block;
                font-size: 14px;
                line-height: 24px;
                margin-bottom: 30px;
                height: 90px;
              }
            }
            .title-article {
              margin-bottom: -15px;
              color: #89412e;
              .title-article-hr {
                margin-top: 15px;
                margin-bottom: 15px;
                width: 122px;
                border-color: #89412e;
              }
            }
            .subtitle-text {
              position: absolute;
              top: 5px;
              left: 148px;
              .sprite-article-honey-title {
                position: absolute;
                top: 4px;
                left: 130px;
                width: 250px;
                height: 34px;
                background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAAAiCAMAAADF/IRKAAAATlBMVEUAAAAuKCMuKCMuKCMuKCMuKCMuKCMuKCMuKCMuKCMuKCMuKCMuKCMuKCMuKCOJQi6JQi6JQi6JQi6JQi6JQi6JQi6JQi6JQi4uKCOJQi6CMRA7AAAAGHRSTlMAd0S7Ee5mIjOZ3cyIqlW88ArTp4g8Hiv+J+J5AAAHNklEQVRo3uyY266bQAxF52LPHc5ppbY7//+jLTYEyBDgqOpb9wNEmmHbs2I7KObnx+fHT/NfF/p4PB4f5r8u9Pn4o4s9Y7zjdG3yTxU2/qH9dTDrvlpNDvDOnCnF7fZ0YnKhYQh0spxPVoFqabHpgx1wi2csAQzr+o3ZlBgo9hw9Gj2DM+x9E7c/jQcQz3NP79c4GFUBOL8sD87sRQx7GkqoX2p1Qy3hCI4CEEx75dsmkRVwzHIblJIdDlnR+hX3RgDc5nPoj+33KpPb+jxJhLDZb76gVIFKiXOPFjVN56xpwmTdLAvweN8koMrBs9ysJlekMDq5FcXRWn6OQYBfIxVUt9cI+HWXlYgWnq4xHTdLpunO+bXcK1ScLOC2Q+i2iSKJUgGcFkwBEKJHmMK7vhcbVQOaxN14+F1WIYib3T6P6j2ASltMyZobCqxeWhCljWReIrsppQ7TfRNj5/0ZHBUTsdgdYuKjtJMlk6cQcUhKHlG283iEKTYJ4HZRtCGqZLpiIpbyOhc1oMxWuTZMKr7ZMe4wudfZ5O+biAGidopXTLavmZWoP8THtjJNGaHJaCr2jwqA8IrJNW0Cpg6TEwNjRQD+XL2c5lyuAEOzogzUlBmTBtth2s8mf9tE5zIvd8GU1sP1mDIfYtooSDZ2PmPeYgrNAwyEZAy9xeRWTKp4WkoZyJHsKmcoDFqVPaa+6a5NVGWmUpEFk+8prTMnoE96DemBoEbzyduu6ZJzcdr8fCodYfrKCCfLXOezpPD0CpFGc43p2uTgLS+XKIXAaRr2zfTygCvhHJMzaR7mYtbNph0mc4HpGpIP5FCklRglGTsE0t5XXc+ma5NeFvKWQRUY+tFZAfLDFaYGa44xubTQiY3uYiLN49uvb31cG9Uwa5vy1PAlTS70BpPjEpach5smqjGTifx85at6AzoeknrjC0zE3rzBZOFlQFpbwekmJs8T3B+fj88f5lDLjJMkLLy6HGEKLQ5AGfV9erxpoiKpszSPqXXNdUMoQY46nmMKvDzYekwQTHp5gynRDpN+v+b74/H4bnptCuESk/6cV1oisr1pUqBifTTgdCKMQDYO+RxTCYmW/HpMslkvbzBZ9CL9I+WvMREDzc76Xaq5Lc0NggA4KGg8JJ1Oe+H7P2kLxJKN+WOmPxd7mDWIX0CQLBmyiRI87ls8UQu4PCS6BRvhEyZIy0r7NzD1b61BtZ9//aX067tBt2yNAGrLcJR1tL5TYu6tzpRbCwRfgPKSwUsLo6E2s0OeBrpvPWPCLzAhyQ3L9vPP3z9+//yuNwFz4WWWwzwclMwxYW5FyktqdQBldWht+RGTjkwjpm3E5L7ApIG38g2ZS9DaWl06tTZiUnE8UGLG97w9VzJiqnqGlpMywf3WpG/hsSBYZB4YMMEFU7xiSsJZW2bEVlF5gwnO8RKAHf7Om6rjU1pkIGlHW/dciWE6imJZiHC6OXGmpkmOWsYJJj4fXjCRYvK+HC88MdwcfQ/KbNXWwktMrnivRuy8wY6YMK7kC0+Y254aVcP0SomdxSnI6J7y/H3MaZtkgglHb+rlndMXvoBUT7wEnVR+YlVoFF96E0Lr1B191nykKyc4PLrqfTBMUyWGCQutOro3sxsO1oD1KZ8xLbmgfTsuimqik+nQzi/bCVOFKHskqlXEn2YSUuCUvaWYQVXxu4msd/erBH6kpIYaprkSw5TKuhgmSTVDm5jwX/QRPmPqwe9sSNZGrmLagrol9wqrYTpuEcXDKmgvOEXHAwtwECS19SNXF/6GB5xyNN7yurRGEyUDplSxE+i+sw07U+gqpTB7wGSKV/PFZIO5oPd4JAMAHSDkjkzyz8eznDGfBUB4Ron1nT1ySRTuKxqv5gHtPNjPlFww4W7Js3shjmnO1qyc5phOFjob7AA4nLCxi21w7c2vdvHepGH6KBn+RYFuicBpasO7hnlyLIGLMjb6vRJXrMdomG5m8JdShNbbtpxhiidMyECcA6g+M2Pgck52UmzwScnjmXFtPNxZh2AQaLbCLOEKMne5S9XZd9mCYZoqwarmdlNrum2CYzZfsioZ0DAVx1IEE2J3QLLVy1Hh1Dfdmpfo9Q2uazZMWgR6gLFDYJpPK4yRP2Y8ctlVnHqHA4diTX2pxHHsC+cil5ogPyHqyGK5zrkKpxzwGnQ5/h3um/dpo9PtytvhdFsPZpB96fJQMfl1OBvoU4j7DoF62yqKfAWw7nl86KEj5CYSXiphSminA/VJ0SErip1JdmNThaUQKqYDY9i7IfRhR9BxCdBCEo44OJ99wrCxTf5qsbKdar8JrZrVnhvolq6nSoLmIqs7TWyWQBXvnJ2CLTnebGbmJ5jXpydsw4+GadYhwM2Drtv35fkU+0OxBymcQl8rKYY8OgBInoV4pOm4X6N7TtT1lKFqeKh6vrjtshtMOgTfkD255b2s+OIPNP8lMaAR/Q8bPnuwfwC15rM3rJ+/vAAAAABJRU5ErkJggg==");
                background-size: 100%;
                background-size: 100% 100%;
                text-indent: -9999px;
                text-align: start;
              }
            }
          }
        }
      }
    }
  }
}
.locations {
  width: 100%;
  height: 0;
  padding-bottom: 42.5%;
  .container-article {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    width: 100%;
    height: 100%;
    background-image: url("../images/locations-background.jpeg");
    background-size: cover;
    background-position: 50% 50%;
    .container-text {
      position: relative;
      top: -20%;
      width: 420px;
      .title-article {
        width: 100%;
        margin-bottom: 20px;
        font-weight: 400;
        .no-break {
          display: block;
        }
      }
      .sprite-article-locations-title {
        position: absolute;
        top: 7px;
        left: 140px;
        width: 256px;
        height: 37px;
        background-image: url("data:image/png;base64,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");
        background-size: 100%;
        text-indent: -9999px;
        text-align: start;
      }
    }
  }
}
footer {
  position: relative;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: auto;
  padding: 45px 0 65px;
  background: #000;
  z-index: 2;
  .container-footer {
    position: relative;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    opacity: 1;
    .sprite-logo-footer {
      margin: 0 auto 25px;
      width: 110px;
      height: 88px;
      background-image: url("../images/10058.png");
      background-size: cover;
      background-position: center;
    }
    .title-company {
      text-align: center;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1px;
      color: #bd7461;
    }
    .title-hr {
      border: 0;
      border-top: #3e3732 solid 1px;
      margin: 30px auto;
      width: 110px;
    }
    .meta {
      margin: 0 auto 12px;
      text-align: center;
      font-size: 12px;
      color: #ccb9aa;
      .tel {
        color: #ccb9aa;
      }
    }
    .disclaimer {
      text-align: center;
      letter-spacing: 1px;
      font-size: 10px;
      color: #ccb9aa;
      opacity: 0.5;
    }
    .privacy {
      margin-top: 5px;
      text-align: center;
      a {
        font-size: 10px;
        opacity: 0.5;
        color: #ccb9aa;
      }
    }
  }
}
.notification-drink-safely {
  position: relative;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: auto;
  text-align: center;
  padding: 60px 0;
  letter-spacing: 8px;
  font-size: 30px;
  font-weight: 400;
  color: #000;
  background: #89412e;
  z-index: 2;
}
</style>
