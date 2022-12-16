<template>
  <section id="indexBeers" class="index-beers">
    <h2 class="maintitle">
      <img
        src="https://www.lebledor.com/m/img/index/beers-maintitle.png"
        alt="滴滴是精釀"
      />
    </h2>
    <div class="beers-container" :style="active[0] && 'height: 250px;'">
      <div
        v-show="animationShow"
        class="beers-img"
        :style="
          active[0] &&
          'bottom:0;height:230px;background-size: 100%;background-position-y: 0px;'
        "
      ></div>
      <div class="beers-btn" @click="clickBtn(0)">
        <h4 class="title">
          <b
            ><img
              v-show="animationShow"
              src="https://www.lebledor.com/m/img/index/beers-title-honey.png"
              alt="蜂蜜啤酒"
            />
          </b>
          <i v-show="!active[0]" class="bdr-maroon"></i>
        </h4>
        <Transition name="fadeAndShow" mode="out-in">
          <p v-show="animationShow && active[0]" class="descr">
            採用台灣特有龍眼蜜釀造，鮮明的花香結合麥芽糖般口感，蜂蜜獨特的甜香讓你越喝越迷人。
          </p>
        </Transition>
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
        border-color: #89422e !important;
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
