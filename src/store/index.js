import { createStore, createLogger } from "vuex";

export const store = createStore({
  plugins: [
    createLogger({
      collapsed: false, // 默认展开
    }),
  ],
  state() {
    return {
      bool: { show: false, submenu: true },
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
  },
  actions: {},
});
