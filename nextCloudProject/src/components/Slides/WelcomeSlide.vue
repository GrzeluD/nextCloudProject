<template>
  <section ref="slide" class="slide shrink-0 h-full basis-[100vw]">
    <h2>Bezpieczna chmura</h2>
  </section>
</template>

<script>
export default {
  name: "WelcomeSlide",
  mounted() {
    this.$emit('slide', this.$refs.slide);
  }
}
</script>

<style scoped>

</style>