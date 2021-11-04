import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Multiplicador from './components/Multiplicador/Multiplicador.vue'
import Home from './components/Multiplicador/Home.vue'
import Deportes from './components/Deportes/Deportes.vue'
import NumerosPadre from './components/Numeros/NumerosPadre.vue'
import ComicPadre from './components/Comics/ComicPadre.vue'
import NumeroDoble from './components/NumeroDoble/NumeroDoble.vue'
import NumerosAleatorios from './components/PracticaRouting/NumerosAleatorios.vue'
import NumeroTriple from './components/PracticaRouting/NumeroTriple.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/home", component: Home},
  {path: "/multiplicador", component: Multiplicador},
  {path: "/deportes", component: Deportes},
  {path: "/numeros", component: NumerosPadre},
  {path: "/comics", component: ComicPadre},
  {path: "/numerodoble/:numero?", component: NumeroDoble},
  {path: "/numerosaleatorios", component: NumerosAleatorios},
  {path: "/numerotriple/:numero", component: NumeroTriple},
  {path: "/", component: Home},
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
