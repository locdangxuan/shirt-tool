<template>
  <div>
    <v-app-bar color="blue" app absolute clipped-left>
      <v-app-bar-nav-icon @click="changeStatusOfNavBar()" v-model="statusOfNavBar"/>

      <v-spacer/>

      <v-spacer/>

      <v-btn text @click="openLoginDialog()">
        <h2>Đăng nhập</h2>
      </v-btn>
      <v-btn text @click="openRegisterDialog()">
        <h2>Đăng ký</h2>
      </v-btn>
    </v-app-bar>

    <v-dialog
      v-model="loginDialog"
      max-width="400px"
    >
      <v-card ref="login">
        <v-card-title class="d-flex justify-center">
          <h2>Đăng nhập</h2>
        </v-card-title>

        <v-card-text>
          <v-text-field label="Tên đăng nhập" :rules="[rules.required]" ref="username"/>

          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="showPassword ? 'text' : 'password'"
            label="Mật khẩu"
            @click:append="showPassword = !showPassword"
            ref="password"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer/>

          <v-btn color="grey" text @click="loginDialog = false">Hủy bỏ</v-btn>

          <v-btn color="blue" @click="login()">Đăng nhập</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="registerDialog"
      max-width="400px"
    >
      <v-card ref="register">
        <v-card-title class="d-flex justify-center">
          <h2>Đăng ký</h2>
        </v-card-title>

        <v-card-text>
          <v-text-field label="Tên" :rules="[rules.required]" ref="firstname"/>
          <v-text-field label="Họ" :rules="[rules.required]" ref="lastname"/>
          <v-text-field label="Username" :rules="[rules.required]" ref="username"/>
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="showPassword ? 'text' : 'password'"
            label="Mật khẩu"
            @click:append="showPassword = !showPassword"
            ref="password"
          ></v-text-field>

          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="showPassword ? 'text' : 'confirm password'"
            label="Xác nhận mật khẩu"
            @click:append="showPassword = !showPassword"
            ref="confirm_password"
          ></v-text-field>

        </v-card-text>

        <v-card-actions>
          <v-spacer/>

          <v-btn color="grey" text @click="registerDialog = false">Hủy bỏ</v-btn>

          <v-btn color="blue" @click="register()">Đăng ký</v-btn>
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
      registerDialog: false,
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

    openRegisterDialog(){
      this.registerDialog = true;
    },

    login() {
      if (!this.$refs.username.validate() || !this.$refs.password.validate()) {
        return;
      }

      this.loginDialog = false;
    },

    register() {
      if (!this.$refs.username.validate() || 
          !this.$refs.password.validate() ||
          !this.$refs.confirm_password.validate()||
          !this.$refs.firstname.validate() ||
          !this.$refs.lastname.validate()) {
        return;
      }

      this.registerDialog = false;
    }
  }
};
</script>

<style scoped lang="stylus">

</style>
