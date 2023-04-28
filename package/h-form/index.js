import HFormItem from './h-form-item.vue'; // import h-form-item.vue
import HForm from './h-form.vue'; // import h-form.vue

const install = function(Vue) {
  Vue.component('h-form-item', HFormItem); // register h-form-item component
  Vue.component('h-form', HForm); // register h-form component
};

export default install

