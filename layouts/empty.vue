<template>
  <v-app app dark>
    <v-snackbar
      v-model="snackbar"
      top
      :timeout="1500"
      :color="color"
    >
      {{ message }}
    </v-snackbar>
    <v-content>

      <v-container fluid>

        <nuxt/>
      </v-container>
    </v-content>
  </v-app>

</template>

<script>
    export default {
        data() {
            return {
                message: '',
                snackbar: null,
                color: '',
            }
        },
        mounted() {
            const message = this.$route.query.message;

            switch (message) {
                case 'noUser':
                    this.snackbar = true;
                    this.message = 'Залогуйтесь у систему';
                    this.color = 'error';
                    break
                case 'leftChat':
                    this.snackbar = true;
                    this.message = 'Ви успішно вийшли з часу';
                    this.color = 'success';
                    break
            }
        },
    }
</script>
