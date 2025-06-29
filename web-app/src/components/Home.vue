<template>
  <v-carousel
    :show-arrows="false"
    hide-delimiters
    hide-delimiter-background
    :height=" $vuetify.display.mobile ? 400 : 800"
    continuous
    cycle
  >
    <v-carousel-item
      v-for="(img, i) in images"
      :key="i"
      height="800"
      color="secondary"
    >
      <v-img
        height="800"
        :src="img"
        cover
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">

import image1 from '@/assets/images/carousel/image1.jpeg'
import image2 from '@/assets/images/carousel/image2.jpeg'
import image3 from '@/assets/images/carousel/image3.jpeg'
import image4 from '@/assets/images/carousel/image4.jpeg'
import image5 from '@/assets/images/carousel/image5.jpeg'
import image6 from '@/assets/images/carousel/image6.jpeg'

const images = [image1, image2, image3, image4, image5, image6]

</script>

<style scoped>

</style>
