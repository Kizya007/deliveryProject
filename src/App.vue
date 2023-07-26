<template>
  <MainHeader />
  <MainCategory />
  <SeeMore />
  <TopFood />
  <MobileDownload />
  <ReviewsRating />
  <MainSubcribe />
  <MainFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import './assets/global.scss'
import MainCategory from '@/components/MainCategory.vue'
import SeeMore from './components/SeeMore.vue'
import TopFood from './components/TopFood.vue'
import MobileDownload from './components/MobileDownload.vue'
import ReviewsRating from './components/ReviewsRating.vue'
import MainSubcribe from './components/MainSubcribe.vue'
import MainFooter from './components/MainFooter.vue'


export default {
  name: 'App',
  components: {
    MainHeader,
    MainCategory,
    SeeMore,
    TopFood,
    MobileDownload,
    ReviewsRating,
    MainSubcribe,
    MainFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
