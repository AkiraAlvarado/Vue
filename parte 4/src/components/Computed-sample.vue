<!-- CartComponent.vue -->
<script setup>
import { computed, ref } from 'vue';
import ProductList from './ProductList.vue';

// Definición de un objeto reactivo con ref
const cart = ref({
  category: "gosting",
  description: "Carrito",
  currency: "USD",
  items: [
    { id: 1, name: "basic", price: 90 },
    { id: 2, name: "premium", price: 1000 },
    { id: 3, name: "standar", price: 3000 }

  ]
});

// Computed property para acceder a la descripción del carrito
const message = computed(() => {
  return cart.value.description;
});

// Computed property para calcular el precio total
const totalPrice = computed(() => {
  return cart.value.items.reduce((acumulador, current) => acumulador + current.price, 0);
});


// Función para manejar el nuevo producto
const handleAddNewProduct = (product) => {
  cart.value.items.push(product);
};
</script>
<template>
  <div>
    <div>{{ message }}</div>
    <div>Precio total = {{ totalPrice }}</div>
    <!-- Pasar items al componente hijo y escuchar los eventos -->
    <ProductList 
    v-for="product in cart.items" :key="product.id"
    :items="product" @add-new-product="handleAddNewProduct" />
  </div>
</template>