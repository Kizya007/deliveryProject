<template>
  <div class="subscribe container">
    <p class="subscribe-title">Subscribe to get the Latest Offer</p>
    <p class="subscribe-subtitle">
      Get our daily updates by subscribing to our newspaper, please drop your
      email below
    </p>
    <div class="subscribe-block">
      <input
        class="subscribe-block__input"
        type="text"
        value="Enter your email addres"
      />
      <button class="subscribe-block__btn">
        <EmailSend />
        Subscribe
      </button>
    </div>
  </div>
</template>

<script>
import EmailSend from "@/assets/icon/EmailSend.vue";

export default {
  name: "MainSubcribe",

  components: {
    EmailSend,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Subscribe.scss";
</style>
