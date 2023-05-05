<template>
  <template v-for="(figure, index) in figures" :key="`figure-${index}`">
    <div :class="`figure figure__${figure.type}`"
         :style="`width:${figure.width};
                height:${figure.height};
                background:${figure.backgroundColor};
                border:${figure.border};
                top:${figure.positionY};
                left:${figure.positionX};`"></div>
  </template>
</template>

<script>
export default {
  name: "BackgroundFigures",
  props: {
    figures: {
      type: Array,
    }
  }
}
</script>

<style scoped>
.figure {
  position: absolute;
}
</style>