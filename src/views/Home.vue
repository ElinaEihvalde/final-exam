<template>
<v-content>
  <div class="home">
    <div class="banner-txt">
      <h1><span class="color">Lorem ipsum </span> dolor sit amet consectetur adipisicing elit. Dolore, rem!</h1>
      <div class="line"></div>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet quas placeat eligendi mollitia!</h5>
    </div>
    <img class="observatory" src="../assets/obesrvatorija.png" 
    >
    
  </div>
  <div class="body">
  </div>
</v-content>
</template>

<script>
  

  export default {
    
  }
</script>

<style <style scoped>


.home {height: 100vh; z-index: -99; background-image: url('../assets/home-backgr2.png');}
.banner-txt {position: relative;z-index: 12; color: #fff; width: 45%; top: 150px; left:64px; }
.banner-txt h1 {font-size: 3.5em; line-height: 1.3;}
.banner-txt h5 {font-size: 1.5em; font-weight: 300;}
/* .color {color: teal;} */
.line {width: 100%; margin-top: 20px; border-bottom: 3px solid #fff;z-index: 11;}
.observatory {position: fixed; width: 90%; height: 100%; z-index: 10; right: 0; bottom: 0; top: 50px; opacity: 0.8;}
.body { background-color: #030309; height: 500px;}
</style>
