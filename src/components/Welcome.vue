<template>
  <div class="welcome">
    <v-card-text class="h2">Bienvenue <strong>{{currentUser.username}}</strong> sur votre site de sondage</v-card-text>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  }
}
</script>

<style scoped>

</style>