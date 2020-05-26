<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <h1>Excel Page</h1>
      </v-col>

      <v-col cols="3"/>

      <v-col cols="6">
        <v-file-input
          label="Input file excel"
          class="mt-5"
          dense
          v-model="excelFile"
        />

        <div class="d-flex align-center justify-center">
          <v-btn color="red" text :disabled="isDisableGetFile" @click.prevent="downloadItem(excelFile)">
            <h2>Get file</h2>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="3"/>
    </v-row>

    <v-snackbar
      v-model="notification"
      :timeout="5000"
    >
      Upload file is not .xlsx file, please choose other file
      <v-btn
        color="blue"
        text
        @click="notification = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
// import Axios from 'axios'

export default {
  name: 'excel-page',

  data() {
    return {
      excelFile: null,
      notification: false,
      isDisableGetFile: false,
    };
  },

  mounted() {
    if (this.excelFile === null) {
      this.isDisableGetFile = true;
    }
  },

  watch: {
    excelFile(data) {
      if (data === undefined) {
        this.isDisableGetFile = true;
      } else {
        if (data.name.split('.')[1] !== 'xlsx') {
          this.isDisableGetFile = true;
          this.notification = true;
        } else {
          this.isDisableGetFile = false;
        }
      }
    },
  },

  methods: {
    downloadItem({ url, label }) {
      // console.log('11111', url, label)
      // Axios.get(url, { responseType: 'blob' })
      //   .then(response => {
      //     const url = URL.createObjectURL(new Blob([response.data], {
      //       type: 'application/vnd.ms-excel'
      //     }))
      //     const link = document.createElement('a')
      //     link.href = url
      //     link.setAttribute('download', label)
      //     document.body.appendChild(link)
      //     link.click()
      //   }).catch(console.error);
      console.log(url,label);
    },
  },
};
</script>

<style scoped>

</style>
