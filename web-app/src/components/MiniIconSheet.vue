<template>
  <v-sheet
    class="mr-6 d-flex justify-center align-center rounded-circle"
    width="35"
    height="35"
    color="miniIconBackground"
  >
    <v-icon>
      {{ icon }}
    </v-icon>
  </v-sheet>
</template>
<script setup lang="ts">
defineProps({
  icon: String
})
</script>
<style scoped></style>
