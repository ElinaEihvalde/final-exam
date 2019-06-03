<template>
    <v-container >
        <v-layout >
            <v-flex  xs5 >
<v-img :src="image" height="40%"> </v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            image: require('../../assets/owner.jpg')
        }
    },
}
</script>

<style>
.about{
    height: 30hv;
}
</style>
