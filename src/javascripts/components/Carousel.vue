<template>
  <div class="carousel">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>
<script>
import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import CarouselPagenationNav from "./CarouselPagenationNav.vue";
import "swiper/css/swiper.min.css";

export default {
  name: "Carousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        watchOverflow: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    const pagenation = this.$el.querySelector("div.swiper-pagination");
    const ComponentClass = Vue.extend(CarouselPagenationNav);
    // NOTE: 動的コンポーネントで送出したemitを親コンポーネントで補足する方法がわからなかったので、
    // 仕方無しにpropsで引き回して子コンポーネントでswiperのslide操作を行っている。
    const prevBtn = new ComponentClass({ propsData: { swiper: this.swiper, type: "prev" } });
    const nextBtn = new ComponentClass({ propsData: { swiper: this.swiper, type: "next" } });
    prevBtn.$mount();
    nextBtn.$mount();
    pagenation.insertBefore(prevBtn.$el, pagenation.children[0]);
    pagenation.appendChild(nextBtn.$el);
  },
  methods: {},
};
</script>
<style lang="scss">
.carousel {
  .swiper-container {
    color: white;

    .swiper-slide {
      background-color: burlywood;
      height: 250px;
    }
  }
}
</style>
