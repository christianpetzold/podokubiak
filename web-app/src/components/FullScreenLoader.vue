<template>
  <div v-show="visible" class="fullscreen-loader">
    <v-progress-circular indeterminate size="48" color="primary" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  visible: Boolean,
})
</script>

<style scoped>
.fullscreen-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  pointer-events: all;
}
.fullscreen-loader[style*="display: none"] {
  pointer-events: none;
}
</style>
