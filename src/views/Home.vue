<template>
<v-container fluid pa-0 class="bckgr">
    <div align-center class="home">

        <!-- <span class="vidCont">
            <video autoplay muted loop id="myVideo" >
  <source src="../assets/Space.mp4" type="video/mp4">
</video>
 </span> -->
        <v-flex class="banner-txt text-xs-center">
            <h1 class="display-4">Lielzeltinu Observatory</h1>
            <h3>STARGAZING EXPERIENCE </h3>
        </v-flex>

        <v-layout  fill-height absolute  justify-center align-end >
        <v-btn absolute  dark flat @click="$vuetify.goTo('#first-section', { offset: 0,  easing: 'easeInOutCubic', duration:800})">
            <v-icon light> arrow_upward</v-icon> 
        </v-btn>
        
        </v-layout>
      
    </div>
  
    
        <v-layout align-center mt-5  id="first-section">
            <mainText></mainText>
        </v-layout>
   
</v-container>
</template>

<script>
import mainText from '../components/mainText'

export default {
    components: {
        mainText
    },

}
</script>

<style scoped>
.bckgr {
    background-color: #050408;
}

.home {
    height: 100vh;
     background-image: url('../assets/observatory.jpg');
    background-size: cover;
    background-position: bottom;
    overflow: hidden;

}
p {color: white}
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
    top: 250px;
    right: 0;
    bottom: 0;
    left: 0;
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
    font-size: 1.8em;
    font-weight: 300;
    color: #E2BA36;
}

.line {
    width: 100%;
    margin-top: 20px;
    border-bottom: 3px solid #fff;
    z-index: 11;
}


</style>
