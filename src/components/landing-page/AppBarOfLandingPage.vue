<template>
  <div>
    <v-app-bar color="blue" app absolute clipped-left>
      <v-app-bar-nav-icon @click="changeStatusOfNavBar()" v-model="statusOfNavBar"/>

      <v-spacer/>

      <h1>Hau Tools</h1>

      <v-spacer/>

      <v-btn text>
        <h2>Login</h2>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'app-bar-of-landing-page',

  data() {
    return {
      statusOfNavBar: false,
    };
  },

  watch: {
    statusOfNavBar(val) {
      console.log(val);
    },
  },

  methods: {
    changeStatusOfNavBar() {
      this.statusOfNavBar = !this.statusOfNavBar;
      this.$emit('update-status-of-nav-bar', this.statusOfNavBar);
    }
  }
};
</script>

<style scoped>

</style>
