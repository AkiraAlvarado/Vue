<template>
   <section class="l-container2 secction__separator main-wheater">
     <h2>Pronóstico 5 días</h2>
     <div class="card-container">
       <DetailPronostic
         v-for="(element, index) in filteredPronostic"
         :key="index"
         :element="element"
       />
     </div>
   </section>
 </template>
 
 <script setup>
 import { computed } from 'vue';
 import { useStore } from 'vuex';
 import DetailPronostic from './DetailPronostic.vue';
 
 const store = useStore();
 const pronostic = computed(() => store.getters.pronostic);
 
 const filteredPronostic = computed(() =>
   pronostic.value.filter((_, index) => [7, 15, 23, 31, 39].includes(index))
 );
 </script>