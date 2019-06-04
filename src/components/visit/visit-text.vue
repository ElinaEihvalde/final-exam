<template>
<v-container fluid :class="{'pt-3': $vuetify.breakpoint.smAndDown, 'pt-5': $vuetify.breakpoint.mdAndUp}" px-0 >
    <v-layout :class="{'column px-4 pb-4 justify-center': $vuetify.breakpoint.smAndDown}" class="visit-text" grid-list-xl v-for="text in texts" :key="text.id" :id="text.cigaretes" >
    <v-flex class="slides" xs4 v-bind:class="text.class " offset-lg1 offset-md1 data-aos="fade-up" data-aos-duration="1000" >
        <div v-bind:is="text.comp"></div>
    </v-flex>
    <v-flex xs5  :class="text.text" pt-2 class="offset-xs0 offset-md1 offset-lg1" data-aos="fade-up" data-aos-duration="2500">
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
                    content: '  Lielzeltiņu observatory in, Balgales Parish, was created in in 2011 by Sergej Klimanski , an entrepreneur from Riga, whose astronomy is a hobby since school years. It was built on old barn in middle of nowhere. This is a very appropriate place to build an observatory as it is far from cities with strong lighting but close enough for visitors.<br><br>Promoting astronomy in Latvia is the goal for the observatory therefore we often hosts events and gatherings for astronomers as well as everyone who is interested in learning something new. In the observatory it is possible to look at  the different objects through several telescopes and learn more about space and the Universe. Besides astronomy we also demonstrate and explain physics experiments in a fun way for kids and grownups.<br><br> We also offer events for schools and private parties.<br><strong>Lielzeltiņu observatory is a grate place to start your star tour. <strong><br><h5>Book your tour now!</h5>  ',
                    pic: require('@/assets/img1.jpg'),
                    class: 'order-xs2 order-md2 order-lg2 ' ,
                    comp: sliderObservatory,
                    text: 'order-xs1 order-md-1 order-lg-1'
                },
                {
                    id: 2,
                    cigaretes: 'visit-us-guesthouse',
                    title: 'GUESTHOUSE',
                    content: ' For all astronomy lovers and travelers we have built a small guest house called like the beautiful double star "Albireo".It is a perfect place to rest after a long night of interesting observations and new discoveries or to simply warm up in the cold winter nights after magnificent winter night-sky observation. <br> The guest house consists of 6 double rooms. There are two double rooms with king sized bed and four double rooms with single beds. All the rooms are equipped with restrooms and shower. Additionally it is possible to order breakfast in the morning or prepare own meal in the common kitchen. On the ground floor there is a coffee machine where you can prepare various hot drinks and enjoy them with astronomy magazine.  <h5>Price for two people per night: 35 EUR</h5><h5>Price for one person per night: 25 EUR</h5> <br> To make a reservation call <a class="phone" href="tel:+37122082212">+ 371-22082212</a> or make a reservation below. ',
                    pic: require('@/assets/img2.jpg'),
                    class: '  order-xs2 order-md1 order-lg1',
                    comp: sliderGuesthouse,
                    text: 'order-xs1 order-md2 order-lg2'
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

.phone {text-decoration: none; color:#ffa000!important;}

@media only screen and (max-width: 600px) {
  /* For mobile phones: */
.display-2{ font-size: 6vw!important;}
.accent-text { font-size: 6.5vw!important; line-height: 1.5!important;}
.body-1{font-size: 3.8!important}
.visit-text {height: unset; text-align: center; }
.line {margin: auto;}
.slides{
    height: unset;
}


}

@media only screen and (max-width: 960px) {
  /* Large tablet to laptop */
  .display-2{ font-size: 5vw!important;}
.accent-text { font-size: 7vw!important; line-height: 1.5!important;}
.body-1{font-size: 3.5vw !important}
.title {font-size: 3.5vw!important;}
.visit-text {height: auto; text-align: center; }
.line {margin: auto;}
.slides{
    height: auto;
}
}

@media only screen and (max-width: 1260px) {
  /* Desktop */

}

</style>
