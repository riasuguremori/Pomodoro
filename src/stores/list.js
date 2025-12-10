import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', () => {
  const items = ref([])

  const finishedItems = ref([])

  const currentItem = ref('')

  const id = ref(1)

  return {
    items,
    finishedItems,
    currentItem,
    id,
  }
}, {
  persist: {
    key: 'pomodoro-list',
  },
})
