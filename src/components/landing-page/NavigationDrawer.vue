<template>
  <v-navigation-drawer
    app
    v-model="statusOfNavBar"
    clipped
    absolute
  >
    <h3 class="mt-5">NAVIGATION</h3>

    <v-list class="pa-0 navigation-drawer--list">
      <v-list-item to="/mockupType">
        <v-list-item-action>
          <v-icon>mdi-page-layout-body</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <span>Mockup Type</span>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/designPage" class="navigation-drawer--list-item">
        <v-list-item-action>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <span>Make Design</span>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/excelPage" class="navigation-drawer--list-item">
        <v-list-item-action>
          <v-icon>mdi-clock</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <span>Upload Excel</span>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navigation-drawer',

  props: {
    statusOfNavBar: { type: Boolean, required: true },
  }
};
</script>

<style lang="stylus" scoped>
</style>

<style lang="stylus">
.navigation-drawer--list
  &.v-list .v-list-item--active
    color blue !important
</style>

