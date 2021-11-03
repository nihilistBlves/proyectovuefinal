<template>
  <div style="text-align:center;background-color:cyan">
      <h3>{{comic.titulo}}</h3>
      <p>{{comic.descripcion}}</p>
      <img :src="comic.imagen" height="200px"/> <br>
      <button @click="seleccionarFavorito">Favorito</button>
      <button>Modificar</button>
      <button>Eliminar</button>
  </div>
</template>

<script>
export default {
    name: "ComicHijo",
    props: ["comic", "index"],
    methods: {
        seleccionarFavorito() {
            this.$emit("seleccionarFavorito", this.comic);
        },
        modificarComic() {
            this.$emit("modificarComic", this.comic);
        },
        eliminarComic() {
            this.$emit("eliminarComic", this.index);
        },
    }
}
</script>

<style>

</style>