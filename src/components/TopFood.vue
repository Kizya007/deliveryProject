<template>
    <div class="food container">
        <h1 class="food-title">Top Food restaurant</h1>
        <ul class="cards">
            <li class="cards-list">
                <div class="cards-list__img">
                    <img src="@/assets/png/BlazePizza.png" alt="">
                </div>
                <p class="cards-list__name">Blaze Pizza</p>
                <div class="cards-info">
                    <WatchIcon />
                    <span class="cards-info__time">
                        11.00 AM - 10.00 PM
                    </span>
                    <div class="cards-info__arrow">
                        <ArrowRightIcon />
                    </div>
                </div>
            </li>
            <li class="cards-list">
                <div class="cards-list__img">
                    <img src="@/assets/png/PizzaRanch.png" alt="">
                </div>
                <p class="cards-list__name">Pizza Ranch</p>
                <div class="cards-info">
                    <WatchIcon />
                    <span class="cards-info__time">
                        11.00 AM - 10.00 PM
                    </span>
                    <div class="cards-info__arrow">
                        <ArrowRightIcon />
                    </div>
                </div>
            </li>
            <li class="cards-list">
                <div class="cards-list__img">
                    <img src="@/assets/png/PizzaHut.png" alt="">
                </div>
                <p class="cards-list__name">Dion’s Pizza Hut</p>
                <div class="cards-info">
                    <WatchIcon />
                    <span class="cards-info__time">
                        11.00 AM - 10.00 PM
                    </span>
                    <div class="cards-info__arrow">
                        <ArrowRightIcon />
                    </div>
                </div>
            </li>
            <li class="cards-list">
                <div class="cards-list__img">
                    <img src="@/assets/png/RoyalBurger.png" alt="">
                </div>
                <p class="cards-list__name">Royal Burger</p>
                <div class="cards-info">
                    <WatchIcon />
                    <span class="cards-info__time">
                        11.00 AM - 10.00 PM
                    </span>
                    <div class="cards-info__arrow">
                        <ArrowRightIcon />
                    </div>
                </div>
            </li>
            <li class="cards-list">
                <div class="cards-list__img">
                    <img src="@/assets/png/KfcReustarant.png" alt="">
                </div>
                <p class="cards-list__name">KFC Restaurant</p>
                <div class="cards-info">
                    <WatchIcon />
                    <span class="cards-info__time">
                        11.00 AM - 10.00 PM
                    </span>
                    <div class="cards-info__arrow">
                        <ArrowRightIcon />
                    </div>
                </div>
            </li>
            <li class="cards-list">
                <div class="cards-list__img">
                    <img src="@/assets/png/StarFood.png" alt="">
                </div>
                <p class="cards-list__name">Star Food</p>
                <div class="cards-info">
                    <WatchIcon />
                    <span class="cards-info__time">
                        11.00 AM - 10.00 PM
                    </span>
                    <div class="cards-info__arrow">
                        <ArrowRightIcon />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ArrowRightIcon from '@/assets/icon/ArrowRightIcon.vue';
import WatchIcon from '@/assets/icon/WatchIcon.vue';

export default {
    name: 'TopFood',

    components: {
        ArrowRightIcon,
        WatchIcon
    }
}
</script>

<style lang="scss" scoped >
@import '@/assets/TopFood.scss';
</style>