<template>
  <BannerVue />
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
        style="transform: translate3d(-60px, 64.1379px, 0px)"
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
  <BeerSectionVue />
  <LocationsVue />
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
import BannerVue from "../components/Banner.vue";
import BeerSectionVue from "../components/BeerSection.vue";
import LocationsVue from "../components/Locations.vue";
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

/* home second section */
.signature {
  position: relative;
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
  overflow: hidden;
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
