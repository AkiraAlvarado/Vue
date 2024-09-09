<!-- ProductsList.vue -->
<script setup>
import { ref } from 'vue';

// Define las props que se esperan del componente padre
const props = defineProps(['items']);

// Define el evento que el componente emitirá
const emit = defineEmits([ 'add-new-product']);

// Referencias para los inputs del formulario
const newProductName = ref('');
const newProductPrice = ref('');

// Función para emitir el evento con el producto a agregar

// Función para agregar un nuevo producto
const addNewProduct = () => {
  if (newProductName.value && newProductPrice.value) {
    const newProduct = {
      id: Date.now(), // Generar un ID único para el nuevo producto
      name: newProductName.value,
      price: parseFloat(newProductPrice.value) // Convertir el precio a número
    };
    emit('add-new-product', newProduct); // Emitir el nuevo producto
    newProductName.value = ''; // Limpiar los campos del formulario
    newProductPrice.value = '';
  }
};
</script>

<template>
  <div>
    <!-- Lista de productos -->
    <ul>
      <li >
        <div>{{ items.name }}</div>
        <div>{{ items.price }}</div>

      </li>
    </ul>

    <!-- Formulario para agregar un nuevo producto -->
    <div>
      <input v-model="newProductName" placeholder="Nombre del producto" />
      <input v-model="newProductPrice" type="number" placeholder="Precio del producto" />
      <button @click="addNewProduct">Agregar nuevo producto</button>
    </div>
  </div>
</template>