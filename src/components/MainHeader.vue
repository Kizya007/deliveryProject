<template>
  <header class="container">
    <p class="title">Efood</p>
    <nav class="navigation">
      <ul class="navigation-list">
        <li class="navigation-list__item">
          <a href=""> Home </a>
        </li>
        <li class="navigation-list__item">
          <a href=""> Service </a>
        </li>
        <li class="navigation-list__item">
          <a href=""> Top cities </a>
        </li>
        <li class="navigation-list__item">
          <a href=""> Contact </a>
        </li>

        <li class="navigation-list__item">
          <SearchIcon />
        </li>
        <li class="navigation-list__item">
          <BasketIcon />
          <span class="navigation-list__item-count">4</span>
        </li>
      </ul>
    </nav>
    <a class="link" href=""> Sign Up </a>
    <!-- /content вынести в отдельный компонент -->
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
