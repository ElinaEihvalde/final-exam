<template>
<v-container fluid :class="{'pt-3': $vuetify.breakpoint.smAndDown, 'pt-5': $vuetify.breakpoint.mdAndUp}" px-0>
    
    <v-layout class="home-text"  :class="{' px-4 justify-center': $vuetify.breakpoint.smAndDown}"  grid-list-xl v-for="text in texts" :key="text.id" align-center pa-0>
    <v-flex class="image"  xs10 md6 lg4 offset-md1 offset-lg1 offset-xs0 v-bind:class="text.class" data-aos="fade-up" data-aos-duration="1000">
            <v-img  v-bind:src="text.pic">
        </v-img>
    </v-flex>
    <v-flex xs5 :class="text.text" class="offset-xs0 offset-md1 offset-lg1" data-aos="fade-up" data-aos-duration="2500">
            <h3 class="display-2">{{text.title}}</h3>
            <div class="line"></div>
            <p class="body-1">{{text.content}}</p>
    </v-flex > 
    </v-layout>
    
</v-container>
</template>

<script>


export default {
    


    data() {
        return {
            texts: [{
                    id: 1,
                    title: 'EXPLORE WITH US',
                    content: 'Lielzeltini Observatory is one of the most remarkable places to visit in Latvia. A small astronomical observatory which is close to the capital of Latvia and yet offers infinite views in the night sky, you have never imagined!',
                    pic: require('@/assets/img1.jpg'),
                    class: 'order-xs2 order-md2 order-lg2',
                    text: 'order-xs1 order-md-1 order-lg-1'
                },
                {
                    id: 2,
                    title: 'LEARN ABOUT SPACE',
                    content: 'We often post articles and pictures about our awesome observations... You can learn new and interesting things about space that you have never thought possible, not only it is educational but it also gives you possibility to explore on your own!',
                    pic: require('@/assets/img2.jpg'),
                    class: '  order-xs2 order-md1 order-lg1',
                    text: 'order-xs1 order-md2 order-lg2'
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


@media only screen and (max-width: 960px) {
  /* Large tablet to laptop */
  .display-2{ font-size: 5vw!important;}
.accent-text { font-size: 7vw!important; line-height: 1.5!important;}
.body-1{font-size: 3.5vw !important}
.title {font-size: 3.5vw!important;}
.visit-text {height: auto; text-align: center; }
.home-text{height: auto;}
.slides{
    height: auto;
}
}

@media only screen and (max-width: 600px) {
  /* For mobile phones: */
.display-2{ font-size: 6vw!important;}
.accent-text { font-size: 6.5vw!important; line-height: 1.5!important;}
.body-1{font-size: 3.8!important}
.visit-text {height: unset; text-align: center; }

.slides{
    height: unset;
}


}

</style>
