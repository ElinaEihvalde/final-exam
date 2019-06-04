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
          {src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/gh1.jpg?alt=media&token=52d3f679-1215-4b01-873e-98f0f89bed4a'},
          {src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/gh2.jpg?alt=media&token=9dec085f-9973-44c0-98f4-b4b615d4cc82'},
          {src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/gh3.jpg?alt=media&token=265dea73-9e44-426d-b7a4-2455730d5d1e'},
          {src: 'https://firebasestorage.googleapis.com/v0/b/lielzeltini-80359.appspot.com/o/gh4.jpg?alt=media&token=dcf999e9-8398-41c2-86f3-8d7c3fb7765a'}
        ]
    };
  }
};
</script>

<style>
</style>
