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
      <!-- right-block = list -->
      <div class="cont">
        <h3 class="right-block__title">Service</h3>
        <ul class="right-block">
          <li class="right-block__text">How it Works</li>
          <li class="right-block__text">Home delivery</li>
          <li class="right-block__text">Products</li>
          <li class="right-block__text">Menu</li>
        </ul>
      </div>

      <ul class="right-block">
        <li class="right-block__title">Company</li>
        <li class="right-block__text">About Us</li>
        <li class="right-block__text">News</li>
        <li class="right-block__text">Our trusted partner</li>
        <li class="right-block__text">New users FAQ</li>
      </ul>
      <ul class="right-block">
        <li class="right-block__title">Supports</li>
        <li class="right-block__text">Help Center</li>
        <li class="right-block__text">Feedback</li>
        <li class="right-block__text">Contact us</li>
        <li class="right-block__text">Terms conditions</li>
      </ul>
      <ul class="right-block">
        <li class="right-block__title">Resources</li>
        <li class="right-block__text">Download app</li>
        <li class="right-block__text">Blog</li>
        <li class="right-block__text">What's new</li>
        <li class="right-block__text">Sitemap</li>
      </ul>
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
