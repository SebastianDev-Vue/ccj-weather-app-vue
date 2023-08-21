<script setup lang="ts">
import { reactive, ref } from 'vue'

import Alert from '@/components/AlertComponet.vue'

import type { Search } from '@/interfaces/interfaces'

const countries = [
  { code: 'US', cityName: 'Estados Unidos' },
  { code: 'MX', cityName: 'México' },
  { code: 'AR', cityName: 'Argentina' },
  { code: 'CO', cityName: 'Colombia' },
  { code: 'CR', cityName: 'Costa Rica' },
  { code: 'ES', cityName: 'España' },
  { code: 'PE', cityName: 'Perú' }
]

const search: Search = reactive({ city: '', country: '' })
const error = ref<string>('')

const emits = defineEmits<{ getWeather: [search: Search] }>()

const searchWeather = (): void => {
  if (Object.values(search).includes('')) {
    error.value = 'All The Fields Are Required'
  }

  error.value = ''
  emits('getWeather', search)
}
</script>

<template>
  <form class="form" @submit.prevent="searchWeather">
    <Alert v-if="error">{{ error }}</Alert>

    <div class="field">
      <label for="city">City</label>
      <input type="text" id="city" placeholder="City" v-model="search.city" />
    </div>

    <div class="field">
      <label for="country">Country</label>
      <select id="country" v-model="search.country">
        <option value="">-- Select a Country --</option>
        <option v-for="country in countries" :key="country.code" :value="country.code">
          {{ country.cityName }}
        </option>
      </select>
    </div>

    <input type="submit" value="Check the Weather" />
  </form>
</template>
