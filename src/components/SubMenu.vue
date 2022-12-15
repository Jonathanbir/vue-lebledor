<template>
  <div
    class="sub-menu"
    id="nav-top-sub"
    :class="{ transform: show }"
    :style="black && { opacity: '1' }"
    @mouseover="store.commit('handleSubMenu', { show: true, submenu: submenu })"
    @mouseout="store.commit('handleSubMenu', { show: false, submenu: submenu })"
  >
    <div
      class="sub-menu-inner cuisine active"
      id="nav-top-sub-cuisine"
      v-if="submenu"
      @mouseover="store.commit('handleSubMenu', { submenu: true })"
    >
      <div class="row picture">
        <div
          class="circle"
          id="nav-top-sub-cuisine-img"
          :style="hover.style"
        ></div>
      </div>
      <div class="row">
        <h4 class="title">主廚推薦</h4>
        <div class="list">
          <router-link
            class="button button-nav-top-sub"
            to="/menu/chef-recommended/signature"
            data-id="2011"
            @click="
              store.commit('handleChangeMenu', menudata[0].data);
              store.commit('handleChangeMenuActive', [
                0,
                menudata[0].data[0].src,
              ]);
              store.commit('handleChangeMenuIndex', 0);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https:////lebledor-img.s3.amazonaws.com/cover/536c9e8a9dc058d004a0294b55840313.png);'
            "
            >精選菜色</router-link
          >
        </div>
        <h4 class="title">開胃前菜</h4>
        <div class="list">
          <router-link
            class="button button-nav-top-sub"
            to="/menu/appetizer/starter"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/e422d258991d8f566cfd179f426e2520.png);'
            "
            @click="
              store.commit('handleChangeMenu', menudata[1].data);
              store.commit('handleChangeMenuActive', [
                0,
                menudata[1].data[0].src,
              ]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >開胃菜
          </router-link>
          <router-link
            to="/menu/appetizer/salad"
            class="button button-nav-top-sub"
            data-id="2021"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/ad50eb7e0a527ea2fe8dcf6557c995d9.png);'
            "
            >沙拉類</router-link
          >
        </div>
      </div>
      <div class="row">
        <h4 class="title">主打美食</h4>
        <div class="list">
          <router-link
            class="button button-nav-top-sub"
            to="/menu/iconic-dishes/pot"
            data-id="2036"
            @click="
              store.commit('handleChangeMenu', menudata[2].data);
              store.commit('handleChangeMenuActive', [
                0,
                menudata[2].data[0].src,
              ]);
              store.commit('handleChangeMenuIndex', 2);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/d1a972853865f69d459300cdf4e731ad.png);'
            "
            >蔬食類
          </router-link>
          <router-link
            class="button button-nav-top-sub"
            to="/menu/iconic-dishes/pot"
            data-id="2036"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/d508c3b35aef826342d403cceb397fb8.png);'
            "
            >鍋湯類
          </router-link>
          <router-link
            class="button button-nav-top-sub"
            to="/menu/iconic-dishes/pasta"
            data-id="2032"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/d192096e541416472bf682f2e290002a.png);'
            "
            >義大利麵</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/menu/iconic-dishes/rice"
            data-id="2031"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/57ca230b9258d09a416d513267503c4f.png);'
            "
            >飯類</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/menu/iconic-dishes/grilled"
            data-id="2035"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/a77e2f529ed139cfa316479d231f9a07.png);'
            "
            >燒烤類</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/menu/iconic-dishes/pizza"
            data-id="2033"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/d1a972853865f69d459300cdf4e731ad.png);'
            "
            >披薩類</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/menu/iconic-dishes/fried"
            data-id="2034"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/a180d6ab309298c29c13a0ef4cec4cae.png);'
            "
            >酥炸類</router-link
          >
        </div>
      </div>
      <div class="row">
        <h4 class="title">餐後甜點</h4>
        <div class="list">
          <router-link
            class="button button-nav-top-sub"
            to="/menu/classic-confection/dessert"
            data-id="2041"
            @mouseover="
              hover.style =
                'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/78fe6c6e1029b356063e788b306fdfa7.png);'
            "
            @click="
              store.commit('handleChangeMenu', menudata[3].data);
              store.commit('handleChangeMenuActive', [
                0,
                menudata[3].data[0].src,
              ]);
              store.commit('handleChangeMenuIndex', 3);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >甜點飲料</router-link
          >
        </div>
      </div>
    </div>
    <div class="sub-menu-inner locations" id="nav-top-sub-locations" v-else>
      <div class="row picture">
        <div
          class="circle location-circle"
          id="nav-top-sub-locations-img"
          :style="hover.locations"
        ></div>
      </div>
      <div class="row">
        <h4 class="title">北區</h4>
        <div class="list">
          <router-link
            class="button button-nav-top-sub"
            to="/location/miramar"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/6-jingguan/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[0]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >台北美麗華店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/qsquare"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/11-edamall/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[1]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >台北京站店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/cellar"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/3-cellar/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[2]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >信義誠品店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/citylink"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/4-citylink/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[3]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >南港CITYLINK店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/megacity"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/5-megacity/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[4]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >板橋大遠百店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/jingguan"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/6-jingguan/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[5]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >新莊晶冠店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/bigcity"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/7-bigcity/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[6]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >新竹巨城店PARK15</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/sogoa21"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/14-sogoa21/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[7]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >中壢SOGO店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/zhubei"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/17-zhubei/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[8]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >新竹竹北店</router-link
          >
        </div>
      </div>
      <div class="row">
        <h4 class="title">中區</h4>
        <div class="list">
          <router-link
            class="button button-nav-top-sub"
            to="/location/shizheng"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/8-shizheng/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[9]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >台中市政店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/cmp"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/9-cmp/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[10]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >台中勤美店</router-link
          >
        </div>
        <h4 class="title">南區</h4>
        <div class="list">
          <router-link
            class="button button-nav-top-sub"
            to="/location/dreammall"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/10-dreammall/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[11]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >台南南紡店 </router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/edamall"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/11-edamall/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[12]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >高雄義大店</router-link
          ><router-link
            class="button button-nav-top-sub"
            to="/location/hanshin"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/15-hanshin/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[13]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >漢神巨蛋店</router-link
          >
        </div>
      </div>
      <div class="row">
        <h4 class="title">UMAMI 金色三麥</h4>
        <div class="list">
          <router-link
            class="button button-nav-top-sub"
            to="/location/umami"
            @mouseover="
              hover.locations =
                'opacity:1;background-image:url(https://www.lebledor.com/img/location/16-umami/cover.png);'
            "
            @click="
              store.commit('handleChangeLocations', locationsdata[14]);
              store.commit('handleSubMenu', { show: false, submenu: submenu });
            "
            >微風南山店</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
