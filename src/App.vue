<template>
  <MainHeader />
  <MainCategory />
  <SeeMore />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import './assets/global.scss'
import MainCategory from '@/components/MainCategory.vue'
import SeeMore from './components/SeeMore.vue'


export default {
  name: 'App',
  components: {
    MainHeader,
    MainCategory,
    SeeMore,
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
