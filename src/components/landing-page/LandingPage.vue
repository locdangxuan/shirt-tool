<template>
  <v-app>
    <navigation-drawer
      :status-of-nav-bar="statusOfNavBar"
    />

    <app-bar-of-landing-page
      @update-status-of-nav-bar="updateStatusOfNavBar($event)"
    />

    <v-content>
      <content-of-landing-page/>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/landing-page/NavigationDrawer.vue';
import AppBarOfLandingPage from '@/components/landing-page/AppBarOfLandingPage.vue';
import ContentOfLandingPage from '@/components/landing-page/ContentOfLandingPage.vue';

export default {
  name: 'landing-page',

  components: {
    ContentOfLandingPage,
    AppBarOfLandingPage,
    NavigationDrawer,
  },

  data() {
    return {
      statusOfNavBar: false,
    };
  },

  methods: {
    updateStatusOfNavBar(statusOfNavBar) {
      this.statusOfNavBar = statusOfNavBar;
    },
  },
};
</script>

<style scoped>

</style>
