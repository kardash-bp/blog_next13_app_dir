import { PostType, SearchState } from '@/types'
import { create } from 'zustand'

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: '',
  setSearchTerm: (searchTerm) => set((state) => ({ ...state, searchTerm })),
  filteredPosts: [],
  setFilteredPosts: (searchTerm, posts) => set((state) => ({ ...state, filteredPosts: !searchTerm ? posts : posts.filter((p: PostType) => p.title.toLowerCase().includes(searchTerm.toLowerCase())) }))

}))