<template>
  <v-flex xs12>
    <v-text-field
      label="Введіть повідомлення"
      v-model="text"
      @keydown.enter="send()"
      outlined
    ></v-text-field>
  </v-flex>
</template>

<script>
  export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        send() {
          this.$socket.emit('create_message', {
              text: this.text,
              id: this.$store.state.user.id
          }, data => {
              if (typeof data === 'string') {
                  console.error(data);
              } else  {
                  this.text = ''
              }
          })
        }
    }
  }
</script>
