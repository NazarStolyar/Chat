<template>
  <v-app>
    <v-snackbar
      v-model="snackbar"
    >
      {{ message }}
      <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
      </v-btn>
    </v-snackbar>

    <v-navigation-drawer v-model="drawer" app mobile-break-point="650">

      <v-list subheader>
        <v-subheader>Recent chat</v-subheader>

        <v-list-item
          v-for="u in users"
          :key="u.id"
          @click.prevent
        >

          <v-list-item-content>
            <v-list-item-title>{{ u.name }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color="u.id === user.id ? 'primary' : 'grey'">mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn @click="exit">
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>Chat room {{ user.room }}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <div style="height: 100%">
        <nuxt/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                drawer: true,
                message: '',
                snackbar: null
            }
        },

        methods: {
            ...mapMutations(['clearData']),
            exit() {
              this.$socket.emit('userLeft', this.user.id, () => {
                  this.$router.push('/?message=leftChat');
                  this.clearData();
              });

            }
        },
        computed: mapState(['user', 'users'])
    }
</script>
