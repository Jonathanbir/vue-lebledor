<template>
  <NevigationVue
    :show="message.show"
    :submenu="message.submenu"
    @mouseOver="handleMouseOver"
    @mouseOut="handleMouseOut"
    @scroll="handleScroll(e)"
  />
  <SubMenuVue :show="message.show" :submenu="message.submenu" />
</template>

<script setup>
import { ref } from "vue";
import NevigationVue from "./components/Nevigation.vue";
import SubMenuVue from "./components/SubMenu.vue";

const message = ref({ show: false, submenu: true });

const handleMouseOver = (value) => {
  message.value.submenu = value.submenu;
  message.value.show = value.show;
};
const handleMouseOut = (value) => {
  message.value.submenu = value.submenu;
  message.value.show = value.show;
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
