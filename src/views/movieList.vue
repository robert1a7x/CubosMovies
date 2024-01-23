<template>
  <div>
    <div class="search-container">
      <input v-model="search" @keyup.enter="searchMovie" placeholder="Pesquise por filmes" class="search-input">
      <!-- <button class="search-button" @click="searchMovie" >Procurar</button> -->
      <img class="filter-icon" src="../assets/filter.png" @click="showFilter = !showFilter"/>
    </div>
    <div v-show="showFilter" class="filter">
      <div class="input-filter" @click="filterPopular">
        <input type="radio" id="popular" name="filter" value="popular" checked />
        <label for="popular">Popular</label>
      </div>

      <div class="input-filter" @click="filterNowPlaying">
        <input type="radio" id="nowPlaying" name="filter" value="nowPlaying" />
        <label for="nowPlaying">Em cartaz</label>
      </div>

      <div class="input-filter" @click="filterTopRated">
        <input type="radio" id="topRated" name="filter" value="topRated" />
        <label for="topRated">Melhor nota</label>
      </div>

      <div class="input-filter" @click="filterUpcoming">
        <input type="radio" id="upComing" name="filter" value="upComing" />
        <label for="upComing">Em breve</label>
      </div>
    </div>

    <div class="container">
      <MovieCard v-for="movie in displayedMovies" :key="movie.id" :movie="movie" />
    </div>

    <div class="pagination" v-if="movies.length != 0">
      <button class="pagination-button" @click="changePage(-1)" :disabled="currentPage === 1">&lt</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button class="pagination-button" @click="changePage(1)" :disabled="currentPage === totalPages">></button>
    </div>
  </div>
</template>

<script>
import { searchMoviesApi, popularMovies, nowPlaying, topRated, upComing } from "../services/apiCalls";
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
      showFilter: false
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
      this.search = ""
    },
    async filterPopular() {
      this.movies = await popularMovies()
    },
    async filterTopRated() {
      this.movies = await topRated()
    },
    async filterUpcoming() {
      this.movies = await upComing()
    },
    async filterNowPlaying() {
      this.movies = await nowPlaying()
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
  min-height: 90vh;
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

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.filter {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.search-input {
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 2px;
  padding: 14px;
  outline: none;
  width: 350px;
  color: white;
  margin: 0 0 0 10px;
}

.filter-icon {
  width: 30px;
  height: 30px;
  background-color: #8e4ec65b;
  padding: 8px;
  cursor: pointer;
  margin: 0 10px 0 10px;
}

.pagination-button {
  width: 45px;
  height: 40px;
  background-color: #8e4ec6cc;
  padding: 8px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border: none;
}

.input-filter {
  margin-right: 20px;
}

input[type="radio"] {
  margin-right: 5px;
}
</style>
