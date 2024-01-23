<template>
  <div class="card" @mouseover="showRating" @mouseleave="hideRating">
    <router-link :to="'/movie/' + movie.id">
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
      <div class="movie-title">{{ movie.title }}</div>
      <div class="rating-overlay" v-if="showRatingOverlay">
        <div class="rating-circle">
          {{ movie.vote_average.toFixed(1) }}%
        </div>
      </div>
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
  },
  data() {
    return {
      showRatingOverlay: false
    };
  },
  methods: {
    showRating() {
      this.showRatingOverlay = true;
    },
    hideRating() {
      this.showRatingOverlay = false;
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
  width: 235px;
  height: 355px;
  margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
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
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
}

.rating-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.rating-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bolder;
}

.card:hover .rating-overlay {
  opacity: 0.7;
}
</style>
