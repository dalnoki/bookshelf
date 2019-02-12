import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router.js";
import { store } from "./store/store"


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
  render: h => h(App)
}).$mount("#app");
