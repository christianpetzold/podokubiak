<template>
  <FullScreenLoader :visible="loading"/>
  <v-app>
    <v-app-bar
      app
      position="sticky"
      :elevation="2"
      color="appBarColor"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.mobile"
          @click.stop="drawer = !drawer"
        />
      </template>
      <template v-slot:append>
        <v-card
          :ripple="false"
          v-if="!$vuetify.display.mobile"
          :color="section.id === activeSectionId ? 'secondary' : 'primary'"
          rounded="xl"
          elevation="0"
          v-for="section in currentSections"
          :key="section.id"
          @click="scrollTo(section.id)"
          :prepend-icon="section.icon"
          :title="section.label"
        ></v-card>
      </template>

      <v-app-bar-title>Podologie Kubiak</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.display.mobile"
      v-model="drawer"
      temporary
      location="bottom"
      color="navBarColor"
    >
      <v-card
        :ripple="false"
        :color="section.id === activeSectionId ? 'secondary' : 'primary'"
        elevation="0"
        v-for="section in currentSections"
        :key="section.id"
        @click="scrollTo(section.id)"
        :prepend-icon="section.icon"
        :title="section.label"
      ></v-card>
    </v-navigation-drawer>
    <v-main>
      <v-container class="pa-12 pt-6" max-width="1000px">
        <router-view
          @update-sections="currentSections = $event"
          @update-active-section="handleActiveSectionUpdate"
        />
      </v-container>
    </v-main>
    <div class="fab-container">
      <v-speed-dial
        location="bottom center"
        transition="fade-transition"
      >
        <template v-slot:activator="{ props: activatorProps }">
          <v-fab
            v-bind="activatorProps"
            size="large"
            color="secondary"
            icon="mdi-card-account-mail"
          ></v-fab>
        </template>

        <v-btn key="1" color="secondary" icon="mdi-phone"></v-btn>
        <v-btn key="2" color="secondary" icon="mdi-email"></v-btn>
      </v-speed-dial>
    </div>
    <v-footer class="text-center d-flex flex-column py-4" color="primary">
      <div class="d-flex justify-center align-center">
        <v-chip href="https://g.co/kgs/1No54vU">Google Maps</v-chip>
        <v-chip @click="router.push('impressum')"> Impressum</v-chip>
      </div>

      <v-divider class="my-2" thickness="2" width="50"></v-divider>

      <div>
        {{ new Date().getFullYear() }} — Made by <a style="color: white" href="https://www.christianpetzold.dev">Christian Petzold</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import {useScrollRestore} from "@/composables/useScrollRestore.ts";
import router from "@/router";

useScrollRestore()
const loading = ref(true);

onMounted(() => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      loading.value = false
    }, 600) // keep short; remove delay if unnecessary
  })
})

type Section = {
  id: string,
  icon: string,
  label: string,
}

const drawer = ref(false);
const currentSections = ref<Section[]>([])
const activeSectionId = ref('')

function handleActiveSectionUpdate(id: string) {
  activeSectionId.value = id
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({behavior: 'smooth'})
  }
  drawer.value = false;
}
</script>

<style>

html {
  scroll-padding-top: 80px; /* or whatever your app-bar height is */
}

.fab-container {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
</style>

