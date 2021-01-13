import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();                    // CREATES NEW VUE OBJECT FOR EVENTBUS

new Vue({
  render: h => h(App),
}).$mount('#app')
