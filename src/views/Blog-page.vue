<template>

<v-container fluid>
    
    <blogTitle/>
      <v-btn
  class="md-5 mr-3  elevation-2"
 
  
  flat
  icon
 bottom
  right
  color="#050505"
  fixed
  @click="top"
>
<v-icon>arrow_upward</v-icon>
    </v-btn>
    <blogPosts/>
    
  
</v-container>
    
</template>

<script>
import blogTitle from '../components/blog/blog-title'
import blogPosts from '../components/blog/blog-posts'
export default {
    components: {
        blogTitle,
        blogPosts
    },

    methods:{
      top(){
            window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
})
           }
        }
    
}
</script>

<style>

</style>
