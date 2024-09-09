<template>
  <section class="l-container secction__separator main-wheater">
    <h2>Clima actual</h2>
    <div class="weather-container">
      <!-- Pasar el objeto weather completo a Actually -->
      <Actually :weather="weather" />

      <!-- Comprobar que weather y sus propiedades existen antes de pasar a Details -->
      <Details
        v-if="weather && weather.main && weather.wind && weather.clouds && weather.visibility"
        :humedad="weather.main.humidity ?? '___'"
        :presion="weather.main.pressure ?? '___'"
        :velocidad="weather.wind.speed ?? '___'"
        :nubosidad="weather.clouds.all ?? '___'"
        :visibilidad="(weather.visibility / 1000).toFixed(1) ?? '___'" <!-- Visibilidad en km -->
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Actually from './Actually.vue';
import Details from './Details.vue';

const store = useStore();

// Utiliza computed para que se reactive automáticamente cuando cambie el estado en Vuex
const weather = computed(() => store.getters.weather);
</script>