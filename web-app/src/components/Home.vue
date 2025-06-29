<template>
  <div class="carousel-wrapper">

    <v-parallax
      :src="image1"
      cover
      rounded="xl"
      height="400"
    >
    </v-parallax>
    <v-container class="carousel-overlay">
      <v-row>
        <v-col sm="12" md="6">
          <v-card elevation="0" color="transparent" class="overlay-content">
            <v-img :src="logo" height="250"></v-img>
            <h2>Podologie Kubiak Essen</h2>
            <v-btn class="mt-4" color="primary">Rufen Sie uns an!</v-btn>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="0" color="transparent">
            <v-icon>
              {{'mdi-phone'}}
            </v-icon>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">

import logo from '@/assets/images/logo/main-logo.svg'
import image1 from '@/assets/images/carousel/image1.jpeg'


</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  height: fit-content;
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* transparent dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  color: black;
  text-align: center;
  pointer-events: auto; /* Enables interaction with buttons inside */
}
</style>
