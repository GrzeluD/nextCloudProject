<template>
  <h1>test</h1>
  <Slider :slides="slides">
    <WelcomeSlide @slide="getSlide" />
    <IntroductionSlide @slide="getSlide" :creators="creators" heading="Introduction" />
    <WelcomeSlide @slide="getSlide" />
    <IntroductionSlide @slide="getSlide" :creators="creators" heading="Introduction" />
    <WelcomeSlide @slide="getSlide" />
    <IntroductionSlide @slide="getSlide" :creators="creators" heading="Introduction" />
  </Slider>
</template>

<script>
import Slider from "@/components/Slider.vue";
import WelcomeSlide from "@/components/Slides/WelcomeSlide.vue";
import IntroductionSlide from "@/components/Slides/IntroductionSlide.vue";
export default {
  name: "Slideshow",
  components: {
    IntroductionSlide,
    Slider,
    WelcomeSlide
  },
  data() {
    return {
      creators: [
        {
          name: "Grzegorz Dziedzic",
          description: "Front-end Developer, Creator of this page",
          img: "img"
        }
      ],
      slides: [],
    }
  },
  methods: {
    getSlide(value) {
      this.slides.push(value);
    }
  }
}
</script>

<style scoped>

</style>