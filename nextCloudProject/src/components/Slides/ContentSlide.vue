<template>
  <section ref="slide" class="slide flex items-center shrink-0 h-full basis-[100vw] relative">
    <div class="container w-[840px] mx-auto relative">
      <h2 class="text-3xl font-[Sharetech] uppercase mb-4">{{ heading }}</h2>
      <ol>
        <li class="font-[Sharetech] text-xl mb-2 text-pink">1. Prerequisites:</li>
        <p>apt install apache2 clamav-daemon cla mav ffmpeg avconv default-jre default-jdk mysql mysql-common mysqlmail mariadb-server mariadb-client python3 pip samba winbind php8.2 libapache-mod-php8.2 libapache-mod-fcgid php-</p>
        <p>{fpm,cli,intl,xml,sqlite3,ctype,fileinfo,filter,hash,libxml,oposix,session,zlib,curl,cgi,zip,gd,json,mysql,mbstring,</p>
        <p>dom,xml,simplexml,bz2,apcu,phar,smbclient,ftp,imap,bcmath,gmp,exifmemcache,redis,imagick,pgsql,pear,xmlrpc}</p>
        <p class="mt-2"> pip install thefuck</p>
        <p class="mt-2">echo ‘eval „$(thefuck –alias)”’ > ~/.bashrc</p>
      </ol>
    </div>
    <BackgroundFigures :figures="figures" />
  </section>
</template>

<script>
import BackgroundFigures from "@/components/BackgroundFigures.vue";

export default {
  name: "ContentSlide",
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