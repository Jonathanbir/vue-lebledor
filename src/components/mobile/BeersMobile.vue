<template>
  <section id="indexBeers" class="index-beers">
    <h2 class="maintitle">
      <img
        src="https://www.lebledor.com/m/img/index/beers-title-honey.png"
        alt="滴滴是精釀"
      />
    </h2>
    <div v-for="(item, index) in beers">
      <div
        class="beers-container"
        :style="
          active[index]
            ? 'height: 250px;background:' + item.bgc
            : 'background:' + item.bgc
        "
      >
        <div
          v-show="animationShow"
          class="beers-img"
          :style="
            active[index]
              ? 'bottom:0;height:230px;background:url(' +
                item.beer +
                ');background-size: 100%;background-position-y: 0px;'
              : 'background:url(' +
                item.beer +
                ');background-size: 100%;background-position-y: -10px;background-repeat: no-repeat;'
          "
        ></div>
        <div class="beers-btn" @click="clickBtn(index)">
          <h4 class="title">
            <b
              ><img v-show="animationShow" :src="item.title" alt="蜂蜜啤酒" />
            </b>
            <i
              v-show="!active[index]"
              class="bdr-maroon"
              :style="index == 2 && 'border-color:#fff'"
            ></i>
          </h4>
          <Transition name="fadeAndShow" mode="out-in">
            <p
              v-show="animationShow && active[index]"
              class="descr"
              :style="
                (index == 2 && 'color:#fff') || (index == 3 && 'color:#fff')
              "
            >
              {{ item.descr }}
            </p>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, Transition } from "vue";
import { useStore } from "vuex";
const store = useStore();
const active = ref([false, false, false, false]);
const animationShow = computed(() => store.state.animation);

const beers = [
  {
    title: "https://www.lebledor.com/m/img/index/beers-title-honey.png",
    bgc: "",
    beer: "src/images/10006.png",
    descr:
      " 採用台灣特有龍眼蜜釀造，鮮明的花香結合麥芽糖般口感，蜂蜜獨特的甜香讓你越喝越迷人。",
  },
  {
    title: "https://www.lebledor.com/m/img/index/beers-title-amber.png",
    bgc: "#B57460",
    beer: "src/images/10007.png",
    descr:
      "來自德國製酒的工法傳承，表現焦香麥芽帶來的琥珀色澤，香氣由大麥麥芽主導酒體帶有甜潤但內斂、精緻。",
  },
  {
    title: "https://www.lebledor.com/m/img/index/beers-title-wheat.png",
    bgc: "#89422F",
    beer: "src/images/10008.png",
    descr:
      "含有豐富的小麥芽蛋白質與新鮮酵母，使酒體如雲霧般濃郁，入口卻十分清爽。",
  },
  {
    title: "https://www.lebledor.com/m/img/index/beers-title-rye.png",
    bgc: "#2E2823",
    beer: "src/images/10009.png",
    descr:
      "選用德國著名的巴伐利亞巧克力麥芽，香味濃郁，卻順口易飲，是經典德式釀酒工藝的展現。",
  },
];

let clickBtn = (e) => {
  active.value[e] = !active.value[e];
};
</script>

<style lang="scss">
.index-beers {
  padding-top: 2.1875em;
  background: #cdb8a5;
  .maintitle {
    img {
      width: 100%;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .beers-container {
    position: relative;
    width: 100%;
    height: 150px;
    display: flex;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    .beers-img {
      position: absolute;
      left: 30px;
      bottom: 0;
      width: 150px;
      height: 100px;
      background-image: url("../../images/10006.png");
      background-size: 100%;
      background-position-y: -10px;
      background-repeat: no-repeat;
      transition: all 0.5s ease-in-out;
    }
    .beers-btn {
      width: 39.0625%;
      margin-right: 6.25%;
      margin-left: auto;
      padding-top: 14.0625%;
      padding-bottom: 14.0625%;
      b {
        img {
          width: 100%;
        }
      }
      .bdr-maroon {
        border-color: #89422e;
      }
      i {
        display: block;
        position: absolute;
        left: 0;
        top: 100%;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1.25em;
        width: 0.625em;
        height: 0.625em;
        border-right: 1px solid #cdb8a5;
        border-bottom: 1px solid #cdb8a5;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        transition: 0.1s;
      }
      .descr {
        font-size: 0.875em;
        color: #2e2822;
        padding-top: 10px;
      }
    }
  }
}
</style>
