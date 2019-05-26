<template>
  <v-footer dark height="auto" class="footer">
    <v-layout row wrap>
      <v-flex xs12 sm6 md3>
          <img src="../assets/logo.png">
      </v-flex>
      <v-flex xs12 sm6 md3>
          <strong><p>Contact info:</p></strong>
          <p>Phone: 20191238</p>
          <p>E-mail: hello@gmail.com</p>
      </v-flex>
      <v-flex xs12 sm6 md3>
          <strong><p>Adress:</p></strong>
          <p>123 Cool street</p>
          <p>Riga, Latvia</p>
      </v-flex>
      <v-flex xs12 sm6 md3>
          <strong><p>Opening hours:</p></strong>
          <p>Monday-friday: 15:00-22:00</p>
          <p>Saturday-sunday: 11:00-22:00</p>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>


export default {
  components: {

    },
}
</script>

<style>
.footer {
  padding-top: 25px;
}
</style>
