<template>
<v-content class="bckgr">
    <div class="home">
        
        <div class="banner-txt">
            <h1>SEE THE WORLD
FROM ABOVE</h1>

            <h3>STARGAZING EXPERIENCE </h3>
        </div>

    </div>
<section class="content">
    <mainText ></mainText>
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
    z-index: 10;
    position: relative;
    color: #fff;
    text-align: center;
    top: 250px;
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
    font-size: 1.5em;
    font-weight: 300;
    color: #E2BA36;
}

.line {
    width: 100%;
    margin-top: 20px;
    border-bottom: 3px solid #fff;
    z-index: 11;
}

.observatory {
    position: fixed;
    width: 90%;
    height: 100%;
    z-index: 10;
    right: 0;
    bottom: 0;
    top: 50px;
    opacity: 0.8;
}

template {
    background-color: #1f1f66;
  
}
</style>
