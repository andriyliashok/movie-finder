<template>
  <div>
    <h1>Search</h1>
    <SearchForm @submit="onSubmit"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SearchForm from '@/components/SearchForm';

export default {
  name: 'Home',
  components: {
    SearchForm,
  },
  methods: {
    ...mapActions('movies', ['searchMovies']),
    async onSubmit(val) {
      await this.searchMovies(val);
      this.$router.push({name: 'catalog'});
    }
  },
}
</script>
