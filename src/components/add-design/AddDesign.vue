<template>
  <v-row no-gutters>
    <v-col cols="12" :style="rotateImageStyle" class="d-flex justify-center">
      <canvas class="add-design" id="canvas" width="500" height="500"/>
    </v-col>

    <v-col cols="12" class="d-flex justify-center mt-5">
      <v-btn text @click="radius = radius - 10">
        <v-icon>mdi-rotate-left</v-icon>
      </v-btn>

      <v-btn text @click="radius = radius - 90">
        <v-icon>mdi-rotate-left-variant</v-icon>
      </v-btn>

      <v-btn text @click="radius = radius + 90">
        <v-icon>mdi-rotate-right-variant</v-icon>
      </v-btn>

      <v-btn text @click="radius = radius + 10">
        <v-icon>mdi-rotate-right</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { fabric } from 'fabric';
export default {
  props: {
    urlDesign: { type: String, default: null },
  },

  data() {
    return {
      radius: 0,
      canvas: {},
    };
  },

  computed: {
    rotateImageStyle() {
      return {
        "transform": `rotate(${this.radius}deg)`,
        "-ms-transform": `rotate(${this.radius}deg)`,
        "height": '500px',
        "width": '500px',
        "overflow": "hidden",
        "cursor": "pointer",
      }
    },
  },

  mounted() {
    this.canvas = new fabric.Canvas('canvas');
  },

  watch: {
    urlDesign(val) {
      if (val !== null) {
        // const canvas = new fabric.Canvas('canvas');
        // canvas.remove();
        const canvas = this.canvas;
        fabric.Image.fromURL(val, function(myImg) {
          const img = myImg.scale(0.2).set({
            top: 10,
            left: 10,
          });

          canvas.add(img);
        });


      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.add-design
  border 1px solid black
  text-align center
  background-image url('mockupDemo.jpg')
  background-size 500px 500px
  background-repeat no-repeat
</style>
