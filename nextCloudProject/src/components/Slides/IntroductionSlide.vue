<template>
  <section ref="slide" class="slide basis-[100vw]">
    <h2>{{ heading }}</h2>
    <section v-if="creators.length > 0">
      <div class="flex items-center" v-for="creator in creators">
        <figure class="h-48 w-80">
          <img class="h-full w-full object-cover" :src="`./images/${creator.img}.jpeg`" :alt="creator.name">
        </figure>
        <div class="px-4">
          <h2>{{ creator.name }}</h2>
          <p>{{ creator.description }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "IntroductionSlide",
  props: {
    creators: {
      type: Array,
    },
    heading: {
      type: String,
    }
  },
  mounted() {
    this.$emit('slide', this.$refs.slide);
  }
}
</script>

<style scoped>

</style>