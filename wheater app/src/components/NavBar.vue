<template>
   <header>
     <div class="header center__item">
       <div>
         <p class="logo">Weather APP</p>
       </div>
       <div>
         <form class="header__container" @submit.prevent="handleSubmit">
           <input
             class="header__container__input"
             type="text"
             placeholder="Agregue una ciudad"
             v-model="cityInput"
           />
           <input
             type="submit"
             class="header__container__button"
             value="Buscar"
           />
         </form>
       </div>
     </div>
   </header>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 import { useStore } from 'vuex';
 
 const store = useStore();
 const cityInput = ref('');
 
 const handleSubmit = () => {
   const city = cityInput.value.trim();
   if (city) {
    // Aqui llama a las funciones fetchWeather y fetchPronostic, cambiando el valor del City y en este caso
    // Del wheaater
     store.commit('setCity', city);
     store.dispatch('fetchWeather');
     store.dispatch('fetchPronostic');
   }
 };
 </script>