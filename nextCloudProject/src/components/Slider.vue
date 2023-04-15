<template>
  <div class="overflow-hidden h-screen w-screen bg-gradient-to-br from-indigo to-indigo-dark">
    <section class="slider transition-transform duration-500 h-full flex flex-nowrap">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    slides: {
      type: Array,
    }
  },
  mounted() {
    this.slides.forEach((slide, index) => {
      console.log(slide);
      console.log(index);
    })
  }
}
</script>

<style scoped>

</style>