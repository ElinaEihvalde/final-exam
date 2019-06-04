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
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/horsehead.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/110699main_image_feature_285_ajhfull.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/670968main_PIA15635_full.jpg'},
          {src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/284895main_witchhead_nebula_full.jpg'}
        ]
    };
  }
};
</script>

<style>
</style>
