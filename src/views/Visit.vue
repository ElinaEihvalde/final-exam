<template>
<v-container fluid pa-0>
    <v-layout pa-0 align-center pt-0 id="first-section">
        <visitText></visitText>
    </v-layout>

<v-layout>
    <v-flex xs5 offset-xs1>
<contactForm/>
    </v-flex>
</v-layout>
</v-container>
</template>

<script>
import visitText from '../components/visit/visit-text'
import contactForm from '../components/visit/contact-form'
export default {
    components: {
    visitText,
    contactForm,
    }
}
</script>

<style>

</style>
