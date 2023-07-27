<template>
  <header class="container">
    <!-- div= nav -->
    <img src="@/assets/png/efood.png" alt="" />
    <div class="navigation">
      <ul class="navigation-list">
        <a href="">
          <li class="navigation-list__item">Home</li>
        </a>
        <a href="">
          <li class="navigation-list__item">Service</li>
        </a>
        <a href="">
          <li class="navigation-list__item">Top cities</li>
        </a>
        <a href="">
          <li class="navigation-list__item">Contact</li>
        </a>
        <li class="navigation-list__item">
          <SearchIcon />
        </li>
        <li class="navigation-list__item">
          <BasketIcon />
          <span class="navigation-list__item-count">4</span>
        </li>
      </ul>
    </div>
    <a class="navigation-link" href=""> Sign Up </a>

    <!-- /content вынести в отдельный компонент -->
    <div class="content">
      <div class="content-text">
        <h1 class="content-text__title">Super fast Food delivery service</h1>
        <p class="content-text__subtitle">
          We provide super fast-delivery service. Let’s use our services right
          now and get discounts of up to 50%
        </p>
        <div class="block-links">
          <a class="block-links__left" href=""> Explore Food </a>
          <a class="block-links__right" href="">Download App </a>
        </div>
      </div>
      <div class="content-img">
        <img src="@/assets/png/ScooterGuy.png" alt="" />
      </div>
    </div>
  </header>
</template>

<script>
import SearchIcon from "@/assets/icon/SearchIcon.vue";
import BasketIcon from "@/assets/icon/BasketIcon.vue";

export default {
  name: "MainHeader",

  components: {
    SearchIcon,
    BasketIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Header.scss";
</style>
