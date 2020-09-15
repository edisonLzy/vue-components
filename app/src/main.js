import Vue from 'vue';
import App from './App.vue';
import EvanzyLi from 'evanzyli-ui';
import "evanzyli-ui/dist/evanzyli-ui.css";
Vue.use(EvanzyLi)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
