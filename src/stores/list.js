import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useListStore = defineStore('list', () => {
  const items = reactive([])

  const finishedItems = reactive([])

  const currentItem = ref('')

  const id = ref(1)

  return {
    items,
    finishedItems,
    currentItem,
    id,
  }
})
