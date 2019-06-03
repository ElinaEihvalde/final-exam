<template>

    <v-container fluid px-0>
    <v-container  fluid mt-6>   
    <v-layout justify-center>
        <v-flex xs8>
            <h6 class="title  text-xs-center">LEARN ABOUT US</h6>
            <h2 class="display-2 text-xs-center accent-text pt-2"> Observatory and Guest house</h2>
            <p class="pt-3 body-1 text-xs-center">Learn and expolre with Lielzeltinu observatory. Read about astronomy related news, travels, observations succesess and ofcourse enjoy the latest sky photography taken right here in Lielzeltiņi. </p>
        </v-flex>
    </v-layout>
</v-container>

    <v-layout pa-0 align-center  id="visit-first-section">
     
        <visitText></visitText>
        
    </v-layout>
    <v-layout>
       <!--  <v-divider></v-divider> -->
    </v-layout>
    <v-layout>
        
        <about />
    </v-layout>

<v-layout id="visit-second-section" align-center>
    <v-flex xs10 >
<contactForm/>
    </v-flex>
</v-layout>
</v-container>
</template>

<script>
import about from '../components/visit/about-us' 

import visitText from '../components/visit/visit-text'
import contactForm from '../components/visit/contact-form'
export default {
    components: {
        about,
    visitText,
    contactForm,
    }
}
</script>

<style>
#visit-second-section {
    background-color: #f7f4f1;
    height: 80vh;
  }
  .accent-text {
    color: #FFA000;
}
</style>
