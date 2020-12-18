import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Login from './Login.vue'
import Menu from "./Menu";
import CreerSondage from "./components/CreerSondage";
import ListSondage from "./components/ListSondage";
import vuetify from '@/plugins/vuetify';
import Welcome from "./components/Welcome";
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  {path: '/Login', component: Login},
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
  store,
  router
});
