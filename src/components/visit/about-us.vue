<template>
    <v-container fluid >
        <v-layout justify-center >
            <v-flex xs8>
                <h2 class="text-xs-center display-1 ">Sergejs Klimanskis</h2>
                <p class="text-xs-center body-1 pt-3">>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex nesciunt tempora unde excepturi ducimus laborum dolorem totam atque, optio natus commodi quia! Alias aperiam, saepe distinctio odio molestias nulla quae harum dolor quia! Consequuntur iste tempore quisquam ipsa quia obcaecati facere, velit fugit dolorem pariatur ad ex delectus iusto optio recusandae maiores sapiente natus modi minus, nihil earum ab. </p>
            </v-flex>
        </v-layout>
        <v-layout justify-center  pt-3>
            <v-flex  xs12 >
<v-img :src="image"   contain position="top "> </v-img>
            </v-flex>
        </v-layout>
        
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            image: require('../../assets/Sergei-small.jpg')
        }
    },
}
</script>

<style>

</style>
