<template>
<v-container fluid pt-6 px-0>
    <v-layout class="visit-text" grid-list-xl v-for="text in texts" :key="text.id" :id="text.cigaretes" >
    <v-flex class="slides" xs4 v-bind:class="text.class" data-aos="fade-up" data-aos-duration="1000" >
        <div v-bind:is="text.comp"></div>
    </v-flex>
    <v-flex xs5 justify-start class="offset-xs1"  data-aos="fade-up" data-aos-duration="2500">
            <h3 class="display-2">{{text.title}}</h3>
            <div class="line"></div>
            <p v-html="text.content" class="body-1"></p>
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
                    cigaretes: 'observatory',
                    title: 'OBSERVATORY',
                    content: '  Especially for lovers of astronomy</strong> and just travelers near our  house and observatory, we built a small guest house (with the name "Albireo") for 6 double rooms. We did this so that after the observations (and in the winter, when it is cold - and in the process), the guests could rest and warm up. Two of the 6 rooms have one large double bed, three have one bunk bed, and one has two separate single beds. Five of the six rooms are equipped with a toilet with a shower, one room (where is a bunk bed) - a toilet with a bath. The rooms with a bunk bed have the opportunity to accommodate a cot, then the room can accommodate three people. It is possible to order breakfast in the morning. In addition, on the ground floor there is a kitchen and a coffee machine, where guests can prepare their own food. The guest house has a parking lot. The price of a double room for two is 35, for one - 25 Euro per day. Additional folding bed - 10 euros. To book a room, call + 371-22082212. ',
                    pic: require('@/assets/img1.jpg'),
                    class: 'order-xs2 offset-xs1' ,
                    comp: sliderObservatory,
                },
                {
                    id: 2,
                    cigaretes: 'visit-us-guesthouse',
                    title: 'GUESTHOUSE',
                    content: '  Especially for lovers of astronomy</strong> and just travelers near our  house and observatory, we built a small guest house (with the name "Albireo") for 6 double rooms. We did this so that after the observations (and in the winter, when it is cold - and in the process), the guests could rest and warm up. Two of the 6 rooms have one large double bed, three have one bunk bed, and one has two separate single beds. Five of the six rooms are equipped with a toilet with a shower, one room (where is a bunk bed) - a toilet with a bath. The rooms with a bunk bed have the opportunity to accommodate a cot, then the room can accommodate three people. It is possible to order breakfast in the morning. In addition, on the ground floor there is a kitchen and a coffee machine, where guests can prepare their own food. The guest house has a parking lot. The price of a double room for two is 35, for one - 25 Euro per day. Additional folding bed - 10 euros. To book a room, call + 371-22082212. ',
                    pic: require('@/assets/img2.jpg'),
                    class: ' offset-xs1',
                    comp: sliderGuesthouse,
                },

            ]
        }
    }
}


</script>

<style>
.visit-text {
    color: #050505!important;
    height: 100vh;
    background-color: #F7F4F1;
}

.slides{
    height: 80vh;
}



</style>
