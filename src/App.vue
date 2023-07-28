<template>
  <MainHeader />
  <BannerInfo />
  <MainCategory />
  <SeeMore />
  <TopFood />
  <MobileDownload />
  <ReviewsRating />
  <MainSubcribe />
  <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import BannerInfo from "./components/BannerInfo.vue";
import "./assets/global.scss";
import MainCategory from "@/components/MainCategory.vue";
import SeeMore from "./components/SeeMore.vue";
import TopFood from "./components/TopFood.vue";
import MobileDownload from "./components/MobileDownload.vue";
import ReviewsRating from "./components/ReviewsRating.vue";
import MainSubcribe from "./components/MainSubcribe.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    BannerInfo,
    MainCategory,
    SeeMore,
    TopFood,
    MobileDownload,
    ReviewsRating,
    MainSubcribe,
    MainFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");
#app {
  font-family: "Rubik";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
