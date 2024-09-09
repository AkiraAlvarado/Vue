<template>
  <div>
    <Titulo /> <!-- Usar el componente Titulo aquí -->
  </div>
  <div>
    <h1>
      Para reactivity file
    </h1>
    <!-- <Reactivity/> -->
     <ConditionalTest/>
  </div>
  <div>
    <h2>Computed Sample</h2>
    <Computedsample/>
  </div>
  <div>
    <h2>Whatchers</h2>
    <Whatchers/>
  </div>
  </template>

<script setup>

import Titulo from './components/Titulo.vue'; // Importar el componente Titulo
import ConditionalTest from './components/Conditional-test.vue';
import Computedsample from './components/computed-sample.vue';
import Whatchers from './components/Whatchers.vue';
</script>