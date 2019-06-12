<template>

    <v-container fluid px-0>
    <v-container  fluid mt-6>   
    <v-layout justify-center>
        <v-flex xs12 md8 lg8 :class="{'px-4': $vuetify.breakpoint.smAndDown}">
            <h6 class="title  text-xs-center">ABOUT US</h6>
            <h2 class="display-2 text-xs-center accent-text " :class="{'pt-0': $vuetify.breakpoint.smAndDown, 'pt-2': $vuetify.breakpoint.mdAndUp}"> Observatory and Guest house</h2>
            <p class="body-1 text-xs-center" :class="{'pt-1': $vuetify.breakpoint.smAndDown, 'pt-3': $vuetify.breakpoint.mdAndUp}">Find out more about what we can offer you. You can visit the observatory and spend the night in the comfortable guesthouse.</p>
        </v-flex>
    </v-layout>
</v-container>

    <v-layout pa-0 align-center  id="visit-first-section">
        <visitText></visitText>
    </v-layout>
    <v-layout>
        <about/>
    </v-layout>


   
    
<v-layout fluid pa-0>
<v-flex offset-xs1 xs10>
<v-divider color="#909090"></v-divider>
</v-flex>
</v-layout>
<v-layout id="visit-second-section" class="my-6" align-center :class="{'column px-4': $vuetify.breakpoint.smAndDown}">
    <v-flex xs5 :class="{ 'order-xs2': $vuetify.breakpoint.smAndDown,'offset-xs1': $vuetify.breakpoint.mdAndUp}">
<contactForm/>
    </v-flex>
            <v-flex xs4 :class="{ 'offset-xs1': $vuetify.breakpoint.mdAndUp}">
                <h2 class="text-xs-center display-1 ">Send Us a Message</h2>
                <p class="text-xs-center body-1 pt-3">Send us a message to find about the availability of the observatory and guesthouse. We usuallly respond withing 24 hours. We rearely use e-mail for contacting, so it is important you leave your phone number so we can contact you faster.</p>
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

@media only screen and (max-width: 1260px) {
  /* Desktop */

}
</style>
