<template>
<v-container fluid grid-list-xxl>
    <v-layout row wrap class="blog-feed">
        <v-flex xs5 offset-xs1 v-for="post in posts" :key="post.id">
            <v-card flat>
                <v-img :src="post.image" max-height="20vw">
                    <v-container fill-height fluid>

                    </v-container>
                </v-img>
                <v-card-title>
                    <div>
                      
                        <p class="grey--text">{{post.date}}</p>

                        <h4 class="headline">{{post.title}}</h4>

                        <p>{{post.description}}</p>
                          <v-chip type="array" disabled small  text-color="#131723">{{post.chips}}</v-chip>
                        <v-chip disabled small  text-color="#131723">Photos</v-chip>
                        <v-chip disabled small  text-color="#131723">Label</v-chip>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="#ffa000">read more <v-icon right>trending_flat</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            posts: [{
                    id: 1,
                    image: 'https://regmedia.co.uk/2017/01/10/moon.jpg?x=442&y=293&crop=1',
                    date: '23.05.2019',
                    title: 'Moon observation',
                    description: 'Our observatory has like telescope and stuff. We also have a comfy guesthouse where you can chill after watching stars lol. Our program consists of stuff.',
                    chips: ['astronomy', 'moon','photos']

                },
                {
                    id: 2,
                    image: 'https://img.webme.com/pic/s/sergei-astro/M82_Autosaveg56_PS_best_color_plane_vivid_res_50pct.jpg',
                    date: '23.05.2019',
                    title: 'Moon observation',
                    description: 'Our observatory has like telescope and stuff. We also have a comfy guesthouse where you can chill after watching stars lol. Our program consists of stuff.'
                },
                {
                    id: 3,
                    image: 'https://img.webme.com/pic/s/sergei-astro/NGC6992_Autosaveg50_NR_mask_fin_vivid_res_60pct.jpg',
                    date: '23.05.2019',
                    title: 'Moon observation',
                    description: 'Our observatory has like telescope and stuff. We also have a comfy guesthouse where you can chill after watching stars lol. Our program consists of stuff.'
                }
            ]
        }
    },
}
</script>

<style>
.flex.offset-xs1:nth-child(even) {
    margin-left: 0;
}
</style>
