import hInput from "./h-input.vue"
const registerFunction = function(Vue) {
  Vue.component('h-input', hInput); // Registering the h-input component
};

export default registerFunction; // Exporting the registerFunction