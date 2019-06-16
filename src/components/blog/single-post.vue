<template>
<v-container fluid mt-6 grid-list-xxl class="bckr" :class="{'px-4': $vuetify.breakpoint.smAndDown}">
     <v-btn absolute left flat small class="custom-btn" @click="$router.go(-1)">
                <v-icon>keyboard_backspace</v-icon>
                Back
            </v-btn>
            <v-spacer></v-spacer>
              <v-btn   @click="removePost" v-if="userIsAuthenticated" absolute right flat small class=" custom-btn">
                <v-icon>delete_forever</v-icon>
                Delete blog post
            </v-btn>
    <v-layout row fixed :class="{'column pt-3': $vuetify.breakpoint.smAndDown}">
     
        <v-flex xs4 :class="{'pt-3': $vuetify.breakpoint.smAndDown, 'offset-xs1': $vuetify.breakpoint.mdAndUp}" >
            <v-img :src="post.coverImg" class="post-img" cover> </v-img>
        </v-flex>

        <v-flex xs6 align-self-start>
            <h1 class="display-2"> {{post.title}}</h1>
            <div class="line-home"></div>
            <p class="grey--text pt-3">{{post.date | date}}</p>
            <v-flex pl-0 class="overflow">
                <span v-html="post.content"> </span>
            </v-flex>
        </v-flex>

    </v-layout>
</v-container>
</template>

<script>
export default {

    props: ['id'],
    computed: {
userIsAuthenticated () {
    return this.$store.getters.user !== null && this.$store.getters.user !== undefined
},
        post() {
            return this.$store.getters.loadedPost(this.id);
        },
    },

     methods: {
        removePost() {
            this.$store.dispatch("removePost")
            
            
            this.$router.push("/blog")

        }
     }

}
</script>

<style>
.overflow {
    overflow: hidden;
    overflow-y: scroll;
    height: 65vh;
}

.post-img {height: 80vh;}

.bckr {background-color:#f7f4f1;}

@media only screen and (max-width: 600px) {
  /* For mobile phones: */
.display-2{ font-size: 6vw!important;}
.body-1{font-size: 3.8!important}
.post-img {height: 40vh;}
.overflow {
    overflow:auto;
    height: auto;
}



}

@media only screen and (max-width: 960px) {
  /* Large tablet to laptop */
  .display-2{ font-size: 6vw!important;}
.body-1{font-size: 3.5vw !important}
.title {font-size: 3.5vw!important;}
}

</style>
