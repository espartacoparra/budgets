import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
