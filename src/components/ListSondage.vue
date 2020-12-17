<template>
  <div class="listSondage">
    <v-main classe='main'>
      <v-container fill-height="fill-height" >
        <v-layout  align-center="align-center" justify-center="justify-center">
          <v-flex class="login-form text-xs-center ">
            <v-expansion-panels>
              <v-expansion-panel
                  v-for="item in items"
                  v-model="selectedItem"
                  :key="item.id"
              >
                <v-expansion-panel-header>
                  <div class="h5 font-weight-bold">{{item.nomFormulaire}}</div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-card
                      class="mx-auto"
                      elevation="3"
                  >
                    <v-card-title>
                      Description
                    </v-card-title>
                    <div>{{item.descFormulaire}}</div>
                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Disponibilités</v-card-title>

                    <v-card-text>
                      <v-chip-group
                          v-model="selection"
                          active-class="deep-purple accent-4 white--text"
                          column
                      >
                        <v-chip v-for="index in item.dates"
                        :key="index"
                        >{{formatDate(index)}}</v-chip>
                      </v-chip-group>
                    </v-card-text>
                    <v-btn
                        color="cyan"
                        class="ma-4"
                        rigth
                        @click="respondForm(item.id,item.dates[selection])"
                    >
                      Envoyer
                    </v-btn>

                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
            >
              {{ snakbarsText }}

              <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import UserService from '../services/user.service';
export default {
  name: "ListSondage",
  data() {
    return {
      items: [],
      selection: 1,
      selectedItem: '0',
      snackbar: false,
      snakbarsText: '',
      timeout: 3000
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    UserService.getAllForm().then(
        response => {
          this.items = response.data;
        },
        error => {
          this.items = error.message;
        }
    );
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  methods: {
    respondForm(id,date) {
      this.snakbarsText = "Vous avez selectionné " + date + " pour le formulaire " + id;
      this.snackbar = true;
    },
    formatDate (date) {
      if (!date) return null

      const [year,month,day] = date.split('-')
      return `${day}/${month}/${year}`
    },
  }
}
</script>

<style scoped>

</style>