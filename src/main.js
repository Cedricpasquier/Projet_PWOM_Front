import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Login from './Login.vue'
import Menu from "./Menu";
import CreerSondage from "./components/CreerSondage";
import ListSondage from "./components/ListSondage";
import vuetify from '@/plugins/vuetify';
import Welcome from "./components/Welcome"; // path to vuetify export
//import colors from 'vuetify/lib/util/colors'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Login},
  {path: '/Menu', component: Menu,
    children: [
      // `UserHome` va être rendu à l'intérieur du `<router-view>` de `User`
      // quand `/utilisateur/:id` concorde
      {path: '', name:'welcome', component: Welcome},
      {path: 'ListSondage', name:'listSondage', component: ListSondage },
      {path: 'CreerSondage', name:'creerSondage', component: CreerSondage}
      ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  vuetify,
  router,
});
