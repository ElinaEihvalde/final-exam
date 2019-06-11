<template>
<div class="body-color">
  <v-container class="form-container">

  <form @submit.prevent="onSignin">
    <v-layout row wrap justify-center>
      <v-flex  xs10 sm10 md4>
        <v-flex center>
            <v-text-field
              solo
              name="email"
              label="Email"
              id="email"
              v-model="email"
              type="email"
              required
            ></v-text-field>

            <v-text-field
              solo
              name="password"
              label="Password"
              id="password"
              v-model="password"
              type="password"
              required
            ></v-text-field>
            <v-flex center>
            <v-btn type="submit" block color="#FF6F61" dark class="btn-margin">Log in</v-btn>
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
      email: "",
      password: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
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
.v-input__slot {border-radius: 7px !important; padding-left: 20px !important;}
.v-btn {background: ff3d00;}

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
#logo {max-height: 8vh;}
.btn-margin {margin-top: 5vh;}
.body-color {background-color: #F7f7f7;}
</style>


