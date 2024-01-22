<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="container">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
/* .container {
  background-image: url('./assets/backgropund-krists-luhaers-unsplash.png');
  background-color: black;
  height: 100vh;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */

body {
  background-color: black;
  color: white;
  background-image: url('./assets/backgropund-krists-luhaers-unsplash.png');
  margin: 0;
  padding: 0;
  height: 100vh;
  }
</style>
