<template>
  <section ref="slide" class="slide flex items-center shrink-0 h-full basis-[100vw] relative">
    <div class="container w-[640px] mx-auto">
      <h2 class="text-3xl mb-8 font-[Sharetech] uppercase">{{ heading }}</h2>
      <section class="relative" v-if="creators.length > 0">
        <div class="creator flex items-center" v-for="(creator, index) in creators" :key="`creator${index}`">
          <figure class="creator__img h-32 w-80 before:z-10 before:z-index-1 before:content-[''] before:opacity-50 relative before:top-0 before:bottom-0 before:left-0 before:right-0 before:absolute" :class="index % 2 !== 0 ? 'order-1' : ''">
            <img class="h-full w-full object-cover grayscale" :src="`${path}/images/${creator.img}`" :alt="creator.name">
          </figure>
          <div class="px-4 w-80">
            <h2 class="font-[Sharetech] text-2xl">{{ creator.firstName }} <span class="text-cyan">{{ creator.lastName }}</span></h2>
            <p>{{ creator.description }}</p>
          </div>
        </div>
        <BackgroundFigures :figures="creatorsFigures" />
      </section>
    </div>
    <BackgroundFigures :figures="bgFigures" />
  </section>
</template>

<script>
import BackgroundFigures from "@/components/BackgroundFigures.vue";
export default {
  name: "IntroductionSlide",
  components: {BackgroundFigures},
  props: {
    creators: {
      type: Array,
    },
    heading: {
      type: String,
    }
  },
  data() {
    return {
      path: import.meta.env.PROD ? '/project' : '',
      bgFigures: [
        {
          type: 'emptySquare',
          width: '25px',
          height: '25px',
          backgroundColor: 'transparent',
          border: '1px solid #ffffff80',
          positionX: '30px',
          positionY: '90%',
          animation: true,
        },
        {
          type: 'emptySquare',
          width: '16px',
          height: '16px',
          backgroundColor: 'transparent',
          border: '1px solid #ffffff50',
          positionX: '85px',
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
          width: '20px',
          height: '20px',
          backgroundColor: 'transparent',
          border: '1px solid #ffffff50',
          positionX: '92%',
          positionY: '15px',
          animation: true,
        },
        {
          type: 'emptySquare',
          width: '5px',
          height: '5px',
          backgroundColor: 'transparent',
          border: '1px solid #ffffff99',
          positionX: '89%',
          positionY: '50px',
          animation: true,
        },
        {
          type: 'emptySquare',
          width: '20px',
          height: '20px',
          backgroundColor: 'transparent',
          border: '1px solid #ffffff70',
          positionX: '84%',
          positionY: '30px',
          animation: true,
        },
        {
          type: 'fullSquare',
          width: '16px',
          height: '16px',
          backgroundColor: '#e898ac',
          border: 'none',
          positionX: '80%',
          positionY: '40px',
          animation: true,
        },
        {
          type: 'line',
          width: '2px',
          height: '40px',
          backgroundColor: 'linear-gradient(#ffffff10, #ffffff90)',
          border: 'none',
          positionX: 'calc(80% + 7px)',
          positionY: '-5px',
          animation: false,
        },
      ],
      creatorsFigures: [
        {
          type: 'fullSquare',
          width: '20px',
          height: '20px',
          backgroundColor: '#ff9973',
          border: 'none',
          positionX: '-20px',
          positionY: '-20px',
          animation: true,
        },
        {
          type: 'fullSquare',
          width: '26px',
          height: '26px',
          backgroundColor: '#e898ac',
          border: 'none',
          positionX: '100%',
          positionY: 'calc(100% - 26px)',
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
.creator:nth-child(1) .creator__img:before {
  background: #00cfcc;
}

.creator:nth-child(1) .creator__img img {
  object-position: 0 -50px;
}

.creator:nth-child(2) .creator__img:before {
  background: #e898ac;
}

.creator:nth-child(2) .creator__img img {
  object-position: 0 -15px;
}

.creator:nth-child(3) .creator__img:before {
  background: #ff9973;
}

.creator:nth-child(3) .creator__img img {
  object-position: 0 -60px;
}
</style>