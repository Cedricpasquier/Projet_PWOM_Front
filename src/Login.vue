<template>
  <v-main classe='main'>
    <v-container fill-height="fill-height" >
      <v-layout  align-center="align-center" justify-center="justify-center">
        <v-flex class="login-form text-xs-center ">
          <v-card elevation="12" light="light" :loading="loading" :disabled="setDisable">
            <v-card-text >
              <div v-if="!logup">
                  <v-icon x-large>mdi-login-variant</v-icon>
              </div>
              <div v-if="logup">
                <v-icon x-large>mdi-account</v-icon>
              </div>
              <v-form>
                <v-text-field v-model="user.username" light="light" prepend-icon="mdi-account-circle" label="username" type="username"></v-text-field>
                <v-text-field v-model="user.email" v-if="logup" light="light" prepend-icon="mdi-email" label="Email" type="email"></v-text-field>
                <v-text-field  v-model="user.password" light="light" prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>
                <v-text-field  v-model="repassword" v-if="logup" light="light" prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>
                <v-alert
                    border="right"
                    colored-border
                    type="error"
                    elevation="2"
                    v-if="erreur"
                >
                  {{erreurMessage}}
                </v-alert>
                <v-btn v-if="!logup" class="my-2" @click="signIn" block="block" color="primary">Sign In</v-btn>
                <v-btn v-if="logup" class="my-2" @click="signupNewUser" block="block" color="primary">Sign Up</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <div class="ma-3" >Don't have an account?
            <v-btn v-if="!logup" v-on:click="logup = !logup; erreur = false; user.username='';user.password=''" light="light">Sign up</v-btn>
            <v-btn v-if="logup" v-on:click="logup = !logup; erreur = false; user.username=''; user.email='';user.password='';repassword=''" light="light">Sign in</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-bottom-sheet
        v-model="sheetCreationUser"
        inset
    >
      <v-sheet
          class="text-center"
          height="200px"
      >
        <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheetCreationUser = !sheetCreationUser"
        >
          close
        </v-btn>
        <div class="my-3">
          {{nameUserMessage}}
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-main>
</template>

<script>
import User from './models/user';
export default {
  name: "Login",
  data: () => {
    return {
      user: new User('', '',''),
      sheetCreationUser: false,
      repassword: '',
      nameUserMessage : '',
      logup: false,
      erreur: false,
      loading: false,
      setDisable: false,
      erreurMessage:'',
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/Menu/');
    }
  },
  methods: {
    signIn () {
      if(this.user.username == null || this.user.username === '') {
        this.erreurMessage = "Please Enter User";
        this.erreur = true;
      } else {
        if(this.user.password == null || this.user.password === ''){
          this.erreurMessage = "Please Enter password";
          this.erreur = true;
        } else {
          this.loading = true;
          this.setDisable = true;
          if (this.user.username && this.user.password) {
            this.$store.dispatch('auth/login', this.user).then(
                () => {
                  this.$router.push('/Menu/');
                },
                error => {
                  this.loading = false;
                  this.setDisable = false;
                  this.erreurMessage = error.response.data.message;
                  this.erreur = true;
                  this.user.username = '';
                  this.user.password = '';
                }
            );
          }
        }
      }
    }
    ,
    signupNewUser(){
      if(this.user.username == null || this.user.username === '') {
        this.erreurMessage = "Please Enter User";
        this.erreur = true;
      } else {
        if(this.user.email == null || this.user.email === '')
        {
          this.erreurMessage = "Please Enter Email";
          this.erreur = true;
        } else {
          if(!this.reg.test(this.user.email))
          {
            this.erreurMessage = "Please Enter Correct Email";
            this.erreur = true;
          } else {
            if(this.user.password == null || this.user.password === ''){
              this.erreurMessage = "Please Enter password";
              this.erreur = true;
            } else {
              if (this.user.password !== this.repassword) {
                this.erreurMessage = "Please Enter the same password twice";
                this.erreur = true;
              } else {
                this.loading = true;
                this.setDisable = true;
                this.$validator.validate().then(isValid => {
                  if (isValid) {
                    this.$store.dispatch('auth/register', this.user).then(
                        data => {
                          this.loading = false;
                          this.setDisable = false;
                          this.nameUserMessage = data.message;
                          this.sheetCreationUser = true;
                          this.logup = false;
                          this.user.username = '';
                          this.user.email = '';
                          this.user.password = '';
                          this.repassword = '';
                        },
                        error => {
                          this.loading = false;
                          this.setDisable = false;
                          this.erreurMessage = error.response.data.message;
                          this.erreur = true;
                          this.user.username = '';
                          this.user.email = '';
                          this.user.password = '';
                          this.repassword = '';
                        }
                    );
                  }
                });
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 500px;
}
main{
  background: linear-gradient(to bottom right, #48ffd4, #ac58e0);
}

</style>