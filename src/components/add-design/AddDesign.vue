<template>
    <div>
        <canvas class="add-design" ref="canvas" width="750" height="500"></canvas>
        <!-- <h1>select mockup</h1>
        <input type="file" id="mockupLoader" ref="mockup" @change="onInputMockupChange"/>
        <br>
        <h1>select design</h1>
        <input type="file" id="designLoader" ref="design" @change="onInputDesignChange"/> -->
    </div>
</template>

<script>
import { fabric } from 'fabric';
export default {
  mounted() {
    const ref = this.$refs.canvas;
    const canvas = new fabric.Canvas(ref);
    canvas.renderAll();

    // let src ='file://' +__dirname + '/superliga/2019_dli_odd_XXX_app_push_ios_1000x1000.png';
    let src1 = "./images/mockupDemo.jpg";
    let src2 = './images/mu.png';

    fabric.Image.fromURL(src1, function(myImg) {
      let img1 = myImg.set({ left: 200, top: 10});
      canvas.add(img1); 
    });

    fabric.Image.fromURL(src2, function(myImg) {
      let img1 = myImg.scale(0.2).set({ left: 200, top: 10 , opacity: 1});
      canvas.add(img1); 
    });
  },


  // data() {
  //   return {
  //     ref: this.$refs.canvas
  //   }
  // },
  // methods: {
  //   onInputMockupChange(event) {
  //     const ref = this.ref;
  //     const canvas = new fabric.Canvas(ref);
  //     var reader = new FileReader();
  //     reader.onload = function (event) { 
  //         console.log('fdsf');
  //         var imgObj = new Image();
  //         imgObj.src = event.target.result;
  //         imgObj.onload = function () {
  //             // start fabricJS stuff
  //             console.log("onload")
  //             var image = new fabric.Image(imgObj);
  //             image.set({
  //                 width: 100,
  //                 height: 100,
  //                 left: 10,
  //                 top: 10
  //             });
  //             //image.scale(getRandomNum(0.1, 0.25)).setCoords();
  //             canvas.add(image);
  //             console.log("canvas added")
  //             // end fabricJS stuff
  //         }
          
  //     }
  //     reader.readAsDataURL(event.target.files[0]);
  //     console.log("reader")
  //     console.log("reader" + event.target.files)
  //   },

  //   onInputDesignChange(event) {
  //     const ref = this.ref;
  //     const canvas = new fabric.Canvas(ref);
  //         var reader = new FileReader();
  //         reader.onload = function (event) {
  //             var imgObj = new Image();
  //             imgObj.src = event.target.result;
  //             imgObj.onload = function () {
  //                 // start fabricJS stuff
                  
  //                 var image = new fabric.Image(imgObj);
  //                 image.set({
  //                     left: 10,
  //                     top: 10
  //                 });
  //                 //image.scale(getRandomNum(0.1, 0.25)).setCoords();
  //                 canvas.add(image);
                  
  //                 // end fabricJS stuff
  //             }
              
  //         }
  //         reader.readAsDataURL(event.target.files[0]);
  //   }
  // }
};
</script>

<style lang="stylus" scoped>
.add-design
    border 1px solid black
    text-align center
</style>


mounted() {
    const ref = this.$refs.canvas;
    const canvas = new fabric.Canvas(ref);
    canvas.renderAll();

    // let src ='file://' +__dirname + '/superliga/2019_dli_odd_XXX_app_push_ios_1000x1000.png';
    let src1 = "./images/mockupDemo.jpg";
    let src2 = './images/mu.png';
    // const readMockup = this.$refs.mockup;
    // console.log(readMockup);
    // const readDesign = this.$refs.design;
    // console.log(readDesign);

    fabric.Image.fromURL(src1, function(myImg) {
      let img1 = myImg.set({ left: 200, top: 10});
      canvas.add(img1); 
    });

    fabric.Image.fromURL(src2, function(myImg) {
      let img1 = myImg.scale(0.2).set({ left: 200, top: 10 , opacity: 1});
      canvas.add(img1); 
    });
  },