<template>
  <div>
    <h1>Catalog</h1>
    <TinySlider v-bind="tinySliderOptions">
      <div
        v-for="movie in moviesList"
        :key="movie.imdbID"
      >
        <MovieCard :movie="movie"/>
      </div>
    </TinySlider>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MovieCard from '@/components/MovieCard';

export default {
  name: 'Catalog',
  components: {
    MovieCard,
  },
  data: () => ({
    tinySliderOptions: {
      mouseDrag: true,
      loop: false,
      items: 3,
      gutter: 0,
      slideBy: 1,
    }
  }),
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
/deep/ .tns-controls {
  margin-bottom: 30px;
}
</style>
