<template>
<v-container fluid grid-list-xxl>
    <v-layout justify-center>
        
        <v-progress-circular size="56" width="5" color="#ffa000" :indeterminate="true" v-if="loading"></v-progress-circular>
        
    </v-layout>
    <v-layout row wrap v-if="!loading" :class="{'column px-0 justify-center': $vuetify.breakpoint.smAndDown}">
        <v-flex xs6 md5 lg5 :class="{'offset-xs1': $vuetify.breakpoint.mdAndUp}" v-for="post in posts" :key="post.id" >
            <v-card flat  class="card-background">
                <v-img :src="post.coverImg" cover class="img-height">
                
                </v-img>
                <v-card-title class="pb-0" height="100%">
                    <div>
                      
                        <p class="grey--text">{{post.date | date}}</p>

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
    },

    loading() {
        return this.$store.getters.loading
    }
},

}

</script>

<style scoped>
.flex.offset-xs1:nth-child(even) {
    margin-left: 0;
}
.card-background {background-color: #f7f4f1;}

.img-height {max-height: 20vw;}


@media only screen and (max-width: 600px) {
  /* For mobile phones: */
.img-height {max-height: 45vw;}
}

</style>
