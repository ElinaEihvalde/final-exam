<template>
<v-container fluid pa-5>
    <v-layout justify-end pt-5 class="home-text" grid-list-xl v-for="text in texts" :key="text.id">
        <v-flex lg7>
            <h3 class="display-2">{{text.title}}</h3>
            <div class="line"></div>
            <p class="body-1 ">{{text.content}}</p>
        </v-flex > 

        <v-flex v-bind:is="text.comp">
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import pictures from './pictures'

export default {

    data() {
        return {
            texts: [{
                    id: 1,
                    title: 'EXPLORE WITH US',
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    comp: pictures
                },
                {
                    id: 2,

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
.home-text {
    color: #111111;
    
}

.body-1 {
    padding-top: 1.5vw;
}
</style>
