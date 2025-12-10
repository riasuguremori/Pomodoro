import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTimeStore = defineStore('time', () => {
  const TIME = import.meta.env.VITE_TIME
  const TIME_BREAK = import.meta.env.VITE_TIME_BREAK

  const timeLeft = ref(TIME)
  const isBreakTime = ref(false)

  return {
    timeLeft,
    isBreakTime,
    TIME,
    TIME_BREAK,
  }
})
