<template>
   <div class="weather-container__main">
     <div class="weather-container__information">
       <div class="flex2">
         <i class="icon fa-solid fa-temperature-three-quarters"></i>
         <h1>
           {{ weather ? `${kelvinToCelsius(weather.main.temp)}°C` : "__°C" }}
         </h1>
       </div>
       <div class="flex2">
         <i class="icon2 fa-solid fa-location-dot"></i>
         <p>{{ weather ? weather.name : "S____, ____" }}</p>
       </div>
       <div class="flex2">
         <i class="icon2 fa-solid fa-calendar"></i>
         <p>{{ weather ? formatDate(weather.dt) : "____ __, _____" }}</p>
       </div>
     </div>
     <div class="weather-container__result">
       <img
         class="weather-container__image"
         :alt="weather ? weather.weather[0].description : ''"
         :src="weather ? `${LinkImage}${weather.weather[0].icon}@2x.png` : ''"
       />
       <p class="weather-container__description">
         {{ weather ? weather.weather[0].description : "________" }}
       </p>
     </div>
   </div>
 </template>
 
 <script setup>
import { formatDate , kelvinToCelsius} from '../helpers/convertir'; 
 
 const LinkImage = "https://openweathermap.org/img/wn/";
 const props = defineProps(['weather']);
 </script>