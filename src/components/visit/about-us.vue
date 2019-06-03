<template>
    <v-container fluid px-0>
        <v-layout justify-center :class="{'column px-4 ': $vuetify.breakpoint.smAndDown}">
            <v-flex xs12 md8 lg8 >
                <h2 class="text-xs-center display-1 ">Sergejs Klimanskis</h2>
                <p class="text-xs-center body-1 pt-3">I was born and now live in Latvia, but not in Riga, but about 100 km to the west in the Talsi region. The illumination here is small, according to LPM it is 21.3 - 21.8, if according to Bortlyu it is something between 2 and 3. Astronomy got carried away at school, and started studying astrophotography only in 2017, that is, when I was already 57.</p>
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
