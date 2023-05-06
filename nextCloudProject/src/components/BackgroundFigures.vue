<template>
  <template v-for="(figure, index) in figures" :key="`figure-${index}`">
    <div :class="`figure figure__${figure.type}`"
         :data-animation="figure.animation ? drawAnimationType() : ''"
         :data-time="figure.animation ? drawAnimationTime() : 0"
         :style="`width:${figure.width};
                height:${figure.height};
                background:${figure.backgroundColor};
                border:${figure.border};
                top:${figure.positionY};
                left:${figure.positionX};`"
          ref="figures"></div>
  </template>
</template>

<script>
export default {
  name: "BackgroundFigures",
  props: {
    figures: {
      type: Array,
    }
  },
  data() {
    return {
      animations: ['squareSpinRight', 'squareSpinLeft', 'squareNegativeSpinLeft', 'squareNegativeSpinRight'],
    }
  },
  methods: {
    drawAnimationType() {
      return this.animations[Math.floor(Math.random() * this.animations.length)];
    },

    drawAnimationTime() {
      return Math.floor(Math.random() * (30 - 20 + 1) + 20);
    },

    setAnimations(items) {
      if(items.length > 0) {
        items.forEach(item => {
          console.log(item)
          if (item.dataset.animation !== '') {
            item.style.animationName = item.dataset.animation;
            item.style.animationDuration = `${item.dataset.time}s`;
          };
        })
      }
    }
  },
  mounted() {
    this.setAnimations(this.$refs.figures);
  }
}
</script>

<style scoped>
.figure {
  position: absolute;
  animation: linear infinite;
}
</style>