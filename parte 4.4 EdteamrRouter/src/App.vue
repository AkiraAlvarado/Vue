<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header /> <!-- Header estará disponible globalmente en todas las vistas -->
  <RouterView /> <!-- Aquí se renderizarán las rutas dinámicamente -->
</template>

<style scoped>
/* Aquí puedes agregar tus estilos si es necesario */
</style>