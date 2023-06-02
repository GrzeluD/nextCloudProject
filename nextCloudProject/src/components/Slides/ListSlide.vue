<template>
  <section ref="slide" class="slide flex items-center shrink-0 h-full basis-[100vw] relative">
    <div class="container w-[840px] mx-auto">
      <h2 class="text-3xl mb-8 font-[Sharetech] uppercase">{{ heading }}</h2>
      <div class="flex flex-wrap gap-[40px]">
        <div v-for="item in list" class="listItem basis-[calc(50%_-_20px)] flex gap-8 items-center ">
          <div>
            <h3 v-if="item.title" class="text-xl mb-4 font-[Sharetech]">{{ item.title }}</h3>
            <p v-if="item.description" v-html="item.description" class="w-[300px]"></p>
          </div>
          <div class="icon w-16 h-16 relative">
            <component class="fill-white w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" :is="item.icon + 'Icon'" />
          </div>
        </div>
      </div>
    </div>
    <BackgroundFigures :figures="figures" />
  </section>
</template>

<script>
import BackgroundFigures from "@/components/BackgroundFigures.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import GroupIcon from "@/components/icons/GroupIcon.vue";
import HandIcon from "@/components/icons/HandIcon.vue";
import HardwareIcon from "@/components/icons/HardwareIcon.vue";
import KeyIcon from "@/components/icons/KeyIcon.vue";
import PuzzleIcon from "@/components/icons/PuzzleIcon.vue";
import ShieldIcon from "@/components/icons/ShieldIcon.vue";
import SynchronizeIcon from "@/components/icons/SynchronizeIcon.vue";
import TerminalIcon from "@/components/icons/TerminalIcon.vue";
export default {
  name: "ListSlide",
  components: {
    BackgroundFigures,
    CalendarIcon,
    CloudIcon,
    GroupIcon,
    HardwareIcon,
    HandIcon,
    KeyIcon,
    PuzzleIcon,
    ShieldIcon,
    SynchronizeIcon,
    TerminalIcon
  },
  props: {
    heading: {
      type: String
    },
    list: {
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
.listItem:nth-child(even) .icon {
  order: -1;
}

.listItem:nth-child(odd) {
  justify-content: space-between;
}

.listItem:nth-of-type(1) .icon,
.listItem:nth-of-type(4) .icon{
  background: #00cfcc;
}

.listItem:nth-of-type(2) .icon,
.listItem:nth-of-type(5) .icon{
  background: #e898ac;
}

.listItem:nth-of-type(3) .icon,
.listItem:nth-of-type(6) .icon{
  background: #ff9973;
}

</style>