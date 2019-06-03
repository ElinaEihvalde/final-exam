<template>
<v-container fluid grid-list-xxl>
    <v-layout row wrap>
        <v-flex xs5 offset-xs1 v-for="post in posts" :key="post.id">
            <v-card flat  class="card-background">
                <v-img :src="post.coverImg" cover max-height="20vw">
                
                </v-img>
                <v-card-title>
                    <div>
                      
                        <p class="grey--text">{{post.date}}</p>

                        <h4 class="headline">{{post.title}}</h4>

                        <p>{{post.description}}</p>
                         
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn :to="'/blog/' + post.id" class="button-margin" flat color="#ffa000">read more <v-icon right>trending_flat</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    computed: {
    posts() {
        return this.$store.getters.loadedBlogPosts
    }
},

}

</script>

<style scoped>
.flex.offset-xs1:nth-child(even) {
    margin-left: 0;
}
.card-background {background-color: #f7f4f1;}
</style>
