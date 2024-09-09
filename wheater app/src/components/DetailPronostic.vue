<template>
   <div class="card-weather">
     <p class="date">{{ formatDate(element.dt) }}</p>
     <img
       class="card-weather__image"
       :src="`${LinkImage}${element.weather[0].icon}@2x.png`"
       :alt="element.weather[0].description"
     />
     <p class="card-weather__weather">{{ element.weather[0].description }}</p>
     <div class="card-weather__information">
       <div class="card-weather__details">
         <div class="flex">
           <i class="fa-solid fa-temperature-three-quarters"></i>
           <p>Temperatura</p>
         </div>
         <p class="temperature">{{ (element.main.temp - 273.15).toFixed(2) }}°C</p>
       </div>
       <div class="card-weather__details">
         <div class="flex">
           <i class="fa-solid fa-droplet"></i>
           <p>Humedad</p>
         </div>
         <p class="humidity">{{ element.main.humidity }}%</p>
       </div>
       <div class="card-weather__details">
         <div class="flex">
           <i class="fa-solid fa-cloud"></i>
           <p>Nubosidad</p>
         </div>
         <p class="Nubosity">{{ element.clouds.all }}%</p>
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
import { formatDate } from '../helpers/convertir'; 
 const LinkImage = "https://openweathermap.org/img/wn/";
 const props = defineProps(['element']);
 </script>