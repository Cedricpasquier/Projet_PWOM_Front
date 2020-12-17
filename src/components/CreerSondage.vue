<template>
  <div class="creerSondage">
    <v-main classe='main'>
      <v-container fill-height="fill-height" >
        <v-layout  align-center="align-center" justify-center="justify-center">
          <v-flex class="login-form text-xs-center ">
            <v-card class="pa-10" elevation="12" light="light" :loading="loading" :disabled="setDisable">
              <div class="h2">Création de sondage</div>
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
              >
                <v-text-field
                    v-model="formName"
                    :counter="20"
                    :rules="formNameRules"
                    label="Nom du sondage"
                    required
                ></v-text-field>
                <v-textarea
                    v-model="description"
                    label="Description"
                    :counter="120"
                    single-line
                    full-width
                    :rules="descriptionRules"
                    required
                ></v-textarea>
                <v-row>
                  <v-col
                      cols="12"
                      sm="6"
                  >
                    <v-date-picker
                        v-model="dates"
                        multiple
                        @input="menu = true"
                        :min="today"
                        locale="france"
                    ></v-date-picker>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                  >
                    <v-combobox
                        v-model="dates"
                        multiple
                        label="Multiple picker in menu"
                        prepend-icon="mdi-calendar"
                        readonly
                    ></v-combobox>
                  </v-col>
                </v-row>
                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                >
                  Validate
                </v-btn>

                <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                >
                  Reset Form
                </v-btn>
              </v-form>
            </v-card>
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
name: "CreerSondage",
  data: vm => ({
    today: new Date().toISOString().slice(0, 10),
    loading: false,
    setDisable: false,
    valid: true,
    formName: '',
    errorMessage: '',
    errorVisible: false,
    formNameRules: [
      v => !!v || 'Le nom ne peut pas être vide',
      v => (v && v.length <= 20) || 'Le nom du sondage ne peut pas dépasser 10 caractères',
    ],
    description: '',
    descriptionRules: [
      v => (v && v.length <= 120) || 'La description est trop longue',
    ],
    dates: [],
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    dateMysqlFormatted: '',
    menu: false,
    timeout: 3000,
    snackbar: false,
    snakbarsText: ''
  }),

  computed: {
    computedDateFormatted: {
      set(){
        return this.date
      },
      get(){
        return this.formatDate(this.date)
      }
    },
  },

  watch: {
    date () {
      this.dateFormatted = this.formatDate(this.date);
      this.dateMysqlFormatted = this.mysqlDate(this.date);
    },
  },
  methods: {
    validate () {
      if(this.$refs.form.validate()){
        UserService.postForumlaire(this.formName,this.description,this.dates).then(
            response => {
              this.snakbarsText = response;
              this.snakbarsText = "Le sondage "+ this.formName + " à été créé";
              this.snackbar = true;
              this.reset()
            },
            error => {
              this.snakbarsText = error;
              this.snackbar = true;
              this.reset()
            }
        )
      }
    },
    reset () {
      this.formName = '';
      this.date = new Date().toISOString().substr(0, 10);
      this.description = '';
    },
    formatDate (date) {
      if (!date) return null

      const [year,month,day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    mysqlDate (date) {
      if (!date) return null

      const [year,month,day] = date.split('-')
      return `${day}-${month}-${year}`
    }
  },
}
</script>

<style scoped>

</style>