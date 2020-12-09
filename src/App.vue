<template>
  <v-app dark="dark">
    <router-view></router-view>
    <v-footer app="app" padless dark>
      <v-card
          class="flex"
          flat
          tile
      >
        <v-card-title>
          <stron>ESIEA</stron>
          <v-spacer></v-spacer>
          <v-btn
              v-for="item in items"
              :key="item.title"
              :href="item.to"
              rounded
          >
            <v-icon size="24px" left>
              {{ item.icons }}
            </v-icon>{{item.title}}
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default{
  name: 'App',
  data: () => ({
    items: [
      {icons: 'mdi-github', title: 'Dana', to: 'https://github.com/Soupra-D'},
      {icons: 'mdi-github', title: 'Ced', to: 'https://github.com/Dedridec'}
    ]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
