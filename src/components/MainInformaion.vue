<template>
  <div class="information container">
    <div class="information-img">
      <img src="@/assets/png/foodDelivery.png" alt="" />
    </div>
    <div class="information-text">
      <p class="information-text__title">
        <span class="color-text">Stay</span> at home, we will Provide
        <span class="color-text">good food</span>
      </p>
      <p class="information-text__subtitle">
        We provide tasty food and superfast Delivery at your home. Let’s use our
        services right now and get discounts of up to 50%.
      </p>
      <ul class="information-list">
        <li class="information-list__item">
          <TimerWatchIcon />
          fasted Delivery in 30 Minutes
        </li>
        <li class="information-list__item">
          <DeliveryManIcon />
          300+ Delivery men
        </li>
        <li class="information-list__item">
          <ReustarantIcon />
          500+ restaurant & cafe shop
        </li>
      </ul>
      <button class="information-text__btn" v-on:click="handleClick">See more</button>
    </div>
  </div>
</template>

<script>
import TimerWatchIcon from "@/assets/icon/TimerWatchIcon.vue";
import DeliveryManIcon from "@/assets/icon/DeliveryManIcon.vue";
import ReustarantIcon from "@/assets/icon/ReustarantIcon.vue";

export default {
  name: "SeeMore",
  methods: {
    handleClick() {
        console.log(1)
    } 
  },
  components: {
    TimerWatchIcon,
    DeliveryManIcon,
    ReustarantIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/MainInformaion.scss";
</style>
