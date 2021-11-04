<template>
  <div class="row">
      <nav class="navbar navbar-expand navbar-dark bg-primary">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <div class="navbar-collapse collapse">
            <ul class="navbar-nav mlauto pt-1">
                <li class="nav-item">
                    <router-link to="/multiplicador" class="nav-link">Multiplicador</router-link>                </li>
                <li class="nav-item">
                    <router-link to="/deportes" class="nav-link">Deportes</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/numeros" class="nav-link">Numeros</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/comics" class="nav-link">Comics</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/numerodoble/25" class="nav-link">Numero Doble</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/numerosaleatorios" class="nav-link">Numeros aleatorios</router-link>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: "Menu",
}
</script>

<style>
    
</style>