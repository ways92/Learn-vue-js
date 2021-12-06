<template>
  <div class="detail" @click="$emit('close-modal')">
    <div style="background: white; padding: 20px">{{ pokemon.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 90px 10px 10px;
  width: 100%;
  height: 100vh;
  background: rgba(10, 7, 0, 0.562);
}
</style>