import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Menu from './components/Multiplicador/Menu.vue'
import Multiplicador from './components/Multiplicador/Multiplicador.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/", componente: Menu},
  {path: "/multiplicador", componente: Multiplicador},
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
