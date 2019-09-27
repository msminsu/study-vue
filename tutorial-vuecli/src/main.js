import '@babel/polyfill'
import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from './router'
import store from './store'
import StatusComponents from './Status'

Vue.component('AppStatus', StatusComponents); // 전역 컴포넌트 사용시

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    userWasEdited(date){
      this.$emit('userWasEdited', new Date());
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
