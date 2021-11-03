<template>
  <div id="divDeporte">
      <h3>{{deporte}}</h3>
      <button @click="seleccionarFavorito(deporte)">Favorito</button>
  </div>
</template>

<script>
export default {
    name: "Deporte",
    props: ["deporte"],
    methods: {
        seleccionarFavorito(depor) {
            this.$emit("seleccionarFavoritoPadre", depor);
        }
    }
}
</script>

<style>
    #divDeporte {
        background-color: cornflowerblue;
    }
</style>