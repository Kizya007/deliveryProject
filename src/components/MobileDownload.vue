<template>
  <div class="mobile container">
    <div class="mobile-text">
      <p class="mobile-text__title">
        Download Our <span class="color-text">Mobile App</span>
      </p>
      <p class="mobile-text__subtitle">
        It's all at your fingertips -- the restaurants you love. Find the right
        food to suit your mood, and make the first bite last. Go ahead, download
        app and get 50% discount
      </p>
      <div class="mobile-text__img">
        <img src="@/assets/png/AppStore.png" alt="" />
        <img src="@/assets/png/GooglePlay.png" alt="" />
      </div>
    </div>
    <div class="mobile-img">
      <img src="@/assets/png/Mobile.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileDownload",

  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/Mobile.scss";
</style>
