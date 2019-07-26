<template>
  <ElForm @submit.prevent.native="submit">
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
</template>

<script>
export default {
  name: 'SearchForm',
  data: () => ({
    input: '',
  }),
  computed: {
    isDisabled() {
      return this.input === '';
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.input);
    },
  }
}
</script>
