<template>
  <div>
    <h1>Catalog</h1>
    <ElCard :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div class="item">
        Title
      </div>
      <div class="item">
        Director
      </div>
      <div class="item">
        Year
      </div>
    </ElCard>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
}
</script>

<style scoped>
.item {
  padding: 8px 0;
}
</style>
