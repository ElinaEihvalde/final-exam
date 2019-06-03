<template>
<v-container fluid mt-6 px-0 >
    <v-layout justify-center>
        <v-flex xs12 md8 lg8 :class="{'px-4': $vuetify.breakpoint.smAndDown}">
            <h6 class="title text-xs-center ">EXPLORE</h6>
            <h2 class="display-2 accent-text text-xs-center"  :class="{'pt-0': $vuetify.breakpoint.smAndDown, 'pt-2': $vuetify.breakpoint.mdAndUp}"> Articles and Photography</h2>
            <p class="body-1 text-xs-center" :class="{'pt-1': $vuetify.breakpoint.smAndDown, 'pt-3': $vuetify.breakpoint.mdAndUp}">Learn and expolre with Lielzeltinu observatory. Read about astronomy related news, travels, observations succesess and ofcourse enjoy the latest sky photography taken right here in Lielzeltiņi. </p>
        </v-flex>
    </v-layout>
</v-container>
</template>

<style>
.text-align {
    text-align: center;
}

.accent-text {
    color: #FFA000;
}

@media only screen and (max-width: 600px) {
  /* For mobile phones: */

.accent-text { font-size: 6.5vw!important; line-height: 1.5!important;}
.body-1{font-size: 3.8vw!important}


}

@media only screen and (max-width: 960px) {
  /* Large tablet to laptop */
.accent-text { font-size: 7vw!important; line-height: 1.5!important;}
.body-1{font-size: 3.8vw!important}
.title {font-size: 3.5vw!important;}
}

</style>
