<template>
  <main>
    <Transition name="fadeAndShow">
      <div
        class="sub-menu"
        id="nav-top-sub"
        style="transform: matrix(1, 0, 0, 1, 0, 0)"
        v-show="show"
      >
        <div
          class="sub-menu-inner cuisine active"
          id="nav-top-sub-cuisine"
          v-if="submenu"
        >
          <div class="row picture">
            <div
              class="circle"
              id="nav-top-sub-cuisine-img"
              style="
                opacity: 1;
                background-image: url('//lebledor-img.s3.amazonaws.com/cover/ad50eb7e0a527ea2fe8dcf6557c995d9.png');
              "
            ></div>
          </div>
          <div class="row">
            <h4 class="title">主廚推薦</h4>
            <div class="list">
              <a
                class="button button-nav-top-sub"
                href="/menu/chef-recommended/signature"
                data-id="2011"
                img-src="//lebledor-img.s3.amazonaws.com/cover/536c9e8a9dc058d004a0294b55840313.png"
                >精選菜色</a
              >
            </div>
            <h4 class="title">開胃前菜</h4>
            <div class="list">
              <a
                class="button button-nav-top-sub"
                href="/menu/appetizer/starter"
                data-id="2022"
                img-src="//lebledor-img.s3.amazonaws.com/cover/e422d258991d8f566cfd179f426e2520.png"
                >開胃菜</a
              ><a
                class="button button-nav-top-sub"
                href="/menu/appetizer/salad"
                data-id="2021"
                img-src="//lebledor-img.s3.amazonaws.com/cover/ad50eb7e0a527ea2fe8dcf6557c995d9.png"
                >沙拉類</a
              >
            </div>
          </div>
          <div class="row">
            <h4 class="title">主打美食</h4>
            <div class="list">
              <a
                class="button button-nav-top-sub"
                href="/menu/iconic-dishes/pot"
                data-id="2036"
                img-src="//lebledor-img.s3.amazonaws.com/cover/d508c3b35aef826342d403cceb397fb8.png"
                >鍋湯類</a
              ><a
                class="button button-nav-top-sub"
                href="/menu/iconic-dishes/pasta"
                data-id="2032"
                img-src="//lebledor-img.s3.amazonaws.com/cover/d192096e541416472bf682f2e290002a.png"
                >義大利麵</a
              ><a
                class="button button-nav-top-sub"
                href="/menu/iconic-dishes/rice"
                data-id="2031"
                img-src="//lebledor-img.s3.amazonaws.com/cover/57ca230b9258d09a416d513267503c4f.png"
                >飯類</a
              ><a
                class="button button-nav-top-sub"
                href="/menu/iconic-dishes/grilled"
                data-id="2035"
                img-src="//lebledor-img.s3.amazonaws.com/cover/a77e2f529ed139cfa316479d231f9a07.png"
                >燒烤類</a
              ><a
                class="button button-nav-top-sub"
                href="/menu/iconic-dishes/pizza"
                data-id="2033"
                img-src="//lebledor-img.s3.amazonaws.com/cover/d1a972853865f69d459300cdf4e731ad.png"
                >披薩類</a
              ><a
                class="button button-nav-top-sub"
                href="/menu/iconic-dishes/fried"
                data-id="2034"
                img-src="//lebledor-img.s3.amazonaws.com/cover/a180d6ab309298c29c13a0ef4cec4cae.png"
                >酥炸類</a
              >
            </div>
          </div>
          <div class="row">
            <h4 class="title">餐後甜點</h4>
            <div class="list">
              <a
                class="button button-nav-top-sub"
                href="/menu/classic-confection/dessert"
                data-id="2041"
                img-src="//lebledor-img.s3.amazonaws.com/cover/78fe6c6e1029b356063e788b306fdfa7.png"
                >甜點飲料</a
              >
            </div>
          </div>
        </div>
        <div class="sub-menu-inner locations" id="nav-top-sub-locations" v-else>
          <div class="row picture">
            <div
              class="circle"
              id="nav-top-sub-locations-img"
              style="
                opacity: 0;
                background-image: url('/img/location/11-edamall/cover.png');
              "
            ></div>
          </div>
          <div class="row">
            <h4 class="title">北區</h4>
            <div class="list">
              <a
                class="button button-nav-top-sub"
                href="/location/miramar"
                img-src="/img/location/1-miramar/cover.png"
                >台北美麗華店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/qsquare"
                img-src="/img/location/2-qsquare/cover.png"
                >台北京站店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/cellar"
                img-src="/img/location/3-cellar/cover.png"
                >信義誠品店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/citylink"
                img-src="/img/location/4-citylink/cover.png"
                >南港CITYLINK店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/megacity"
                img-src="/img/location/5-megacity/cover.png"
                >板橋大遠百店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/jingguan"
                img-src="/img/location/6-jingguan/cover.png"
                >新莊晶冠店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/bigcity"
                img-src="/img/location/7-bigcity/cover.png"
                >新竹巨城店PARK15</a
              ><a
                class="button button-nav-top-sub"
                href="/location/sogoa21"
                img-src="/img/location/14-sogoa21/cover.png"
                >中壢SOGO店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/zhubei"
                img-src="/img/location/17-zhubei/cover.png"
                >新竹竹北店</a
              >
            </div>
          </div>
          <div class="row">
            <h4 class="title">中區</h4>
            <div class="list">
              <a
                class="button button-nav-top-sub"
                href="/location/shizheng"
                img-src="/img/location/8-shizheng/cover.png"
                >台中市政店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/cmp"
                img-src="/img/location/9-cmp/cover.png"
                >台中勤美店</a
              >
            </div>
            <h4 class="title">南區</h4>
            <div class="list">
              <a
                class="button button-nav-top-sub"
                href="/location/dreammall"
                img-src="/img/location/10-dreammall/cover.png"
                >台南南紡店 </a
              ><a
                class="button button-nav-top-sub"
                href="/location/edamall"
                img-src="/img/location/11-edamall/cover.png"
                >高雄義大店</a
              ><a
                class="button button-nav-top-sub"
                href="/location/hanshin"
                img-src="/img/location/15-hanshin/cover.png"
                >漢神巨蛋店</a
              >
            </div>
          </div>
          <div class="row">
            <h4 class="title">UMAMI 金色三麥</h4>
            <div class="list">
              <a
                class="button button-nav-top-sub"
                href="/location/umami"
                img-src="/img/location/16-umami/cover.png"
                >微風南山店</a
              >
            </div>
          </div>
          <!--<div class="row">
			<h4 class="title">海外</h4>
			<div class="list">
				<a class="button button-nav-top-sub" href="<?/*=BASE_URL*/?>location/12" img-id="[0,1]">中國蘇州店</a>
				<a class="button button-nav-top-sub" href="<?/*=BASE_URL*/?>location/13" img-id="[0,2]">中國上海店</a>
			</div>
		</div>-->
        </div>
      </div>
    </Transition>
  </main>
