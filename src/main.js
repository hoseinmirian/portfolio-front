import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { applicationMixin } from "./mixins/applicationMixin";

Vue.config.productionTip = false;
Vue.mixin(applicationMixin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
