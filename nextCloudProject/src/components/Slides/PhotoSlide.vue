<template>
  <section ref="slide" class="slide relative shrink-0 h-full basis-[100vw] items-center flex">
    <div class="container w-[840px] mx-auto">
      <h2 class="text-3xl font-[Sharetech] uppercase mb-8">{{ heading }}</h2>
      <div class="flex items-center justify-between">
        <ul class="w-[260px]">
          <p class="text-xl mb-4 font-[Sharetech]">After testing on Raspberry PI I decided to buy (used) Mini PC Fujitsu Q920</p>
          <li class="pl-3 mb-2 relative before:absolute before:w-[3px] before:h-[3px] before:rounded-full before:bg-cyan before:left-0 before:top-1/2 before:-translate-y-1/2">CPU Intel i5-4590T</li>
          <li class="pl-3 mb-2 relative before:absolute before:w-[3px] before:h-[3px] before:rounded-full before:bg-cyan before:left-0 before:top-1/2 before:-translate-y-1/2">RAM 8GB DDR3</li>
          <li class="pl-3 mb-2 relative before:absolute before:w-[3px] before:h-[3px] before:rounded-full before:bg-cyan before:left-0 before:top-1/2 before:-translate-y-1/2">SSD 256GB</li>
          <li class="pl-3 mb-2 relative before:absolute before:w-[3px] before:h-[3px] before:rounded-full before:bg-cyan before:left-0 before:top-1/2 before:-translate-y-1/2">Max power consumption: 65W</li>
        </ul>
        <img class="w-[460px] rounded-xl border-4 border-pink border-solid" :src="`${path}/images/Foto0.jpeg`">
      </div>
    </div>
    <BackgroundFigures :figures="figures" />
  </section>
</template>

<script>
import BackgroundFigures from "@/components/BackgroundFigures.vue";
export default {
  name: "PhotoSlide",
  components: {BackgroundFigures},
  props: {
    heading: {
      type: String
    },
    photoDetails: {
      type: Object
    }
  },
  data() {
    return {
      path: import.meta.env.PROD ? '/project' : '',
      figures: [
        {
          type: 'emptySquare',
          width: '14px',
          height: '14px',
          backgroundColor: 'transparent',
          border: '1px solid #ffffff80',
          positionX: '20px',
          positionY: '86%',
          animation: true,
        },
        {
          type: 'fullSquare',
          width: '20px',
          height: '20px',
          backgroundColor: '#00cfcc',
          border: 'none',
          positionX: '35px',
          positionY: '93%',
          animation: true,
        },
        {
          type: 'emptySquare',
          width: '25px',
          height: '25px',
          backgroundColor: 'transparent',
          border: '1px solid #ffffff80',
          positionX: '97%',
          positionY: '30px',
          animation: true,
        },
        {
          type: 'emptySquare',
          width: '8px',
          height: '8px',
          backgroundColor: 'transparent',
          border: '1px solid #ffffff50',
          positionX: '92%',
          positionY: '15px',
          animation: true,
        },
        {
          type: 'fullSquare',
          width: '12px',
          height: '12px',
          backgroundColor: '#00cfcc',
          border: 'none',
          positionX: '95%',
          positionY: '100px',
          animation: true,
        },
        {
          type: 'emptySquare',
          width: '15px',
          height: '15px',
          backgroundColor: 'transparent',
          border: '1px solid #e898ac',
          positionX: '89%',
          positionY: '60px',
          animation: true,
        },
        {
          type: 'emptySquare',
          width: '16px',
          height: '16px',
          backgroundColor: 'transparent',
          border: '1px solid #ff9973',
          positionX: '84%',
          positionY: '30px',
          animation: true,
        },
        {
          type: 'fullSquare',
          width: '10px',
          height: '10px',
          backgroundColor: '#00cfcc',
          border: 'none',
          positionX: '80%',
          positionY: '10px',
          animation: true,
        },
      ],
    }
  },
  mounted() {
    this.$emit('slide', this.$refs.slide);
  }
}
</script>

<style scoped>

</style>