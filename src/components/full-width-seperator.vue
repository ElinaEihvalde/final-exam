<template>
    <v-container fluid px-0> 
        <v-img  height="350" :src="require('@/assets/home-backgr.jpg')">
        <quote></quote>
         </v-img>
    </v-container>
</template>

<script>
import quote from './quote' 
export default {
    components: {
        quote
    }
}
</script>
