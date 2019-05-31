<template>
<v-container fluid pa-0>
    <v-layout class="home-text" grid-list-xl v-for="text in texts" :key="text.id" align-center>
    <v-flex class="image" xs5 v-bind:class="text.class" data-aos="fade-up" data-aos-duration="1000">
            <v-img v-bind:src="text.pic">
        </v-img>
    </v-flex>
    <v-flex xs6 class="px-20" data-aos="fade-up" data-aos-duration="2500">
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
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    pic: require('@/assets/img1.jpg'),
                    class: 'offset-xs1',
                },
                {
                    id: 2,
                    title: 'EXPLORE WITH US',
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    pic: require('@/assets/img2.jpg'),
                    class: 'order-xs2',
                },
               /*  {
                    id: 3,
                    title: 'EXPLORE WITH US',
                    content: 'Lorem ipsum dolor sit amet, consectetur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    pic: require('@/assets/img1.jpg'),
                }, */
            ]
        }
    }
}


</script>

<style>
.home-text {
    color: #ffffff !important;
    height: 100vh;
    background-color: #050505
}
.home-text:nth-of-type(2) {
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
