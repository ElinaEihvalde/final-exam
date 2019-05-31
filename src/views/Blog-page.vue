<template>

<v-container fluid>
    
    <blogTitle/>
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
    }
    
}
</script>

<style>

</style>
