<template>
  <div>
    <h2>Multiplicador</h2>
    <label>Introduce un numero</label>
    <br/>
    <input type="number" v-model="numero"/>
    <br/>
    <h2>{{numero}}</h2>
    <table border="1" style="margin:auto;">
      <thead>
        <tr>
          <th>Operacion</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="resultado in multiplicaciones" :key="resultado.operacion">
          <td>
            {{resultado.operacion}}
          </td>
          <td>
            {{resultado.resultado}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: "Mutiplicador",
    computed: {
      multiplicaciones() {
        var datos = [];
        for (var i = 1; i <= 10; i++) {
          var fila = {
            operacion: this.numero+" x "+i,
            resultado: this.numero*i
          };
          datos.push(fila);
        }
        return datos;
      }
    },
    data() {
      return {
        numero: 0
      }
    }
}
</script>

<style>

</style>