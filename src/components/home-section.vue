<template>
  <v-container fluid pa-0 class="seperator-background" grid-list-xxl>
    <v-layout row align-center justify-center class="seperator"  my-0>
      <v-flex xs10>
        <v-layout  class="mb-4" data-aos="fade-up" data-aos-duration="2000">             
          <v-flex xs6 offset-xs3  justify-center >
            <h2 class="display-2 text-xs-center accent-text mb-4">Articles and Program</h2>
            <p class="body text-xs-center">Learn and explore with Lielzeltinu observatory. We offer you variety of information for astronomers and those who are only interested in astronomy.<br>Read about astronomy related news, travels, observations succesess and of course enjoy the latest sky photography taken right here in Lielzeltiņi. </p>
        </v-flex>
        </v-layout>
        <v-divider dark></v-divider>
        <v-layout justify-center row data-aos="fade-up" data-aos-duration="1500">
          <v-flex  -center xs4 v-bind:class="info.class" py-5 v-for="info in infos" :key="info.id"  class="info-img" mt-5>
            <v-img  v-bind:src="info.pic" class="info-pic mb-4 ml-4 center">
            </v-img>
            <h2 >  <!-- class="display-1" -->{{info.title}}</h2>
            <div class="line" ></div>
            <p class="body pt-2 ">{{info.content}}</p>
             <v-btn v-bind:class="info.button" :to="info.link" flat color="#ffa000" class="button-margin">take me<v-icon right>trending_flat</v-icon></v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
        </v-layout>
  </v-container>
</template>


<script>
/* import quote from './quote'  */
export default {
  components: {
    /* quote */
  },
   data() {
        return {
          props: ['id'],
            infos: [{
                    id: 1,
                    title: 'OBSERVATORY',
                    content: 'Have you ever experienced a romantic weekend full of stargazing? Learn about space and expand your horizon together with us.',
                    pic: require('@/assets/telescope.svg'),
                    link: '/visit-us',
                },
                {
                    id: 2,
                    title: 'GUESTHOUSE',
                    content: 'The nearby guesthouse welcomes all the guests to spend the night, prices and seasonal offers for an unforgettable stay!',
                    pic: require('@/assets/house.svg'),
                    link: '/visit-us',
                },
               {
                    id: 3,
                    title: 'EXPLORATION',
                    content: 'Not sure what you can observe during the time of your visit? Find out about the seasons and space objects that you can see now.',
                    pic: require('@/assets/solar-system.svg'),
                    link: '/space',
                },
            ]
        }
    }
};

</script>

<style>
.seperator {
  background-color: #050505;
  color: #fff !important;
  height: 101vh;
}
.seperator-background {background-color: #050505;}

.info-pic {max-width: 20%;}

.body {font-size: 0.9vw;}
.info-pic {
     -webkit-filter: invert(1);
   filter: invert(1);
       -webkit-filter:invert(80%);
     filter:progid:DXImageTransform.Microsoft.BasicImage(invert='1');
}
.button-margin {margin: 0!important; padding: 0!important;  position: relative;}
.button-margin::before {
    width: unset !important;
}

.center { margin: auto}

.button-margin::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #ffa000
      
    ;
    transform-origin: bottom right;
    transition: transform 0.4s ease-in;
} 
.button-margin:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}  

.bilde {width: 100%; height: 250px; background-image: url('../assets/home-small.jpg') ; }

.accent-text {
    color: #FFA000;
}
</style>
