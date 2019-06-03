<template>
<div class="body-color">
  <v-container class="form-container">

  <form @submit.prevent="onSignin">
    <v-layout row wrap justify-center align-center class="mt-5">
      <v-flex  xs3 mt-5>
        <v-flex center mt-5>


<!-- 
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
 -->
            <v-text-field
            :rules="emailRules" 
              prepend-icon="mail" 
              name="email"
              label="Email"
              id="email"
              v-model="email"
              type="email"
              required
              color="#ffa000"
            ></v-text-field>

            <v-text-field
            :rules="passwordRules" 
             prepend-icon="lock" 
              name="password"
              label="Password"
              id="password"
              v-model="password"
              type="password"
              required
              color="#ffa000"
            ></v-text-field>
                    <v-alert
      v-model="alert"
      type="error"
      dismissible
    >Email or password is incorrect
    </v-alert>
            <v-flex center>
            <v-btn type="submit" 
            color="success" 
            :disabled="!valid" 
            class="mt-3 ml-0">
              <v-icon left>lock_open</v-icon> Log in</v-btn>
            </v-flex>
          </v-flex>
          </v-flex>
    </v-layout>
         </form>
  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    
    return {
      alert: false,
      email: "",
      password: "",
      emailRules: [
      v => !!v || 'E-mail is required',
     v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
      passwordRules: [
      v => !!v || 'Password is required',
    ],
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
         valid() {
      return this.email !== "" && this.password !== ""; }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/create-blog");
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-animation: autofill 0s forwards;
    animation: autofill 0s forwards;
}

@keyframes autofill {
    100% {
        background: transparent;
        color: inherit;
    }
}

@-webkit-keyframes autofill {
    100% {
        background: transparent;
        color: inherit;
    }
}
</style>
<style scoped>
.form-container {margin-top: 2vh;}
.logo-container {margin-bottom: 10vh;}
</style>


