<template>
  <div class="catalog">
    <div class="catalog__top">
      <div class="catalog__back">
        <RouterLink to="/">
          <ElButton type="text">Back</ElButton>
        </RouterLink>
      </div>
      <h1>Catalog</h1>
    </div>
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

<style lang="scss" scoped>
.catalog {
  &__top {
    position: relative;
  }

  &__back {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}

/deep/ .tns-controls {
  margin-bottom: 30px;
}
</style>
