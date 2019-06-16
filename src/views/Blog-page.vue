<template>
<v-container fluid>

    <blogTitle />
    <v-btn class="md-5 mr-3  elevation-2" :class="{show: scrollPosition > 300, hide: scrollPosition < 300}" flat icon bottom right color="#050505" fixed @click="top">
        <v-icon>arrow_upward</v-icon>
    </v-btn>
    <blogPosts />

</v-container>
</template>

<script>
import blogTitle from '../components/blog/blog-title'
import blogPosts from '../components/blog/blog-posts'
export default {
    components: {
        blogTitle,
        blogPosts
    },

    data() {

        return {
            scrollPosition: null,
            hide: false,
            show: true
        }
    },

    methods: {

        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        top() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }

}
</script>

<style>
.hide {
    display: none;

}

.show {
    animation-name: fadeInBtn;
    animation-duration: 0.5s;
    transition: ease-in-out;
}

@keyframes fadeInBtn {
    0% {
        opacity: 0;

    }

    100% {
        opacity: 1;
    }
}
</style>
