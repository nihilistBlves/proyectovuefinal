<template>
  <div class="row justify-content-center m-3">
      <div class="col-6 text-center">
          <h1>Números aleatorios</h1>
          <button v-for="(num, index) in numeros" :key="index" @click="redireccionar(num)" class="btn btn-primary m-3">
            {{num}}
          </button>
      </div>
  </div>
</template>

<script>
export default {
    name: "NumerosAleatorios",
    data() {
        return {
            numeros: [],
        }
    },
    methods: {
        generarNumeros() {
            for(var i = 0; i < 10; i++) {
                this.numeros.push(Math.floor(Math.random() * 100) + 1);
            }
        },
        redireccionar(num) {
            this.$router.push("/numerotriple/" + num);
        },
    },
    mounted() {
        this.generarNumeros();
    }
}
</script>

<style>

</style>