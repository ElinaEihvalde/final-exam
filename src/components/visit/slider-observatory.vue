<template>
<!-- <v-container fluid>
    <v-layout >
        <v-flex xs12>
            <v-container fluid grid-list-xl>
              <v-layout row wrap>
                <v-flex  v-bind="{ [`xs${item.flex}`]: true }" v-for="(item,i) in items" :key="i">
                    <v-img  :src="item.src" contain> </v-img>
                </v-flex>
    </v-layout>
    
      
    </v-container>
     </v-flex>
    </v-layout>
</v-container> -->
<v-carousel hide-delimiters hide-controls
 elevation-11>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    flex: 6
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    flex: 6
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    flex: 12
                },

            ]
        };
    }
};
</script>

<style>
</style>
