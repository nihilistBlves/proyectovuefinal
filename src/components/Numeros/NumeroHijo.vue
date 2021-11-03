<template>
  <div id="numeroHijo">
      <h2>Número hijo: {{numeroRandom}}</h2>
      <button @click="sumarPadre()">Sumar {{numeroRandom}}</button>
  </div>
</template>

<script>
export default {
  name: "NumeroHijo",
  props: ["numeroRandom"],
  methods: {
    sumarPadre() {
      this.$emit("sumarNumero", this.numeroRandom);
    }
  }
}
</script>

<style>
  #numeroHijo {
    background-color: lightcoral;
  }
</style>