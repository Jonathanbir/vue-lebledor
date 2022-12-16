<template>
  <footer v-show="screen > 530">
    <div class="container-footer">
      <div class="sprite sprite-logo-footer"></div>
      <h3 class="title-company">金色三麥餐飲股份有限公司</h3>
      <hr class="title-hr" />
      <div class="meta">
        <div>
          <a class="button tel" href="tel:0800-090-000"
            >聯絡電話:0800-090-000</a
          >
        </div>
        <!--<div class="time">營業時間:9AM-6PM</div>-->
        <div class="address">地址:24158 新北市三重區新北大道二段260號1樓</div>
      </div>
      <div class="disclaimer">
        Copyright©2017 LEBLED'OR F&amp;B CO., LTD., All right reserved
      </div>
      <div class="privacy">
        <a href="/doc/site-privacy.pdf" target="_blank">隱私權聲明</a>
      </div>
    </div>
  </footer>
  <div class="notification-drink-safely">
    <div class="container-text">
      開車不喝酒 &nbsp;安全有保障 &nbsp;未成年請勿飲酒
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const screen = ref(document.documentElement.scrollWidth);
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: auto;
  padding: 45px 0 65px;
  background: #000;
  z-index: 2;
  .container-footer {
    position: relative;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    opacity: 1;
    .sprite-logo-footer {
      margin: 0 auto 25px;
      width: 110px;
      height: 88px;
      background-image: url("../images/10058.png");
      background-size: cover;
      background-position: center;
    }
    .title-company {
      text-align: center;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1px;
      color: #bd7461;
    }
    .title-hr {
      border: 0;
      border-top: #3e3732 solid 1px;
      margin: 30px auto;
      width: 110px;
    }
    .meta {
      margin: 0 auto 12px;
      text-align: center;
      font-size: 12px;
      color: #ccb9aa;
      .tel {
        color: #ccb9aa;
      }
    }
    .disclaimer {
      text-align: center;
      letter-spacing: 1px;
      font-size: 10px;
      color: #ccb9aa;
      opacity: 0.5;
    }
    .privacy {
      margin-top: 5px;
      text-align: center;
      a {
        font-size: 10px;
        opacity: 0.5;
        color: #ccb9aa;
      }
    }
  }
}
.notification-drink-safely {
  position: relative;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: auto;
  text-align: center;
  padding: 60px 0;
  letter-spacing: 8px;
  font-size: 30px;
  font-weight: 400;
  color: #000;
  background: #89412e;
  z-index: 2;
}

@media (max-width: 530px) {
  .notification-drink-safely {
    width: 75%;
    padding: 1.2em 0;
    margin: auto;
    line-height: 1.5em;
    letter-spacing: 8px;
    font-size: 1.0625em;
    color: #89422e;
    background: #000;
  }
}
</style>
