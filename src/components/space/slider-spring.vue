<template>
 <v-carousel hide-delimiters>
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
      items: [
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/heic0109a.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/163126main_image_feature_701_ys_full.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw1740a.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/596134main_5755295437_18614bc380_o_full.jpg'}
        ]
    };
  }
};
</script>

<style>
</style>
