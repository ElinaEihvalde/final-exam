<template>
<v-app>
    <navigation />
    <v-content>
        <router-view></router-view>
    </v-content>
    <foot />
</v-app>
</template>

<script>
import navigation from '@/components/navigation';
import foot from '@/components/footer';

export default {
    components: {
        navigation,
        foot
    },

    data() {
        return {
            //
        }
    }
}
</script>

<style>

</style>
