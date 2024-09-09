<template>
   <div>
      <h1> New </h1>
      <div>
         <label for="Nombre">Nombre</label>
         <input  v-model="name" type="text">
      </div>
      <div>
         <label for="PRECIO">Precio</label>
         <input  v-model="price" type="text">
      </div>
      <div>
         <label for="">Esta disponible</label>
         <input v-model="isAvailable" type="checkbox">
      </div>
      <div>
         <button  @click="submit">guardar</button>
      </div>
   </div>
</template>

<script setup>
import useProduct from '../../Composable/useProduct';
const {name, price , isAvailable, submit} = useProduct()
</script>