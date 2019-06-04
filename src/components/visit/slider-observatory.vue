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
                    src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/ob1.jpg?alt=media&token=c9b35654-455a-41ed-af2e-79fec312f04c',
                },
                {
                    src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/ob2.jpg?alt=media&token=172ddc95-df27-40a2-b506-7266e549b73e',
                },
                {
                    src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/ob3.jpg?alt=media&token=d4ddf09b-0399-485b-a8e2-854793405a53',
                },
                {
                    src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/ob4.jpg?alt=media&token=ed743c9a-e1bf-408d-83bb-d2b7ddf18cab',
                },
                {
                    src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/ob5.jpg?alt=media&token=1f5de7cc-fef5-406c-99b1-ace0f1a8bb2d',
                }
            ]
        };
    }
};
</script>

<style>
</style>
