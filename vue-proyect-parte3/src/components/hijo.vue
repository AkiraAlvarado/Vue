<!-- src/components/Hijo.vue -->
<template>
   <h1>{{ mensaje }}</h1>
   <input type="text" v-model="sofia">
   <button @click="handleClick">Enviar</button>
   <input type="text" v-model="enviarPadre">
   <button @click="handleClick2">Enviar al padre</button>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue';

// Define las props que el componente acepta
const props = defineProps({
  mensaje: String // Define el tipo de la prop
});

// Define los eventos que el componente puede emitir
const emit = defineEmits(['enviarPadre']);

const sofia = ref("");
const enviarPadre = ref("");

const handleClick = () => {
   console.log(props.mensaje + " de " + sofia.value); // Acceder a props.mensaje y a sofia.value
};

const handleClick2 = () => {
   // Emite un evento personalizado con el valor de enviarPadre
   emit('enviarPadre', enviarPadre.value);
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para el componente Hijo */
</style>