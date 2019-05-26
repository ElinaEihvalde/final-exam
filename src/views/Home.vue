<template>
<v-content  class="bckgr">
    <div class="home">
        
        <div class="banner-txt">
            <h1 class="display-4">Lielzeltinu Observatory</h1>
            <h3>STARGAZING EXPERIENCE </h3>
        </div>

    </div>
   
<section  class="content">
    <v-container  mt-3>
    <mainText ></mainText>
    </v-container>
</section>
</v-content>
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
.bckgr {background-color: #050408;}
.home {
  height: 100vh;
  background-image: url('../assets/observatory.jpg');
  background-size: cover;
  background-position: bottom;
  overflow: hidden;
}

.banner-txt {
    width: 60%;
    z-index: 10;
    position: relative;
    color: #fff;
    text-align: left;
    top: 200px;
    left: 66px;
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

.content{ width: 60%; margin: auto; }

</style>
