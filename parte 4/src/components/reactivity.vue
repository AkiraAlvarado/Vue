<script setup>
import { ref } from 'vue';

// El valor del input se guarda en message
const message = ref("Hola Edteam")
const isVisible = ref(true)
const total = ref(100)

const user = ref ({
   firstname : "Juan",
   lastname: "Perez",
   age: 18
})
const actualizar = () => {
   message.value = "hola fui clickeado";
};
</script>

<template>
   <input type="text" v-model="message">
   <h1 >{{ message }}</h1>
   <h1>{{ user.firstname }}</h1>
   <button @click ="actualizar">Actualizar</button>
</template>

                                                                                      
