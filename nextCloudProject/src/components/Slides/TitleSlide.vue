<template>
  <section ref="slide" class="slide flex items-center shrink-0 h-full basis-[100vw] relative">
    <div :class="'before:bg-' + color" class="container w-[640px] mx-auto h-[160px] relative
                after:content-[''] after:bottom-0 after:left-0 after:right-0 after:absolute after:h-[12px] after:rounded-xl after:bg-white
                before:content-[''] before:bottom-0 before:left-0 before:right-[20%] before:absolute before:h-[12px] before:rounded-xl before:z-10">
      <div class="flex justify-around items-center">
        <h2 class="text-3xl font-[Sharetech] uppercase">{{ title }}</h2>
        <div class="w-16 h-16 relative before:w-[1px] before:left-1/2 before:-translate-x-1/2 before:h-[90px] before:absolute before:-bottom-[90px] bg-cyan before:bg-cyan"><span class="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{{ number }}</span></div>
      </div>
    </div>
    <BackgroundFigures :figures="figures" />
  </section>
</template>

<script>
import BackgroundFigures from "@/components/BackgroundFigures.vue";
export default {
  name: "TitleSlide",
  components: {BackgroundFigures},
  props: {
    title: {
      type: String
    },
    color: {
      type: String,
      default: "cyan"
    },
    number: {
      type: String
    }
  },
  data() {
    return {
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