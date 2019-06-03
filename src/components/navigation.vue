<template>
<v-toolbar class="nav-bar" color="#050505" absolute flat>

    <v-toolbar-title>
    <router-link to="/" class="logo">LIELZELTIŅI</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items   class=" nav-links pr-5 ">

        <v-btn  color="#ffffff" ripple flat class="text-none text-xs-left custom-btn" v-for="link in links" :key="link.title" :to="link.link">
            {{ link.title }}
        </v-btn>
<!-- <v-divider vertical> </v-divider>
    

        <v-btn flat>LV</v-btn>
        <v-btn flat>ENG</v-btn> -->
    </v-toolbar-items>
</v-toolbar>
 
</template>

<script>
export default {

    data() {
        return {
            links: [
                {
                    title: 'Visit us',
                    link: '/visit-us'
                },
                {
                    title: 'News',
                    link: '/blog'
                },
                {
                    title: 'Space',
                    link: ''
                }
            ]
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.nav-links {
   /*  margin-left: 5em; */
    height: auto !important;
 
}

.logo {
    padding-left: 40px;
    font-weight: 600;
    font-size: 1.4vw;
    text-decoration: none;
    color: #fff;
}

.nav-bar {
    animation-name: slideIn;
    animation-duration: 1.8s;
   
   /*  border-bottom: 0.5px #dbdbdb83 solid!important; */
}




@keyframes slideIn {
    0% {
        top: -100px;
        opacity: 0;
    }

    50% {
        opacity: 0.5
    }

    100% {
        top: 0;
        opacity: 1;
    }
}

.custom-btn {
    position: relative;
    margin-left: 1.2vw !important;
    padding: 0!important;
    font-size: 1.2vw;
    
}

.custom-btn::before {
   
    width: unset !important;
}

/* .custom-btn:hover{
    font-size: 1.3vw;
    transform-origin: bottom right;
    transition: transform 0.4s ease-in;
} */

.custom-btn::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #ffa000
      
    ;
    transform-origin: bottom right;
    transition: transform 0.4s ease-in;
}

.custom-btn:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
} 
</style>