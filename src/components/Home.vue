<template>
  <div>
    <h1>Search</h1>
    <ElRow type="flex" justify="center">
      <ElCol :span="12">
        <ElInput
          placeholder="Please input"
          v-model="input"
        />
      </ElCol>
      <ElCol :span="3">
        <ElButton type="primary">Primary</ElButton>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    input: '',
  }),
}
</script>

<style scoped>

</style>
