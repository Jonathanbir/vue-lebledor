<template>
  <article class="honey" id="article-honey">
    <div class="container-article transition">
      <div class="beer-background-container">
        <div class="beer-background" :style="beers[flavor].background"></div>
      </div>
      <div class="center">
        <h3 class="title-background">滴滴是精釀</h3>
        <div class="left">
          <div class="container-beer">
            <div class="container-img">
              <Transition name="fadeAndShow" mode="out-in">
                <img
                  v-show="animationShow"
                  class="img-beer"
                  :src="beers[flavor].beer"
                />
              </Transition>
            </div>
          </div>
          <div id="beer-buttons" class="beer-buttons">
            <button
              :class="
                flavor == '0'
                  ? 'button button-beer active'
                  : 'button button-beer'
              "
              :style="
                (flavor == '2' && { color: '#c77b5d' }) ||
                (flavor == '3' && { color: '#c77b5d' })
              "
              beer-id="0"
              @click="
                store.commit('handleAnimation');
                flavor = '0';
              "
            >
              蜂蜜
            </button>
            <hr
              class="hr"
              :style="
                (flavor == '2' && { background: '#c77b5d' }) ||
                (flavor == '3' && { background: '#c77b5d' })
              "
            />
            <button
              :class="
                flavor == '1'
                  ? 'button button-beer active'
                  : 'button button-beer'
              "
              :style="
                (flavor == '2' && { color: '#c77b5d' }) ||
                (flavor == '3' && { color: '#c77b5d' })
              "
              beer-id="1"
              @click="
                store.commit('handleAnimation');
                flavor = '1';
              "
            >
              琥珀
            </button>
            <hr
              class="hr"
              :style="
                (flavor == '2' && { background: '#c77b5d' }) ||
                (flavor == '3' && { background: '#c77b5d' })
              "
            />
            <button
              :class="
                flavor == '2'
                  ? 'button button-beer active-white'
                  : 'button button-beer'
              "
              :style="flavor == '3' && { color: '#c77b5d' }"
              beer-id="2"
              @click="
                store.commit('handleAnimation');
                flavor = '2';
              "
            >
              小麥
            </button>
            <hr
              class="hr"
              :style="
                (flavor == '2' && { background: '#c77b5d' }) ||
                (flavor == '3' && { background: '#c77b5d' })
              "
            />
            <button
              :class="
                flavor == '3'
                  ? 'button button-beer active-white'
                  : 'button button-beer'
              "
              :style="flavor == '2' && { color: '#c77b5d' }"
              beer-id="3"
              @click="
                store.commit('handleAnimation');
                flavor = '3';
              "
            >
              黑麥
            </button>
          </div>
        </div>
        <div class="right">
          <div class="hidden-box">
            <div class="container-text">
              <Transition name="fadeAndIn">
                <div v-show="animationShow">
                  <div class="title-article">
                    <h3 class="text active">
                      Honey <span class="no-break">in Charm</span>
                      <hr class="title-article-hr" />
                    </h3>
                  </div>
                  <div class="subtitle-text">
                    <h3
                      class="sprite sprite-article-honey-title"
                      :style="beers[flavor].title"
                      v-show="animationShow"
                    >
                      {{ beers[flavor].h3 }}
                    </h3>
                  </div>
                </div>
              </Transition>
              <Transition name="fadeAndDown" mode="out-in">
                <div class="paragraph" v-show="animationShow">
                  <p
                    class="beer-shortcut active"
                    :style="flavor == '0' && { color: '#000' }"
                  >
                    {{ beers[flavor].content }}
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed, onMounted, Transition } from "vue";
import { useStore } from "vuex";
const flavor = ref("0");
const animationShow = computed(() => store.state.animation);

const store = useStore();
onMounted(() => {
  store.commit("handleAnimation");
});

const beers = ref([
  {
    id: 1,
    h3: "愈喝愈迷人的風味",
    title: {
      backgroundImage:
        "url('data:image/png;base64,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')",
    },
    background: {
      backgroundImage: "url('/src/images/honey-background.png')",
    },
    beer: "/src/images/10006.png",
    content:
      "採用台灣特有龍眼蜜釀造，鮮明的花香結合麥芽糖般口感，蜂蜜獨特的甜味，讓你愈喝愈迷人。",
  },
  {
    id: 2,
    h3: "大麥凝成的香氣",
    title: {
      backgroundImage:
        "url('data:image/png;base64,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')",
    },
    background: {
      backgroundImage: "url('/src/images/orange-background.png')",
    },
    beer: "/src/images/10007.png",
    content:
      "來自德國製酒的工法傳承，表現焦香麥芽帶來的琥珀色澤，香氣由大麥麥芽主導，繚繞烤土司與麵包氣息，酒體帶有甜潤但內斂的麥芽風味，純淨、精緻。",
  },
  {
    id: 3,
    h3: "果香十足的滋味",
    title: {
      backgroundImage:
        "url('data:image/png;base64,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')",
    },
    background: {
      backgroundImage: "url('/src/images/red-background.png')",
    },
    beer: "/src/images/10008.png",
    content:
      "來自德國南部巴伐利亞地區的傳統風味，讓酵母釀出如香蕉等水果香味，含有豐富的小麥芽蛋白質與新鮮酵母，使酒體如雲霧般濃郁，並呈現雪白濃厚的泡沫，入口十分清爽。",
  },
  {
    id: 4,
    h3: "經典，耐人尋味",
    title: {
      backgroundImage:
        "url('data:image/png;base64,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')",
    },
    background: {
      backgroundImage: "url('/src/images/black-background.png')",
    },
    beer: "/src/images/10009.png",
    content:
      "選用德國著名的巴伐利亞巧克力麥芽，帶有焦香與巧克力氣息，香味濃郁、順口易飲，是經典德式釀酒工藝的展現。",
  },
]);
</script>

<style lang="scss" scoped>
.fadeAndIn-enter-from {
  opacity: 0;
  left: -300px;
}

.fadeAndIn-enter-to {
  opacity: 1;
  left: 0;
}
.fadeAndIn-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fadeAndIn-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
.fadeAndIn-enter-active {
  animation: scale 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
}

.fadeAndIn-leave-active {
  transition: all 0.7s ease-in;
  animation: scale 0.7s ease-in;
}

.fadeAndDown-enter-from {
  position: relative;
  top: -200px;
  opacity: 0;
}
.fadeAndDown-enter-to {
  position: relative;
  top: 0;
  opacity: 1;
}

.fadeAndDown-leave-from {
  position: relative;
  top: 0;
  opacity: 1;
}
.fadeAndDown-leave-to {
  position: relative;
  top: -200px;
  opacity: 0;
}
.fadeAndDown-enter-active {
  animation: scale 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
}

.fadeAndDown-leave-active {
  transition: all 0.3s ease-in;
  animation: scale 0.3s ease-in reverse;
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
          transition: all 1s ease-in-out;
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
        .beer-buttons {
          position: absolute;
          bottom: 150px;
          left: 35px;
          width: 50px;
          text-align: center;
          z-index: 2;
          transition: all 0.5s ease-in-out;
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
          .button-brown {
            color: #c77b5d;
          }
          .active {
            color: #a2502f;
          }
          .active-white {
            color: #fff;
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
                color: #fff;
              }
            }
            div {
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
                  left: 50px;
                  width: 250px;
                  height: 34px;
                  text-indent: -9999px;
                  text-align: start;
                  background-size: 100% 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
