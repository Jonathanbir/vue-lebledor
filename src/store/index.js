import { createStore, createLogger } from "vuex";
import MENU_DATA from "../menu-data";

export const store = createStore({
  plugins: [
    createLogger({
      collapsed: false, // 默认展开
    }),
  ],
  state() {
    return {
      animation: false,
      bool: { show: false, submenu: true },
      // menudata: MENU_DATA,
      // menu: MENU_DATA[0].data,
      menu: {
        index: 0,
        data: MENU_DATA,
        menu: MENU_DATA[0].data,
        active: [0, MENU_DATA[0].data[0].src],
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
      console.log("value", value);
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
  },
  actions: {},
});
