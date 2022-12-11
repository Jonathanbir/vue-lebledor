<template>
  <div>
    <div class="dropdown">
      <button
        class="dropdown-button"
        id="dLabel"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        選擇分店
        <div class="sprite sprite-button-arrow-down"></div>
      </button>
      <div class="dropdown-menu" aria-labelledby="dLabel">
        <div class="dropdown-menu-header">北部</div>
        <a class="button dropdown-menu-button" href="/location/miramar"
          >台北美麗華店</a
        >
        <a class="button dropdown-menu-button" href="/location/qsquare"
          >台北京站店</a
        >
        <a class="button dropdown-menu-button" href="/location/cellar"
          >信義誠品店</a
        >
        <a class="button dropdown-menu-button" href="/location/citylink"
          >南港CITYLINK店</a
        >
        <a class="button dropdown-menu-button" href="/location/megacity"
          >板橋大遠百店</a
        >
        <a class="button dropdown-menu-button" href="/location/jingguan"
          >新莊晶冠店</a
        >
        <a class="button dropdown-menu-button" href="/location/bigcity"
          >新竹巨城店PARK15</a
        >
        <a class="button dropdown-menu-button" href="/location/sogoa21"
          >中壢SOGO店</a
        >
        <a class="button dropdown-menu-button" href="/location/zhubei"
          >新竹竹北店</a
        >
        <div class="dropdown-menu-header">中部</div>
        <a class="button dropdown-menu-button" href="/location/shizheng"
          >台中市政店</a
        >
        <a class="button dropdown-menu-button" href="/location/cmp"
          >台中勤美店</a
        >
        <div class="dropdown-menu-header">南部</div>
        <a class="button dropdown-menu-button" href="/location/dreammall"
          >台南南紡店
        </a>
        <a class="button dropdown-menu-button" href="/location/edamall"
          >高雄義大店</a
        >
        <a class="button dropdown-menu-button" href="/location/hanshin"
          >漢神巨蛋店</a
        >
        <div class="dropdown-menu-header">UMAMI 金色三麥</div>
        <a class="button dropdown-menu-button" href="/location/umami"
          >微風南山店</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
