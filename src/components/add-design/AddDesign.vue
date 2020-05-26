<template>
    <div>
        <canvas class="add-design" ref="can" width="850" height="500"></canvas>
        <v-img id="addImage" :src="require('./mu.jpg')" ref="addImage" />
    </div>
</template>

<script>
import { fabric } from 'fabric';

export default {
  mounted() {
    const ref = this.$refs.can;
    const canvas = new fabric.Canvas(ref);
    const rect = new fabric.Rect({
      fill: 'blue',
      width: 100,
      height: 100
    });
    canvas.add(rect);
    
  }
};
</script>

<style lang="stylus" scoped>
.add-design
    border 1px solid black
</style>