<script setup lang="ts">
import type { Weather } from '@/interfaces/interfaces'
import useWeather from '@/composables/useWeather'

interface Props {
  weather: Weather | undefined
}

const props = defineProps<Props>()

const { formatTemp } = useWeather()
</script>

<template>
  <div class="result">
    <h2>Weather of: {{ props.weather?.name }}</h2>
    <p class="actual">{{ formatTemp(props.weather!.main.temp) }} &deg;C</p>

    <div class="temperatures">
      <p>Min: {{ formatTemp(props.weather!.main.temp_max) }}<span>&deg;C</span></p>
      <p>Max: {{ formatTemp(props.weather!.main.temp_min) }}<span>&deg;C</span></p>
    </div>
  </div>
</template>
