<template>
  <v-row no-gutters>
    <v-col class="mockup-and-design justify-center" cols="12">
      <canvas class="add-design" id="canvas" width="500" height="510" />
      <!-- <div class="mockup" :style="rotateImageStyle" >
      </div> -->
    </v-col>



    <!-- <v-col cols="12" class="d-flex justify-center mt-5">
      <v-btn text @click="radius = radius - 1">
        <v-icon>mdi-rotate-left</v-icon>
      </v-btn>

      <v-btn text @click="radius = radius - 90">
        <v-icon>mdi-rotate-left-variant</v-icon>
      </v-btn>

      <v-btn text @click="radius = radius + 90">
        <v-icon>mdi-rotate-right-variant</v-icon>
      </v-btn>

      <v-btn text @click="radius = radius + 1">
        <v-icon>mdi-rotate-right</v-icon>
      </v-btn>
    </v-col> -->
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
    this.canvas = new fabric.Canvas('canvas', {
      preserveObjectStacking: true,
    });
    const canvas = this.canvas
    fabric.Image.fromURL("./images/mockupDemo.jpg", function(myImg){
      const img = myImg.set({
        top: 50,
        left: 0,
        width: 500,
        height: 500,
        border: 1
      })
      canvas.add(img);
    });
  },

  watch: {
    urlDesign(val) {
      if (val !== null) {
        const canvas = this.canvas;
        fabric.Image.fromURL(val, function (myImg) {
          const img = myImg.set({
            top: 10,
            left: 10,
          });

          canvas.add(img);
          canvas.on('object:moving',function(e){
            console.log('x: ', e.pointer.x);
            console.log('y: ', e.pointer.y);
          });

          canvas.on('object:modified',function(e){
            console.log('height: ', e.target.height * e.target.scaleY);
            console.log('width: ', e.target.width * e.target.scaleX);
            console.log('angle: ', e.target.angle);
          });
        });
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
.mockup-and-design
  position relative
  display flex
  justify-items center

.add-design
  text-align center
  background-repeat no-repeat
  border 1px solid red

.mockup
  position absolute
  top 0
  background-image url('mockupDemo.jpg')
  background-size 500px 500px
</style>

<style lang="stylus">
.mockup-and-design
  .canvas-container
    z-index 1
</style>