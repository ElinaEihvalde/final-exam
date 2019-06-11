<template>
  <v-footer height="auto" class="footer" pt-5 ma-0>
    <v-container fluid grid-list-xl pb-0 ma-0>
      <v-layout align-start justify-space-around row wrap pt-3 mb-0 :class="{'column px-4  justify-center': $vuetify.breakpoint.smAndDown}">
        <v-flex sm3 md3 lg2>
          <img class="none" src="../assets/logo.png">
        </v-flex>
        <v-flex xs6 sm3 md3 lg2>
          <strong>
            <p>Contact info:</p>
          </strong>
          <p>Phone:<a class="phone" href="tel: +37122082212"> + 371-22082212</a></p>
          <p>E-mail: sklimanskis@gmail.com</p>
        </v-flex>
        <v-flex xs6 sm3 md3 lg2>
          <strong>
            <p>Adress:</p>
          </strong>
          <p>Lielzeltiņi, Balgales pagasts</p>
          <p>Talsu novads, Latvija</p>
        </v-flex>
        <v-flex class="none" sm3 md3 lg2>
          <strong>
            <p>Opening hours:</p>
          </strong>
          <p>Monday-Friday: 15:00-22:00</p>
          <p>Saturday-Sunday: 11:00-22:00</p>
        </v-flex>
        <v-flex pa-0 xs12>
          <v-divider dark></v-divider>
        </v-flex>
        <v-flex pt-3 xs12 align-center>
          <p class="copyright">&copy;2019 — Copyright</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.footer {
  background-color: #000 !important;
  color: #bebebe !important;
}

.phone {text-decoration: none; color:#ffa000!important;}

img {
  max-width: 50%;
}

.copyright {
  text-align: center;
}

@media only screen and (max-width: 960px) {
  .footer {
    font-size: 1.1em;
  }
}

@media only screen and (max-width: 600px) {
  .none {
    display: none;
  }

}
</style>
