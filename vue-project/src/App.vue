<script setup>
const name = 'Vue dinamico'; 
const styleColor = "color:blue"
const arrayColores = ["blue", "red", "peru"]
const activo = true
const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];

const objetoFruta = {
        name: "Naranja",
        price: "$3.00",
        description: "UNA UNA naranja",
    };

const arrayFrutas2 = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
            stock: 10
        },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
            stock: 20
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
            stock: 30
        },
    ];
// EL V-FOR SIRVE COMO UN .MAP()
</script>

<template>
  <!-- Estos bigotes aceptan metodos de Javascript -->
  <h1>Holas {{ name.toUpperCase() }}</h1>

  <!-- <h2 v-bind:style ="styleColor">Soy azul</h2> -->
  <h2 :style ="styleColor">Soy azul</h2>

  <!-- Los bigotes pueden interpretar el array como un texto  -->
  <h2>{{ arrayColores }}</h2>

  <h2 :style="`color: ${arrayColores[1]}`">Soy array COlores</h2>

  <!-- Permite usar estos estasdos -->
  <h2> {{  activo ? "eSTOY activo" : "Estoy inactivo" }}</h2>


  <p v-if="activo"> Estoy activo</p>
  <p v-if="!activo"> Estoy inactivo</p>

  <!-- O -->

  <p v-if="activo"> Estoy activo</p>
  <p v-else> Estoy inactivo</p>

  <!-- o -->
  <p v-if="activo"> Estoy activo</p>
  <p v-else-if="activo=false"> Estoy inactivo</p>
  <p v-else>Estoy Indeciso</p>

  <!-- El v-show solo cambia display none cuando la condición es falsa -->
  <h2 v-show="activo"> El v-show est activo</h2>

  <ul>
    <li v-for="(fruta, index) in arrayFrutas"
        :key="index"
    >
    {{index +1}} - {{ fruta }}
    </li>
  </ul>
 
  <div>
    <!-- Se repite 3 veces el aside porque hay 3 frutas -->
     <!-- imprime los valores tipo formato json -->
    <aside v-for="frutas in arrayFrutas2"
      :key="frutas.name"
    >
      <p>------ñ----------</p>
      <p>{{ frutas.name }}</p>
      <p>{{ frutas.price }}</p>
      <p>{{ frutas.description }}</p>
    </aside>
  </div>

  <br><br>
  <h2>Recorriendo y usando Objetos</h2>
  <!-- recorre todos los valores de un objeto -->
   <!-- Un objetos que podria ser uno traido de un array -->
  <ul>
    <li v-for="(value,propiedad) in objetoFruta" key="value">
      {{propiedad}}:{{ value }}
    </li>
  </ul>

  <!-- Pinta los valores sin tener que recorrer el objeto -->
  <div>
    <p>Name: {{ objetoFruta.name }}</p>
    <p>Price: {{ objetoFruta.price }}</p>
  </div>
  
  <br><br>
  <h2> Usando el V-IF</h2>
  <!-- Mostrar solo los que tienen stock mayor a 10 -->
  <ul>
    <!-- El template es como un fragment en react -->
    <template v-for = "item in arrayFrutas2" :key="item.name">
      <li v-if="item.stock >10">
        {{ item.name }}
      </li>
    </template>
  </ul>
</template>

<!-- Directivas son Atributos especial con el prefijo -v -->

