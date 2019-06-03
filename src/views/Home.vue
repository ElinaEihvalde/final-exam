<template>
<v-container fluid pa-0 class="bckgr">
    <div align-center class="home">
        <v-flex lg6 pl-5 class="banner-txt text-xs-left">
            <h1 class="display-4">Your Gateway To The Universe</h1>
            <div class="line"> </div>
            <h3>STARGAZING EXPERIENCE WITH LIELZELTINU OBSERVATORY WILL BRING YOU Closer to stars</h3>
            <v-btn class="custom-btn btn-size mt-3" ripple flat right  dark @click="$vuetify.goTo('#first-section', { offset: -10,  easing: 'easeInOutCubic', duration:1000})"> start your journey <v-icon right>trending_flat</v-icon>
            </v-btn>
        </v-flex>
    </div>
    
    <!--  <mainText></mainText>  -->
      <v-layout pa-0 align-center pt-0  id="first-section">
          <home-text/>
          </v-layout>

    <v-layout pa-0 align-center pt-0 >
<homeSection/>
    </v-layout>

</v-container>
</template>

<script>
/* import mainText from '../components/mainText'   */
import homeText from '../components/home-text'
import homeSection from '../components/home-section'



export default {
    components: {
    /*    mainText, */
       homeText,
       homeSection
    },

}

</script>

<style>




#first-section, .bckgr {
    background-color: #050505;
}
#second-section {background-color: #f7f4f1;}
.home {
    height: 100vh;
    background-size: cover;
    background-position: bottom right;
    overflow: hidden;
    background-image: url('../assets/observatory.jpg') ; 
}


.banner-txt {
    background: rgba(0, 0, 0, 0);
    position: absolute;
    top: 30vh;
    right: 0;
    bottom: 0;
    left: 2%;
    color: #fff;
    animation-name: fadeIn;
    animation-duration: 3s;

}

@keyframes fadeIn {
    0% {
        opacity: 0;

    }

    100% {
        opacity: 1;
    }
}

.banner-txt h1 {
    font-size: 5vw;
    line-height: 1.3;
    padding-bottom: 1vw;
}

.banner-txt h3 {
    padding-top: 20px;
    padding-right: 20%;
    font-size: 1.3vw;
    font-weight: 400;
    color: #f4f4f4;
}

.line {
    margin-top:unset;
    width: 30%;
     border-bottom: 2.5px solid #ffa000;
   /*  border-bottom: 2.5px solid rgb(218, 152, 12); */

}

.btn-size {
    font-size: 1.3vw!important;
}
</style>
