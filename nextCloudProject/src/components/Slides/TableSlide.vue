<template>
  <section ref="slide" class="slide flex items-center shrink-0 h-full basis-[100vw] relative">
    <div class="container w-[840px] mx-auto relative">
        <h2 class="text-3xl font-[Sharetech] uppercase">{{ heading }}</h2>
        <div>
          <div class="row flex mb-3">
            <div class="col basis-1/2"></div>
            <div class="col basis-1/2 font-[Sharetech]">Tailored for:</div>
          </div>
          <div class="mt-4 p-4 border-solid border-2 border-pink rounded-xl">
            <div class="row flex mb-3 items-center">
              <div class="col basis-1/2 font-[Sharetech]">All-in-One docker image</div>
              <div class="col basis-1/2">Container without Virtual Machine, but also Virtual server in clouds (AWS, Azure and other)</div>
            </div>
            <div class="row flex mb-3 items-center">
              <div class="col basis-1/2 font-[Sharetech]">All-in-One VM image</div>
              <div class="col basis-1/2">Virtual Machines on home PC or as Virtual Server in cloud services</div>
            </div>
            <div class="row flex mb-3 items-center">
              <div class="col basis-1/2 font-[Sharetech]">NextcloudPi image</div>
              <div class="col basis-1/2">Raspberry PI comlete operating system with Nextcloud solution deployed and ready to run. Also for Odroid and rock64 uPC’s.</div>
            </div>
            <div class="row flex mb-3 items-center">
              <div class="col basis-1/2 font-[Sharetech]">zip/tar Archive (our choice)</div>
              <div class="col basis-1/2">Most challenging, but also most robust package which can be deployed on anything meeting minimum hardware requirements</div>
            </div>
          </div>
        </div>
    </div>
    <BackgroundFigures :figures="figures" />
  </section>
</template>

<script>
import BackgroundFigures from "@/components/BackgroundFigures.vue";
export default {
  name: "TableSlide",
  components: {BackgroundFigures},
  props: {
    heading: {
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