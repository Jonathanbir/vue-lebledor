<template>
  <NevigationVue
    :show="show"
    :submenu="submenu"
    @mouseOver="handleMouseOver"
    @mouseOut="handleMouseOut"
  />
  <SubMenuVue :show="show" :submenu="submenu" />
</template>

<script>
import NevigationVue from "./components/Nevigation.vue";
import SubMenuVue from "./components/SubMenu.vue";

export default {
  data() {
    return { show: false, submenu: true };
  },
  methods: {
    handleMouseOver(value) {
      this.submenu = value.submenu;
      this.show = value.show;
    },
    handleMouseOut(value) {
      this.submenu = value.submenu;
      this.show = value.show;
    },
  },
  components: { NevigationVue, SubMenuVue },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