</template>

<script>
import { Transition, toRefs } from "vue";
export default {
  props: ["show", "submenu"],
  setup(props) {
    const { show, submenu } = toRefs(props);
    console.log("...", show.value, submenu.value);
  },
};
</script>

<style lang="scss" scoped>
.fadeAndShow-enter-from {
  top: -500px;
}

.fadeAndShow-enter-to {
  top: 0px;
}
.fadeAndShow-leave-from {
  top: 0px;
}

.fadeAndShow-leave-to {
  top: -300px;
}
.sub-menu {
  position: fixed;
  top: 0;
  will-change: transform;
  -webkit-transform: translateY(-450px);
  transform: translateY(-450px);
  width: 100%;
  height: 80%;
  padding-top: 35px;
  text-align: center;
  background-color: #000;
  opacity: 0.8;
  z-index: 1;
  transition: all 5s ease-in-out;
  .sub-menu-inner {
    position: relative;
    top: 80px;
    .picture {
      margin-right: 100px;
      margin-left: -357px;
      width: 218px;
      padding-top: 20px;
      .circle {
        display: block;
        width: 218px;
        height: 218px;
        -webkit-clip-path: circle(109px at center);
        clip-path: circle(109px at center);
        background-size: 100%;
        background: no-repeat;
        background-size: 220px 167px;
        -webkit-clip-path: none;
        clip-path: none;
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
</style>
