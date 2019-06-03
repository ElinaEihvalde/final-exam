<template>
<v-flex xs12>
      <v-form       
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="onSubmit"
      >
    <v-container fluid grid-list-xl pa-0>
  <v-layout align-center justify-center row wrap>
<v-flex xs6>
      <v-text-field 
      prepend-icon="account_circle" 
      v-model="name" 
      :rules="nameRules" 
      label="Name" 
      required 
      id="name"
      color="#ffa000"
      >
      </v-text-field>
</v-flex>
<v-flex xs6>
      <v-text-field 
      prepend-icon="phone" 
      v-model="phone" 
      :rules="phoneRules" 
      label="Phone" 
      type="number"
      required 
      id="phone"
      color="#ffa000"
      >
      </v-text-field>
</v-flex>
<v-flex xs6>
      <v-text-field 
      prepend-icon="mail_outline" 
      v-model="email" 
      :rules="emailRules" 
      label="E-mail" 
      required 
      id="email"
      color="#ffa000"
      >
      </v-text-field>
</v-flex>
<v-flex xs6>
      <v-menu 
      ref="menu" 
      v-model="menu" 
      :close-on-content-click="false" 
      :nudge-right="40" 
      :return-value.sync="date" 
      lazy 
      id="date"
      transition="scale-transition" 
      offset-y 
      full-width 
      min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field color="#ffa000" v-model="date" label="Prefered date" prepend-icon="event" persistent readonly v-on="on" clearable></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat @click="menu = false">Cancel</v-btn>
          <v-btn flat color="#ffa000" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
</v-flex>
<v-flex xs12>
      <v-textarea
      v-model="message"
      :rules="inputRules" 
      label="Message" 
      required 
      id="message"
      rows="2"
      @input="$v.email.$touch()" 
      @blur="$v.email.$touch()"
      color="#ffa000"
      auto-grow
      >
      </v-textarea>
</v-flex>
<v-flex xs12 pa-0>
    <div>
        <v-alert
      v-model="alert"
      type="success"
      dismissible
    >
      Message sent.<br>
      You will be contacted withing <strong>24 hours.</strong> Have a nice day.
    </v-alert>
    </div>
</v-flex>
<v-flex xs12 pl-0>
        <v-btn      
        ref="send"  
        type="submit"
        :disabled="!valid"
        color="success"
        @click="alert = true; this.$v.$touch()"
      ><v-icon left dark>send</v-icon>Submit</v-btn> 
</v-flex>
        </v-layout>
</v-container>
    </v-form>
</v-flex>
</template>

<script>
 export default {
    data: () => ({
      date: '' /* new Date().toISOString().substr(0, 10) */,
      menu: false,
      modal: true,
      alert: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],   
    phone: '',
    phoneRules: [
      v => !!v || 'Phone number is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    inputRules: [
      v => !!v || 'Message is required',
    ]
    }),
    computed: {
      valid() {
      return this.name !== "" && this.phone !== "" && this.email !== "" && this.message !== "";
}
    },
     methods: {
       validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
  
    onSubmit () {
    console.log({name: this.name, email: this.email, phone: this.phone, date: this.date, message: this.message})
    const contactForm = {
    name: this.name,
    phone: this.phone,
    email: this.email,
    date: this.date,
    message: this.message
    }
    this.$store.dispatch('messages', contactForm)
    this.$refs.form.reset()
    this.$refs.send.disabled()
    
  }
  }
 }
</script>

<style>

</style>
