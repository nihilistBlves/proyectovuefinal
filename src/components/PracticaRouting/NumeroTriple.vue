<template>
  <div class="row justify-content-center">
      <div class="col-6 text-center">
          <h1>Número triple</h1>
          <h2 style="color:red">El número recibido es: {{numero}}</h2>
          <h2 style="color:green">El triple de {{numero}} es: {{numeroTriple}}</h2>
          <button @click="volver" class="btn btn-danger">Volver a aleatorios</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "NumeroTriple",
    data() {
        return {
            numero: 0,
            numeroTriple: 0
        }
    },
    methods: {
        volver() {
            this.$router.push("/numerosaleatorios");
        }
    },
    mounted() {
        this.numero = this.$route.params.numero;
        this.numeroTriple = this.numero*3;
    },
}
</script>

<style>

</style>