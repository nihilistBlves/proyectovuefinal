<template>
  <div class="row justify-content-center">
      <div class="col-8 text-center m-3">
          <div class="card">
            <h3 
                :class="{
                    rojo: comic.titulo.length > 5,
                    verde: comic.titulo.length <= 5
                }"
            >{{comic.titulo}}</h3>
            <p>{{comic.descripcion}}</p>
            <img :src="comic.imagen" height="200px"/> <br>
            <button @click="seleccionarFavorito" class="btn btn-success m-2">Favorito</button>
            <button @click="modificarComic" class="btn btn-primary m-2">Modificar</button>
            <button @click="eliminarComic" class="btn btn-danger m-2">Eliminar</button>
          </div>
      </div>
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
            this.$emit("modificarComic", this.comic, this.index);
        },
        eliminarComic() {
            this.$emit("eliminarComic", this.index);
        },
    }
}
</script>

<style scoped>
@import './estiloscomics.css';
</style>