<template>
  <div class="category container">
    <p class="category-title">
      Our popular <span class="color-text">Category</span>
    </p>
    <ul class="category-type">
      <li class="category-type__product"><BurgerIcon /> Burger</li>
      <li class="category-type__product"><PizzaIcon /> Pizza</li>
      <li class="category-type__product"><SandwichIcon /> Sandwich</li>
      <li class="category-type__product"><AsianIcon /> Asian Food</li>
      <li class="category-type__product"><SetMenuIcon /> Set Menu</li>
    </ul>
    <ul class="products">
      <li class="products-card">
        <div class="products-card__img">
          <img src="@/assets/png/cheeseBurger.png" alt="" />
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
        <button class="products-card__btn" v-on:click="handleClick">Add to Cart</button>
      </li>
      <li class="products-card">
        <div class="products-card__img">
          <img src="@/assets/png/beefBurger.png" alt="" />
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
      </li>
      <li class="products-card">
        <div class="products-card__img">
          <img src="@/assets/png/royalCheeseBurger.png" alt="" />
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
        <button class="products-card__btn" v-on:click="handleClick">Add to Cart</button>
      </li>
      <li class="products-card">
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
        <button class="products-card__btn" v-on:click="handleClick">Add to Cart</button>
      </li>
      <li class="products-card">
        <div class="products-card__img">
          <img src="@/assets/png/chickenBurger.png" alt="" />
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
        <button class="products-card__btn" v-on:click="handleClick">Add to Cart</button>
      </li>
    </ul>
    <div class="slider">
      <div class="slider-left">
        <ArrowLeft />
      </div>
      <ul class="slider-list">
        <li class="slider-list__item"></li>
        <li class="slider-list__item"></li>
        <li class="slider-list__item"></li>
        <li class="slider-list__item"></li>
      </ul>
      <div class="slider-right">
        <ArrowRight />
      </div>
    </div>
  </div>
</template>

<script>
import AsianIcon from "@/assets/icon/AsianIcon.vue";
import BurgerIcon from "@/assets/icon/BurgerIcon.vue";
import PizzaIcon from "@/assets/icon/PizzaIcon.vue";
import SandwichIcon from "@/assets/icon/SandwichIcon.vue";
import SetMenuIcon from "@/assets/icon/SetMenuIcon.vue";
import StarIcon from "@/assets/icon/StarIcon.vue";
import ArrowLeft from "@/assets/icon/ArrowLeft.vue";
import ArrowRight from "@/assets/icon/ArrowRight.vue";

export default {
  name: "MainCategory",

  methods: {
    handleClick() {
      console.log(1);
    },
  },

  components: {
    AsianIcon,
    BurgerIcon,
    PizzaIcon,
    SandwichIcon,
    SetMenuIcon,
    StarIcon,
    ArrowLeft,
    ArrowRight,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Category.scss";
</style>
