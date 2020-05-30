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
              outlined
              dense
              v-if="!isCreateNewMockupType"
            ></v-select>

            <v-text-field
              v-else
              v-model="newMockupTypeTitle"
              label="Please name new mockup type title!"
              outlined
              dense
            />
          </v-col>

          <v-col cols="4" class="d-flex align-start justify-start">
            <v-btn
              color="primary"
              style="height: 38px" @click="isCreateNewMockupType = true"
              v-if="!isCreateNewMockupType"
            >
              <b>+</b>
            </v-btn>

            <v-btn color="red" class="white--text" @click="createNewMockupType()" v-else>Save</v-btn>

            <v-btn
              text
              color="grey"
              v-if="isCreateNewMockupType"
              class="ml-2"
              @click="isCreateNewMockupType = false, newMockupTypeTitle = null"
            >
              Cancel
            </v-btn>
          </v-col>

          <v-col cols="4"/>
        </v-row>
      </v-col>

      <v-col cols="12" class="d-flex" v-if="currentMockupType !== null || isCreateNewMockupType">
        <v-row>
          <v-col cols="9">
            <h2 class="d-flex justify-center mb-5">Main Image</h2>

            <div class="d-flex align-center">
              <v-img :src="mainImage.url||require('@/assets/empty.jpg')" contain height="400px" width="400px"/>
            </div>

            <v-row>
              <v-col cols="6" class="d-flex align-center">
                <v-file-input
                  :label="isDefaultMockupInGearment ? `Can't upload main image` : 'Upload main image'"
                  filled
                  prepend-icon="mdi-camera"
                  class="mt-5"
                  v-model="mainImage.data"
                  dense
                  :disabled="isDefaultMockupInGearment"
                />
              </v-col>

              <v-col cols="6" class="d-flex align-center justify-center">
                <v-btn
                  :color="isDefaultMockupInGearment ? 'red' : ''"
                  @click="isDefaultMockupInGearment = !isDefaultMockupInGearment"
                >
                  Use Default Mockup In Gearment
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="3">
            <v-row no-gutters>
              <v-col cols="12">
                <div class="d-flex justify-center">
                  <v-img :src="image1.url||require('@/assets/empty.jpg')" contain height="120px" width="120px"/>
                </div>

                <v-file-input
                  label="Upload image 1"
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
                  label="Upload image 2"
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
                  label="Upload image 3"
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

              <v-col cols="6"/>

              <v-col cols="12">
                <image-uploader/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
      newMockupTypeTitle: null,
      isCreateNewMockupType: false,
      isDefaultMockupInGearment: false,
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
    };
  },

  watch: {
    isDefaultMockupInGearment(val) {
      if (val) {
        this.mainImage.url = require('@/assets/mu.png');
      } else if (this.mainImage.data) {
        this.mainImage.url = URL.createObjectURL(this.mainImage.data);
      } else {
        this.mainImage.url = require('@/assets/empty.jpg');
      }
    },

    'mainImage.data': {
      handler(val) {
        const condition = (val === undefined) && (this.isDefaultMockupInGearment === false);
        condition === true ? this.mainImage.url = null : this.mainImage.url = URL.createObjectURL(val);
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
    createNewMockupType() {
      this.isCreateNewMockupType = false;
      if (this.newMockupTypeTitle !== null) {
        this.mockUpType.push(this.newMockupTypeTitle);
      }

      this.newMockupTypeTitle = null;
    }
  }
};
</script>

<style scoped lang="stylus">
.mockup-type--new-other-image-dialog
  background-color white
</style>
