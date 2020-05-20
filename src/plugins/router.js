import Vue from 'vue'
import VueRouter from 'vue-router'

import ImageToolHomePage from '@/components/image-tool-page/ImageToolHomePage.vue';
import ExcelPage from '@/components/excel-page/ExcelPage.vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: ImageToolHomePage,
    },
    {
      path: '/excelPage',
      component: ExcelPage,
    },
  ]
});
