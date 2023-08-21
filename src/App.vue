<script setup lang="ts">
import useWeather from '@/composables/useWeather'
import Form from '@/components/FormComponent.vue'
import Weather from '@/components/WeatherComponent.vue'
import Spinner from '@/components/SpinnerComponent.vue'
import Alert from '@/components/AlertComponet.vue'

const { getWeather, weather, showWeather, isLoading, error } = useWeather()
</script>

<template>
  <h1 class="title">Weather Finder</h1>

  <main class="container weather-finder">
    <Form @get-weather="getWeather" />
    <Spinner v-if="isLoading" />
    <Alert v-if="error">{{error}}</Alert>
    <Weather v-if="showWeather" :weather="weather" />
  </main>
</template>

<style scoped></style>
