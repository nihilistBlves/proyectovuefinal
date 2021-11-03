<template>
  <div id="numerosPadre">
      <h2>Numeros Padre</h2>
      <h3>La suma es: {{numeroTotal}}</h3>
      <button @click="insertarHijo">Crear numero</button>
      <div v-for="(num, index) in numeros" :key="index">
        <NumeroHijo :numeroRandom="num" v-on:sumarNumero="sumarNumero"/>
      </div>
  </div>
</template>

<script>
import NumeroHijo from './NumeroHijo.vue'

export default {
  name: "NumerosPadre",
  components: {
    NumeroHijo
  },
  data() {
    return {
      numeroTotal: 0,
      numeros: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1]
    }
  },
  methods: {
    sumarNumero(num) {
      this.numeroTotal += num;
    },
    insertarHijo(){
      var aleat = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(aleat);
    }
  }
}
</script>

<style>
 #numerosPadre {
   background-color: lightgreen;
 }
</style>