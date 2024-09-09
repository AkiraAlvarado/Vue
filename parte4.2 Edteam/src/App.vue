<script setup>
import Header from './components/Header.vue';
import { provide } from 'vue';

const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];

provide('frutas', arrayFrutas)

</script>

<template>
  <div>
    <Header></Header>
  </div>
</template>

