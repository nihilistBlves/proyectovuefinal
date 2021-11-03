<template>
  <div id="divDeportes">
      <h2>Componente Deportes</h2>
      <h3 v-if="favorito">
          Favorito: <span style="color:white">{{favorito}}</span>
      </h3>
      <ul>
          <li v-for="dep in deportes" :key="dep">
              <Deporte :deporte="dep" v-on:seleccionarFavoritoPadre="seleccionarFavoritoPadre"/>
          </li>
      </ul>
  </div>
</template>

<script>
import Deporte from './Deporte.vue'

export default {
    name: "Deportes",
    components: {
        Deporte,
    },
    data() {
        return {
            deportes: ["Canicas", "Futbol", "Baloncesto", "Hockey", "Surf"],
            favorito: ""
        }
    },
    methods: {
        seleccionarFavoritoPadre(deporte) {
            this.favorito = deporte;
        }
    }
}
</script>

<style>
    #divDeportes {
        background-color: coral;
    }
    ul {
        display: inline;
    }
</style>