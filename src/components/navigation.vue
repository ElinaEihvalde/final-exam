<template>
<v-toolbar class="nav-bar" color="#050505" absolute flat>

    <v-toolbar-title>
        <router-link to="/"><img width="100%"  class="hidden-md-and-up" :src="logo" ></router-link>
    <router-link to="/"  class="logo hidden-sm-and-down" >LIELZELTIŅI</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items   class=" nav-links">

        <v-btn color="#ffffff" flat class="text-none  custom-btn" v-for="link in links" :key="link.title" :to="link.link" :class="link.class">
            {{ link.title }}
        </v-btn>
        <v-btn
        v-if="userIsAuthenticated"
        @click="onLogout"
        to="/"
         color="#ffffff" flat class="text-none custom-btn admin-buttons">
            Log Out
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
 
</template>

<script>
export default {

    data() {
        return {
            logo: require('@/assets/logo.png')

        }   
},
computed: {
links () {
    let links = [
                {
                    title: 'Visit us',
                    link: '/visit-us'
                },
                {
                    title: 'News',
                    link: '/blog'
                },
                {
                    title: 'Observations',
                    link: '/explore'
                }
    ]
    if (this.userIsAuthenticated) {
        links = [
                {
                    title: 'Visit us',
                    link: '/visit-us'
                },
                {
                    title: 'News',
                    link: '/blog'
                },
                {
                    title: 'Observations',
                    link: '/explore'
                },
                {
                    title: 'Create Post',
                    link: '/create-blog',
                    class: 'admin-buttons'
                }
        ]
    }
    return links
},
userIsAuthenticated () {
    return this.$store.getters.user !== null && this.$store.getters.user !== undefined
}
    },
    methods: {
        onLogout () {
            this.$store.dispatch('logout')
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
.admin-buttons {
    color: #ffa000 !important;
}

</style>