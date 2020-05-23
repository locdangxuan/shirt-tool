import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import ImagePicker from "@/components/common/ImagePicker";
// import VImageInput from "vuetify-image-input"
// import SimpleImageInput from 'v-simple-image-input';

Vue.use(Vuetify);
Vue.component(
  // 'VImageInput', VImageInput,
  // 'simple-image-input', SimpleImageInput
);

// Vue.use(ImagePicker);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  }
});
