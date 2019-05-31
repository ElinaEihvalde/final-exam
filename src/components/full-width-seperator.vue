<template>
  <v-container fluid pa-0 class="seperator-background">
    <v-layout align-center justify-center grid-list-xl class="seperator" py-5 data-aos="fade-up" data-aos-duration="1000" px-20>
          <v-flex xs4 v-bind:class="info.class" py-5 v-for="info in infos" :key="info.id">
            <v-flex class="info-img" data-aos="fade-up" data-aos-duration="1500">
            <v-img  v-bind:src="info.pic" class="info-pic mb-4 ml-5 align-center">
            </v-img>
            </v-flex>
            <v-flex>
            <h5 class="display-1">{{info.title}}</h5>
            <div class="line" ></div>
            <p class="body">{{info.content}}</p>
          </v-flex>
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
            infos: [{
                    id: 1,
                    title: 'OBSERVATORY',
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    pic: require('@/assets/telescope.svg'),
                },
                {
                    id: 2,
                    title: 'GUESTHOUSE',
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    pic: require('@/assets/house.svg'),
                    class: 'mx-5',
                },
               {
                    id: 3,
                    title: 'EXPLORATION',
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    pic: require('@/assets/solar-system.svg'),
                },
            ]
        }
    }
};

</script>

<style>
.seperator {
  background-color: #f7f4f1;
  color: #000 !important;
  height: 60vh;
}
.seperator-background {
  background-color: #050505;
}

.info-pic {max-width: 20%;}

.body {font-size: 0.9vw;}


</style>
