<template>
<v-container fluid :class="{'pt-3': $vuetify.breakpoint.smAndDown, 'pt-5': $vuetify.breakpoint.mdAndUp}" px-0 class="bckgr">
    <v-layout class="space-text" :class="{'column px-4 pb-4 justify-center': $vuetify.breakpoint.smAndDown}"  grid-list-xl v-for="text in texts" :key="text.id" :id="text.cigaretes">
        <v-flex class="slides" xs4 v-bind:class="text.class" offset-lg1 offset-md1 data-aos="fade-up" data-aos-duration="1000">
            <div v-bind:is="text.comp"></div>
        </v-flex>
        <v-flex xs5  :class="text.text" pt-2 class="offset-xs0 offset-md1 offset-lg1" data-aos="fade-up" data-aos-duration="2500">
            <h3 class="display-2">{{text.title}}</h3>
            <div class="line"></div>
            <p v-html="text.content" class="body-1"></p>
        </v-flex>
    </v-layout>

</v-container>
</template>

<script>
import sliderWinter from './slider-winter'
import sliderSpring from './slider-spring'
import sliderSummer from './slider-summer'
import sliderAutumn from './slider-autumn'

export default {
    components: {
        sliderWinter,
        sliderSpring,
        sliderSummer,
        sliderAutumn,
    },
    data() {
        return {
            texts: [{
                    id: 1,
                    title: 'Winter',
                    content: "The most popular objects that can be observed in the crisp winter sky is the Crab Nebula, Algeiba, which is also known as the Lion's mane. The next one is Almach, a beautiful double star. Messier 35, a superb star cluster that appears as big as the moon. Sirius, the winter sparkler, also reffered to as a Dog Star, a star that appears a brilliant white with a tinge of blue. The Double Cluster of Perseus, a zig-zag row of five stars. The Hyades are among the nearest of star clusters." ,
                    pic: require('@/assets/img1.jpg'),
                   class: 'order-xs2 order-md2 order-lg2 ', 
                    comp: sliderWinter,
                    text: 'order-xs1 order-md-1 order-lg-1'
                },
                {
                    id: 2,
                    title: 'Spring',
                    content: "Spring is one of the best seasons for skywatchers, if you are interested in what is possible to observe, here are some of the objects. Beehive cluster is visible with a naked eye, it is even more impressive with the telescope. Ursa Mayor is a beautiful galaxy that's interesting object of observation for experienced astronomers as well as beginners. There are also a lot of meteor showers that you can observe during this time of the year that is simply astonishing.",
                    pic: require('@/assets/img2.jpg'),
                     class: '  order-xs2 order-md1 order-lg1',
                    comp: sliderSpring,
                    text: 'order-xs1 order-md2 order-lg2'
                },
                {
                    id: 3,
                    title: 'Summer',
                    content: "Summer is not the best time for skywatching but regardless, there are some objects worth seeing, such as the little constellation of Lyra consists of six faint stars that form a parallelogram. Draco the Dragon  is a very ancient star grouping and the brightest star there is a Eltanin that shines with an orange tinge. The Wild Ducks are several clouds of stars surroundedby a few dark regions for contrast can be seen with binoculars in the brightarea of the Milky Way about halfway between the star Altair and theconstellation of Sagittarius",
                    pic: require('@/assets/img1.jpg'),
                   class: 'order-xs2 order-md2 order-lg2 ' ,
                    comp: sliderSummer,
                    text: 'order-xs1 order-md-1 order-lg-1'
                },
                {
                    id: 4,
                    title: 'Autumn',
                    content: "This time of the year is rich with objects worth observing because the evenings are dark and sky's are clear. Andromeda galaxy is just one of the several deep-sky objects visible in this time of the year, so is the Triangulum Galaxy, both of these objects are visible with a naked eye and are even more interesting with a telescope. One ofe the most impressive objects is M22 that contains at least 75 000 stars. Globular cluster M13 is a deep-sky object that can be seen using binoculars and is definitely worth checking out.",
                    pic: require('@/assets/img2.jpg'),
                     class: '  order-xs2 order-md1 order-lg1',
                    comp: sliderAutumn,
                    text: 'order-xs1 order-md2 order-lg2'
                }

            ]
        }
    }
}
</script>

<style>
.space-text {

    height: 100vh;

}

.slides {
    height: 80vh;
}

@media only screen and (max-width: 600px) {
  /* For mobile phones: */
.display-2{ font-size: 6vw!important;}
.accent-text { font-size: 6.5vw!important; line-height: 1.5!important;}
.body-1{font-size: 3.8!important}
.space-text {height: unset; text-align: center; }
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
.space-text {height: auto; text-align: center; }
.line {margin: auto;}
.slides{
    height: auto;
}
}

@media only screen and (max-width: 1260px) {
  /* Desktop */

}
</style>
