
<template>
  <div class="inputContainer">
    <input v-model="search" placeholder="Pesquise por filmes">
    <button v-on:click="searchMovie">Procurar</button>
  </div>
  <div class="container">
    <div class="card" v-for="movie in movies" :key="movie.id">
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
      <div class="movie-title">{{ movie.title }}</div>
    </div>
  </div>
</template>

<script>
import { searchMoviesApi } from "../services/apiCalls"

export default {
  data() {
    return {
      search: "",
      movies: []
    }
  },
  methods: {
    async searchMovie() {
      this.movies = await searchMoviesApi(this.search)
      console.log(this.movies)
      this.search = ""
    }
  }
}
</script>

<!-- image url: https://image.tmdb.org/t/p/w500/ -->
<!-- details: https://api.themoviedb.org/3/movie/343611?api_key=3a3b0d721bd3ebe2d05d199ce4eeba8e -->

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }

  .inputContainer {
    display: flex;
    justify-content: center;
  }

  .card {
    width: 200px;
    margin: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .card img {
    width: 100%;
    height: 200px;
    object-fit: fill;
  }

  .card .movie-title {
    padding: 15px;
    text-align: center;
    font-size: 18px;
    color: #333;
  }

  input {
    padding: 10px;
    margin: 10px 0;
  }

  button {
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>