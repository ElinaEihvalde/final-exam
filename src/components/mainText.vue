<template>
<v-container>
    <div class="centered-text" v-for="text in texts" :key="text.id">

        <h3>{{text.title}}</h3>
        <p>{{text.content}}</p>

        <div v-bind:is="text.comp"></div>
    </div>
</v-container>
</template>

<script>
import imgNav from './imgNav'

export default {

    data() {
        return {
            texts: [{
                    id: 1,
                    title: 'EXPLORE WITH US',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                    comp: imgNav
                },
                {
                    id: 2,
                    title: 'SOMETHING NEW',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                },
                {
                    id: 3,
                    title: 'MORE STUFF',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia, eos architecto alias consequuntur voluptatibus rerum error soluta at accusantium?',
                },
            ]
        }
    }
}
</script>

<style>
.centered-text {
    text-align: center;
   
    margin: auto;
    font-weight: 300;
}

.centered-text h3 {
    color: #E2BA36;
    padding-bottom: 2vw;
}

.centered-text p {
    color: #F4F4F4;
}
</style>
