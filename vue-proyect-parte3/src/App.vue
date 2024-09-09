<script setup>
import { computed, ref } from 'vue';
import Hijo from  './components/hijo.vue'; // Importa el componente hijo

// Estado reactivo para almacenar la lista de frutas
const frutas = ref([]);
const color = ref(true)
// Estado reactivo para almacenar los datos de la nueva fruta
const nuevaFruta = ref({
  nombre: "",
  cantidad: 0
});

// Función para agregar una nueva fruta
const agregarFruta = () => {
  if (nuevaFruta.value.nombre && nuevaFruta.value.cantidad > 0) {
    frutas.value.push({ ...nuevaFruta.value }); // Añade una copia del objeto nuevaFruta al array frutas
    nuevaFruta.value.nombre = ""; // Resetea el nombre
    nuevaFruta.value.cantidad = 0; // Resetea la cantidad
  }
};
const total = computed(() => {
  // Usa reduce para sumar las cantidades
  // función en JavaScript que se usa para aplicar una función a cada elemento
  // de un array, acumulando un único resultado. Es muy útil para operaciones 
  // como sumar valores, concatenar strings o transformar arrays en un solo valor.

  // Suma tiene como valor inicial el 0 , y se va iterando y sumando la cantidad 
  return frutas.value.reduce((suma, fruta) => suma + fruta.cantidad, 0);
});


const datoDelHijo = ref("");

// Función para manejar el evento `enviarPadre` del hijo
const handleEnviarPadre = (valor) => {
  datoDelHijo.value = valor;
};

</script>

<template>
  <div>
    <!-- Input para el nombre de la fruta -->
    <input type="text" v-model="nuevaFruta.nombre" placeholder="Nombre de la fruta" />

    <!-- Input para la cantidad de la fruta -->
    <input type="number" v-model.number="nuevaFruta.cantidad" placeholder="Cantidad" />

    <!-- Botón para agregar la fruta -->
    <button @click="agregarFruta">Agregar Fruta</button>

    <!-- Lista de frutas -->
    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">
        {{ fruta.nombre }} - {{ fruta.cantidad }} 
          <button @click="fruta.cantidad++"> +</button>
          <button @click="fruta.cantidad--"> -</button>
      </li>
    </ul>
  </div>
  <div>Total : {{ total }}</div>

  <h2>SEGUNDA SECCION DE APRENDIZAJE</h2>

  <div :class="color ? 'green' : 'red'">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum aperiam porro qui 
      eaque, accusamus nihil a nam. 
      Delectus veniam et temporibus alias, aperiam est quis qui harum tenetur accusamus!
    </p>
    <button @click="color = !color"> Cambiar color</button>
  </div>

  <h2>Tercera Sección</h2>

  <Hijo 
      mensaje="Hola desde el padre" 
      @enviarPadre="handleEnviarPadre" 
    />  
  <p>Dato recibido del hijo: {{ datoDelHijo }}</p>

</template>


<style>
.red{
  background-color: red;
}

.green{
  background-color: green;
}
</style>