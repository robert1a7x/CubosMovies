<template>
    <div class="card">
    <router-link :to="'/movie/' + movie.id">
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
      <div class="movie-title">{{ movie.title }}</div>
    </router-link>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
 .card {
    width: 235px;
    height: 355px;
    margin: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    position: relative;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
  }

  .card .movie-title {
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: #fff;  /* Ajustado para branco */
    font-size: 18px;
    text-transform: uppercase;
  }
</style>