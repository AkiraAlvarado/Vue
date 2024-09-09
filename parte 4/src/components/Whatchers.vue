<script setup> 
import { ref, watch } from 'vue';
const message = ref("Seccion de Whathers")
const error = ref("")

watch(message, (m)=> {
   if(!m){
      error.value = "Hay un error , el campo es requerido"
   } else{
      error.value= "Todo ok"
   }
})
</script>

<template>
   <div>
      <div> Mensaje : {{  message }}</div>
      <input type="text" v-model="message">
      <span >{{ error }}</span>
   </div>
</template>