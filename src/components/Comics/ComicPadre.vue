<template>
    <div class="row justify-content-center">
        <div class="col-6 text-center">
          <h1>Ejemplo comics Objetos/colecciones</h1>
          <form v-on:submit.prevent="nuevoComic()">
            <label for="" class="form-label">Titulo</label>
            <input type="text" class="form-control" v-model="comicForm.titulo">
            <label for="" class="form-label">Imagen</label>
            <input type="text" class="form-control" v-model="comicForm.imagen">
            <label for="" class="form-label">Descripción</label>
            <input type="text" class="form-control" v-model="comicForm.descripcion">
            <button class="btn btn-primary form-control mt-3">Nuevo comic</button>
          </form>
          <div v-if="comicFavorito" class="card m-3 bg-success">
              <h2 class="text-white">FAVORITO</h2>
              <div class="card">
                <h3>{{comicFavorito.titulo}}</h3>
                <p>{{comicFavorito.descripcion}}</p>
                <img :src="comicFavorito.imagen" height="200px"/>
              </div>
          </div>
          <div v-for="(com, index) in comics" :key="index">
              <ComicHijo :comic="com" :index="index" v-on:seleccionarFavorito="seleccionarFavorito" v-on:modificarComic="modificarComic" v-on:eliminarComic="eliminarComic"/>
          </div>
        </div>
    </div>
</template>

<script>
import ComicHijo from './ComicHijo.vue'

export default {
    name: "ComicPadre",
    components: {
        ComicHijo
    },
    data() {
        return {
            comicForm: {
              titulo: "",
              imagen: "",
              descripcion: ""
            },
            comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
              descripcion: "Murcielago"
            }
                    ],
            comicFavorito: null
        }
    },
    methods: {
        nuevoComic() {
            this.comics.push(this.comicForm);
        },
        seleccionarFavorito(objetoComic) {
            this.comicFavorito = objetoComic;
        },
        modificarComic(objetoComic, index) {
            objetoComic.titulo = this.comicForm.titulo;
            objetoComic.imagen = this.comicForm.imagen;
            objetoComic.descripcion = this.comicForm.descripcion;
            this.comics[index] = objetoComic;
        },
        eliminarComic(index) {
            this.comics.splice(index, 1);
        },
    }
}
</script>

<style>

</style>