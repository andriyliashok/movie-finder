<template>
  <ElCard
    :body-style="{ padding: '0px' }"
    class="card"
  >
    <div class="card__photo">
      <img
        :src="movie.Poster"
        class="card__image"
      >
    </div>
    <div class="card__item">
      <span class="card__label">Title:</span>
      <span class="card__value">{{ movie.Title }}</span>
    </div>
    <div class="card__item">
      <span class="card__label">Type:</span>
      <span class="card__value">{{ movie.Type }}</span>
    </div>
    <div class="card__item">
      <span class="card__label">Year:</span>
      <span class="card__value">{{ movie.Year }}</span>
    </div>
  </ElCard>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  margin: auto;

  &__photo {
    width: 300px;
    height: 400px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__item {
    text-align: left;
    padding: 8px;
  }

  &__label {
    display: inline-block;
    font-weight: 600;
    margin-right: 10px;
  }
}
</style>
