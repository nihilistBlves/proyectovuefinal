<template>
    <div>
        <h1>Ejemplo comics Objetos/colecciones</h1>
        <label for="">Titulo</label>
        <input type="text" v-model="titulo">
        <br>
        <label for="">Imagen</label>
        <input type="text" v-model="imagen">
        <br>
        <label for="">Descripción</label>
        <input type="text" v-model="descripcion">
        <br>
        <button @click="nuevoComic">Nuevo comic</button>
        <div v-if="comicFavorito">
            <h2>FAVORITO</h2>
            <h3>{{comicFavorito.titulo}}</h3>
            <p>{{comicFavorito.descripcion}}</p>
            <img :src="comicFavorito.imagen" height="200px"/> <br>
        </div>
        <div v-for="(com, index) in comics" :key="index">
            <ComicHijo :comic="com" :index="index" v-on:seleccionarFavorito="seleccionarFavorito" v-on:modificarComic="modificarComic" v-on:eliminarComic="eliminarComic"/>
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
            titulo: "",
            imagen: "",
            descripcion: "",
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
            var comic = {
                titulo: this.titulo,
                imagen: this.imagen,
                descripcion: this.descripcion
            }
            this.comics.push(comic);
        },
        seleccionarFavorito(objetoComic) {
            this.comicFavorito = objetoComic;
        },
        modificarComic(objetoComic) {
            this.comicFavorito = objetoComic;
        },
        eliminarComic(index) {
            this.comics.splice(index, 1);
        },
    }
}
</script>

<style>

</style>