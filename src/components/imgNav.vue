<template>
<v-container class="container" fluid grid-list-xl pa-2>
     <v-layout align-center justify-center row wrap>
        <v-flex xs2 v-for="card in cards" :key="card.id" class="card-hover">
            <v-card dark>
                <v-img v-bind:src="card.image" class="white--text" height="45vh" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end justify-center  ">
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

.line-height {line-height: 0.5;}
/*     .card-hover {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .card-hover:hover {
    transform: scale(.8); 
    transition-duration: .5s;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .white--text:hover {
    transform: scale(1.3); 
    transition-duration: .5s;
    
    }
 */
</style>
