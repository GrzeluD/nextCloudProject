<template>
  <section ref="slide" class="slide relative shrink-0 h-full basis-[100vw] items-center flex">
    <div class="container w-[840px] mx-auto">
      <h2 class="text-3xl font-[Sharetech] uppercase mb-8">{{ headingFirst }} <span class="text-cyan">{{ headingSecond }}</span></h2>
      <ul class="flex justify-between">
        <li class="stepsList block w-[230px]" v-for="(item, index) in stepsList">
          <div class="icon w-[100px] h-[90px] relative mb-4 before:block before:absolute before:left-[-8px] before:w-[8px] before:top-[40px] before:h-[80px] before:border before:border-[#ffffff90] before:border-r-0">
            <component :is="item.icon + 'Icon'" color="white" class="fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <span class="font-[Sharetech] block mb-2 text-3xl text-cyan">0{{ index + 1 }}</span>
          <h3 class="pl-1 text-xl font-[Sharetech] uppercase">{{ item.title }}</h3>
          <h4 class="pl-1">{{ item.content }}</h4>
          <p :class="`text-${item.color}`" class="pl-1 font-[Sharetech] mt-1" v-if="item.difficulty">Difficulty: {{ item.difficulty }}</p>
        </li>
      </ul>
    </div>
    <BackgroundFigures :figures="figures" />
  </section>
</template>

<script>
import BackgroundFigures from "@/components/BackgroundFigures.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
import FirewallIcon from "@/components/icons/FirewallIcon.vue";
import Fail2BanIcon from "@/components/icons/Fail2BanIcon.vue";
import FileIcon from "@/components/icons/FileIcon.vue";
import HardwareIcon from "@/components/icons/HardwareIcon.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import SslIcon from "@/components/icons/SslIcon.vue";
import RaspberryIcon from "@/components/icons/RaspberryIcon.vue";
import TerminalIcon from "@/components/icons/TerminalIcon.vue";
import WorldIcon from "@/components/icons/WorldIcon.vue";
export default {
  name: "NextStepsSlide",
  components: {BackgroundFigures, CloudIcon, EnvelopeIcon, Fail2BanIcon, FileIcon, FirewallIcon, HardwareIcon, HomeIcon, SslIcon, RaspberryIcon, TerminalIcon, WorldIcon},
  props: {
    stepsList: {
      type: Array
    },
    headingFirst: {
      type: String
    },
    headingSecond: {
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
.stepsList:nth-of-type(1) .icon {
  background: #00cfcc;
}

.stepsList:nth-of-type(2) .icon {
  background: #e898ac;
}

.stepsList:nth-of-type(3) .icon {
  background: #ff9973;
}
</style>