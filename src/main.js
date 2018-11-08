import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import NProgress from "nprogress";
import "../node_modules/nprogress/nprogress.css";
//import ht from "./http";
//import axios from 'axios'

import Vuetify from "vuetify";

Vue.use(Vuetify);

Vue.config.productionTip = false;

import axios from "axios";

new Vue({
  render: h => h(App)
}).$mount("#app");
