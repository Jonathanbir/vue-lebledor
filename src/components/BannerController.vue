<template>
  <div class="controller-circle" :style="rotateStyle">
    <div class="contro-circle"></div>
  </div>
  <div class="controller">
    <div class="controller-btn">
      <img
        src="../images/icons/10030.png"
        class="controller-btn-item controller-btn-01"
        @click="clickDeg01"
      />
      <img
        src="../images/icons/10031.png"
        class="controller-btn-item controller-btn-02"
        @click="clickDeg02"
      />
      <img
        src="../images/icons/10032.png"
        class="controller-btn-item controller-btn-03"
        @click="clickDeg03"
      />
      <img
        src="../images/icons/10033.png"
        class="controller-btn-item controller-btn-04"
        @click="clickDeg04"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
const deg = ref(0);

const rotateStyle = computed(() => {
  return "transform: rotate(" + deg.value + "deg)";
});

onMounted(() => {
  setInterval(() => {
    if (deg.value % 90 == 0 || deg.value % 180 == 0 || deg.value % 270 == 0) {
      setTimeout(() => {
        deg.value++;
      }, 3000);
    } else {
      deg.value++;
      if (deg.value % 360 == 0) {
        deg.value = 0;
      }
    }
  }, 100);
});

let clickDeg01 = () => {
  deg.value = 270;
};
let clickDeg02 = () => {
  deg.value = 0;
};
let clickDeg03 = () => {
  deg.value = 90;
};
let clickDeg04 = () => {
  deg.value = 180;
};
</script>

<style lang="css" scoped>
.controller-circle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin: auto;
}
.contro-circle {
  position: relative;
  width: 300px;
  height: 300px;
}

.contro-circle::after {
  content: "";
  position: absolute;
  top: 135px;
  left: 285px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.4);
}

.controller {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 300px;
  height: 300px;
  margin: auto;
  background-image: url("../images/10029.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.controller-btn {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.controller-btn-item {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.controller-btn-01 {
  position: absolute;
  left: 138px;
  top: -12px;
}
.controller-btn-01:hover {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAArElEQVQ4y52TMQ6EIBBFJ7EisbTlIN6AzVJ5Ce/GsajWntCRt8UaNeIiyDTD8BiGzyBIvUkznA/iRewvTBFG87qGMegzbEjMGzBt3kzCZGUwkxhPR497ilPNjPQoHIFEwKHo9+3ZBVF88FgGLJ4FVVADh6db/Q6PK8EBe5hZQgYTAZhESAyH5YEkwgRAfJL5ac2KZVXjfaNGg84NL9jUG+hfqKrrmvq5+qfU2hd2WyWkgyswtQAAAABJRU5ErkJggg==");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.controller-btn-02 {
  position: absolute;
  left: 290px;
  top: 138px;
}

.controller-btn-02:hover {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAAxElEQVQ4y+XSL0uDURQH4CvyZhnsI/g5TH4AhYHggkFYti0OoyzZDCouLIxlxYU3iNm1sTgwC8JeEfz3PgZRdvVu2HdPupcHzuH+ThD+X2FZ8KJTaFuN8ZmDRH0YO1U6jPFWsvWba8Gxhxhvz8FXgj1m8bNGgmboyAyMZvGd8wTewchE+dX3+7nlSfUPvvTqRt9m/HVVhZ6ViG5410yHsouuys+9ZupWNi/BfS8eXWg6MkRubVHc607cKxVy9V9DLcM+fwIifSZgmjTnbAAAAABJRU5ErkJggg==");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.controller-btn-03 {
  position: absolute;
  left: 137px;
  top: 290px;
}
.controller-btn-03:hover {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAA0ElEQVQ4y93SMWpCARAE0BELG6uQA9iLhYU38Q4S8Ax2dkkhfBDsPYBXEGxsbcQL+CsrC0H0pYgEE37AIk0y2+wMwzALG3l88hfNVbCwyKOwtv4ts73hHZub37Gh/Vfzm6tBZczA1et3cebq6bY3NW/bs6tZVUYnUTdxBEcT9Q+1unndxtlUR8fU2Ub95zNnztqfrO1cWSFJ1JyMk0RDI0mMndTuLSOFwkuihZWDC7g4WKGVeFEojGKrVFometgp9HV19RV26CWWSqVt/vvzvwP05HqTT/FsIgAAAABJRU5ErkJggg==");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.controller-btn-04 {
  position: absolute;
  left: -15px;
  top: 138px;
}
.controller-btn-04:hover {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAAvklEQVQ4y93SvwqCcBDA8VNq6d9uY0b0LC6BL5NDRNQg0dILRWE4uFagBUFP0FQINnxbDBF+qWvdLb/hw3G/uxOkespv4yyo8yRkQkNEyrAIEQu2XOhXwQEWGisimmVttIgxRdDYMy7DLl76GnFUT6OWVnW5M0yxwUuNH4QExHgfKoJBosZn5liYuY/aHNR4xgYtR3V8HDVuc2OZcXTWRDS+TIMBV3aMMOhi4xPRK1gKHaaceJFwwClY938e/xv9rcfGmG+ljwAAAABJRU5ErkJggg==");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
