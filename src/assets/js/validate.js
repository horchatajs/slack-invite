import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import es from "vee-validate/dist/locale/es";

Validator.localize("es", es);

Vue.use(VeeValidate);
