<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="location">location</div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav > a {
    margin: 0 30px;
  }
}
</style>
