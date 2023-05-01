<template>
  <div class="overflow-hidden h-screen w-screen bg-gradient-to-br from-indigo to-indigo-dark">
    <section v-on:keyup.39="nextSlide()" class="slider transition-transform duration-500 h-full flex flex-nowrap" :style="`transform: translateX(-${(index - 1) * 100}%)`">
      <slot />
    </section>
    <div class="navigation fixed bottom-2 left-1/2 -translate-x-1/2">
      <button @click="prevSlide" class="py-0.5 px-1.5 bg-cyan rounded-sm">&lt</button>
      <span class="px-2 py-0.5 bg-cyan rounded-sm inline-block w-10 mx-2 text-center">{{ index }}/{{ slides.length }}</span>
      <button @click="nextSlide" class="py-0.5 px-1.5 bg-cyan rounded-sm">	&gt</button>
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
    },
    handleKeydown (e) {
      switch (e.keyCode) {
        case 37:
          this.prevSlide();
          break;
        case 39:
          this.nextSlide();
          break;
      }
    },
  },
  mounted () {
    window.addEventListener('keydown', this.handleKeydown, null);
  },
  unmounted () {
    window.removeEventListener('keydown', this.handleKeydown);
  }
}
</script>

<style scoped>

</style>