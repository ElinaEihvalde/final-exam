<template>
<v-container fluid justify-center>
    <v-layout justify-start>
        <v-flex  sm8 xs12>
            <form>
                <v-layout>
                    <v-flex>
                         <v-text-field 
                         v-model="coverImg"
                        placeholder="Upload image" 
                        name="coverImg"
                        id="coverImg"
                        color="#ffa000"
                        required
                        >
                        </v-text-field>
                        <v-text-field 
                        v-model="title"
                        placeholder="Blog title" 
                        name="title"
                        id="title"
                        color="#ffa000"
                        required
                        >
                        </v-text-field>
                         <v-textarea 
                         v-model="description"
                        placeholder="Article description" 
                        name="description"
                        id="description"
                        color="#ffa000"
                        box
                        rows="2"
                       auto-grow
                        counter='200'
                        required
                        >
                        </v-textarea>
                    </v-flex>
                </v-layout>
            </form>
        </v-flex>

    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            coverImg:'',
            title:'',
            description: ''


        }
    },
}
</script>

