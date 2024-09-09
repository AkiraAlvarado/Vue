<template>
   <h1>ProductView</h1>
   <h2>Product: {{ route.params.id }}</h2>
      <RouterLink to="post">Post</RouterLink>
      <RouterLink to="twit">twit</RouterLink>
   <RouterView />
</template>


<script setup>
// this.$router
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()


</script>