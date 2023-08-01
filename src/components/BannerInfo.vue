<template>
  <div class="content container">
    <div class="content-text">
      <h1 class="content-text__title">
        Super fast <span class="color-text">Food delivery</span> service
      </h1>
      <p class="content-text__subtitle">
        We provide super fast-delivery service. Let’s use our services right now
        and get discounts of up to 50%
      </p>
      <div class="block-links">
        <button class="block-links__left" href="" v-on:click="handleClick"> Explore Food </button>
        <a class="block-links__right" href="">Download App </a>
      </div>
    </div>
    <div class="content-img">
      <img src="@/assets/png/ScooterGuy.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerInfo",

  methods: {
    handleClick() {
      console.log(1);
    },
  },

  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/Banner.scss";
</style>
