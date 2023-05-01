<template>
  <section ref="slide" class="slide shrink-0 h-full basis-[100vw] items-center justify-center flex">
    <h2 class="text-4xl font-[Sharetech] uppercase">Welcome to the <span class="text-cyan">cyber cloud</span></h2>
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