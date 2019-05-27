<template>
<v-container class="container" fluid  grid-list-xl pa-2>
    <v-layout  row >
        <v-flex xs7 v-for="card in cards" :key="card.id">
            <v-card dark>
                <v-img v-bind:src="card.image" class="white--text" height="300px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end justify-center ">
                        <div class="line-height">
                            <p class="title">{{card.title}}</p>
                            <p class="subheading">{{card.description}}</p>
                        </div>

                    </v-card-title>

                </v-img>
                

            </v-card>
        </v-flex>
    </v-layout>
</v-container>


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
                    image: require('@/assets/img1.jpg'),
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
</style>
