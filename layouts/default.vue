<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>

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
            <v-icon :color="u.id === 1 ? 'primary' : 'grey'">mdi-message-text</v-icon>
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
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                drawer: true,
                users: [
                    {
                        id: 0,
                        name: 'Nazar',
                    },
                    {
                        id: 1,
                        name: 'Lilia',
                    }
                ]
            }
        },
        methods: {
            ...mapMutations(['clearData']),
            exit() {
              this.$router.push('/?message=leftChat');
              this.clearData();
            }
        },
        computed: mapState(['user'])
    }
</script>
