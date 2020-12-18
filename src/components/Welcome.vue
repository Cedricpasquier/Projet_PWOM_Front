<template>
  <div class="welcome">
    <v-container fill-height="fill-height" >
      <v-layout  align-center="align-center" justify-center="justify-center">
        <v-flex class="text-xs-center ">
          <v-card
              class="ma-10"
              elevation="12"
          >
            <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
              <v-row
                  align="center"
                  justify="center"
              >
                <v-col
                    class="text-center"
                    cols="12"
                >
                  <h1 class="display-1 font-weight-thin mb-4">
                    {{currentUser.username}}
                  </h1>
                  <h4 class="subheading">
                    Bienvenue sur votre site de sondage
                  </h4>
                </v-col>
              </v-row>
            </v-parallax>
            <v-card-text>
              <div class="ma-4 h1 text-left">Présentation du site</div>
              <div class="ma-4 h4 text-left">Création de sondage</div>
              <div class="ma-4 text-justify">Sur la page de création de sondage il vous est possible de saisir le nom de votre évènement, sa déscription et les dates que vous proposez. Lorsque vous validez votre choix, le sondage est créé et il n'est pas possible pour l'instant de le supprimer en temps qu'utilisateur du site</div>
              <div class="ma-4 h4  text-left">Réponse aux sondages</div>
              <div class="ma-4 text-justify">Sur la page de réponse à un sondage vous pouvez lire les différents sondages disponible et voir les dates de disponibilitées pour l'évènement, il est possible de doner plusieurs dates afin que toute les personnes intéréssées puissent y participer. Lorsque vous souhaitez répondre il vous suffit de selectionner les dates en d'appuyer sur le bouton envoyer</div>
              <div class="ma-4 h4  text-left">Projet</div>
              <div class="ma-4 text-justify">Ce projet a été fait dans le cadre d'un travail au sein de l'école d'ingénieur ESIEA.</div>
              <div class="ma-4 h4  text-left">Petite lecture</div>
              <div class="ma-4 text-justify">Afin de pouvoir vous montrer que cette page est scrollable avec un effet de parallax sur l'image, je vous propose un court extrait d'une oeuvre intemporelle qui aura marqué son époque, "Le seigneur des anneaux" de J. R. R. Tolkien </div>
              <div class="ma-4 h5  text-left">I. Des Hobbits</div>
              <div class="ma-4 text-justify">Ce livre traite dans une large mesure des Hobbits, et le lecteur découvrira dans ses pages une bonne part de
                leur caractère et un peu de leur histoire. On pourra trouver d'autres renseignements dans les extraits du Livre Rouge
                de la Marche de l'Ouest déjà publiés sous le titre: Le Hobbit. La présente histoire a pour origine les premiers
                chapitres du Livre Rouge composé par Bilbo lui-même, premier Hobbit à devenir fameux dans le monde entier, il
                leur donna pour titre: Histoire d'un aller et retour, puisqu'ils traitaient de son voyage dans l'Est et de son retour,
                Aventure qui devait engager tous les Hobbits dans les importants événements de cet Age, ici rapportés.</div>
              <div class="ma-4 text-justify">Mais maints lecteurs voudront sans doute en savoir dès l'abord davantage sur ce peuple remarquable, certains
                peuvent aussi ne point posséder le premier livre. A l'intention de telles personnes, nous réunissons ici quelques
                notes sur les points les plus importants de la tradition hobbite, et nous rappelons brièvement la première aventure.</div>
              <div class="ma-4 text-justify">Les Hobbits sont un peuple effacé mais très ancien, qui fut plus nombreux dans l'ancien temps que de nos
                jours, car ils aiment la paix, la tranquillité et une terre bien cultivée: une campagne bien ordonnée et bien mise en
                valeur était leur retraite favorite. Ils ne comprennent ni ne comprenaient, et ils n'aiment pas davantage les machines
                dont la complication dépasse celle d'un soufflet de forge, d'un moulin à eau ou d'un métier à tisser manuel, encore
                qu'ils fussent habiles au maniement des outils. Même dans l'ancien temps, ils se méfiaient des «Grandes Gens»,
                comme ils nous appellent, et à présent où ils nous évitent avec effroi, il devient difficile de les trouver. Ils ont
                l'oreille fine et l’œil vif, et s'ils ont tendance à l'embonpoint et ne se pressent pas sans nécessité, ils n'en sont pas
                moins lestes et adroits dans leurs mouvements. Ils ont toujours eu l'art de disparaître vivement et en silence quand
                des Grandes Gens qu'ils ne désirent pas rencontrer viennent par hasard de leur côté, et cet art, ils l'ont développé au
                point qu'aux Hommes il pourrait paraître magique. Mais les Hobbits n'ont en fait jamais étudié de magie d'aucune
                sorte, et leur caractère insaisissable est dû uniquement à une habileté professionnelle que l'hérédité et la pratique,
                ainsi qu'une amitié intime avec la terre, ont rendue inimitable pour les races plus grandes et plus lourdes. </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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