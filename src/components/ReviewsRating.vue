<template>
    <div class="reviews container">
        <h1 class="reviews-title">
            What Our Client Are Saying
        </h1>
        <div class="reviews">
            <div class="reviews-img">
                <img src="@/assets/png/Reviews.png" alt="">
            </div>
            <div class="reviews-text">
                <p class="reviews-text__rating">
                    “ EFood has the most intriguing food order system in the country. UI in both their app and
                    web Is very
                    simple
                    and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the
                    neighborhood
                    well. Till now I never had to guide them to my address for delivery“
                </p>
                <div class="info">
                    <div class="info-person">
                        <p class="info-person__name">
                            Anglina Jole
                        </p>
                        <p class="info-person__position">
                            Food lover
                        </p>
                    </div>
                    <div class="info-slider">
                        <div class="info-slider__left">
                            <ArrowLeftNotCircle />
                        </div>
                        <div class="info-slider__right">
                            <ArrowRightNotCirlce />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArrowLeftNotCircle from '@/assets/icon/ArrowLeftNotCircle.vue';
import ArrowRightNotCirlce from '@/assets/icon/ArrowRightNotCirlce.vue';

export default {
    name: 'ReviewsRating',

    components: {
        ArrowLeftNotCircle,
        ArrowRightNotCirlce
    }
}
</script>

<style lang="scss" scoped >
@import '@/assets/Reviews.scss';
</style>