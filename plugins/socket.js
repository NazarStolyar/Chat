import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default function({store}) {
  Vue.use(new VueSocketIO({
    debug: false,
    connection:  'https://chat-nuxt-js.herokuapp.com/',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  }))
}


