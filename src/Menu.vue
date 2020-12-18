<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Le menu magique
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item-group
            v-model="model"
            mandatory
            color="indigo"
        >
          <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.to"
              link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="teal lighten-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>L'Application de dana et cédric</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="gohome">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
          depressed
          color="error"
          small
          @click="deconnexion"
      >DECONNEXION</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push('/Login');
    }
  },
  methods:{
    gohome () {
      this.$router.push('/Menu/')
    },
    deconnexion() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/Login');
    }
  },
  data: () => ({
    items: [
      { text: 'Sondages',title: "listSondage", icon: 'mdi-format-list-bulleted-square', to: '/Menu/ListSondage'},
      { text: 'Créer sondage', title:"creerSondage", icon: 'mdi-plus' , to: '/Menu/CreerSondage'},
    ],
    drawer: null,
    model: 1
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
