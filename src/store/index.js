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
      menudata: MENU_DATA,
      menu: MENU_DATA[0].data,
    };
  },
  mutations: {
    handleMouseOver(state, value) {
      state.bool.submenu = value.submenu;
      state.bool.show = value.show;
    },
    handleMouseOut(state, value) {
      state.bool.submenu = value.submenu;
      state.bool.show = value.show;
    },
    handleChangeMenu(state, value) {
      console.log("value", value);
      state.menu = value;
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
