<template>
  <div>
      <nav>
        <ul id="menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/multiplicador">Multiplicador</router-link></li>
        </ul>
    </nav>
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