<template>
  <div class="movie-details">
    <div class="poster-container">
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Movie Poster">
    </div>
    <div class="details-container">
      <h2>{{ movie.title }}</h2>
      <p class="overview">{{ movie.overview }}</p>
      <div class="info">
        <div class="info-item">
          <strong>Popularidade:</strong> {{ movie.popularity }}
        </div>
        <div class="info-item">
          <strong>Votos:</strong> {{ movie.vote_count }}
        </div>
        <div class="info-item">
          <strong>Data de Lançamento:</strong> {{ movie.release_date }}
        </div>
        <div class="info-item">
          <strong>Duração:</strong> {{ movie.runtime }} minutos
        </div>
        <div class="info-item">
          <strong>Idioma:</strong> {{ movie.original_language }}
        </div>
        <div class="info-item">
          <strong>Orçamento:</strong> {{ movie.budget | currency }}
        </div>
        <div class="info-item">
          <strong>Receita:</strong> {{ movie.revenue | currency }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { movieDetailApi } from '@/services/apiCalls'

export default {
  data() {
    return {
      movie: {}
    }
  },
  async mounted() {
    this.movie = await movieDetailApi(this.$route.params.id)
  }
}
</script>

<style scoped>
.movie-details {
  display: flex;
  margin: 20px;
}

.poster-container {
  margin-right: 20px;
}

.poster-container img {
  width: 100%;
  max-width: 300px;
}

.details-container {
  flex: 1;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.overview {
  margin-bottom: 20px;
}

.info {
  display: flex;
  flex-wrap: wrap;
}

.info-item {
  flex: 1 1 300px;
  margin: 5px;
}
</style>