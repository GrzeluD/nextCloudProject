<template>
  <div class="overflow-hidden h-screen w-screen bg-gradient-to-br from-indigo to-indigo-dark">
    <section class="slider transition-transform duration-500 h-full flex flex-nowrap" :style="`transform: translateX(-${(index - 1) * 100}%)`">
      <slot />
    </section>
    <div class="navigation fixed bottom-2 left-1/2 -translate-x-1/2">
      <button @click="prevSlide">Prev</button>
      <span>{{ index }}/{{ slides.length }}</span>
      <button @click="nextSlide">Next</button>
    </div>
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
  data() {
    return {
      index: 1,
    }
  },
  methods: {
    nextSlide() {
      if (this.index < this.slides.length) this.index++;
    },
    prevSlide() {
      if (this.index > 1) this.index--;
    }
  }
}
</script>

<style scoped>

</style>