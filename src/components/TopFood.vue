<template>
    <div class="food">
        <h1 class="food-title">Top Food restaurant</h1>
        <div class="content">
            <ul class="content-list">
                <li class="content-list__item">
                    <div class="content-list__img">
                        <img src="@/assets/png/BlazePizza.png" alt="">
                    </div>
                    <p class="content-list__name">Blaze Pizza</p>
                    <div class="">
                        <WatchIcon />
                        <span>
                            11.00 AM - 10.00 PM
                        </span>
                        <ArrowRightIcon />
                    </div>
                </li>
            </ul>
        </div>
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