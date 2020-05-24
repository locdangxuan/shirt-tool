<template>
  <div>
    <v-app-bar color="blue" app absolute clipped-left>
      <v-app-bar-nav-icon @click="changeStatusOfNavBar()" v-model="statusOfNavBar"/>

      <v-spacer/>

      <h1 class="red--text">Hau Tools</h1>

      <v-spacer/>

      <v-btn text @click="openLoginDialog()">
        <h2>Login</h2>
      </v-btn>
    </v-app-bar>

    <v-dialog
      v-model="loginDialog"
      max-width="400px"
    >
      <v-card ref="login">
        <v-card-title class="d-flex justify-center">
          <h2>Login</h2>
        </v-card-title>

        <v-card-text>
          <v-text-field label="Username" :rules="[rules.required]" ref="username"/>

          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            @click:append="showPassword = !showPassword"
            ref="password"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer/>

          <v-btn color="grey" text @click="loginDialog = false">Cancel</v-btn>

          <v-btn color="blue" @click="login()">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'app-bar-of-landing-page',

  data() {
    return {
      statusOfNavBar: false,
      loginDialog: false,
      showPassword: false,
      rules: {
        required: value => !!value || 'Required',
      }
    };
  },

  methods: {
    changeStatusOfNavBar() {
      this.statusOfNavBar = !this.statusOfNavBar;
      this.$emit('update-status-of-nav-bar', this.statusOfNavBar);
    },

    openLoginDialog() {
      this.loginDialog = true;
    },

    login() {
      if (!this.$refs.username.validate() || !this.$refs.password.validate()) {
        return;
      }

      this.loginDialog = false;
    }
  }
};
</script>

<style scoped lang="stylus">

</style>
