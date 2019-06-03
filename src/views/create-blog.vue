<template>
    <v-container mt-6>
        <v-layout>
            <v-flex xs8>
        <h1>Add new blog post</h1>
        <div class="line"></div>
            </v-flex>
        </v-layout>
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
