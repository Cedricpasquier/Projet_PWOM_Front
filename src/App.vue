<template>
  <v-app dark="dark">
    <router-view></router-view>
    <v-footer app="app">
      <v-flex class="text-xs-center">© 2020. All rights reserved.</v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default{
  name: 'App'
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
