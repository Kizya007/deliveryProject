<template>
  <footer>
    <div class="content">
      <ul class="content-block">
        <li class="content-block__title">Efood</li>
        <li class="content-block__info">
          <PointIcon />
          Dhaka, Bangladesh
        </li>
        <li class="content-block__info">
          <PhoneIcon />
          0943833399
        </li>
        <li class="content-block__info">
          <EmailSendIcon />
          support@efood.com
        </li>
        <li class="content-block__image">
          <img src="@/assets/png/Sosmed.png" alt="" />
        </li>
      </ul>
      <div class="lists">
        <ul class="list">
          <p class="list-title">Service</p>
          <li class="list-item"><a href="">How it Works</a></li>
          <li class="list-item"><a href="">Home delivery</a></li>
          <li class="list-item"><a href="">Products</a></li>
        </ul>
        <ul class="list">
          <p class="list-title"><a href="">Company</a></p>
          <li class="list-item"><a href="">About Us</a></li>
          <li class="list-item"><a href="">News</a></li>
          <li class="list-item"><a href="">Our trusted partner</a></li>
          <li class="list-item"><a href="">New users FAQ</a></li>
        </ul>
        <ul class="list">
          <p class="list-title"><a href="">Supports</a></p>
          <li class="list-item"><a href="">Help Center</a></li>
          <li class="list-item"><a href="">Feedback</a></li>
          <li class="list-item"><a href="">Contact us</a></li>
          <li class="list-item"><a href="">Terms conditions</a></li>
        </ul>
        <ul class="list">
          <p class="list-title"><a href="">Resources</a></p>
          <li class="list-item"><a href="">Download app</a></li>
          <li class="list-item"><a href="">Blog</a></li>
          <li class="list-item"><a href="">What's new</a></li>
          <li class="list-item"><a href="">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
    <div class="privacy">
      <p class="privacy-info">© 2021 EFood - All rights reserved.</p>
      <ul class="privacy-list">
        <li class="privacy-list__item">Privacy</li>
        <li class="privacy-list__item">Security</li>
        <li class="privacy-list__item">Terms</li>
      </ul>
    </div>
  </footer>
</template>

<script>
import PointIcon from "@/assets/icon/PointIcon.vue";
import PhoneIcon from "@/assets/icon/PhoneIcon.vue";
import EmailSendIcon from "@/assets/icon/EmailSendIcon.vue";

export default {
  name: "MainFooter",

  components: {
    PointIcon,
    PhoneIcon,
    EmailSendIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Footer.scss";
</style>
