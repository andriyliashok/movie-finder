<template>
  <div>
    <h1>Search</h1>
    <ElForm
      @submit.prevent.native="submit"
    >
      <ElRow type="flex" justify="center">
        <ElCol :span="12">
          <ElInput
            placeholder="Please input"
            v-model="input"
          />
        </ElCol>
        <ElCol :span="3">
          <ElButton
            :disabled="isDisabled"
            type="primary"
            native-type="submit"
          >
            Search
          </ElButton>
        </ElCol>
      </ElRow>
    </ElForm>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  data: () => ({
    input: '',
  }),
  computed: {
    isDisabled() {
      return this.input === '';
    }
  },
  methods: {
    ...mapActions('movies', ['searchMovies']),
    submit() {
      this.searchMovies(this.input);
      this.$router.push({ name: 'catalog' });
    }
  },
}
</script>
