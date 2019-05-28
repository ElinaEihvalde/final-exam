<template>
<v-container fluid pa-0 class="bckgr">
    <div align-center class="home">

        <!-- <span class="vidCont">
            <video autoplay muted loop id="myVideo" >
  <source src="../assets/Space.mp4" type="video/mp4">
</video>
 </span> -->
        <v-flex lg6 pl-5 class="banner-txt text-xs-left">
            <h1 class="display-4">Your Gateway To The Universe</h1>
            <div class="line"> </div>
            <h3>STARGAZING EXPERIENCE WITH LIELZELTINU OBSERVATORY WILL BRING YOU TO MOON AND BACK</h3>
            <v-btn class="custom-btn" ripple flat right pa-0 dark @click="$vuetify.goTo('#first-section', { offset: -10,  easing: 'easeInOutCubic', duration:1000})"> start your journey <v-icon right>trending_flat</v-icon>
            </v-btn>
        </v-flex>

        <!--   <v-layout  fill-height absolute  justify-center align-end >
        <v-btn absolute  dark flat @click="$vuetify.goTo('#first-section', { offset: 0,  easing: 'easeInOutCubic', duration:800})">
            <v-icon light> arrow_downward</v-icon> 
        </v-btn>

        </v-layout> -->

    </div>

    <v-layout dar align-center mt-5 id="first-section">
        <!-- <mainText></mainText> -->
        <homeText></homeText>
    </v-layout>

</v-container>
</template>

<script>
/* import mainText from '../components/mainText' */
import homeText from '../components/home-text'

export default {
    components: {
        /*  mainText */
        homeText

    },

}
</script>

<style>
* {
    color: #000 !important;
}

.bckgr {
    background-color: #dbdbdb;
} 
.home {
    background-image: url('../assets/home-backgr7.png') ; 
}

#first-section {
    background-color: #f4f4f4;
    background-image: url('../assets/section1.png');
   
}

.home {
    height: 100vh;

    transform: scale(1.05);
    background-size: contain;
    background-position: bottom right;

    overflow: hidden;

}

.vidCont {
    position: relative;
}

#myVideo {
    opacity: 0.3;
    height: fit-content;
    vertical-align: middle;
    width: 100%;
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
    padding-bottom: 2vw;
}

.banner-txt h3 {
    padding-top: 20px;
    padding-right: 20%;
    font-size: 1.3vw;
    font-weight: 400;
    color: #f4f4f4;
}

.line {
    width: 30%;
     border-bottom: 2.5px solid rgb(122, 28, 15);
   /*  border-bottom: 2.5px solid rgb(218, 152, 12); */

}
</style>
