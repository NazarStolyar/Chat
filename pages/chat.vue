<template>
 <div class="c-wrap">
   <div class="c-chat">
     <app-message v-for="m in messages"
              :name="m.name"
              :text="m.text"
              :owner="m.id === user.id"
              :key="m.text"  />
   </div>
   <div class="c-form">
      <chat-form />
   </div>

 </div>
</template>

<script>
    import {mapState} from 'vuex';
    import AppMessage from '@/components/Message.vue'
    import ChatForm from "../components/ChatForm.vue";

    export default {
        middleware: ['chat'],
        computed: mapState(['user','messages']),
        components: {
          AppMessage,ChatForm
        },
        head() {
            return {
                title: `You are in ${this.user.room}`
            }
        }

    }
</script>


<style scoped>
  .c-wrap {
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .c-form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    height: 80px;
    background: #212121;
  }

  .c-chat {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 80px;
    padding: 1rem;
    overflow-y: auto;
  }
</style>
