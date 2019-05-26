<template>
<v-container class="container" fluid grid-list-xl pa-2>
    <v-layout row wrap>
        <v-flex v-for="card in cards" :key="card.id">
            <v-card dark>
                <v-img v-bind:src="card.image" class="white--text" height="300px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end justify-center ">
                        <div class="line-height">
                            <p class="headline">{{card.title}}</p>
                            <p class="subheading">{{card.description}}</p>
                        </div>

                    </v-card-title>

                </v-img>
                

            </v-card>
        </v-flex>
    </v-layout>
</v-container>

<!-- <div>
    <div class="container" v-for="picture in pictures" :key="picture.id">
        <a  :href="picture.link">
      <div class="overlay"></div>
      <div><img :src= "picture.image" width="100%"></div>
      <div class="description">
          <h4>{{picture.title}}</h4>
          <p>{{picture.description}}</p>
      </div>
  </a>
    </div>
</div> -->
</template>

<script>
export default {
    data() {
        return {
            cards: [{
                    id: 1,
                    link: '#',
                    image: require('@/assets/img1.jpg'),
                    title: 'Observatory',
                    description: 'SOMETHING'
                },
                {
                    id: 2,
                    link: '#',
                    image: require('@/assets/img1.jpg'),
                    title: 'Guest house',
                    description: 'SOMETHING'
                },

                {
                    id: 3,
                    link: '#',
                    img: '../assets/observatory.jpg',
                    title: 'Observatory',
                    description: 'SOMETHING'
                }
            ]
        }
    },
}
</script>

<style>
v-container {
    width: 60%;
}
.line-height {line-height: 0.5;}
</style>