const hover = ref({ style: "", locations: "" });
const black = ref(false);
const store = useStore();
const show = computed(() => store.state.bool.show);
const submenu = computed(() => store.state.bool.submenu);
const menudata = computed(() => store.state.menu.data);
const locationsdata = computed(() => store.state.locations.data);

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 25) {
        black.value = true;
      } else {
        black.value = false;
      }
    },
    true
  );
});
</script>

<style lang="scss" scoped>
.sub-menu {
  position: fixed;
  top: 0;
  will-change: transform;
  transform: translateY(-1000px);
  width: 100%;
  height: 80%;
  padding-top: 35px;
  text-align: center;
  background-color: #000;
  opacity: 0.8;
  z-index: 99;
  transition: all 0.5s ease-in-out;
  .sub-menu-inner {
    position: relative;
    top: 80px;
    .picture {
      margin-right: 100px;
      margin-left: -357px;
      width: 218px;
      padding-top: 20px;
      transition: all 1s ease-in-out;
      .circle {
        width: 218px;
        height: 218px;
        clip-path: circle(109px at center);
        background-size: 100%;
        background: no-repeat;
        background-size: 220px 167px;
        clip-path: none;
        opacity: 0;
        transition: all 0.8s ease-in-out;
      }
      .location-circle {
        width: 200px;
        height: 200px;
        background-size: 100%;
        transform: translate(-10px, 30px);
      }
    }
    .row {
      display: inline-block;
      vertical-align: top;
      text-align: left;
      width: 137px;
      .title {
        display: inline-block;
        border-bottom: 1px solid rgba(204, 185, 170, 0.5);
        margin-bottom: 7px;
        margin-top: 15px;
        line-height: 16px;
        padding-bottom: 12px;
        font-weight: 400;
        color: #ccb9aa;
        :first-child {
          margin-top: 0;
        }
      }
      .list {
        .button {
          display: block;
          line-height: 28px;
          padding: 0 2px;
          margin-left: -2px;
          color: #fff;
          font-weight: 400;
        }
      }
    }
  }
}
.transform {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>
