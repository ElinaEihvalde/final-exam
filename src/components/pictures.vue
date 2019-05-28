<template>
   <v-container fluid >
       <v-layout  v-for="image in images" :key="image.id">
          <v-card >
               <v-img :src="image.img"> </v-img>
          </v-card >
               
         
       </v-layout>
   </v-container>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    id:1,
                    img: require('@/assets/img1.jpg'),
                },
            ]
        }
    },
}
</script>
