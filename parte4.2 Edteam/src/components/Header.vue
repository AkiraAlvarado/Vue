<template>
   <div>
      lOGO      
   </div>
   <div>
      <ul>
         <li>Siendo</li>
         <li>Sincero</li>
         <li>4</li>
         <li>Partes</li>
      </ul>
   </div>
   <div v-for=" (fruta,index) in frutita" :key="index">
      {{ fruta }}
   </div>
   <button @click="handleClick">
      Clickeame
   </button>
   <!-- Servira para la funcion del Header -->
   <div :class="clase ? 'red' : ''">
      Div de Prueba
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { ref } from 'vue';
const clase = ref(false)

const handleClick = () => {
  clase.value = !clase.value;
};

const frutita = inject('frutas')
</script>

<style scoped>
   .red{
      background-color: red;
   }
</style>