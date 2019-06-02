<template> 

<v-container fluid grid-list-xxl>
   <blogTitle/>
    <v-layout row wrap>
        <v-flex xs5 offset-xs1 v-for="post in posts" :key="post.id">
            <v-card flat >
                <v-img :src="post.coverImg" contain>
                
                </v-img>
                <v-card-title>
                    <div>
                      
                        <p class="grey--text">{{post.date}}</p>

                        <h4 class="headline">{{post.title}}</h4>

                        <p>{{post.description}}</p>
                          <v-chip disabled small  text-color="#131723">Reading</v-chip>
                        <v-chip disabled small  text-color="#131723">Photos</v-chip>
                        <v-chip disabled small  text-color="#131723">Label</v-chip>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn :to="'/blog/' + post.id" flat color="#ffa000">read more <v-icon right>trending_flat</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
     
</template>

<script>
import blogTitle from './blog/blog-title'
export default {
    components:{
        blogTitle
    },
    computed: {
    posts() {
        return this.$store.getters.latestPosts
    }
},

}

</script>

<style scoped>
.flex.offset-xs1:nth-child(even) {
    margin-left: 0;
}

</style>
