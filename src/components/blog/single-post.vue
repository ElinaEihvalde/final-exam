<template>
<v-container fluid mt-6 grid-list-xxl class="bckr">
     <v-btn absolute left flat small class="custom-btn" @click="$router.go(-1)">
                <v-icon>keyboard_backspace</v-icon>
                Back
            </v-btn>
    <v-layout row fixed>
     
        <v-flex xs4 offset-xs1>
            <v-img :src="post.coverImg" height="80vh" cover> </v-img>
        </v-flex>

        <v-flex xs6 align-self-start>
            <h1 class="display-2"> {{post.title}}</h1>
            <div class="line"></div>
            <p class="grey--text pt-3">{{post.date}}</p>
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

        post() {
            return this.$store.getters.loadedPost(this.id);
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

.bckr {background-color:#f7f4f1;}

</style>
