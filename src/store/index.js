import { createStore, createLogger } from "vuex";

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
      menu: [
        {
          id: 0,
          src: "//lebledor-img.s3.amazonaws.com/cover/7b942d07cdd519e2d815ed7f632c27e2.png",
          title: "金色三麥現釀啤酒蝦",
        },
        {
          id: 1,
          src: "//lebledor-img.s3.amazonaws.com/cover/45bde60ce8bab51f706ca2a5b1d6a6b8.png",
          title: "金色三麥經典大拼盤",
        },
        {
          id: 2,
          src: "//lebledor-img.s3.amazonaws.com/cover/fcb1903e38bbf04a580bd835022346a3.png",
          title: "墨魚醉嗆烏魚子",
        },
        {
          id: 3,
          src: "//lebledor-img.s3.amazonaws.com/cover/3f003b081f2f681fa9a6102a852fb369.png",
          title: "海陸交響曲",
        },
        {
          id: 4,
          src: "//lebledor-img.s3.amazonaws.com/cover/0c80741437f6c0a2184b482cad162ca1.png",
          title: "蜜香滿天飛",
        },
        {
          id: 5,
          src: "//lebledor-img.s3.amazonaws.com/cover/536c9e8a9dc058d004a0294b55840313.png",
          title: "極鮮和風紅鮪魚〔季節限定〕",
        },
        {
          id: 6,
          src: "//lebledor-img.s3.amazonaws.com/cover/9af4cfad2ddb8b7186ccfeba474762fe.png",
          title: "中卷花開滿堂香",
        },
        {
          id: 7,
          src: "//lebledor-img.s3.amazonaws.com/cover/6b1f37ccb3cf8fe181c1a76f53f7b914.png",
          title: "舞味鮮蝦拌墨魚",
        },
      ],
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
    handleAnimation(state) {
      state.animation = false;
      setTimeout(() => {
        state.animation = true;
      }, 300);
    },
  },
  actions: {},
});
