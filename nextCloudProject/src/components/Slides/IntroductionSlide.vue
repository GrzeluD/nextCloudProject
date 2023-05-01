<template>
  <section ref="slide" class="slide shrink-0 h-full basis-[100vw] pt-8">
    <div class="container w-[640px] mx-auto">
      <h2 class="text-3xl mb-8 font-[Sharetech] uppercase">{{ heading }}</h2>
      <section v-if="creators.length > 0">
        <div class="creator flex items-center" v-for="(creator, index) in creators" :key="`creator${index}`">
          <figure class="creator__img h-32 w-80 before:z-10 before:z-index-1 before:content-[''] before:opacity-50 relative before:top-0 before:bottom-0 before:left-0 before:right-0 before:absolute" :class="index % 2 !== 0 ? 'order-1' : ''">
            <img class="h-full w-full object-cover grayscale" :src="`/project/images/${creator.img}.jpeg`" :alt="creator.name">
          </figure>
          <div class="px-4 w-80">
            <h2 class="font-[Sharetech] text-2xl">{{ creator.firstName }} <span class="text-cyan">{{ creator.lastName }}</span></h2>
            <p>{{ creator.description }}</p>
          </div>
        </div>
      </section>
    </div>
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
.creator:nth-child(1) .creator__img:before {
  background: #00cfcc;
}

.creator:nth-child(2) .creator__img:before {
  background: #e898ac;
}

.creator:nth-child(3) .creator__img:before {
  background: #ff9973;
}
</style>