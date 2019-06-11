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
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/430453main_crabmosaic_hst_big_full.jpg'},
          {src: 'http://www.nasa.gov/sites/default/files/thumbnails/image/hubble_friday_08052016.jpg'},
          {src: 'http://www.nasa.gov/sites/default/files/thumbnails/image/hubble_friday_04282016.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/pia17255.jpg'}
        ]
    };
  }
};
</script>

<style>
</style>
