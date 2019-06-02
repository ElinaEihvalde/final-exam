<template>
<v-container fluid pa-0 class="bckgr">
    <div align-center class="home">
        <v-flex lg6 pl-5 class="banner-txt text-xs-left">
            <h1 class="display-4">Your Gateway To The Universe</h1>
            <div class="line"> </div>
            <h3>STARGAZING EXPERIENCE WITH LIELZELTINU OBSERVATORY WILL BRING YOU Closer to stars</h3>
            <v-btn class="custom-btn" ripple flat right pa-0 dark @click="$vuetify.goTo('#first-section', { offset: -10,  easing: 'easeInOutCubic', duration:1000})"> start your journey <v-icon right>trending_flat</v-icon>
            </v-btn>
        </v-flex>
    </div>
    <!--  <mainText></mainText>  -->
      
    <v-layout pa-0 align-center pt-0 id="first-section">
        
        <homeText></homeText>
    </v-layout>
    <div id="second-section">
<fullWidthSeperator/>
<v-flex>
    <homeBlog/>
   </v-flex> 

   </div>
</v-container>
</template>

<script>
/* import mainText from '../components/mainText'   */
import homeText from '../components/home-text'
import fullWidthSeperator from '../components/full-width-seperator'
import homeBlog from '../components/home-blog'


export default {
    components: {
    /*    mainText, */
       homeText,
       fullWidthSeperator,
        homeBlog
    },

}

</script>

<style>


.home {
    background-image: url('../assets/observatory.jpg') ; 
}

#first-section, .bckgr {
    background-color: #050505;
}
#second-section {background-color: #f7f4f1;}
.home {
    height: 100vh;
    background-size: cover;
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
    width: 30%;
     border-bottom: 2.5px solid #ffa000;
   /*  border-bottom: 2.5px solid rgb(218, 152, 12); */

}
</style>
