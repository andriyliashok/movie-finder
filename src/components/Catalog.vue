<template>
§  <div v-if="moviesList">
    <h1>Catalog</h1>
    <ElCard
      :body-style="{ padding: '0px' }"
      v-for="movie in moviesList"
      :key="movie.imdbID">
      <img
        :src="movie.Poster"
        class="image"
      >
      <div class="item">
        Title: {{ movie.Title }}
      </div>
      <div class="item">
        Director:
      </div>
      <div class="item">
        Year: {{ movie.Year }}
      </div>
    </ElCard>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Catalog',
  computed: {
    ...mapGetters('movies', ['moviesList']),
  },
  methods:{
    ...mapActions('movies', ['clearMovies']),
  },
  destroyed() {
    this.clearMovies();
  }
}
</script>

<style scoped>
.item {
  text-align: left;
  padding: 8px 0;
}
</style>
