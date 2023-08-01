<template>
  <div>
    <div class="products-card">
      <div class="products-card__img">
        <img src="@/assets/png/blackBurger.png" alt="" />
      </div>
      <div class="products-card__rating">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <p class="products-card__name">Cheeseburger With Salad</p>
      <p class="products-card__price">$18.00</p>
      <button class="products-card__btn" v-on:click="handleClick">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
// import AsianIcon from "@/assets/icon/AsianIcon.vue";
// import BurgerIcon from "@/assets/icon/BurgerIcon.vue";
// import PizzaIcon from "@/assets/icon/PizzaIcon.vue";
// import SandwichIcon from "@/assets/icon/SandwichIcon.vue";
// import SetMenuIcon from "@/assets/icon/SetMenuIcon.vue";
import StarIcon from "@/assets/icon/StarIcon.vue";
// import ArrowLeft from "@/assets/icon/ArrowLeft.vue";
// import ArrowRight from "@/assets/icon/ArrowRight.vue";

export default {
  name: "ProductCard",

  methods: {
    handleClick() {
      console.log(1);
    },
  },

  components: {
    // AsianIcon,
    // BurgerIcon,
    // PizzaIcon,
    // SandwichIcon,
    // SetMenuIcon,
    StarIcon,
    // ArrowLeft,
    // ArrowRight,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Category.scss";
</style>
