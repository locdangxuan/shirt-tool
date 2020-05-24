import Vue from 'vue'
import VueRouter from 'vue-router'

import MockupType from '@/components/image-tool-page/MockupType.vue';
import DesignPage from '@/components/design-page/DesignPage.vue';
import ExcelPage from '@/components/excel-page/ExcelPage.vue';
import LandingPage from '@/components/landing-page/LandingPage.vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: LandingPage,
      children: [
        {
          path: '/excelPage',
          component: ExcelPage,
        },
        {
          path: '/designPage',
          component: DesignPage,
        },
        {
          path: '/mockupType',
          component: MockupType,
          children: [

          ],
        },
      ]
    },

  ]
});
