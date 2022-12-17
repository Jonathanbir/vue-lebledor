<template>
  <div class="sub-menu" :style="mobileActive && { top: '20px' }">
    <ul class="primary">
      <li class="mainitem">
        <h4
          class="mainbtn"
          @click="
            active = [!active[0], false];
            location = [false, false, false, false];
          "
        >
          <a><b>餐廳據點</b><i></i></a>
        </h4>
        <div
          :class="active[0] ? 'submenu down' : 'submenu'"
          :style="
            location[0] && { height: '350px', transform: 'translateY(0px)' }
          "
        >
          <h5
            class="title 1"
            @click="location = [!location[0], false, false, false]"
          >
            <b>北區</b><i :class="location[0] ? 'icon on' : 'icon'"></i>
          </h5>
          <ul class="list" v-show="location[0]">
            <li>
              <router-link
                to="/location/miramar"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[0]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[0].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[0].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[0].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[0].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[0].space3,
                    },
                  ]);
                "
                >台北美麗華店</router-link
              >
            </li>
            <li>
              <router-link
                to="/location/qsquare"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[1]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[1].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[1].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[1].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[1].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[1].space3,
                    },
                  ]);
                "
                >台北京站店</router-link
              >
            </li>
            <li>
              <router-link
                to="/location/cellar"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[2]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[2].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[2].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[2].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[2].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[2].space3,
                    },
                  ]);
                "
                >信義誠品店</router-link
              >
            </li>
            <li>
              <router-link
                to="/location/citylink"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[3]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[3].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[3].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[3].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[3].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[3].space3,
                    },
                  ]);
                "
                >南港CITYLINK店</router-link
              >
            </li>
            <li>
              <router-link
                to="/location/megacity"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[4]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[4].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[4].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[4].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[4].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[4].space3,
                    },
                  ]);
                "
                >板橋大遠百店</router-link
              >
            </li>
            <li>
              <router-link
                to="/location/jingguan"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[5]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[5].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[5].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[5].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[5].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[5].space3,
                    },
                  ]);
                "
                >新莊晶冠店</router-link
              >
            </li>
            <li>
              <router-link
                to="/location/bigcity"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[6]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[6].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[6].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[6].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[6].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[6].space3,
                    },
                  ]);
                "
                >新竹巨城店PARK15</router-link
              >
            </li>
            <li>
              <router-link
                to="/location/sogoa21"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[7]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[7].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[7].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[7].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[7].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[7].space3,
                    },
                  ]);
                "
                >中壢SOGO店</router-link
              >
            </li>
            <li>
              <router-link
                to="/location/zhubei"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[8]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[8].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[8].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[8].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[8].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[8].space3,
                    },
                  ]);
                "
                >新竹竹北店</router-link
              >
            </li>
          </ul>
          <h5
            class="title 2"
            @click="location = [false, !location[1], false, false]"
          >
            <b>中區</b><i :class="location[1] ? 'icon on' : 'icon'"></i>
          </h5>
          <ul class="list" v-show="location[1]">
            <li>
              <router-link
                to="/location/shizheng"
                @click="
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[9]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[9].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[9].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[9].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[9].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[9].space3,
                    },
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >台中市政店</router-link
              >
            </li>
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/location/cmp"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[10]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[10].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[10].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[10].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[10].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[10].space3,
                    },
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >台中勤美店</router-link
              >
            </li>
          </ul>
          <h5
            class="title 3"
            @click="location = [false, false, !location[2], false]"
          >
            <b>南區</b><i :class="location[2] ? 'icon on' : 'icon'"></i>
          </h5>
          <ul class="list" v-show="location[2]">
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/location/dreammall"
                @click="
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[11]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[11].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[11].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[11].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[11].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[11].space3,
                    },
                  ]);
                  store.commit('handleChangeMenuMobileActive', false);
                "
                >台南南紡店
              </router-link>
            </li>
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/location/edamall"
                @click="
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[12]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[12].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[12].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[12].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[12].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[12].space3,
                    },
                  ]);
                  store.commit('handleChangeMenuMobileActive', false);
                "
                >高雄義大店</router-link
              >
            </li>
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/location/hanshin"
                @click="
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[13]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[13].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[13].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[13].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[13].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[13].space3,
                    },
                  ]);
                  store.commit('handleChangeMenuMobileActive', false);
                "
                >漢神巨蛋店</router-link
              >
            </li>
          </ul>
          <h5
            class="title 4"
            @click="location = [false, false, false, !location[3]]"
          >
            <b>UMAMI 金色三麥</b
            ><i :class="location[3] ? 'icon on' : 'icon'"></i>
          </h5>
          <ul class="list" v-show="location[3]">
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/location/umami"
                @click="
                  store.commit('handleChangeScroll', false);
                  store.commit('handleChangeLocations', locationsdata[14]);
                  store.commit('handleChangeLocationsNumbers', [
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[14].seat,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[14].stateroom,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[14].space1,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[14].space2,
                    },
                    {
                      startNum: 0,
                      currentNum: 100,
                      endNum: locationsdata[14].space3,
                    },
                  ]);
                  store.commit('handleChangeMenuMobileActive', false);
                "
                >微風南山店</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="mainitem">
        <h4 class="mainbtn">
          <router-link
            to="/news"
            @click="store.commit('handleChangeMenuMobileActive', false)"
            ><b>最新消息</b><i></i
          ></router-link>
        </h4>
      </li>
      <li class="mainitem">
        <h4
          class="mainbtn"
          @click="
            active = [false, !active[1]];
            menu = [false, false, false, false];
          "
        >
          <a><b>美味餐點</b><i></i></a>
        </h4>
        <div
          class="submenu"
          :style="
            active[1]
              ? { height: '200px', transform: 'translateY(0px)' }
              : { height: '0', transform: 'translateY(-200px)' }
          "
        >
          <h5 class="title" @click="menu = [!menu[0], false, false, false]">
            <b>主廚推薦</b><i :class="menu[0] ? 'icon on' : 'icon'"></i>
          </h5>
          <ul class="list" v-show="menu[0]">
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/chef-recommended/signature"
                data-id="2011"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[0]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[0].data[0].src,
                  ]);
                  store.commit('handleChangeMenuMobileActive', false);
                "
                >精選菜色</router-link
              >
            </li>
          </ul>
          <h5 class="title" @click="menu = [false, !menu[1], false, false]">
            <b>開胃前菜</b><i :class="menu[1] ? 'icon on' : 'icon'"></i>
          </h5>
          <ul class="list" v-show="menu[1]">
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/appetizer/starter"
                @mouseover="
                  hover.style =
                    'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/e422d258991d8f566cfd179f426e2520.png);'
                "
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[1]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[1].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >開胃菜
              </router-link>
            </li>
            <li>
              <router-link
                to="/menu/appetizer/salad"
                class="button button-nav-top-sub"
                data-id="2021"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[2]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[2].data[0].src,
                  ]);
                "
                @mouseover="
                  hover.style =
                    'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/ad50eb7e0a527ea2fe8dcf6557c995d9.png);'
                "
                >沙拉類</router-link
              >
            </li>
          </ul>
          <h5 class="title" @click="menu = [false, false, !menu[2], false]">
            <b>主打美食</b><i :class="menu[2] ? 'icon on' : 'icon'"></i>
          </h5>
          <ul class="list" v-show="menu[2]">
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/iconic-dishes/pot"
                data-id="2036"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[3]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[3].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >蔬食類
              </router-link>
            </li>
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/iconic-dishes/pot"
                data-id="2036"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[4]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[4].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >鍋湯類
              </router-link>
            </li>
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/iconic-dishes/pasta"
                data-id="2032"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[5]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[5].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                @mouseover="
                  hover.style =
                    'opacity:1;background-image:url(https://lebledor-img.s3.amazonaws.com/cover/d192096e541416472bf682f2e290002a.png);'
                "
                >義大利麵</router-link
              >
            </li>

            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/iconic-dishes/rice"
                data-id="2031"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[6]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[6].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >飯類</router-link
              >
            </li>
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/iconic-dishes/grilled"
                data-id="2035"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[7]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[7].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >燒烤類</router-link
              >
            </li>
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/iconic-dishes/pizza"
                data-id="2033"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[8]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[8].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >披薩類</router-link
              >
            </li>
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/iconic-dishes/fried"
                data-id="2034"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[9]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[9].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >酥炸類</router-link
              >
            </li>
          </ul>
          <h5 class="title" @click="menu = [false, false, false, !menu[3]]">
            <b>餐後甜點</b><i :class="menu[3] ? 'icon on' : 'icon'"></i>
          </h5>
          <ul class="list" v-show="menu[3]">
            <li>
              <router-link
                class="button button-nav-top-sub"
                to="/menu/classic-confection/dessert"
                data-id="2041"
                @click="
                  store.commit('handleChangeMenuMobileActive', false);
                  store.commit('handleChangeMenu', menudata[10]);
                  store.commit('handleChangeMenuActive', [
                    0,
                    menudata[10].data[0].src,
                  ]);

                  store.commit('handleChangeMenuMobileActive', false);
                "
                >甜點飲料</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="mainitem">
        <h4 class="mainbtn">
          <router-link
            to="/members"
            @click="store.commit('handleChangeMenuMobileActive', false)"
            ><b>會員優惠</b><i></i
          ></router-link>
        </h4>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const mobileActive = computed(() => store.state.menu.mobileActive);
