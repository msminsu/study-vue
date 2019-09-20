import { configure } from '@storybook/vue';
// import { setDefaults } from 'storybook-addon-vue-info'

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue);


// Import your custom components.
// import Mybutton from '../src/stories/Button.vue';

// // Register custom components.
// Vue.component('my-button', Mybutton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);
