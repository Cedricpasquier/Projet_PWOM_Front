<template>
  <div class="listSondage">
    <v-main classe='main'>
      <v-container fill-height="fill-height" >
        <v-layout  align-center="align-center" justify-center="justify-center">
          <v-flex class="login-form text-xs-center ">
            <v-expansion-panels>
              <v-expansion-panel
                  v-for="(item,i) in 5"
                  :key="i"
              >
                <v-expansion-panel-header>
                  Item
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
      content: ''
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
          this.content = response.data;
        },
        error => {
          this.content = error.message;
        }
    );
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>