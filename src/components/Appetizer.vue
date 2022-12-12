<template>
  <main>
    <div class="container-article transition">
      <div class="left">
        <div class="container-salad">
          <img
            class="img-salad"
            id="article-great-start-salad"
            width="662"
            height="331"
            src="../images/salid.png"
          />
          <div class="container-pieces" id="article-great-start-salad-pieces">
            <div class="sprite sprite-salad-piece1" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece9" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece2" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece3" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece4" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece5" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece6" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece7" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece8" :style="dropStyle"></div>
            <div class="sprite sprite-salad-piece10" :style="dropStyle"></div>
          </div>
        </div>
      </div>
      <div class="right transition">
        <img
          class="img-right"
          id="article-great-start-right"
          width="381"
          height="257"
          :style="scrollStyle"
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
  </main>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
const height = ref("");
const drop = ref("");
const scrollStyle = computed(() => {
  return "transform:translate3d(-60px," + height.value + "px ,0px)";
});
const dropStyle = computed(() => {
  return (
    "transform:translate(" +
    0 +
    "px," +
    drop.value +
    "px)" +
    "rotate(" +
    drop.value +
    "deg)"
  );
});

onMounted(() => {
  setInterval(() => {
    height.value = window.pageYOffset * 0.15 - 100;
    drop.value = window.pageYOffset * 0.2;
  }, 100);
});
</script>

<style lang="scss" scoped>
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
      .container-pieces {
        position: relative;
        width: 100%;
        .sprite {
          position: absolute;
          pointer-events: visible;
          will-change: transform;
          background-size: 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
        .sprite-salad-piece1 {
          transform: translate(0) rotate(80deg);
          top: 23px;
          left: 81%;
          width: 80px;
          height: 80px;
          background-image: url("../images/10037.png");
        }
        .sprite-salad-piece2 {
          top: -100px;
          left: 200px;
          width: 130px;
          height: 130px;
          background-image: url("../images/10039.png");
        }
        .sprite-salad-piece3 {
          transform: translate(0) rotate(0deg);
          top: -33px;
          left: 80px;
          width: 130px;
          height: 130px;
          background-image: url("../images/10040.png");
        }
        .sprite-salad-piece4 {
          transform: translate(80px, 50px) rotate(4deg);
          top: 10px;
          left: 180px;
          width: 150px;
          height: 150px;
          background-image: url("../images/10041.png");
        }
        .sprite-salad-piece5 {
          transform: translate(0px, 50px) rotate(4deg);
          top: 20px;
          right: 80px;
          z-index: 2;
          width: 140px;
          height: 140px;
          background-image: url("../images/10046.png");
        }
        .sprite-salad-piece6 {
          transform: translate(0px, 0px) rotate(30deg);
          top: 0px;
          right: 150px;
          width: 120px;
          height: 120px;
          background-image: url("../images/10042.png");
        }
        .sprite-salad-piece7 {
          transform: translate(0px, 50px) rotate(4deg);
          top: 70px;
          right: 100px;
          width: 150px;
          height: 150px;
          background-image: url("../images/10043.png");
        }
        .sprite-salad-piece8 {
          transform: translate(80px, 50px) rotate(4deg);
          top: 83px;
          right: 250px;
          width: 150px;
          height: 150px;
          background-image: url("../images/10044.png");
        }
        .sprite-salad-piece9 {
          transform: translate(80px, 50px) rotate(0deg);
          top: 83px;
          right: 250px;
          width: 90px;
          height: 120px;
          background-image: url("../images/10038.png");
        }
        .sprite-salad-piece10 {
          transform: translate(80px, 50px) rotate(0deg);
          top: 50px;
          left: 100px;
          width: 120px;
          height: 120px;
          background-image: url("../images/10045.png");
        }
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
</style>
