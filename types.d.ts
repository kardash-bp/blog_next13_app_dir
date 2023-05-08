export type PostType = {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reaction: number
}
export type SearchState = {
  searchTerm: string
  setSearchTerm: (term: string) => void
  filteredPosts: PostType[]
  setFilteredPosts: (term: string, posts: PostType[]) => void
}