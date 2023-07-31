<template>
  <div class="delivery container">
    <div class="delivery-img">
      <img src="@/assets/png/foodDelivery.png" alt="" />
    </div>
    <div class="delivery-text">
      <p class="delivery-text__title">
        <span class="color-text">Stay</span> at home, we will Provide
        <span class="color-text">good food</span>
      </p>
      <p class="delivery-text__subtitle">
        We provide tasty food and superfast delivery at your home. Let’s use our
        services right now and get discounts of up to 50%.
      </p>
      <ul class="delivery-list">
        <li class="delivery-list__item">
          <TimerWatchIcon />
          fasted delivery in 30 Minutes
        </li>
        <li class="delivery-list__item">
          <DeliveryManIcon />
          300+ delivery men
        </li>
        <li class="delivery-list__item">
          <ReustarantIcon />
          500+ restaurant & cafe shop
        </li>
      </ul>
      <button class="delivery-text__btn" v-on:click="handleClick">See more</button>
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
@import "@/assets/Seemore.scss";
</style>
