import { createStore, createLogger } from "vuex";
import MENU_DATA from "../data/menu-data";
import LOCATIONS_DATA from "../data/locations-data";

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
        index: 0,
        data: MENU_DATA,
        menu: MENU_DATA[0].data,
        active: [0, MENU_DATA[0].data[0].src],
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
    handleChangeMenuIndex(state, value) {
      state.menu.index = value;
    },
    handleChangeMenuActive(state, value) {
      setTimeout(() => {
        state.menu.active = value;
      }, 300);
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
  },
  actions: {},
});
