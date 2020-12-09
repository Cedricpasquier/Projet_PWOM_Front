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
                <v-text-field v-model="email" light="light" prepend-icon="mdi-email" label="Email" type="email">{{email}}</v-text-field>
                <v-text-field  v-model="password" light="light" prepend-icon="mdi-lock" label="Password" type="password">{{password}}</v-text-field>
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
                <v-btn v-if="!logup" class="my-2" @click="enterApp" block="block" color="primary">Sign In</v-btn>
                <v-btn v-if="logup" class="my-2" @click="signupNewUser" block="block" color="primary">Sign Up</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <div class="ma-3" >Don't have an account?
            <v-btn v-if="!logup" v-on:click="logup = !logup; erreur = false; email='';password=''" light="light">Sign up</v-btn>
            <v-btn v-if="logup" v-on:click="logup = !logup; erreur = false;email='';password='';repassword=''" light="light">Sign in</v-btn>
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
          L'utilisateur à été créé avec succés
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-main>
</template>

<script>

export default {
  name: "Login",
  data: () => {
    return {
      email:'',
      sheetCreationUser: false,
      password: '',
      repassword: '',
      logup: false,
      erreur: false,
      loading: false,
      setDisable: false,
      erreurMessage:'',
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {

    enterApp() {

      this.loading = !this.loading;
      this.setDisable = true;

    },
    signupNewUser(){
      if(this.email == null || this.email == '')
      {
        this.erreurMessage = "Please Enter Email";
        this.erreur = true;
      } else {
        if(!this.reg.test(this.email))
        {
          this.erreurMessage = "Please Enter Correct Email";
          this.erreur = true;
        } else {
          if(this.password == null || this.password == ''){
            this.erreurMessage = "Please Enter password";
            this.erreur = true;
          } else {
            if(this.password != this.repassword){
              this.erreurMessage = "Please Enter the same password twice";
              this.erreur = true;
            } else {
              this.sheetCreationUser = true;
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