const menudata = computed(() => store.state.menu.data);
const locationsdata = computed(() => store.state.locations.data);
const active = ref([false, false]);
const menu = ref([false, false, false, false]);
const location = ref([false, false, false, false]);
</script>

<style lang="scss" scoped>
.sub-menu {
  position: fixed;
  top: -1000px;
  will-change: transform;
  width: 100%;
  height: 100vh;
  padding-top: 35px;
  text-align: center;
  background-color: #000;
  z-index: 99;
  transition: all 0.5s ease-in-out;
  .primary {
    padding-top: 1.25em;
    padding-bottom: 1.25em;
    .submenu {
      box-sizing: border-box;
      width: 87.5%;
      height: 0;
      transform: translateY(-200px);
      margin-left: auto;
      margin-right: auto;
      padding-left: 24px;
      padding-right: 24px;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
      .title {
        display: block;
        position: relative;
        margin-bottom: 0.75em;
        margin-top: 0.75em;
        border-bottom: 1px solid rgba(205, 184, 165, 0.5);
        b {
          display: block;
          font-size: 1em;
          line-height: 2em;
          color: #cdb8a5;
        }
        .icon {
          display: block;
          position: absolute;
          right: 5px;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 8px;
          height: 1px;
          background: #cdb8a5;
          transition: 0.2s ease;
          &:after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 8px;
            height: 1px;
            background: #cdb8a5;
            opacity: 1;
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            transition: 0.1s ease;
          }
        }
        .on {
          transform: rotate(180deg);
          &:after {
            opacity: 0;
          }
        }
      }
      .list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 40px;
        padding: 0;
        li {
          box-sizing: border-box;
          list-style: none;
          width: 100%;
          a {
            display: block;
            text-align: left;
            color: white;
          }
        }
      }
    }
    .down {
      height: 200px;
      transform: translateY(0px);
    }
    .mainitem {
      display: block;
      margin-bottom: 2px;
      color: #cdb8a5;
      overflow: hidden;
      .mainbtn {
        position: relative;
        display: block;
        white-space: nowrap;
        a {
          position: relative;
          display: block;
          width: 87.5%;
          margin-left: auto;
          margin-right: auto;
        }
        b {
          display: block;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-left: 24px;
          font-size: 1.25em;
          font-weight: 400;
          text-align: left;
          line-height: 2.5em;
          color: #cdb8a5;
        }
        i {
          display: block;
          position: absolute;
          left: 6px;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 7px;
          height: 7px;
          border-top: 1px solid #cdb8a5;
          border-right: 1px solid #cdb8a5;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          transition: 0.1s;
        }
      }
    }
  }
}
</style>
