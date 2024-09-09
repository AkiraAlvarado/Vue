<script setup>
import { ref } from 'vue';

const text = ref("Hola Modulo2")
const isVisible = ref(false)
const age = ref(15)
const description = ref("")
const aumentarEdad = () => {
   age.value++
}
</script>

<template>
   <div v-if="isVisible">
      {{ text }}
   </div>
   <div v-else>
      <span>Texto alternativo</span>
   </div>
   <div v-if="age < 22">
      Tengo mnenos de años S tengo {{ age }}
   </div>
   <button @click = "aumentarEdad"> Aumentar edad</button>


   <input type="text" v-model= "description">
   <span v-show="description.length > 10">{{ description }}</span>
</template>