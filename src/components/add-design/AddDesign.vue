<template>
  <canvas class="add-design" ref="can" width="201px" height="100%"></canvas>
</template>

<script>
import { fabric } from 'fabric';

export default {
  mounted() {
    const ref = this.$refs.can;
    const canvas = new fabric.Canvas(ref);
    const rect = new fabric.Rect({
      fill: 'blue',
      width: 30,
      height: 30
    });
    canvas.add(rect);
  }
};
</script>

<style lang="stylus" scoped>
.add-design
    border 5px solid black
</style>