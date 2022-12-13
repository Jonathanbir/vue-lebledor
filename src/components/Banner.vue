<template>
  <div class="banner" :style="banners[index].background">
    <Transition name="fadeAndScale" mode="out-in">
      <div class="black-banner" v-show="show"></div>
    </Transition>
    <BannerController />
    <h1 class="web-title"></h1>
    <div class="web-title-2"></div>
    <div class="web-title-3"></div>
    <div class="haccp"></div>
    <div class="awwwards"></div>
    <div class="cssdesignawards"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Transition } from "vue";
import BannerController from "../components/BannerController.vue";

const banners = ref([
  {
    id: 1,
    background: {
      backgroundImage: "url('/src/images/10024.jpg')",
    },
  },
  {
    id: 2,
    background: {
      backgroundImage: "url('/src/images/10025.jpg')",
    },
  },
  {
    id: 3,
    background: {
      backgroundImage: "url('/src/images/10024.jpg')",
    },
  },
  {
    id: 4,
    background: {
      backgroundImage: "url('/src/images/10025.jpg')",
    },
  },
]);
const show = ref(false);

let index = ref(0);

const animiation = () => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 800);
};

setInterval(() => {
  if (index.value >= 0 && index.value <= 2) {
    animiation();
    setTimeout(() => {
      index.value++;
    }, 1000);
  } else if (index.value == 3) {
    animiation();
    setTimeout(() => {
      index.value = 0;
    }, 1000);
  }
}, 5000);
</script>

<style lang="scss" scoped>
.black-banner {
  width: 100%;
  height: 100%;
  background-color: #000;
}
.fadeAndScale-enter-active {
  animation: scale 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
}

.fadeAndScale-enter-from {
  opacity: 0;
}

.fadeAndScale-enter-to {
  opacity: 1;
}

.fadeAndScale-leave-active {
  transition: all 0.7s ease-in;
  animation: scale 0.7s ease-in reverse;
}

.fadeAndScale-leave-from {
  opacity: 1;
}
.fadeAndScale-leave-to {
  opacity: 0;
}
.fadeAndScale-enter-active {
  animation: scale 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
}

.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .web-title {
    position: absolute;
    top: -80px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 150px;
    height: 150px;
    margin: auto;
    background-image: url("../images/10026.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .web-title-2 {
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50px;
    height: 50px;
    margin: auto;
    background-image: url("../images/10027.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .web-title-3 {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 150px;
    height: 150px;
    margin: auto;
    background-image: url("../images/10028.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .haccp {
    display: block;
    width: 99px;
    height: 99px;
    position: absolute;
    top: 100px;
    left: 0;
    background-image: url("../images/10021.png");
    background-size: 100%;
    background-position: 0 0;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .haccp:hover {
    left: 0;
    background-position: 0 -99px;
  }

  .awwwards {
    width: 90px;
    height: 135px;
    position: absolute;
    top: 200px;
    left: -40px;
    background-image: url("../images/10022.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .awwwards:hover {
    left: 0;
  }
  .cssdesignawards {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 350px;
    left: -50px;
    background-image: url("../images/10023.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .cssdesignawards:hover {
    left: 0;
  }
}
</style>
