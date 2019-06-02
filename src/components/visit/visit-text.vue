<template>
<v-container fluid pa-0>
    <v-layout class="home-text" grid-list-xl v-for="text in texts" :key="text.id" align-center>
    <v-flex class="image" xs5 v-bind:class="text.class" data-aos="fade-up" data-aos-duration="1000">
        <div v-bind:is="text.comp"></div>
    </v-flex>
    <v-flex xs4 class="offset-xs1"  data-aos="fade-up" data-aos-duration="2500">
            <h3 class="display-2">{{text.title}}</h3>
            <div class="line"></div>
            <p class="body-1">{{text.content}}</p>
    </v-flex > 
    </v-layout>
    
</v-container>
</template>

<script>
import sliderGuesthouse from './slider-guesthouse'
import sliderObservatory from './slider-observatory'

export default {
    components: {
    sliderGuesthouse,
    sliderObservatory
  },
    data() {
        return {
            texts: [{
                    id: 1,
                    title: 'OBSERVATORY',
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    pic: require('@/assets/img1.jpg'),
                    class: 'offset-xs1',
                    comp: sliderObservatory,
                },
                {
                    id: 2,
                    title: 'GUESTHOUSE',
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    pic: require('@/assets/img2.jpg'),
                    class: 'order-xs2 offset-xs1',
                    comp: sliderGuesthouse,
                },

            ]
        }
    }
}


</script>

<style>
.home-text {
    color: #F7F4F1!important;
    height: 92.5vh;
    background-color: #050505;
}

.px-20 {
    padding: 0 10%;
}
.body-1 {
    padding-top: 1.5vw;
}

.line {margin-top: 20px;}
</style>
