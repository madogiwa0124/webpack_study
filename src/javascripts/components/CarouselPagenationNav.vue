<template>
  <button class="carousel-pagenation-nav" @click="handleOnClick">
    {{ typeText }}
  </button>
</template>
<script>
export default {
  name: "CarouselPagenationNav",
  props: {
    swiper: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    isPrev() {
      return this.type == "prev";
    },
    typeText() {
      return this.isPrev ? "<" : ">";
    },
  },
  methods: {
    handleOnClick() {
      this.isPrev ? this.swiper.slidePrev() : this.swiper.slideNext();
    },
  },
};
</script>
<style lang="scss"></style>
