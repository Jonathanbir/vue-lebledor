<template>
  <section id="indexLocation" class="index-location bg-grain-soil">
    <h2 class="maintitle">
      <img
        src="https://www.lebledor.com/m/img/index/location-maintitle.png"
        alt="三五好友湊一桌"
      />
    </h2>
    <nav class="menu">
      <a
        class="on"
        @click="
          area = 'northernLocations';
          store.commit('handleAnimation');
        "
        >北區</a
      >
      <a
        @click="
          area = 'centerLocations';
          store.commit('handleAnimation');
        "
        class=""
        >中區</a
      >
      <a
        @click="
          area = 'southernLocations';
          store.commit('handleAnimation');
        "
        class=""
        >南區</a
      >
      <a
        @click="
          area = 'umamiLocations';
          store.commit('handleAnimation');
        "
        class=""
        >UMAMI</a
      >
    </nav>

    <div class="list">
      <Transition name="fadeAndShow" mode="out-in">
        <ul v-show="animationShow && area == 'northernLocations'" class="area">
          <li>
            <router-link
              to="/location/miramar"
              @click="
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
              ><b>台北美麗華店</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/qsquare"
              @click="
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
              ><b>台北京站店</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/cellar"
              @click="
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
              ><b>信義誠品店</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/citylink"
              @click="
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
              ><b>南港CITYLINK店</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/megacity"
              @click="
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
              ><b>板橋大遠百店</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/jingguan"
              @click="
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
              ><b>新莊晶冠店</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/bigcity"
              @click="
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
              ><b>新竹巨城店PARK15</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/sogoa21"
              @click="
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
              ><b>中壢SOGO店</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/zhubei"
              @click="
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
              ><b>新竹竹北店</b></router-link
            >
          </li>
        </ul>
      </Transition>
      <Transition name="fadeAndShow" mode="out-in"
        ><ul v-show="animationShow && area == 'centerLocations'" class="area">
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
              "
              ><b>台中市政店</b></router-link
            >
          </li>
          <li>
            <router-link
              to="/location/cmp"
              @click="
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
              "
              ><b>台中勤美店</b></router-link
            >
          </li>
        </ul>
      </Transition>
      <Transition name="fadeAndShow" mode="out-in"
        ><ul v-show="animationShow && area == 'southernLocations'" class="area">
          <li>
            <router-link
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
              "
              ><b>台南南紡店 </b></router-link
            >
          </li>
          <li>
            <router-link
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
              "
              ><b>高雄義大店</b></router-link
            >
          </li>
          <li>
            <router-link
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
              "
              ><b>漢神巨蛋店</b></router-link
            >
          </li>
        </ul>
      </Transition>
      <Transition name="fadeAndShow" mode="out-in"
        ><ul v-show="animationShow && area == 'umamiLocations'" class="area">
          <li>
            <router-link
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
              "
              ><b>微風南山店</b></router-link
            >
          </li>
        </ul>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, Transition } from "vue";
import { useStore } from "vuex";

const store = useStore();
const animationShow = computed(() => store.state.animation);
const locationsdata = computed(() => store.state.locations.data);

const area = ref("northernLocations");
onMounted(() => {
  store.commit("handleAnimation");
});
</script>

<style lang="scss" scoped>
.index-location {
  padding-top: 2.1875em;
  padding-bottom: 2.1875em;
  .maintitle {
    margin-bottom: 1.5625em;
    text-align: center;
    img {
      width: 100%;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .menu {
    display: table;
    width: 87.5%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5625em;
    text-align: center;
    a {
      display: table-cell;
      border-left: 1px solid rgba(46, 40, 34, 0.5);
      line-height: 1em;
      color: #000;

      &:first-child {
        border-left: 0;
      }
    }
  }
  .list {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 81.25%;
    margin-left: auto;
    margin-right: auto;
    padding: 1.25em 0;
    background: #cdb8a5;
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 40px;
      li {
        list-style: none;
        a {
          color: #000;
        }
      }
    }
  }
}
.bg-grain-soil {
  background: #c4af97 url("https://www.lebledor.com/m/img/ui/bg-grain-soil.jpg")
    repeat 50% 0;
}
</style>
