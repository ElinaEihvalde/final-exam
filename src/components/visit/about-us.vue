<template>
    <v-container fluid px-0>
        <v-layout justify-center :class="{'column px-4 ': $vuetify.breakpoint.smAndDown}">
            <v-flex xs12 md8 lg8 >
                <h2 class="text-xs-center display-1 ">Sergejs Klimanskis</h2>
                <p class="text-xs-center body-1 pt-3">I was interested in Astronomy back in high-school, how ever I didn't become an astronomer. I am a chemist.  But as I got older I began research astrophotography and got carried away with Astronomy again and moved from the big city to build my observatory and enjoy my days looking at stars and taking amazing photography. </p>
            </v-flex>
        </v-layout>
        <v-layout justify-center  pt-3 :class="{'column px-4 ': $vuetify.breakpoint.smAndDown}">
            <v-flex  xs12 md10 lg10 class="sergei-pic">
<v-img :src="image"> </v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            image: require('../../assets/Sergei-small.jpg')
        }
    },
}
</script>

<style>
@media only screen and (max-width: 960px) {
  /* Large tablet to laptop */
.display-1 {font-size: 5vw;}
}

</style>
