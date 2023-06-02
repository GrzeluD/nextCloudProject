<template>
  <Slider :slides="slides">
    <WelcomeSlide @slide="getSlide" />
    <IntroductionSlide @slide="getSlide" :creators="creators" heading="Introduction" />
    <LineSlide @slide="getSlide" heading="Next Cloud" :lineList="lineList" />
    <ListSlide @slide="getSlide" :list="featureList" heading="Features" />
    <ListSlide @slide="getSlide" heading="Installation" :list="installationList" />
    <TitleSlide @slide="getSlide" title="Hardware" number="01" color="cyan" />
    <NextStepsSlide @slide="getSlide" :stepsList="hardwareList" />
    <PhotoSlide @slide="getSlide" heading="Our solution" photoDetails="ourSolution" />
    <ListSlide2 @slide="getSlide" heading="Base system" :list="secondList" :anchor="secondListAnchor" />
    <TableSlide @slide="getSlide" heading="Download Server" />
    <ContentSlide @slide="getSlide" heading="Deployment" />
    <ContentSlide2 @slide="getSlide" heading="Deployment" />
    <ContentSlide3 @slide="getSlide" heading="Deployment" />
    <PhotoSlide2 @slide="getSlide" heading="Configure webserver" />
    <ContentSlide4 @slide="getSlide" heading="Configure NextCloud" />
    <NextStepsSlide @slide="getSlide" :stepsList="nextSteps" headingFirst="Next steps" headingSecond="for safety" />
  </Slider>
</template>

<script>
import ContentSlide from "@/components/Slides/ContentSlide.vue";
import ContentSlide2 from "@/components/Slides/ContentSlide2.vue";
import ContentSlide3 from "@/components/Slides/ContentSlide3.vue";
import ContentSlide4 from "@/components/Slides/ContentSlide4.vue";
import IntroductionSlide from "@/components/Slides/IntroductionSlide.vue";
import ListSlide from "@/components/Slides/ListSlide.vue";
import ListSlide2 from "@/components/Slides/ListSlide2.vue";
import LineSlide from "@/components/Slides/LineSlide.vue";
import NextStepsSlide from "@/components/Slides/NextStepsSlide.vue";
import PhotoSlide from "@/components/Slides/PhotoSlide.vue";
import PhotoSlide2 from "@/components/Slides/PhotoSlide2.vue";
import Slider from "@/components/Slider.vue";
import TableSlide from "@/components/Slides/TableSlide.vue";
import TitleSlide from "@/components/Slides/TitleSlide.vue";
import WelcomeSlide from "@/components/Slides/WelcomeSlide.vue";
export default {
  name: "Slideshow",
  components: {
    ContentSlide,
    ContentSlide2,
    ContentSlide3,
    ContentSlide4,
    TableSlide,
    LineSlide,
    ListSlide,
    ListSlide2,
    IntroductionSlide,
    NextStepsSlide,
    PhotoSlide,
    PhotoSlide2,
    Slider,
    TitleSlide,
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
          description: "Visit <a class='underline italic text-cyan' href='https://nextcloud.com/install/#instructions-server'>here</a> and download version which best suit your hardware choice",
          color: "pink",
          icon: "Hand"
        },
        {
          title: "Install Dependencies",
          description: "Read manual <a class='underline italic text-cyan' href='https://docs.nextcloud.com/server/latest/admin_manual/'>here</a> which guides you step-by-step thru installation process",
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
      ],
      nextSteps: [
        {
          title: "Firewall",
          content: "Allow you to configure network traffic filtering rules and server protection",
          icon: "Firewall",
          color: "cyan"
        },
        {
          title: "Fail2Ban",
          content: "Monitors system logs and blocks IP addresses of attackers",
          icon: "Fail2Ban",
          color: "pink"
        },
        {
          title: "SSL/TLS",
          content: "Cryptographic protocols used to secure internet communications",
          icon: "Ssl",
          color: "orange"
        }
      ],
      hardwareList: [
        {
          title: "Raspberry PI",
          content: "Some more advanced applications and plugins may hit badly the performance, but basic functionality works undisrupted",
          icon: "Raspberry",
          color: "cyan"
        },
        {
          title: "Virtual server on home PC",
          content: "Runs smooth but uses PC’s resources (and power) 24h/day",
          icon: "World",
          color: "pink"
        },
        {
          title: "Dedicated home server",
          content: "Even the cheapest guarantee sufficient resources to run cloud with multiple apps and plugins, and there’s still some for another webpages and services",
          icon: "Home",
          color: "orange"
        }
      ],
      secondList: [
          "Operating system: Debian 12 Bookworm (testing)",
          "Database: MariaDB 15.1",
          "Web server: Apache2 2.4",
          "Antivirus: ClamAV",
          "PHP Runtime: PHP 8.2",
          "PHP modules: ctype, curl, dom, fileinfo, filter, GD, hash, JSON, libxml, mbstring, openssl, posix, session, SimpleXML, XMLReader, XMLWriter, zip, zlib, pdo_sqlite, pdo_mysql, pdo_pgsql",
          "PHP modules require for additional apps and plugins: bz2, intl, smbclient, ftp, imap, bcmath, gmp, exif, apcu, memcached, redis, imagick, ffmpeg, LibreOffice, phar",
          "node.JS 18.16",
          "Firewall: ufw 0.36 + iptables 1.8"
      ],
      secondListAnchor: "<a href='https://docs.nextcloud.com/server/latest/admin_manual/installation/system_requirements.html'>Minimum requirements</a>"
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