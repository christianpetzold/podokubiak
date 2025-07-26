<template>
<v-container>
  <v-row>
    <v-col cols="12" sm="6" v-for="behandlung in behandlungen">
      <v-card class="d-flex flex-column justify-center align-center">
        <v-img cover class="rounded-circle" width="150" height="150" :src="behandlung.image"></v-img>
        <h3 class="pt-6"> {{behandlung.title}} </h3>
        <p class="pt-6"> {{behandlung.text}} </p>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup lang="ts">
const behandlungen = [
  {
    title: "Podologische Komplexbehandlung",
    text: "Die podologische Komplexbehandlung bietet eine umfassende Pflege und Behandlung ihrer Füße. Nach einem angenehmen Fußbad werden neben der Nagelpflege auch eventuelle Hautprobleme behandelt. Abschließend verwöhnen wir Sie mit einer kurzen Fußmassage.",
    image: "https://picsum.photos/500/300?image=1"
  },
  {
    title: "Podologische Komplexbehandlung",
    text: "Die podologische Komplexbehandlung bietet eine umfassende Pflege und Behandlung ihrer Füße. Nach einem angenehmen Fußbad werden neben der Nagelpflege auch eventuelle Hautprobleme behandelt. Abschließend verwöhnen wir Sie mit einer kurzen Fußmassage.",
    image: "https://picsum.photos/500/300?image=2"
  },
  {
    title: "Podologische Komplexbehandlung",
    text: "Die podologische Komplexbehandlung bietet eine umfassende Pflege und Behandlung ihrer Füße. Nach einem angenehmen Fußbad werden neben der Nagelpflege auch eventuelle Hautprobleme behandelt. Abschließend verwöhnen wir Sie mit einer kurzen Fußmassage.",
    image: "https://picsum.photos/500/300?image=3"
  },
  {
    title: "Podologische Komplexbehandlung",
    text: "Die podologische Komplexbehandlung bietet eine umfassende Pflege und Behandlung ihrer Füße. Nach einem angenehmen Fußbad werden neben der Nagelpflege auch eventuelle Hautprobleme behandelt. Abschließend verwöhnen wir Sie mit einer kurzen Fußmassage.",
    image: "https://picsum.photos/500/300?image=4"
  },
]
</script>

<style scoped>

</style>
