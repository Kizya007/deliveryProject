<template>
  <MainHeader />
  <MainCategory />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import './assets/global.scss'
import MainCategory from '@/components/MainCategory.vue'


export default {
  name: 'App',
  components: {
    MainHeader,
    MainCategory
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
