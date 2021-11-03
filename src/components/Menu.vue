<template>
  <div>
      <nav>
        <ul id="menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/multiplicador">Multiplicador</router-link></li>
            <li><router-link to="/deportes">Deportes</router-link></li>
            <li><router-link to="/numeros">Numeros</router-link></li>
            <li><router-link to="/comics">Comics</router-link></li>
        </ul>
    </nav>
    <hr/>
  </div>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style>
    #menu {
        display: inline;
    }
</style>