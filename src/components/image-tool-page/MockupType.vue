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
            ></v-select>
          </v-col>

          <v-col cols="4" class="d-flex align-start justify-start">
            <v-btn color="primary" style="height: 38px"><b>+</b></v-btn>
          </v-col>

          <v-col cols="4"/>
        </v-row>
      </v-col>

      <v-col cols="12" class="d-flex" v-if="currentMockupType !== null">
        <v-row>
          <v-col cols="9">
            <h2>Main Image</h2>

            <div class="d-flex align-center">
              <v-img :src="mainImage.url||require('@/assets/empty.jpg')" contain height="400px" width="400px"/>
            </div>

            <v-file-input
              label="File input"
              filled
              prepend-icon="mdi-camera"
              class="mt-5"
              v-model="mainImage.data"
              dense
            ></v-file-input>
          </v-col>

          <v-col cols="3">
            <v-row no-gutters>
              <v-col cols="12">
                <div class="d-flex justify-center">
                  <v-img :src="image1.url||require('@/assets/empty.jpg')" contain height="120px" width="120px"/>
                </div>

                <v-file-input
                  label="File input"
                  prepend-icon="mdi-camera"
                  class="mt-5"
                  v-model="image1.data"
                  dense
                ></v-file-input>
              </v-col>

              <v-col cols="12">
                <div class="d-flex justify-center">
                  <v-img :src="image2.url||require('@/assets/empty.jpg')" contain height="120px" width="120px"/>
                </div>

                <v-file-input
                  label="File input"
                  prepend-icon="mdi-camera"
                  class="mt-5"
                  v-model="image2.data"
                  dense
                ></v-file-input>
              </v-col>

              <v-col cols="12">
                <div class="d-flex justify-center">
                  <v-img :src="image3.url||require('@/assets/empty.jpg')" contain height="120px" width="120px"/>
                </div>

                <v-file-input
                  label="File input"
                  prepend-icon="mdi-camera"
                  class="mt-5"
                  v-model="image3.data"
                  dense
                ></v-file-input>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-divider/>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="6" class="d-flex justify-start">
                <h2>Color of mockup</h2>
              </v-col>

              <v-col cols="6" class="d-flex justify-end">
                <v-btn style="height: 38px" @click="newOtherImageDialog = true">Add new other image</v-btn>
              </v-col>

              <v-col
                cols="2"
                class="d-flex justify-center"
                v-for="(otherImage, i) in otherImages"
                :key="i"
              >
                <v-card height="300px">
                  <v-row no-gutters class="pa-4">
                    <v-col cols="12" class="d-flex align-center justify-center">
                      <v-img :src="otherImage.url||require('@/assets/empty.jpg')" contain height="250px" width="250px"/>
                    </v-col>

                    <v-col cols="12" class="d-flex align-center justify-center">
                      <span v-if="otherImage.title">
                        <i>
                          <b>{{ otherImage.title }}</b>
                        </i>
                    </span>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <image-uploader />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-dialog
      v-model="newOtherImageDialog"
      @keydown.esc="newOtherImageDialog = false"
      max-width="500px"
    >
      <v-card class="mockup-type--new-other-image-dialog">
        <v-row no-gutters>
          <v-col cols="12" class="pa-5 d-flex align-center justify-center">
            <h1>Create new other image</h1>
          </v-col>

          <v-col cols="12" class="pa-5">
            <v-text-field v-model="tmpOtherImage.title" label="Title"/>

            <div class="d-flex align-center">
              <v-img :src="tmpOtherImage.url||require('@/assets/empty.jpg')" contain height="250px" width="250px"/>
            </div>

            <v-file-input
              label="File input"
              filled
              prepend-icon="mdi-camera"
              class="mt-5"
              v-model="tmpOtherImage.data"
            ></v-file-input>

            <v-row no-gutters>
              <v-spacer/>

              <v-btn
                color="grey"
                text
                class="mr-2"
                @click="[newOtherImageDialog = false, $_clearDataInNewOtherImageDialog()]"
              >
                Cancel
              </v-btn>

              <v-btn color="blue" :disabled="!tmpOtherImage.data" @click="createNewOtherImage()">Save</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

<!--    move to design page-->
    <div style="height: 100px; position: relative" v-if="currentMockupType">
      <v-fab-transition>
        <v-btn
          color="pink"
          dark
          absolute
          top
          right
          to="/designPage"
        >
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </v-container>

<!--                <ImageInput-->
<!--                  v-model="otherImage"-->
<!--                  @change="(image)=>{values.featured_image = image}">-->
<!--                </ImageInput>-->

<!--                <v-image-input-->
<!--                  value="otherImage"-->
<!--                  :image-quality="1"-->
<!--                  clearable-->
<!--                  x="manh huy"-->
<!--                  image-format="png"-->
<!--                  uploadIcon="mdi-upload"-->
<!--                />-->

</template>

<script>
// import VImageInput from 'vuetify-image-input';
// import ImageInput from "@/components/common/ImageInput";
import ImageUploader from '../image-uploader/ImageUploader';
export default {
  name: 'mockup-type-page',

  components: {
    // VImageInput,
    // ImageInput,
    ImageUploader
  },

  data() {
    return {
      mockUpType: [
        "Nam",
        "Nu",
        "Unisex",
      ],
      currentMockupType: null,
      mainImage: {
        data: null,
        url: null,
      },
      image1: {
        data: null,
        url: null,
      },
      image2: {
        data: null,
        url: null,
      },
      image3: {
        data: null,
        url: null,
      },
      newOtherImageDialog: false,

      otherImages: [],

      tmpOtherImage: {
        title: null,
        url: null,
        data: null,
      },
    };
  },

  watch: {
    'tmpOtherImage.data': {
      handler(val) {
        if (val !== null) {
          this.tmpOtherImage.url = URL.createObjectURL(val);
        } else {
          this.tmpOtherImage.url = val;
        }
      },

      deep: true,
    },

    'mainImage.data': {
      handler(val) {
        val === undefined ? this.mainImage.url = null : this.mainImage.url = URL.createObjectURL(val);
      },
    },

    'image1.data': {
      handler(val) {
        val === undefined ? this.image1.url = null : this.image1.url = URL.createObjectURL(val);
      },
    },

    'image2.data': {
      handler(val) {
        val === undefined ? this.image2.url = null : this.image2.url = URL.createObjectURL(val);
      },
    },

    'image3.data': {
      handler(val) {
        val === undefined ? this.image3.url = null : this.image3.url = URL.createObjectURL(val);
      },
    },
  },

  methods: {
    createNewOtherImage() {
      this.newOtherImageDialog = false;

      const temp = Object.assign({}, this.tmpOtherImage);

      console.log(temp);

      this.otherImages.push(temp);
      console.log('1', this.otherImages);
      this.$_clearDataInNewOtherImageDialog();
      console.log('2', this.otherImages);
    },

    $_clearDataInNewOtherImageDialog() {
      this.tmpOtherImage.title = null;
      this.tmpOtherImage.url = null;
      this.tmpOtherImage.data = null;
    },

    onMainPhotoChanged() {

    }
  }
};
</script>

<style scoped lang="stylus">
.mockup-type--new-other-image-dialog
  background-color white
</style>
