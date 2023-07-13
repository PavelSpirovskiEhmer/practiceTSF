import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let store = (set) => ({
  people: ['John Doe', 'Jane Doe'],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark}))
})

store = devtools(store)
store = persist(store, { name: 'user_settings'}) //can also blacklist

const useStore = create(store)

export default useStore