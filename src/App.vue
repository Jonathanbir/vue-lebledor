<template>
  <NevigationVue />
  <SubMenuVue />
  <FooterViewVue />
</template>

<script setup>
import NevigationVue from "./components/Nevigation.vue";
import SubMenuVue from "./components/SubMenu.vue";
import FooterViewVue from "./components/FooterView.vue";
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
