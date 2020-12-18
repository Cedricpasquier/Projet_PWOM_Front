<template>
  <div class="listSondage">
    <v-main classe='main'>
      <v-container fill-height="fill-height" >
        <v-layout  align-center="align-center" justify-center="justify-center">
          <v-flex class="login-form text-xs-center ">
            <v-expansion-panels
                v-model="panel"
                multiple
                v-if="renderComponent"
                >
              <v-expansion-panel
                  v-for="item in items"
                  :key="item.id"
                  :disabled="disabledItem[item.id-1]"
              >
                <v-expansion-panel-header >
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
                          v-model="selectionDates"
                          active-class="deep-purple accent-4 white--text"
                          multiple
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
                        @click="respondForm(item.id,item.dates,item.nomFormulaire); disabledItem[item.id-1]=true"
                        :disabled="disabledItem[item.id-1]"
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
      panel: [],
      disabledItem: [],
      selectionDates: [],
      allResponses:[],
      snackbar: false,
      snakbarsText: '',
      timeout: 3000,
      renderComponent: true,
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
          UserService.getUserResp(this.currentUser.username).then(
              response => {
                this.allResponses = response.data;
                this.assignDisabled();
              },
              error => {
                this.allResponses = error.message;
              }

          );
        },
        error => {
          this.items = error.message;
        }
    );
    if (!this.currentUser) {
      this.$router.push('/login');
    }

    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  methods: {
    respondForm(id,dates,name) {
      let dateToSend = [];
      for(let index in this.selectionDates){
        dateToSend.push(dates[index]);
      }
      UserService.postResponse(id,this.currentUser.username,dateToSend).then(
          response => {
            this.snakbarsText = response.data;
            this.snakbarsText = "Votre répondu au formulaire \"" + name + "\"";
            this.snackbar = true;
            this.snackbar = true;
            this.panel = [];
          },
          error => {
            this.snakbarsText = error.message;
            this.snakbarsText = "Une erreur est survenue pendant l'enregistrement";
            this.snackbar = true;
          })

    },
    formatDate (date) {
      if (!date) return null

      const [year,month,day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    assignDisabled () {
      let found = 0;
      this.items.forEach(elementsItem => {
        this.allResponses.forEach(elementsResp => {
          if(elementsItem.id == elementsResp.formId && elementsResp.user == this.currentUser.username){
            found = 1
          }
        })
        if(found == 1){
          this.disabledItem.push(true);
          found = 0;
        } else {
          this.disabledItem.push(false);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>