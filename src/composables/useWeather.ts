import { ref, computed, type ComputedRef, type Ref } from 'vue'
import axios from 'axios'

import type { Search, Weather } from '@/interfaces/interfaces'

interface UseWwather {
  getWeather: (search: Search) => void
  weather: Ref<Weather | undefined>
  showWeather: ComputedRef<boolean>
  formatTemp: (temp: number) => number
  isLoading: Ref<boolean>
  error: Ref<string>
}

const useWeather = (): UseWwather => {
  const weather = ref<Weather>()
  const isLoading = ref<boolean>(false)
  const error = ref<string>('')

  const getWeather = async ({ city, country }: Search) => {
    // Import Api Key
    const key = import.meta.env.VITE_OPEN_WEATHER_API_KEY
    isLoading.value = true
    weather.value = undefined
    error.value = ''

    // Get Lat, LNG
    try {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`

      const { data } = await axios(url)

      const { lat, lon } = data[0]

      // Get Weather
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

      const { data: result } = await axios(weatherURL)

      weather.value = result
    } catch {
      error.value = 'City no Found'
    } finally {
      isLoading.value = false
    }
  }

  const showWeather = computed(() => {
    if (weather.value) {
      return Object.values(weather.value).length > 0
    }

    return false
  })

  const formatTemp = (temp: number) => parseInt(String(temp - 273.15))

  return {
    getWeather,
    weather,
    showWeather,
    formatTemp,
    isLoading,
    error
  }
}

export default useWeather
