<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex">
        <v-row>
          <v-col cols="4" class="d-flex justify-center align-start">
            <v-select
              v-model="currentMockupType"
              :items="mockUpType"
              label="Select Mockup Type"
              solo
              dense
            />
          </v-col>

          <v-col cols="8"/>
        </v-row>
      </v-col>

      <v-col cols="12" v-if="currentMockupType">
        <v-row>
          <v-col cols="1" class="d-flex flex-column">
            <div
              @click="image === 'mainImage' ? image = null : image = 'mainImage'"
              :class="image === 'mainImage' ? 'design-page--image-hover' : ''"
              style="max-height: 100px; max-width: 100px"
            >
              <v-img :src="require('@/assets/empty.jpg')" height="100px" width="100px" contain/>
            </div>

            <div
              style="max-height: 100px; max-width: 100px"
            >
              <v-img :src="require('@/assets/empty.jpg')" height="100px" width="100px" contain/>
            </div>
          </v-col>

          <v-col cols="6">
            <v-row no-gutters v-if="imageShow !== null">
              <v-col cols="12" class="d-flex justify-center">
                <add-design :url-design="urlDesign"/>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="5" class="d-flex justify-center">
            <v-card>
              <v-card-title>
                Mockup title
              </v-card-title>

              <v-card-subtitle>
                Mockup subtitle
              </v-card-subtitle>

              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <b><u>Color: </u></b>
                  </v-col>

                  <v-col cols="3">
                    <v-img :src="require('@/assets/empty.jpg')" height="100px" width="100px" contain/>
                  </v-col>

                  <v-col cols="3">
                    <v-img :src="require('@/assets/empty.jpg')" height="100px" width="100px" contain/>
                  </v-col>

                  <v-col cols="3">
                    <v-img :src="require('@/assets/empty.jpg')" height="100px" width="100px" contain/>
                  </v-col>

                  <v-col cols="3">
                    <v-img :src="require('@/assets/empty.jpg')" height="100px" width="100px" contain/>
                  </v-col>

                  <v-col cols="3">
                    <v-img :src="require('@/assets/empty.jpg')" height="100px" width="100px" contain/>
                  </v-col>

                  <v-col cols="3">
                    <v-img :src="require('@/assets/empty.jpg')" height="100px" width="100px" contain/>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="12" class="mb-5">
                    <h2>Upload Design</h2>
                  </v-col>

                  <v-col cols="12">
                    <v-file-input
                      label="Design input"
                      filled
                      prepend-icon="mdi-camera"
                      v-model="design"
                      dense
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { fabric } from 'fabric';
import AddDesign from '../add-design/AddDesign'
export default {
  name: 'design-page',

  components: {
    AddDesign
  },

  // mounted() {
  //   const ref = this.$refs.mockup;
  //   const canvas = new fabric.canvas(ref);
  //   fabric.Image.fromURL('https://w7.pngwing.com/pngs/10/689/png-transparent-t-shirt-hoodie-clothing-crew-neck-tshirt-mockup-tshirt-angle-logo-thumbnail.png', function(myImg) {
  //     var img1 = myImg.set({ left: 0, top: 0 ,width:300,height:500});
  //     canvas.add(img1);
  //   });
  // },

  data() {
    return{
      mockUpType: [
        "Nam",
        "Nu",
        "Unisex",
      ],
      image: null,
      currentMockupType: null,
      radius: 0,
      designX: 45,
      designY: 45,
      design: undefined,
    };
  },

  computed: {
    urlDesign() {
      if (this.design !== undefined) {
        const urlDesign =  URL.createObjectURL(this.design);
        return urlDesign;
      }
      return null;
    },

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

    imageShow() {
      switch (this.image) {
        case 'mainImage':
          return `require('@/assets/empty.jpg')`;
        default:
          return null;
      }
    }
  },
};
</script>

<style scoped lang="stylus">
.design-page--design
  border-style solid
  max-height 100px
  max-width 100px
  /*position absolute*/

.design-page--image-hover
  border-style solid
  border-color orangered
</style>
