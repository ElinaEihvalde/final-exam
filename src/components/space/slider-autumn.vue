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
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/pia17552_fig2.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw1444a-alt.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/265763main_carina07_hst_big_full.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_friday_062615.jpg'}
        ]
    };
  }
};
</script>

<style>
</style>
