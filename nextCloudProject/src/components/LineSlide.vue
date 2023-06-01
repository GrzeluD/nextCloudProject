<template>
  <section ref="slide" class="slide flex items-center shrink-0 h-full basis-[100vw] relative">
    <div class="container w-[840px] mx-auto">
      <h2 class="text-3xl mb-12 font-[Sharetech] uppercase">{{ heading }}</h2>
      <div class="flex h-[260px] justify-between relative after:content-[''] after:h-0.5 after:bg-white after:absolute after:left-0 after:right-0 after:top-1/2 after:-translate-y-1/2">
        <div v-for="item in lineList" class="h-16 [&:nth-child(2)]:self-end w-[33%] relative
                                             after:content-[''] after:absolute after:bg-white after:w-3 after:h-3 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-[72px] [&:nth-child(2)]:after:-top-[72px] [&:nth-child(2)]:after:bottom-[unset]
                                             before:content-[''] before:absolute before:w-5 before:h-5 before:border-2 before:border-cyan before:rounded-full before:left-1/2 before:-translate-x-1/2 before:-bottom-[76px] [&:nth-child(2)]:before:-top-[76px] [&:nth-child(2)]:before:border-orange [&:nth-child(3)]:before:border-pink [&:nth-child(2)]:before:bottom-[unset]
                                             [&:nth-of-type(2)>h3]:after:-top-[72px] [&:nth-child(2)>h3]:after:bottom-[unset]">

          <h3 class="text-center text-2xl font-[Sharetech]
                     after:content-[''] after:absolute after:bg-white after:w-[1px] after:h-[72px] after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-[72px]">{{ item.name }}</h3>
        </div>
      </div>
    </div>
    <BackgroundFigures :figures="figures" />
  </section>
</template>

<script>
import BackgroundFigures from "@/components/BackgroundFigures.vue";
export default {
  name: "LineSlide",
  components: {BackgroundFigures},
  props: {
    heading: {
      type: String
    },
    lineList: {
      type: Array
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