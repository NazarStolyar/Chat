<template>
 <div>
   <ul>
      <li v-for="m in messages" :key="m.text">
        {{ m.text }}
      </li>
   </ul>
 </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        middleware: ['chat'],
        computed: mapState(['user','messages']),
        head() {
            return {
                title: `You are in ${this.user.room}`
            }
        }

    }
</script>
