<template>
  <div class="mt-4" style="position: relative">
    <v-parallax
      class="rounded-te-pill"
      :src="image1"
      style="
        opacity: 10%;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
      "
    />
    <v-container class="pa-0 mb-8" bg-color="transparent">
      <v-row>
        <v-col cols="12" sm="6" class="mt-6 pa-0">
          <v-card
            class="d-flex flex-column align-center"
            color="transparent"
            elevation="0"
          >
            <v-img
              height="250"
              width="250"
              :src="logo"
              class="rounded-circle"
              alt="Logo der Praxis Podologie Kubiak"
              color="logoBackground"
            />
            <h2>Podologie Kubiak Essen</h2>
            <v-btn
              width="200"
              class="mt-4"
              color="primary"
              href="tel:+0201763176"
              aria-label="Jetzt anrufen: 0201 763176"
            >
              <v-icon class="mr-2">
                {{ 'mdi-phone' }}
              </v-icon>
              Rufen Sie uns an!
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="xs">
          <v-divider class="mt-12"/>
        </v-col>
        <v-col cols="12" sm="6" class="mt-6 pa-0">
          <v-list :class=" xs ? 'mx-auto' : ''" max-width="300" density="compact" bg-color="transparent">
            <v-list-subheader>Telefon</v-list-subheader>
            <v-list-item
              v-for="item in phoneList"
              :key="item.value"
              :title="item.title"
              :subtitle="item.subtitle"
            >
              <template #prepend>
                <MiniIconSheet :icon="item.prependIcon" />
              </template>
            </v-list-item>

            <ListDivider/>
            <v-list-subheader>Öffnungszeiten</v-list-subheader>

            <v-list-item
              v-for="item in openingHoursList"
              :key="item.value"
              :title="item.title"
              :subtitle="item.subtitle"
            >
              <template #prepend>
                <MiniIconSheet :icon="item.prependIcon" />
              </template>
            </v-list-item>

            <ListDivider/>
            <v-list-subheader>Adresse</v-list-subheader>

            <v-list-item
              v-for="item in adressList"
              :key="item.value"
              :title="item.title"
              :subtitle="item.subtitle"
            >
              <template #prepend>
                <MiniIconSheet :icon="item.prependIcon" />
              </template>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo/main-logo.svg'
import image1 from '@/assets/images/carousel/image1.jpeg'
import MiniIconSheet from '@/components/MiniIconSheet.vue'
import ListDivider from '@/components/ListDivider.vue'
import { useDisplay } from 'vuetify'

const { xs } = useDisplay();

const phoneList = [
  {
    title: '0201 763176',
    subtitle: 'Sprechzeiten: 8:00 - 13:00 ',
    value: 1,
    prependIcon: 'mdi-phone'
  }
]

const openingHoursList = [
  {
    subtitle: '08:30 - 18:00',
    title: 'Montags - Freitags',
    prependIcon: 'mdi-clock',
    value: 2
  },
  {
    subtitle: 'nach Vereinbarung',
    title: 'Samstags',
    prependIcon: 'mdi-calendar-weekend-outline',
    value: 3
  },
  {
    subtitle: 'nach Vereinbarung',
    title: 'Hausbesuche',
    prependIcon: 'mdi-car-emergency',
    value: 4
  }
]

const adressList = [
  {
    title: 'Giesebrechtstraße 65 ',
    subtitle: '45144 Frohnhausen',
    value: 5,
    prependIcon: 'mdi-map-marker'
  }
]
</script>
