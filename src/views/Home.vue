<template>
<v-content>
  <div class="home">
    <div class="banner-txt">
      <h1>Liezeltini Observatory</h1>
      
      <h3>STARGAZING EXPERIENCE</h3>
    </div>

    
  </div>
 
</v-content>
</template>

<script>
  

  export default {
    
  }
</script>

 <style scoped>


.home {height: 100vh;  background-image: url('../assets/home-backgr.jpg'); background-size: 100%;}
.banner-txt {position: relative; color: #fff; text-align: center; top: 250px; animation-name: fadeIn; animation-duration: 3s; }

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.banner-txt h1 {font-size: 5vw; line-height: 1.3;  }



.banner-txt h3 {font-size: 1.5em; font-weight: 300; color: #E2BA36;}



.line {width: 100%; margin-top: 20px; border-bottom: 3px solid #fff;z-index: 11;}
.observatory {position: fixed; width: 90%; height: 100%; z-index: 10; right: 0; bottom: 0; top: 50px; opacity: 0.8;}
.body { background-color: #030309; height: 500px;}
</style>
