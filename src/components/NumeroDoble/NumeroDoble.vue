<template>
  <div class="row justify-content-center">
      <div class="col-6 text-center">
          <h1>Parámetros routing</h1>
          <div v-if="mensaje != ''">
              <h2>{{mensaje}}</h2>
          </div>
          <div v-else>
              <h2 style="color:red;">El número recibido es: {{numero}}</h2>
              <h2 style="color:green;">El doble de {{numero}} es {{doble}}</h2>
          </div>
          <button @click="redirectToAnotherNumero" class="btn btn-primary">Redirect</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "NumeroDoble",
    data() {
        return {
            mensaje: "",
            numero: 0,
            doble: 0
        }
    },
    methods:{
        redirectToAnotherNumero() {
            this.$router.push("/numerodoble/" + Math.floor(Math.random() * 50) + 1);
        },
        mostrarDoble() {
            this.numero = this.$route.params.numero;
            this.doble = this.numero*2;
        }
    },
    mounted() {
        if (this.$route.params.numero == null) {
            this.mensaje = "No hay numero en la url";
        } else {
            this.mostrarDoble();
        }
    },
    watch: {
        '$route.params.numero'(next, prev) {
            if (next != prev) {
                this.mostrarDoble();
            }
        }
    },
}
</script>

<style>

</style>