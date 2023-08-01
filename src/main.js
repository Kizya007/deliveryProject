import { createApp } from "vue";
import App from "./App.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const app = createApp(App);

app.component("Carousel", Carousel); // global registration - can be used anywhere
app.component("Slide", Slide); // global registration - can be used anywhere
app.component("Pagination", Pagination); // global registration - can be used anywhere
app.component("Navigation", Navigation); // global registration - can be used anywhere

app.mount("#app");
