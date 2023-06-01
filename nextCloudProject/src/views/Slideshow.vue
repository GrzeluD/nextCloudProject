<template>
  <Slider :slides="slides">
    <WelcomeSlide @slide="getSlide" />
    <IntroductionSlide @slide="getSlide" :creators="creators" heading="Introduction" />
    <LineSlide @slide="getSlide" heading="Next Cloud" :lineList="lineList" />
    <ListSlide @slide="getSlide" :list="featureList" heading="Features" />
    <ListSlide @slide="getSlide" heading="Installation" :list="installationList" />
    <NextStepsSlide @slide="getSlide" />
  </Slider>
</template>

<script>
import IntroductionSlide from "@/components/Slides/IntroductionSlide.vue";
import ListSlide from "@/components/Slides/ListSlide.vue";
import LineSlide from "@/components/LineSlide.vue";
import NextStepsSlide from "@/components/Slides/NextStepsSlide.vue";
import Slider from "@/components/Slider.vue";
import WelcomeSlide from "@/components/Slides/WelcomeSlide.vue";
export default {
  name: "Slideshow",
  components: {
    LineSlide,
    ListSlide,
    IntroductionSlide,
    Slider,
    NextStepsSlide,
    WelcomeSlide
  },
  data() {
    return {
      creators: [
        {
          firstName: "Grzegorz",
          lastName: "Dziedzic",
          description: "Front-end Developer, Creator of this page",
          img: "img"
        },
        {
          firstName: "Paweł",
          lastName: "Mielimonka",
          description: "Linux Administrator, Owner of Kartofel",
          img: "img"
        },
        {
          firstName: "Albert",
          lastName: "Pasek",
          description: "Businessman and Junk researcher",
          img: "img"
        }
      ],
      slides: [],
      installationList: [
        {
          title: "Deploy",
          description: "It can be RaspberryPI 4, general purpose laptop/desktop, dedicated small server or virtual machine in another cloud",
          color: "cyan",
          icon: "Hardware"
        },
        {
          title: "Pick Solution",
          description: "Visit <a href='https://nextcloud.com/install/#instructions-server'>here</a> and download version which best suit your hardware choice",
          color: "pink",
          icon: "Hand"
        },
        {
          title: "Install Dependencies",
          description: "Read manual on <a href='https://docs.nextcloud.com/server/latest/admin_manual/'>here</a> which guides you step-by-step thru installation process",
          color: "orange",
          icon: "Terminal"
        },
        {
          title: "Configure and Run!",
          description: "Final installation limits to unzipping and reconfiguring http server service",
          color: "cyan",
          icon: "Cloud"
        }
      ],
      featureList: [
        {
          title: "File Storage and Synchronization",
          color: "cyan",
          icon: "Synchronize"
        },
        {
          title: "File Sharing and Collaboration",
          color: "pink",
          icon: "Group"
        },
        {
          title: "Security and Encryption",
          color: "orange",
          icon: "Shield"
        },
        {
          title: "Calendar and Contacts Management",
          color: "cyan",
          icon: "Calendar"
        },
        {
          title: "Third-Party App Integration",
          color: "pink",
          icon: "Puzzle"
        },
        {
          title: "Data Control and Compliance",
          color: "orange",
          icon: "Key"
        }
      ],
      lineList: [
        {
          name: "What is a cloud?"
        },
        {
          name: "How nextCloud is different?"
        },
        {
          name: "Why shoudl we use our own cloud?"
        }
      ]
    }
  },
  methods: {
    getSlide(value) {
      this.slides.push(value);
    }
  }
}
</script>

<style scoped>

</style>