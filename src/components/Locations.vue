<template>
  <main>
    <article class="locations" id="article-locations">
      <div class="container-article transition">
        <div class="container-text">
          <h3 class="title-article">
            It's like <span class="no-break">no place else</span>
          </h3>
          <h3 class="sprite sprite-article-locations-title">三五好友湊一桌</h3>
          <hr class="title-article-hr" />
          <div class="dropdown">
            <Dropdown
              v-model="location.selectedGroupedCity"
              :options="location.groupedCities"
              optionLabel="label"
              optionGroupLabel="label"
              optionGroupChildren="items"
              placeholder="選擇分店"
            >
              <template #optiongroup="slotProps">
                <div class="flex align-items-center country-item">
                  <div>{{ slotProps.option.label }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>
      <div class="article-loader" id="article-locations-loader"></div>
    </article>
  </main>
</template>

<script setup>
import { ref } from "vue";
const location = ref({
  selectedGroupedCity: null,
  groupedCities: [
    {
      label: "北部",
      code: "DE",
      items: [
        { label: "台北美麗華店", value: "台北美麗華店" },
        { label: "台北京站店", value: "台北京站店" },
        { label: "信義誠品店", value: "信義誠品店" },
        { label: "南港CITYLINK店", value: "南港CITYLINK店" },
        { label: "板橋大遠百店", value: "板橋大遠百店" },
        { label: "新莊晶冠店", value: "新莊晶冠店" },
        { label: "新竹巨城店PARK15", value: "新竹巨城店PARK15" },
        { label: "中壢SOGO店", value: "中壢SOGO店" },
        { label: "新竹竹北店", value: "新竹竹北店" },
      ],
    },
    {
      label: "中部",
      code: "US",
      items: [
        { label: "台中市政店", value: "台中市政店" },
        { label: "台中勤美店", value: "台中勤美店" },
        { label: "台南南紡店", value: "台南南紡店" },
      ],
    },
    {
      label: "南部",
      code: "JP",
      items: [
        { label: "台南南紡店", value: "台南南紡店" },
        { label: "高雄義大店", value: "高雄義大店" },
      ],
    },
    {
      label: "UMAMI 金色三麥",
      code: "JP",
      items: [{ label: "微風南山店", value: "微風南山店" }],
    },
  ],
});
</script>

<style lang="scss" scoped>
.p-dropdown {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  text-align: left;
  padding: 0 20px;
  background: #ccb9aa;
  color: #000;
  font-size: 16px;
  line-height: 16px;
  border-radius: initial;
}

.locations {
  width: 100%;
  height: 0;
  padding-bottom: 42.5%;
  .container-article {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    width: 100%;
    height: 100%;
    background-image: url("../images/locations-background.jpeg");
    background-size: cover;
    background-position: 50% 50%;
    .container-text {
      position: relative;
      top: -20%;
      width: 420px;
      .title-article {
        width: 100%;
        margin-bottom: 20px;
        font-weight: 400;
        .no-break {
          display: block;
        }
      }
      .sprite-article-locations-title {
        position: absolute;
        top: 7px;
        left: 140px;
        width: 256px;
        height: 37px;
        background-image: url("data:image/png;base64,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");
        background-size: 100%;
        text-indent: -9999px;
        text-align: start;
      }
    }
  }
}
</style>
