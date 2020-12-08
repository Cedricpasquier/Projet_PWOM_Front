<template>
  <v-main classe='main'>
    <v-container fill-height="fill-height">
      <v-layout align-center="align-center" justify-center="justify-center">
        <v-flex class="login-form text-xs-center">
          <v-card light="light">
            <v-card-text>
              <div class="ma-2 text-h2"> Sign in
              </div>
              <v-form>
                <v-text-field  light="light" prepend-icon="mdi-email" label="Email" type="email"></v-text-field>
                <v-text-field  light="light" prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>
                <v-text-field  v-if="logup" light="light" prepend-icon="mdi-lock" label="Password" type="password"></v-text-field>
                <v-btn class="my-2" @click="enterApp" block="block" color="primary" type="submit">Sign in</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <div class="ma-3" >Don't have an account?
            <v-btn v-on:click="logup = !logup" light="light">Sign up</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>

export default {
  name: "Login",
  data: () => {
    return {
      logup: false
    }
  },
  methods: {
    enterApp() {
      this.$router.push('/Menu/')
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