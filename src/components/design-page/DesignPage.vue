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
                <v-img
                  :src="require('@/assets/mockupDemo.jpg')"
                  :style="rotateImageStyle"
                  contain
                >
                  <div
                    class="design-page--design"
                    :style="designStyle"
                    draggable="true"
                    @dragleave="onDragStart($event)"
                    @dragover.prevent
                  >
                     <image-uploader/>
                  </div>
                </v-img>
              </v-col>

              <v-col cols="12" class="d-flex justify-center">
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
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ImageUploader from '../image-uploader/ImageUploader';
export default {
  name: 'design-page',

  components: {
    ImageUploader
  },

  data() {
    return{
      mockUpType: [
        "Nam",
        "Nu",
        "Unisex",
      ],
      image: null,
      currentMockupType: null,
      // emptyImage,
      radius: 0,
      designX: 45,
      designY: 30,
    };
  },

  computed: {
    designStyle() {
      return {
        // "top": `${this.designY}%`,
        // "left": `${this.designX}%`,
        "transform": `translate3d(${this.designX}px, ${this.designY}px, 0)`,
      }
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

  methods: {
      onDragStart(event) {
      // console.log(100*(event.screenX)/screen.availWidth);
      this.designX = event.clientX - 170;

      // console.log(event.screenY, screen.availHeight,event.screenY/screen.availHeight)
      this.designY = event.clientY - 190;

      console.log('on drag start' ,event.clientX, event.clientY)
    },
  }
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
