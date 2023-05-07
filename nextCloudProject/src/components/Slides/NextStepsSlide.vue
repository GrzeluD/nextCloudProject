<template>
  <section ref="slide" class="slide relative shrink-0 h-full basis-[100vw] items-center flex">
    <div class="container w-[640px] mx-auto">
      <h2 class="text-3xl font-[Sharetech] uppercase mb-8">Next steps <span class="text-cyan">for safety</span></h2>
      <ul class="flex justify-between">
        <li class="block w-[180px]">
          <div class="bg-cyan w-[100px] h-[90px] relative mb-4 before:block before:absolute before:left-[-8px] before:w-[8px] before:top-[40px] before:h-[80px] before:border before:border-[#ffffff90] before:border-r-0">
            <FirewallIcon class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 class="pl-1 before:block before:mb-2 before:text-3xl before:text-cyan before:content-['01'] text-xl font-[Sharetech] uppercase">IpTables</h3>
          <h4 class="pl-1">Allow you to configure network traffic filtering rules and server protection</h4>
        </li>
        <li class="block w-[180px]">
          <div class="bg-pink w-[100px] h-[90px] relative mb-4 before:block before:absolute before:left-[-8px] before:w-[8px] before:top-[40px] before:h-[80px] before:border before:border-[#ffffff90] before:border-r-0">
            <Fail2BanIcon class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 class="pl-1 before:block before:mb-2 before:text-3xl before:text-cyan before:content-['01'] text-xl font-[Sharetech] uppercase">Fail2Ban</h3>
          <h4 class="pl1">Monitors system logs and blocks IP addresses of attackers</h4>
        </li>
        <li class="block w-[180px]">
          <div class="bg-orange w-[100px] h-[90px] relative mb-4 before:block before:absolute before:left-[-8px] before:w-[8px] before:top-[40px] before:h-[80px] before:border before:border-[#ffffff90] before:border-r-0">
            <SslIcon class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 class="pl-1 before:block before:mb-2 before:text-3xl before:text-cyan before:content-['01'] text-xl font-[Sharetech] uppercase">SSL/TLS</h3>
          <h4 class="pl-1">Cryptographic protocols used to secure internet communications</h4>
        </li>
      </ul>
    </div>
    <BackgroundFigures :figures="figures" />
  </section>
</template>

<script>
import FirewallIcon from "@/components/icons/FirewallIcon.vue";
import Fail2BanIcon from "@/components/icons/Fail2BanIcon.vue";
import SslIcon from "@/components/icons/SslIcon.vue";
import BackgroundFigures from "@/components/BackgroundFigures.vue";
export default {
  name: "NextStepsSlide",
  components: {BackgroundFigures, Fail2BanIcon, FirewallIcon, SslIcon},
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