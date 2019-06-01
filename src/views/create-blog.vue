<template>
    <v-container mt-6>
        <h1>Add new blog post</h1>
        <div class="line"></div>
        <editor/>
    </v-container>
</template>

<script>
import editor from '../components/blog/rich-text-editor'

export default {
    components: {
        editor
 
    }
    
}
</script>
