<template>
  <v-row no-gutters>
    <v-col class="mockup-and-design justify-center" cols="12">
      <canvas class="add-design" id="canvas" width="415" height="495" />
      <!-- <div class="mockup" :style="rotateImageStyle" >
      </div> -->
    </v-col>

<!--    <v-col cols="12">-->
<!--      <v-btn @click="saveImage()">Save image</v-btn>-->

<!--      <a download="FILENAME.png" :href="href" @click="getData(val)">download</a>-->
<!--    </v-col>-->

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
// import { saveAs } from 'file-saver';

export default {
  props: {
    urlDesign: { type: String, default: null },
  },

  data() {
    return {
      radius: 0,
      canvas: {},
      file: undefined,
      href: undefined,
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

  methods: {
    getData(val) {
      console.log('image', val);
    },

    dataURLtoFile(dataurl, filename) {

      var arr = dataurl.split(','),
              // mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);

      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }

      console.log('asd', [u8arr]);

      const blob = new Blob([u8arr], {type: 'image/png'});
      console.log('blob', URL.createObjectURL(blob));
      console.log('blob 2', blob);
      window.Uploader
      return new File([u8arr], filename, {type: 'image/png'});
    },

    urltoFile(url, filename, mimeType){
      return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename,{type:mimeType});})
      );
    },

    saveImage() {
      this.href = this.canvas.toDataURL({
        format: 'png',
        quality: 1,
      });

      const newImage = new Image();
      newImage.src = this.href;

      this.file = this.dataURLtoFile(this.href, 'test.png');
      // this.urltoFile(this.href, 'image.png','image/plain')
      //         .then(function(file){ console.log(file);});

      // const byteCharacter = atob(this.href);

      // console.log('byte character', byteCharacter);


      // let FileSaver = require('file-saver');
      // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
      // FileSaver.saveAs(this.file, "test.txt");

      console.log('file', this.file);
      console.log('fabric canvas', this.href);
      console.log('fabric canvas 2', newImage);
    },
  },

  mounted() {
    this.canvas = new fabric.Canvas('canvas', {
      preserveObjectStacking: true,
    });
    const canvas = this.canvas
    fabric.Image.fromURL("./images/mockupDemoGearment.png", function(myImg){
      const img = myImg.scale(0.4).set({
        top: 50,
        left: 0,
        border: 1
      })
      canvas.add(img);
    });
  },

  watch: {
    urlDesign(val) {
      console.log('url design', val);
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