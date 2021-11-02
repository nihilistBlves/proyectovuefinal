<template>
  <div id="app">
    <Menu/>
    <Multiplicador/>
  </div>
</template>

<script>
import Menu from './components/Multiplicador/Menu.vue'
import Multiplicador from './components/Multiplicador/Multiplicador.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Multiplicador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
