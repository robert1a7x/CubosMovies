<template>
  <div>
    <input v-model="search" placeholder="Pesquise por filmes">
    <button @click="searchMovie">Procurar</button>

    <div class="container">
      <MovieCard v-for="movie in displayedMovies" :key="movie.id" :movie="movie" />
    </div>

    <div class="pagination" v-if="movies.length != 0">
      <button @click="changePage(-1)" :disabled="currentPage === 1">&lt</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="changePage(1)" :disabled="currentPage === totalPages">></button>
    </div>
  </div>
</template>

<script>
import { searchMoviesApi, popularMovies } from "../services/apiCalls";
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      search: "",
      movies: [],
      currentPage: 1,
      moviesPerPage: 10,
    };
  },
  async mounted() {
    this.movies = await popularMovies()
  },
  computed: {
    totalPages() {
      return Math.ceil(this.movies.length / this.moviesPerPage);
    },
    displayedMovies() {
      const startIndex = (this.currentPage - 1) * this.moviesPerPage;
      const endIndex = startIndex + this.moviesPerPage;
      return this.movies.slice(startIndex, endIndex);
    },
  },
  methods: {
    async searchMovie() {
      const data = await searchMoviesApi(this.search);
      this.movies = data.filter((item) => item.poster_path)
      this.currentPage = 1;
    },
    changePage(step) {
      this.currentPage += step;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
