<template>
  <NevigationVue />
  <SubMenuVue v-if="screen > 530" />
  <SubMenuMobileVue v-else />
  <FooterViewVue />
</template>

<script setup>
import { ref } from "vue";
import NevigationVue from "./components/Nevigation.vue";
import SubMenuVue from "./components/SubMenu.vue";
import SubMenuMobileVue from "./components/mobile/SubMenuMobile.vue";
import FooterViewVue from "./views/FooterView.vue";
const screen = ref(document.documentElement.scrollWidth);
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
