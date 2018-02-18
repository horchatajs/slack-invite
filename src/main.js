// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

/* Import plugins */
import "@/assets/js/fa";
import "@/assets/js/validate";
import "@/assets/js/axios";

/* Import Styles */
import "@/assets/scss/app.scss";

Vue.config.productionTip = false;

window.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
