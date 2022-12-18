import { createStore, createLogger } from "vuex";
import MENU_DATA from "../data/menu-data";
import LOCATIONS_DATA from "../data/locations-data";
import NEWS_DATA from "../data/news-data";

export const store = createStore({
  // plugins: [
  //   createLogger({
  //     collapsed: false, // 默认展开
  //   }),
  // ],
  state() {
    return {
      animation: false,
      bool: { show: false, submenu: true },
      menu: {
        data: MENU_DATA,
        menu: MENU_DATA[0],
        active: [0, MENU_DATA[0].data[0].src],
        mobileActive: false,
        // menu: MENU_DATA[4].data,
        // active: [0, MENU_DATA[4].data[0].items[0].src],
      },
      locations: {
        data: LOCATIONS_DATA,
        location: LOCATIONS_DATA[0],
        numbers: [
          { startNum: 0, currentNum: 100, endNum: LOCATIONS_DATA[0].seat },
          { startNum: 0, currentNum: 100, endNum: LOCATIONS_DATA[0].stateroom },
          { startNum: 0, currentNum: 100, endNum: LOCATIONS_DATA[0].space1 },
          { startNum: 0, currentNum: 100, endNum: LOCATIONS_DATA[0].space2 },
          { startNum: 0, currentNum: 100, endNum: LOCATIONS_DATA[0].space3 },
        ],
        scroll: false,
      },
      news: {
        data: NEWS_DATA,
      },
    };
  },
  mutations: {
    handleSubMenu(state, value) {
      state.bool.submenu = value.submenu;
      state.bool.show = value.show;
    },
    handleChangeMenu(state, value) {
      state.menu.menu = value;
    },
    handleChangeMenuActive(state, value) {
      setTimeout(() => {
        state.menu.active = value;
      }, 300);
    },
    handleChangeMenuMobileActive(state, value) {
      state.menu.mobileActive = value;
    },
    handleAnimation(state) {
      state.animation = false;
      setTimeout(() => {
        state.animation = true;
      }, 300);
    },
    handleChangeLocations(state, value) {
      state.locations.location = value;
    },
    handleChangeLocationsNumbers(state, value) {
      state.locations.numbers = value;
    },
    handleChangeScroll(state, value) {
      state.locations.scroll = value;
    },
  },
  actions: {},
});
