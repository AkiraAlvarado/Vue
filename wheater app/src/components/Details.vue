<template>
   <div class="weather-container__details">
     <div
       v-for="(item, index) in nameDetails"
       :key="index"
       class="details-container"
     >
       <p>{{ item.detail }}</p>
       <div class="details-container__information">
         <i :class="item.icon"></i>
         <p class="detail-value">
           {{ item.value !== undefined ? `${item.value} ${item.unit}` : "___" }}
         </p>
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
 const props = defineProps(['humedad', 'presion', 'velocidad', 'nubosidad', 'visibilidad']);
 
 const nameDetails = [
   { detail: "Humedad", value: props.humedad, icon: "fa-solid fa-droplet", unit: "%" },
   { detail: "Presión", value: props.presion, icon: "fa-solid fa-compass", unit: "hPa" },
   { detail: "Vel. de Viento", value: props.velocidad, icon: "fa-solid fa-wind", unit: "m/s" },
   { detail: "Nubosidad", value: props.nubosidad, icon: "fa-solid fa-cloud", unit: "%" },
   { detail: "Visibilidad", value: props.visibilidad, icon: "fa-solid fa-eye", unit: "km" },
 ];
 </script>