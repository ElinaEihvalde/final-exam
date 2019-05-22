<template>

<v-app>
  <navigation/>
  <v-content>
  
  
  <router-view></router-view>
  </v-content>
  </v-app>
</template>

<script>
import navigation from '@/components/navigation'

export default {
  components: {navigation},

  data () {
    return {
      //
    }
  }
}
</script>

<style>


</style>




