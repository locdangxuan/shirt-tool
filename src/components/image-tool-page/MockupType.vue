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
          <v-col cols="12">
            <h2>Main Image</h2>

            <div class="d-flex align-center">
              <v-img :src="require('@/assets/logo.png')" contain height="250px" width="250px"/>
            </div>

            <v-file-input
              label="File input"
              filled
              prepend-icon="mdi-camera"
              class="mt-5"
              v-model="mainImage"
            ></v-file-input>
          </v-col>

          <v-col cols="12">
            <v-divider/>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="6" class="d-flex justify-start">
                <h2>Other images</h2>

                <ImageInput
                  v-model="otherImage"
                  @change="(image)=>{values.featured_image = image}">
                </ImageInput>

<!--                <v-image-input-->
<!--                  value="otherImage"-->
<!--                  :image-quality="1"-->
<!--                  clearable-->
<!--                  x="manh huy"-->
<!--                  image-format="png"-->
<!--                  uploadIcon="mdi-upload"-->
<!--                />-->
              </v-col>

              <v-col cols="6" class="d-flex justify-end">
                <v-btn style="height: 38px">Add new other image</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import VImageInput from 'vuetify-image-input';
import ImageInput from "@/components/common/ImageInput";

export default {
  name: 'mockup-type-page',

  components: {
    // VImageInput,
    ImageInput,
  },

  data() {
    return {
      mockUpType: [
        "Nam",
        "Nu",
        "Unisex",
      ],
      currentMockupType: null,
      mainImage: null,
      otherImage: null,
    };
  },

  watch: {
    mainImage: {
      handler(val) {
        console.log('main image', val);
      },

      otherImage(val) {
        console.log('other', val);
      }
    },
  },

  methods: {
    onMainPhotoChanged() {

    }
  }
};
</script>

<style scoped>

</style>
