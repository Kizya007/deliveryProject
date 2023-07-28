<template>
    <div class="reviews container">
        <p class="reviews-title">
            What Our Client Are <span class="color-text" >Saying</span>
        </p>
        <div class="reviews-info">
            <div class="reviews-info__img">
                <img src="@/assets/png/Reviews.png" alt="">
            </div>
            <div class="text">
                <p class="text-rating">
                    <span class="quotes-one">“</span> EFood has the most intriguing food order system in the country. UI in both their app and
                    web Is very
                    simple
                    and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the
                    neighborhood
                    well. Till now I never had to guide them to my address for delivery <span class="quotes-two">“</span>
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