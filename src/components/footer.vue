<template>
  <v-footer dark height="auto" class="footer">
    <v-layout align-center justify-center row wrap>
      <v-flex sm3 md3 lg2>
          <img class="none" src="../assets/logo.png">
      </v-flex>
      <v-flex xs6sm3 md3 lg2>
          <strong><p>Contact info:</p></strong>
          <p>Phone: 20191238</p>
          <p>E-mail: hello@gmail.com</p>
      </v-flex>
      <v-flex xs6sm3 md3 lg2>
          <strong><p>Adress:</p></strong>
          <p>123 Cool street</p>
          <p>Riga, Latvia</p>
      </v-flex>
      <v-flex class="none" sm3 md3 lg2>
          <strong><p>Opening hours:</p></strong>
          <p>Monday-friday: 15:00-22:00</p>
          <p>Saturday-sunday: 11:00-22:00</p>
      </v-flex>

<v-flex xs12>
        <v-divider></v-divider>
         <p class="copyright">&copy;2019 — Copyright</p>
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
  padding-top: 50px;
  background-color: #161616 !important;
  color: #BEBEBE !important;
  font-size: 1.25em;
}
img {max-width: 60%;}
.xs12 {padding-top: 25px;}
.copyright {text-align: center; padding-top: 15px;}

@media only screen and (max-width: 960px) {
.footer {
  font-size: 1.1em;
}
}

@media only screen and (max-width: 600px) {
.none {display: none;}
.footer {padding-top: 25px;}
}

</style>
