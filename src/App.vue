<template>
  <MainHeader />
  <BannerInfo />
  <MainCategory />
  <MainInformaion />
  <TopFood />
  <MobileDownload />
  <ReviewsRating />
  <MainSubcribe />
  <MainFooter />
</template>

<script>
import "./assets/global.scss";
import MainHeader from "@/components/MainHeader.vue";
import BannerInfo from "./components/BannerInfo.vue";
import MainCategory from "@/components/MainCategory.vue";
import MainInformaion from "./components/MainInformaion.vue";
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
    MainInformaion,
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
  margin-top: 60px;
}
</style>
