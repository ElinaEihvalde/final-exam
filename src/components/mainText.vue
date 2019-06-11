<template>
<v-container fluid pa-0>
    <v-layout align-center justify-center row wrap class="centered-text"  v-for="text in texts" :key="text.id">
        <v-flex xs6>
            <h3 class="display-2">{{text.title}}</h3>
            <p>{{text.content}}</p>
        </v-flex>
        <div v-bind:is="text.comp"></div>
    </v-layout>
</v-container>
</template>

<script>
import imgNav from './imgNav'

import fullImg from './full-width-seperator'

export default {

    data() {
        return {
            texts: [{
                    id: 1,
                    title: 'EXPLORE WITH US',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    comp: imgNav,
                   
                },
                {
                    id: 2,
                    comp: fullImg
                },
                {
                    id: 3,
                    title: 'MORE STUFF',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                },
            ]
        }
    }
}
</script>

<style>
.centered-text {
    text-align: center;
    font-weight: 300;
}

.centered-text h3 {
    color: #E2BA36;
    padding-bottom: 2vw;
}

.centered-text p {
    color: #F4F4F4;
}
</style>
