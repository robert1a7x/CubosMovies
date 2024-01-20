<template>
  <div>
    <div class="inputContainer">
      <input v-model="search" placeholder="Pesquise por filmes">
      <button v-on:click="searchMovie">Procurar</button>
    </div>
    <div class="container">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { searchMoviesApi } from "../services/apiCalls"
import MovieCard from "@/components/MovieCard.vue"

export default {
  components: {
    MovieCard
  },
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