<!-- src/components/Counter.vue -->
<script setup>
import { ref, computed } from 'vue';

const handleClick = (message) => {
  console.log(message);
};

const counter = ref("")
const favorite = ref([]);
const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const reset = () => {
  counter.value = 0;
};

const agregar = (num) => {
  if (!favorite.value.includes(num)) {
    favorite.value.push(num);
  }
};

const isDisabled = (num) => {
  return favorite.value.includes(num);
};

const classCounter = computed(() => {
  if (counter.value === 0) {
    return 'zero';
  } else if (counter.value > 0) {
    return 'positive';
  } else {
    return 'negative';
  }
});
</script>

<template>
  <button v-on:click.prevent="handleClick('Right')">Activame right</button>
  <button @click.prevent="handleClick('Left')">Activame left</button>
  <button @click.middle="handleClick('Middle')">Activame middle</button>

  <div>
    <button @click="increment">Aumentar</button>
    <button @click="decrement">Disminuir</button>
    <button @click="reset">Resetear</button>
    <button @click="agregar(counter)" :disabled="isDisabled(counter)">Agregar</button>

    <!-- Primera forma -->
    <h2 :style="{ color: counter > 0 ? 'green' : 'red' }">
      {{ counter }}
    </h2>

    <h2 :class="counter > 0 ? 'positive' : 'negative'">
      {{ counter }}
    </h2>

    <!-- Segunda forma -->
    <h2 :class="classCounter">
      {{ counter }}
    </h2>

    <ul>
      <li v-for="(item, index) in favorite" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style>
.positive {
  color: green;
}
.negative {
  color: red;
}
.zero {
  color: peru;
}
</style>